import express from "express";
import { foodController } from "../controllers/food.controller.js";
// import { responseErr } from "../common/helpers/response.helper.js";
// import { BadRequestError } from "../common/helpers/exception.helper.js";
const foodRouter = express.Router();

foodRouter.get(
    "/",
    (req, res, next) => {
        next();
    },
    foodController.findRestaurant,
);

foodRouter.post("/", foodController.createRateRes);

foodRouter.get("/rate", foodController.findRateResUser);

foodRouter.post("/order", foodController.createOrder);

export default foodRouter;
