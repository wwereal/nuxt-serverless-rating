import { Redis } from '@upstash/redis'

export default defineEventHandler(async (event) => {
    const redis = new Redis({
      url: import.meta.env.REDIS_URL,
      token: import.meta.env.REDIS_TOKEN,
    })
    const { key } : { key: string } = getQuery(event);
    const data = await redis.get(key);
    setHeaders(event, {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=1800, stale-while-revalidate=2400',
    })
    return {
      [key]: data
    };
})
