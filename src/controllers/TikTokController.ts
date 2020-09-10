import { Request, Response } from "express";
import CreateVideoService from "../services/CreateVideoService";

class TikTokController {
  async store(req: Request, res: Response) {
    const { url,
      channel,
      song,
      description,
      likes,
      messages,
      shares } = req.body;

    const createVideo = new CreateVideoService();

    const video = await createVideo.execute({
      url,
      channel,
      song,
      description,
      likes,
      messages,
      shares
    });

    res.json(video);
  }

  async index(req: Request, res: Response) {
    res.json({ ok: true });
  }
}

export default new TikTokController();


