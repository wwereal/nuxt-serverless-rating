// import { Redis } from '@upstash/redis'
import Redis from 'ioredis'
  

export const createRedisInstance = () => {
  const redis = new Redis({
    host: 'https://fitting-lark-39662.upstash.io',
    password: '0953ebd4ddfb4895b7be638a210c4219'
  })
}
