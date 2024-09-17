import { Job } from 'bull';
import { FbGroupKeyword } from '../entities/crawler/FbGroupKeyword';

export default async function processScanGroup(job: Job<FbGroupKeyword>) {
  const { pageId, backDay } = job.data;
  console.log('execute task:', { pageId, backDay });
  return { success: true };
}
