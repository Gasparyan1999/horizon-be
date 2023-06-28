import { Response } from "express";
import HttpStatusCode from "../../../helpers/StatusCodes";
import { CustomRequest } from "../../../type";
import { AdminColorService } from "../../../services/admin/color/adminColorService";

export class AdminColorController {
  public static async addColor(req: CustomRequest, res: Response) {
    try {
      const { newColor } = req.body;
      console.log(newColor)
      const color = await AdminColorService.addColor(newColor);

      res.send({ color });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }

  public static async getColor(req: CustomRequest, res: Response) {
    try {
      const colors = await AdminColorService.getColors();

      res.send({ colors });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }

  public static async removeColor(req: CustomRequest, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Id is missing");
      const color = await AdminColorService.removeColor(id);

      res.send({ color });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }

  public static async updateColor(req: CustomRequest, res: Response) {
    try {
      const { id } = req.params;
      const { updatedColor } = req.body;
      if (!id) throw new Error("Id is missing");
      const color = await AdminColorService.updateColor(id, updatedColor);

      res.send({ color });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }
}
