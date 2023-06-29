import { Response } from "express";
import HttpStatusCode from "../../../helpers/StatusCodes";
import { CustomRequest } from "../../../type";
import { AdminSizeService } from "../../../services/admin/size/adminSizeService";

export class AdminSizeController {
  public static async addSize(req: CustomRequest, res: Response) {
    try {
      const { newSize } = req.body;
      const size = await AdminSizeService.addSize(newSize);

      res.send({ size });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }

  public static async getSize(req: CustomRequest, res: Response) {
    try {
      const sizes = await AdminSizeService.getSizes();

      res.send({ sizes });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }

  public static async removeSize(req: CustomRequest, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Id is missing");
      const size = await AdminSizeService.removeSize(id);

      res.send({ size });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }

  public static async updateSize(req: CustomRequest, res: Response) {
    try {
      const { id } = req.params;
      const { updatedSize } = req.body;
      if (!id) throw new Error("Id is missing");
      const size = await AdminSizeService.updateSize(id, updatedSize);

      res.send({ size });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }
}
