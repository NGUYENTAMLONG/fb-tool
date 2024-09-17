import { getConnection, In, LessThan, MoreThan } from 'typeorm';
import { FbGroupKeyword } from '../entities/crawler/FbGroupKeyword';
import { FbToken } from '../entities/crawler/FbToken';
import { Vnphone } from '../entities/phone/Vnphone';
import { getGroupComment, getGroupReaction, IGroupPostData } from '../fbapis';

export const getUnscannedGroups = async () => {
  const crawlerConnection = getConnection('crawler');
  const groupRepository = crawlerConnection.getRepository(FbGroupKeyword);
  const unscannedGroups = groupRepository.find({
    where: {
      status: LessThan(3),
    },
  });
  return unscannedGroups;
};

export const getRandomToken = async () => {
  const crawlerConnection = getConnection('crawler');
  const tokenRepo = crawlerConnection.getRepository(FbToken);
  const randomToken = await tokenRepo
    .createQueryBuilder()
    .where('status = :status', { status: 1 })
    .orderBy('RAND()')
    .getOne();
  return randomToken;
};

const startCrawl = async () => {
  const token =
    'EAAVkddnQ174BACNDa9HrL7DTlPYZARclgrUZAmtdLcKbndf9HkgE3ynaMPbthGZBszo0YLb52ijOOkHZAQqVRyc6mef7aWMHXUGUJQMOwleWioEZCW8q0R42DmU185vaYblH0vk70HRpYvxJj6v18S7jNq2dFhZCwK3yb6xvkZArIenIKMuZAlHZAGmc2WuhiwnQZD';
  const res = await getGroupComment('1646816918750562', '2023-02-01', token);
  const reactions = await getGroupReaction(
    '1646816918750562',
    '2023-02-1',
    token
  );
  return getPhoneNumberFromReaction(reactions.data);

  //   return getPhoneNumberFromComment(res.data);
};

function getDateMinusNDays(n: number): string {
  const today = new Date();
  today.setDate(today.getDate() - n);
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, '0');
  const day = `${today.getDate()}`.padStart(2, '0');
  const res = `${year}-${month}-${day}`;
  console.log({ res });

  return res;
}

export const getCommentByPageId = async (pageId: string, backDay: number) => {
  try {
    const randomToken = await getRandomToken();
    if (randomToken?.token) {
      const res = await getGroupComment(
        pageId,
        getDateMinusNDays(backDay),
        randomToken?.token.trim()
      );
      const phoneNumber = getPhoneNumberFromComment(res.data);
      return phoneNumber;
    }
    return [];
  } catch (error) {
    return [];
  }
};

const getPhoneNumberFromReaction = async (posts: IGroupPostData[]) => {
  const phoneConnection = getConnection('phone');
  const phoneRepository = phoneConnection.getRepository(Vnphone);

  let fbUIDs: string[] = [];
  posts.forEach((post) => {
    if (post.reactions) {
      post.reactions.data.forEach((reaction) => {
        if (reaction?.id && !fbUIDs.includes(reaction.id)) {
          fbUIDs.push(reaction.id);
        }
      });
    }
  });
  const allPhone = await phoneRepository.find({
    where: {
      uid: In(fbUIDs),
    },
  });
  return allPhone;
};

const getPhoneNumberFromComment = async (posts: IGroupPostData[]) => {
  const phoneConnection = getConnection('phone');
  const phoneRepository = phoneConnection.getRepository(Vnphone);

  let fbUIDs: string[] = [];
  posts.forEach((post) => {
    if (post.comments) {
      post.comments.data.forEach((comment) => {
        if (comment.from?.id && !fbUIDs.includes(comment.from.id)) {
          fbUIDs.push(comment.from.id);
        }
      });
    }
  });
  const allPhone = await phoneRepository.find({
    where: {
      uid: In(fbUIDs),
    },
  });
  return allPhone;
};

export { startCrawl };
