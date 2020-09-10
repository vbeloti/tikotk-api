import mongoose from 'mongoose';
import jwt from '../config/database';

mongoose.connect(jwt.mongodb.url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
