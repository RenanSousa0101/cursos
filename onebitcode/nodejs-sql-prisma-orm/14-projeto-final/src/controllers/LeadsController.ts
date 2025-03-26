import { Handler } from "express";
// import { prisma } from "../database";
import { CreateLeadRequestSchema, GetLeadsRequestSchema, updateLeadRequestSchema } from "./schemas/LeadsRequestSchemas";
import { HttpError } from "../errors/HttpError";
// import { Prisma } from "@prisma/client";
import { LeadsService } from "../services/LeadsService";

export class LeadsController {
    
    constructor(private readonly leadsService: LeadsService){}

    index: Handler = async (req, res, next) => {
        try {
            const query = GetLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10"} = query

            const result = this.leadsService.getAllLeadsPaginated({
                ...query,
                page: +page,
                pageSize: +pageSize,
            })
            
            // const leads = await prisma.lead.findMany({
            //     where,
            //     skip: (pageNumber - 1) * pageSizeNumber,
            //     take: pageSizeNumber,
            //     orderBy: { [sortBy]: order }
            // })
            // const total = await prisma.lead.count({ where })

            res.json(result)
        } catch (error) {
            next(error)
        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CreateLeadRequestSchema.parse(req.body)
            const newLead = await this.leadsService.createLead(body)
            res.status(201).json(newLead)
        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const lead = await this.leadsRepository.findById(Number(req.params.id))
            // const lead = await prisma.lead.findUnique({
            //     where: { id: Number( req.params.id ) },
            //     include: {
            //         groups: true,
            //         campaigns: true
            //     }
            // })

            if (!lead) throw new HttpError(404, "lead não encontrado")

            res.json(lead)
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = updateLeadRequestSchema.parse(req.body)

            const lead = await this.leadsRepository.findById(id)
            // const lead = await prisma.lead.findUnique({ where: { id } })
            if (!lead) throw new HttpError(404, "lead não encontrado")

            if (lead.status === "New" && body.status !== undefined && body.status !== "Contacted") {
                throw new HttpError(400, "um novo lead deve ser contatado antes de ter seu status atualizado para outros valores")
            }

             // Valida a inatividade nesse lead em casa de arquivamente
            if (body.status === "Archived") {
                const now = new Date()
                const diffTime = Math.abs(now.getTime() - lead.updatedAt.getTime())
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
                if (diffDays < 180) throw new HttpError(400, "um lead só pode ser arquivado após 6 meses de inatividade")
            }
            const updatedLead = await this.leadsRepository.updatedById(id, body)
            // const updatedLead = await prisma.lead.update({data: body, where: { id } })

            res.json(updatedLead)
        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)

            const leadExists = await this.leadsRepository.findById(id)
            // const leadExists = await prisma.lead.findUnique({ where: { id } })
            if (!leadExists) throw new HttpError(404, "lead não encontrado")
            
            const deletedLead = await this.leadsRepository.deleteById(id)
            // const deletedLead = await prisma.lead.delete({ where: { id } })
            res.json({ deletedLead })
        } catch (error) {
            next(error)
        }
    }
}