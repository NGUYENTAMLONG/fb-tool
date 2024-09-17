import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { createConnections, getConnection, LessThan } from 'typeorm';
import registerQueues from './queue/registerQueue';
import {
  getCommentByPageId,
  getRandomToken,
  startCrawl,
} from './services/group.service';
dotenv.config();

import { BullMonitorExpress } from '@bull-monitor/express';
import { BullAdapter } from '@bull-monitor/root/dist/bull-adapter';
import { queues } from './queue/queue';
import { FbGroupKeyword } from './entities/crawler/FbGroupKeyword';

(async () => {
  try {
    await createConnections();
    console.log('Connected to all databases');

    const app = express();
    const port = process.env.PORT || 3000;

    app.get('/groups', (req: Request, res: Response) => {
      getAllGroups(req, res);
      // res.send('List all group');
    });

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello Kasonlu 2!');
    });

    const getAllGroups = async (req: Request, res: Response) => {
      // const randomToken = await getRandomToken();
      // const crawlerConnection = getConnection('crawler');
      // const groupRepo = crawlerConnection.getRepository(FbGroupKeyword);
      // const groups = await groupRepo.find({
      //   take: 1000,
      //   where: {
      //     status: LessThan(2),
      //   },
      // });
      // // const groups = await startCrawl();

      const comments = await getCommentByPageId('1646816918750562', 3);
      res.json({ comments });
    };

    const monitor = new BullMonitorExpress({
      queues: Object.values(queues).map((v) => new BullAdapter(v)),
      gqlIntrospection: true,
      metrics: {
        collectInterval: { hours: 1 },
        maxMetrics: 100,
        // disable metrics for specific queues
        blacklist: ['1'],
      },
    });
    await monitor.init();
    app.use('/monitor', monitor.router);

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
    registerQueues();
  } catch (error) {
    console.log(error);
  }
})();
