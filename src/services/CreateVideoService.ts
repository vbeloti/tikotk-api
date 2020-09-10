import Videos from '../model/TiktokVideos';

interface Request {
  url: string,
  channel: string,
  song: string,
  description: string,
  likes: number,
  messages: number,
  shares: number
}

class CreateVideoService {
  public async execute({ url,
    channel,
    song,
    description,
    likes,
    messages,
    shares }: Request) {

    const dbVideos = {
      url,
      channel,
      song,
      description,
      likes,
      messages,
      shares
    };

    const video = await Videos.create(dbVideos);
    return video;
  }
}

export default CreateVideoService;
