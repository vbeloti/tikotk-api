import Videos from '../model/TiktokVideos';

class ListAllVideosService {
  public async execute() {

    const video = await Videos.find({});
    return video;
  }
}

export default ListAllVideosService;
