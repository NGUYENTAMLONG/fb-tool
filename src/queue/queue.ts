import Bull from 'bull';

export const queues: { [key: string]: Bull.Queue } = {
  scanGroupCronQueue: new Bull(
    'queue-scan-cron-queue',
    'redis://:123456@localhost:6379'
  ),
  scanGroupQueue: new Bull(
    'queue-scan-queue',
    'redis://:123456@localhost:6379'
  ),
};
