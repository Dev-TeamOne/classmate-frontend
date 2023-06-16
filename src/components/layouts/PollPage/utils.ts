export const pollTypes = [
  '투표/설문조사',
  '퀴즈',
  '오픈 채팅',
  '워드 클라우드',
  '별점',
  '랭킹',
] as const;

export type PollType = (typeof pollTypes)[number];
