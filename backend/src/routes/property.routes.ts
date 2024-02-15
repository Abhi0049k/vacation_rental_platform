import { Request, Response, NextFunction, Router } from "express";
import { propertyCreationValidation } from "../validations/property.validations";
import prisma from "../configs/prismaInstance";
import authenticationMiddlewares from "../middlewares/authentication.middlewares";

const router: Router = Router()

router.post("/", authenticationMiddlewares("host"), async (req: Request, res: Response, next: NextFunction) => {
    const { data, id } = req.body;
    try {
        const check = propertyCreationValidation(data);
        if (!check.success) return next({ status: 422, message: `Issue with: ${check.error.issues[0].path[0]}, issue is: ${check.error.issues[0].message}` });
        const newProperty = await prisma.property.create({
            data: { ...data, host_id: id },
            select: { id: true, title: true, host_id: true }
        })
        res.status(200).send({ message: "New Property Added", data: newProperty })
    } catch (err) {
        console.log("post: property/", err);
        next(err);
    }
})

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const { page_number } = req.query;
    try {
        const skip = page_number ? 10 * (Number(page_number) - 1) : 0;
        const list = await prisma.property.findMany({ skip })
        res.status(200).send({ data: list })
    } catch (err) {
        console.log("property/", err);
        next(err);
    }
})

export default router