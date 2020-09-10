import { Router } from 'express';
import TikTokController from '../controllers/TikTokController';

const routes = Router();

routes.get('/x', (req, res) => {
  res.send('ok');
});

routes.get('/posts', TikTokController.index);

routes.post('/posts', TikTokController.store);


export default routes;
