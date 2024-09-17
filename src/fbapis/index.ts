import axios, { AxiosResponse } from 'axios';
const COMMENT_LIMIT = 5000;
const REACTION_LIMIT = 5000;

const getGroupComment = async (
  groupId: string,
  since: string,
  fbToken: string
): Promise<IGroupPost> => {
  const response = await axios.get<IGroupPost>(
    `https://graph.facebook.com/${groupId}/feed/?fields=from,message,comments.limit(${COMMENT_LIMIT})&access_token=${fbToken}&since=${since}`
  );
  return response.data;
};

const getGroupReaction = async (
  groupId: string,
  since: string,
  fbToken: string
): Promise<IGroupPost> => {
  const response = await axios.get<IGroupPost>(
    `https://graph.facebook.com/${groupId}/feed/?fields=from,message,reactions.limit(${REACTION_LIMIT})&access_token=${fbToken}&since=${since}`
  );
  return response.data;
};

export { getGroupComment, getGroupReaction };

export interface IReaction {
  id: string | undefined;
  name: string | undefined;
  type: string | undefined;
}
export interface IComment {
  created_time: string | undefined;
  from: {
    name: string | undefined;
    id: string | undefined;
  };
  message: string | undefined;
  id: string | undefined;
}

export interface IGroupPostData {
  from: {
    name: string | undefined;
    id: string | undefined;
  };
  message: string | undefined;
  comments: {
    data: IComment[];
    paging: {
      next: string | undefined;
    };
  };
  reactions: {
    data: IReaction[];
  };
  id: string;
}

export interface IGroupPost {
  data: IGroupPostData[];
  paging: {
    previous: string | undefined;
    next: string | undefined;
  };
}
