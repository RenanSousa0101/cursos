import { Handler } from "express";
import { GetLeadsRequestSchema } from "./schemas/LeadsRequestSchemas";
import { Prisma } from "@prisma/client";
import { prisma } from "../database";
import { AddLeadRequestSchema } from "./schemas/GroupsRequestSchema";
import { GroupsRepository } from "../repositories/GroupsRepository";
import { ILeadsRepository } from "../repositories/LeadsRepository";

export class GroupLeadsController {

    constructor(
        private readonly groupsRepository: GroupsRepository,
        private readonly leadsRepository: ILeadsRepository
    ) {

    }

    getLeads: Handler = async (req, res, next) => {
        try {
            
            const groupId = Number(req.params.groupId)
            const query = GetLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10",  name, status, sortBy = "name", order = "asc" } = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)

            const where: Prisma.LeadWhereInput = {
                groups: {
                    some: { id: groupId }
                }
            }

            if (name) where.name = { contains: name, mode: "insensitive" }
            if (status) where.status = status

            const leads = await prisma.lead.findMany({
                where,
                orderBy: { [sortBy]: order },
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                include: {
                    groups: true
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
            const groupId = Number(req.params.groupId)
            const { leadId } = AddLeadRequestSchema.parse(req.body)
            const updatedGroup = await this.groupsRepository.addLead(groupId, leadId)
            res.status(201).json(updatedGroup)
        } catch (error) {
            next(error)
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const leadId = Number(req.params.leadId)
            const updatedGroup = await this.groupsRepository.removeLead(groupId, leadId)
            res.json(updatedGroup)
        } catch (error) {
            next(error)
        }
    }
}