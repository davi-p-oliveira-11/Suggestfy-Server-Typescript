import { redis } from '../redis/client'

export async function getRanking() {
  const ranking = await redis.zrevrange('referral:ranking', 0, 2, 'WITHSCORES')

  console.log(ranking)
}
