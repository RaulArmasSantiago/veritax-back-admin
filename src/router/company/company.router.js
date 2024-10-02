import { Router } from "express";
import { createCompany } from "../../controllers/company.comtroller";

const router = Router()
router.post("/company", createCompany)

export default router