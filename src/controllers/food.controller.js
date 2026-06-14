import { responseSuccess } from "../common/helpers/response.helper.js";
import { foodService } from "../services/food.service.js";
export const foodController = {
    async findRestaurant(req, res, next) {
        const foods = await foodService.findRestaurant(req);
        const response = responseSuccess(
            foods,
            "Lấy danh sách Food thành công",
        );
        res.json(response);
    },
    
    async createRateRes(req, res, next) {
        const articles = await foodService.createRateRes(req);
        const response = responseSuccess(articles, "Thêm đánh giá thành công");
        res.json(response);
    },
    
    async findRateResUser(req, res, next) {
        const foods = await foodService.findRateResUser(req);
        const response = responseSuccess(
            foods,
            "Lấy danh sách đánh giá thành công",
        );
        res.json(response);
    },
    
    async createOrder(req, res, next) {
        const articles = await foodService.createOrder(req);
        const response = responseSuccess(articles, "Thêm món ăn thành công");
        res.json(response);
    },
    
};
