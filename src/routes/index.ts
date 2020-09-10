import { Router } from 'express';
import TikTokController from '../controllers/TikTokController';

const routes = Router();

routes.get('/videos', TikTokController.index);

routes.post('/videos', TikTokController.store);


export default routes;
