import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { connectToDB } from './config/database';
import userRoutes from './routes/userRoutes';
import * as dotenv from 'dotenv';
dotenv.config();
const port = 3000 || process.env.PORT!

const app = new Hono();

app.use('/', prettyJSON());

app.get('/', (c) => {
  return c.json('HI MOM!');
});

connectToDB().then(() => {

  app.route('/', userRoutes);
  console.log(`Server is running on port ${port}`);

  serve({
    fetch: app.fetch,
    port
  });

}).catch((error) => {
  console.error('Error connecting to the database:', error);
  process.exit(1);
});