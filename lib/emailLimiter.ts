import { createClient } from 'redis';
import { secondsUntilMidnight } from './utils';

const redis = await createClient({
  url: process.env.REDIS_URL,
});

await redis.connect();

const DAILY_LIMIT = 20;

export async function canSendEmailGlobal(): Promise<boolean> {

  const key = `global_email_count:${new Date().toISOString().slice(0, 10)}`;
  const count = await redis.get(key);

  return !count || Number(count) < DAILY_LIMIT;

}

export async function incrementEmailCountGlobal(): Promise<void> {

  const key = `global_email_count:${new Date().toISOString().slice(0, 10)}`;
  const newCount = await redis.incr(key);

  if (newCount === 1) {
    const ttl = secondsUntilMidnight();
    await redis.expire(key, ttl);
  }

}
