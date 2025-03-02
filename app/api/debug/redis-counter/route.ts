import { NextResponse } from 'next/server';
import { createClient } from 'redis';

const redis = await createClient({ url: process.env.REDIS_URL });
await redis.connect();

export async function GET(request: Request) {
    const url = new URL(request.url);
    const authToken = url.searchParams.get('token');

    if (!authToken || authToken !== process.env.DEBUG_TOKEN) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    const key = `global_email_count:${new Date().toISOString().slice(0, 10)}`;
    const count = await redis.get(key);
    return NextResponse.json({ key, count });
}
