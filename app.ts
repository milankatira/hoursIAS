import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import winston from 'winston';
import { db } from './config/db';
import { Routes } from './src';
import swaggerDocs from './utils/swagger';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
  ],
});

dotenv.config();
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.__basedir = __dirname;
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/api/v1/', Routes);
app.use(express.static('public'));
app.use('/api/v1/static', express.static(`${__dirname}/static`));
app.use('/api/v1/resources', express.static(`${__dirname}/resources`));

app.listen(process.env.ENV !== 'test' ? PORT : 0, async () => {

  await db();
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );

  swaggerDocs(app, PORT);
  console.log(`Listening on port ${PORT}`);

});

export default app;
