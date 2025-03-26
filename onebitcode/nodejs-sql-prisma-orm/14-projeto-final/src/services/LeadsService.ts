import { LeadStatus } from "@prisma/client"
import { ICreateLeadAttributes, ILeadsRepository, ILeadWhereParams } from "../repositories/LeadsRepository"

interface GetLeadsWhithPaginationParams {
    page?: number
    pageSize?: number
    name?: string
    status?: LeadStatus
    sortBy?: "name" | "status" | "createdAt"
    order?: "asc" | "desc"
}


export class LeadsService {

    constructor(private readonly leadsRepository: ILeadsRepository){}

    async getAllLeadsPaginated(params: GetLeadsWhithPaginationParams) {

            const { name, status, page = 1, pageSize = 10, sortBy, order } = params
            const limit = pageSize
            const offset = (page - 1) * limit

            const where: ILeadWhereParams = {}

            if(name) where.name = { like: name, mode: "insensitive" }
            if(status) where.status = status

            const leads = await this.leadsRepository.find({
                where,
                sortBy,
                order,
                limit,
                offset
            })
            const total = await this.leadsRepository.count(where)

            return {
                data: leads,
                meta: {
                    page,
                    pageSize,
                    total,
                    totalPages: Math.ceil(total / page)
                }
            }
    }

    async createLead(params: ICreateLeadAttributes){
        if (!params.status) params.status = "New"
        const newLead = await this.leadsRepository.create(params)
        return newLead
    }
}