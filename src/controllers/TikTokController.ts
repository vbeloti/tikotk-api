import { Request, Response } from "express";
import CreateVideoService from "../services/CreateVideoService";
import ListAllVideosService from "../services/ListAllVideosService";

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
    const listAllVideos = new ListAllVideosService();

    const videos = await listAllVideos.execute();
    res.json(videos);
  }
}

export default new TikTokController();


