import { redis } from '../redis/client'

interface GetSubscribeInviteClicksParams {
  subscriberId: string
}

export async function getSubscribeInviteClicks({
  subscriberId,
}: GetSubscribeInviteClicksParams) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
