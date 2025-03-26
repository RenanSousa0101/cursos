import { Handler } from "express";
import { CreateLeadRequestSchema, GetLeadsRequestSchema, updateLeadRequestSchema } from "./schemas/LeadsRequestSchemas";
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
            const lead = await this.leadsService.getLeadById(+req.params.id)
            res.json(lead)
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = updateLeadRequestSchema.parse(req.body)
            const updatedLead = await this.leadsService.updatedLead(id, body)
            res.json(updatedLead)
        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const deletedLead = await this.leadsService.deleteLead(id)
            res.json({ deletedLead })
        } catch (error) {
            next(error)
        }
    }
}