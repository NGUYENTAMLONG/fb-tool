import { Job } from 'bull';
import { getConnection, LessThan } from 'typeorm';
import { FbGroupKeyword } from '../entities/crawler/FbGroupKeyword';
import { getUnscannedGroups } from '../services/group.service';
import { queues } from './queue';

export default async function (job: Job) {
  const crawlerConnection = getConnection('crawler');
  const groupRepository = crawlerConnection.getRepository(FbGroupKeyword);
  const unscannedGroups = await groupRepository.find({
    where: {
      status: LessThan(2),
    },
  });
  unscannedGroups.forEach((group) => {
    group.status = 2;
    queues.scanGroupQueue.add(group);
  });
  groupRepository.save(unscannedGroups);

  return { sum: unscannedGroups.length };
}
