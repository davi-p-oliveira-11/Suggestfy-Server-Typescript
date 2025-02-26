import { redis } from '../redis/client'

interface GetSubscriberInvitesCountParams {
  subscriberId: string
}

export async function getSubscribeInviteCount({
  subscriberId,
}: GetSubscriberInvitesCountParams) {
  const count = await redis.zscore('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
