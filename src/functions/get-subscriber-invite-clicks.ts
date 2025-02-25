import { redis } from '../redis/client'

interface GetSubscribeInviteClicks {
  subscriberId: string
}

export async function getSubscribeInviteClicks({
  subscriberId,
}: GetSubscribeInviteClicks) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
