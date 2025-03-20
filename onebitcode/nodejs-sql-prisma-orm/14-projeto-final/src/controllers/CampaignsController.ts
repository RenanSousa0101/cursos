import { Handler } from "express";
import { CreateCampaignRequestSchema } from "./schemas/CampaignsRequestSchema";
import { prisma } from "../database";

export class CampaignsController {
    index: Handler = async (req, res, next) => {
        try {
            const campaigns = await prisma.campaign.findMany()
            res.json(campaigns)
        } catch (error) {
            next(error)
        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CreateCampaignRequestSchema.parse(req.body)
            const newCampaign = await prisma.campaign.create({ data: body })
            res.json(newCampaign)
        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) => {
        try {
        
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
        
        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
        
        } catch (error) {
            next(error)
        }
    }
}