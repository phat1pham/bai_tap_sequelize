import sequelize from "../common/squelize/connect.sequelize.js";
import { QueryTypes } from "sequelize";

export const foodService = {
  async findRestaurant(req) {
    const { name } = req.query;
    const res = await sequelize.query(
      `
      SELECT *
      FROM restaurant
      WHERE res_name LIKE :name
      `,
      {
        replacements: {
          name: `%${name}%`,
        },
        type: QueryTypes.SELECT,
      },
    );
    return res;
  },

  async createRateRes(req) {
    const { user_id, res_id, amount } = req.body;

    const res = await sequelize.query(
      `
      INSERT INTO rate_res
      (
          user_id,
          res_id,
          amount,
          date_rate
      )
      VALUES
      (
          :user_id,
          :res_id,
          :amount,
          NOW()
      )
      `,
      {
        replacements: {
          user_id,
          res_id,
          amount,
        },
        type: QueryTypes.INSERT,
      },
    );

    return true;
  },

  async findRateResUser(req) {
    const { res_id, user_id } = req.query;
    const res = await sequelize.query(
      `
      SELECT *
      FROM rate_res
      WHERE res_id = :res_id AND user_id = :user_id
      `,
      {
        replacements: {
          res_id,
          user_id,
        },
        type: QueryTypes.SELECT,
      },
    );
    return res;
  },

  async createOrder(req) {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;

    const res = await sequelize.query(
      `
      INSERT INTO \`order\`
      (
          user_id,
          food_id,
          amount,
          code,
          arr_sub_id
      )
      VALUES
      (
          :user_id,
          :food_id,
          :amount,
          :code,
          :arr_sub_id
      )
      `,
      {
        replacements: {
          user_id,
          food_id,
          amount,
          code,
          arr_sub_id,
        },
        type: QueryTypes.INSERT,
      },
    );

    return true;
  },
};
