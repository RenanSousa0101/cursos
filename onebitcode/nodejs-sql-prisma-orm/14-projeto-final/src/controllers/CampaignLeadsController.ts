import { Handler } from "express";
import { Prisma } from "@prisma/client";
import { AddLeadRequestSchema, GetCampaignLeadsRequestSchema, UpdateLeadStatusRequestSchema } from "./schemas/CampaignsRequestSchema";
import { prisma } from "../database";
import { CampaignsRepository } from "../repositories/CampaignsRepository";

export class CampaignLeadsController {

    constructor(private readonly campaignsRepository: CampaignsRepository){}

    getLeads: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId)
            const query = GetCampaignLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10",  name, status, sortBy = "name", order = "asc" } = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)

            const where: Prisma.LeadWhereInput = {
                campaigns: {
                    some: { campaignId }
                }
            }

            if (name) where.name = { contains: name, mode: "insensitive" }
            if (status) where.campaigns = { some: { status } }

            const leads = await prisma.lead.findMany({
                where,
                orderBy: { [sortBy]: "asc" },
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                include: {
                    campaigns: {
                        select: {
                            campaignId: true,
                            leadId: true,
                            status: true
                        }
                    }
                }
            })
            const total = await prisma.lead.count({ where })

            res.json({
                leads,
                meta: {
                    page: pageNumber,
                    pageSize: pageSizeNumber,
                    total,
                    totalPages: Math.ceil(total / pageSizeNumber)
                }
            })
            
        } catch (error) {
            next(error)
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId)
            const { leadId, status = "New"} = AddLeadRequestSchema.parse(req.body)
            await this.campaignsRepository.addLead({ campaignId, leadId, status })
            res.status(201).end()
        } catch (error) {
            next(error)
        }
    }

    updateLeadStatus: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId)
            const leadId = Number(req.params.leadId)
            const { status } = UpdateLeadStatusRequestSchema.parse(req.body)
            await this.campaignsRepository.updateLeadStatus({ campaignId, leadId, status})
            res.status(204).json({ message: "status do lead atualizado com sucesso"})
        } catch (error) {
            next(error) 
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId)
            const leadId = Number(req.params.leadId)
            await this.campaignsRepository.removeLead(campaignId, leadId)
            res.json({ message: "lead removido da campanha com sucesso"})
        } catch (error) {
            next(error)
        }
    }
}