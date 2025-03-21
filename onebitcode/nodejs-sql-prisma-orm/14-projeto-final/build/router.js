"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const LeadsController_1 = require("./controllers/LeadsController");
const GroupsController_1 = require("./controllers/GroupsController");
const CampaignsController_1 = require("./controllers/CampaignsController");
const CampaignLeadsController_1 = require("./controllers/CampaignLeadsController");
const GroupLeadsController_1 = require("./controllers/GroupLeadsController");
const router = (0, express_1.Router)();
exports.router = router;
const leadsController = new LeadsController_1.LeadsController();
const groupsController = new GroupsController_1.GroupsController();
const groupLeadsController = new GroupLeadsController_1.GroupLeadsController();
const campaignsController = new CampaignsController_1.CampaignsController();
const campaignLeadsController = new CampaignLeadsController_1.CampaignLeadsController();
router.get("/leads", leadsController.index);
router.post("/leads", leadsController.create);
router.get("leads/:id", leadsController.show);
router.put("/leads/:id", leadsController.update);
router.delete("/leads/:id", leadsController.delete);
router.get("/groups", groupsController.index);
router.post("/groups", groupsController.create);
router.get("groups/:id", groupsController.show);
router.put("groups/:id", groupsController.update);
router.delete("groups/:id", groupsController.delete);
router.get("/groups/:groupId/lead", groupLeadsController.getLeads);
router.post("/groups/:groupId/leads", groupLeadsController.addLead);
router.delete("/groups/:groupId/leads/:leadId", groupLeadsController.removeLead);
router.get("/campaigns", campaignsController.index);
router.post("/campaigns", campaignsController.create);
router.get("campaigns/:id", campaignsController.show);
router.put("campaigns/:id", campaignsController.update);
router.delete("campaigns/:id", campaignsController.delete);
router.get("/campaigns/:campaignId/leads", campaignLeadsController.getLeads);
router.post("/campaigns/:campaignId/leads", campaignLeadsController.addLead);
router.put("/campaigns/:campaignId/leads/:leadId", campaignLeadsController.updateLeadStatus);
router.delete("/campaigns/:campaignId/leads/:leadId", campaignLeadsController.removeLead);
router.get("/status", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({ message: "OK" });
    }
    catch (error) {
        next(error);
    }
}));
