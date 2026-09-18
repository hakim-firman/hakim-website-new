---
num: '04'
title: TALL Stack vs a JS framework, for solo work
description: One less build step, one less context switch — why I reach for Livewire before React on freelance projects.
date: 05 Feb 2023
datetime: '2023-02-05'
---

Working solo changes the calculus on which front end to reach for. On a team, a separate React app talking to an API is a reasonable split of labor. Alone, it's a second build pipeline, a second dependency tree, and a second mental model to hold — for interactivity that a server-rendered page with sprinkled reactivity can usually deliver just as well.

## What TALL gives up front

Tailwind, Alpine, Laravel, Livewire — one language, one framework, one deploy. A Livewire component is PHP with a Blade view; state lives on the server, updates come back over the wire without a hand-written API endpoint for every interaction.

```php
class SearchInvoices extends Component
{
    public string $query = '';

    public function render()
    {
        return view('livewire.search-invoices', [
            'invoices' => Invoice::search($this->query)->get(),
        ]);
    }
}
```

No separate API contract to design and version, no client-side state to keep in sync with the server's — the server is the state. For CRUD-heavy internal tools and admin-adjacent screens, that's less code and fewer places for a bug to hide.

## Where I still reach for React or Next

Anything genuinely interactive — drag-and-drop builders, real-time dashboards redrawing on every tick, offline-capable UI — outgrows Livewire's request-response model fast. And if a client's team already ships React, matching their stack beats optimizing my own workflow; the code has to outlive the handover.

## The actual trade-off

It's not "TALL is better" — it's fewer moving parts for the shape of work solo freelance projects usually are: a Laravel backend that needs a front end, not a front end that happens to need a backend. One less context switch, one less build step, one less place for a version mismatch to break the app the week after handover.
