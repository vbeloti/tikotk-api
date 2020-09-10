import mongoose from 'mongoose';
import urlConnection from '../config/database';

mongoose.connect(urlConnection.mongodb.url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
