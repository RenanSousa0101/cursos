import { z } from "zod";

export const CreateCampaignRequestSchema = z.object({
    name: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional()
})