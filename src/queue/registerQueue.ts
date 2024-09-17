import { queues } from './queue';
import scanCronQueueProcess from './scanCronQueue.process';
import scanGroupProcess from './scanGroup.process';

export default function registerQueues() {
  queues.scanGroupCronQueue.process(1, scanCronQueueProcess);
  queues.scanGroupQueue.process(1, scanGroupProcess);

  // start queue scan
  queues.scanGroupCronQueue.add(
    {},
    {
      repeat: {
        cron: '5 * * * * *',
      },
    }
  );
}
