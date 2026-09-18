---
num: '03'
title: Wiring n8n into a Laravel app
description: Webhooks, retries, and where automation tools should stop and your codebase should start.
date: 19 Jul 2023
datetime: '2023-07-19'
---

n8n is good at gluing services together — CRM, messaging APIs, spreadsheets, AI models — without writing an integration from scratch for each one. It's a bad place to put business logic, because business logic that lives in a visual workflow instead of version control is business logic nobody can review, test, or safely change six months later.

## The split I use

n8n owns the edges: receiving a webhook, calling a third-party API, retrying a flaky request, routing a message to the right channel. The Laravel app owns the data and the rules: what counts as a valid order, what state a conversation is allowed to move to, what triggers an invoice. n8n calls into the app's API to do anything that touches the source of truth — it never writes directly to tables the app also owns.

```
Webhook (n8n) → validate payload → POST /api/webhooks/intake (Laravel)
                                     ↳ Laravel owns validation, state, persistence
```

That boundary is the whole design decision. Cross it — let a workflow write straight to the database, encode a business rule as a chain of IF nodes — and you've built a second, invisible codebase that only lives in n8n's UI.

## Retries and failure, not just the happy path

The workflows worth building are the ones that survive a bad day: a downstream API timing out, a webhook arriving twice, a payload missing a field the workflow assumed would be there. n8n's built-in retry and error-workflow nodes handle most of it, but I still log every inbound webhook on the Laravel side before processing — so when something breaks, there's a record independent of n8n's own execution log to debug from.

## Where automation earns its place

The engagements that worked best: a WhatsApp intake synced to Airtable in real time, a caregiver monitoring flow that notifies a team on missed check-ins, an interview transcript turned into a publish-ready post via an AI agent. In each, n8n replaced glue code that would've taken longer to write and maintain than the workflow took to build — and the app underneath stayed the single place anyone had to look to understand what the system actually does.
