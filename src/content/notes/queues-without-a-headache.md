---
num: '01'
title: Queues without a queue-worker headache
description: Why I default to database queues over Redis for solo client apps, and what breaks when you don't.
date: 14 Mar 2024
datetime: '2024-03-14'
---

Most Laravel projects I take over reach for Redis queues on day one, before anyone has measured whether the app needs Redis's throughput at all. For a solo client build — one app, one worker, traffic that fits comfortably under a few hundred jobs a minute — that's a second service to provision, monitor, and keep alive, for speed the app will never use.

## What I default to instead

The `database` queue driver. It's already there: same connection, same migrations, same backup as the rest of the app. No extra process to keep alive on the server, no extra credential to rotate, one less thing to explain in the handover doc.

```php
// config/queue.php
'default' => env('QUEUE_CONNECTION', 'database'),
```

Jobs land in a `jobs` table, a worker polls it, and everything — job state, failed jobs, retries — is queryable with the same tools you already use to debug the rest of the app. When something goes wrong at 2am, `SELECT * FROM jobs` beats `redis-cli` for a client's ops person who has never touched Redis.

## Where it breaks

Database queues stop being the right call once you cross a few thousand jobs a minute, or once you need sub-second job latency — polling has a floor, and locking rows under heavy concurrency adds contention Redis doesn't have. High-frequency webhooks (payment gateways firing bursts, IoT ingestion) are the first place I've had to move off it.

The other break point is horizontal scaling. Multiple workers polling the same table works fine up to a point, but past that you want a broker built for it. If the app is going to grow into that shape, I say so upfront — cheaper to plan the migration path than to discover it mid-incident.

## The actual rule

Start with what's already provisioned. Move to Redis (or SQS, or whatever fits the client's infra) when a specific, measured number forces it — not because a tutorial said queues mean Redis. The database driver has shipped background jobs, email sends, webhook processing and report generation for every client app I've built under moderate load, with one less service for the client to pay for and worry about.
