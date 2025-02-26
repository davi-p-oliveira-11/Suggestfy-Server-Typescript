import { redis } from '../redis/client'

interface GetSubscribeRankingPositionParams {
  subscriberId: string
}

export async function getSubscribeRankingPosition({
  subscriberId,
}: GetSubscribeRankingPositionParams) {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)

  if (rank === null) {
    return { position: null }
  }

  return { position: rank + 1 }
}
