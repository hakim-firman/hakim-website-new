---
num: '02'
title: Why Filament became my default admin panel
description: Handing a client a CRUD screen shouldn't take a sprint. How I scaffold admin work in an afternoon.
date: 02 Nov 2023
datetime: '2023-11-02'
---

Every client project ends up needing an internal screen: an ops person managing orders, a support agent editing records, someone approving a queue of submissions. Hand-rolling that view — table, filters, a form, validation, authorization — used to eat a day per resource. Filament cut that to an hour, sometimes less.

## What it actually saves

A Filament resource is a schema-to-screen mapping: define the model's fields once, get a searchable, sortable, filterable table and a validated form for free.

```php
class InvoiceResource extends Resource
{
    protected static ?string $model = Invoice::class;

    public static function form(Form $form): Form
    {
        return $form->schema([
            TextInput::make('number')->required(),
            Select::make('status')->options(InvoiceStatus::class),
            DatePicker::make('due_at'),
        ]);
    }
}
```

That's a full CRUD screen with validation, not a scaffold you then spend two days styling. Policies plug straight into Laravel's existing authorization, so "can this role edit this record" is the same code whether the request comes from the API or the admin panel — one source of truth instead of two.

## Where I still reach for Nova, or nothing

If a client already owns a Nova license, the work ships on Nova — no reason to introduce a second tool they're not paying for. And for a genuinely one-off internal tool — three fields, one action, gone in a month — sometimes a plain Blade form is less code than configuring a resource. Filament earns its place when there's more than a couple of resources and the panel needs to outlive the initial build.

## The part that matters for handover

The client's team can add a filter, tweak a column, or add a new resource by copying an existing one — without learning a new framework beyond Laravel and Livewire, which the rest of the app is usually built on anyway. That's the actual win: not the hour saved scaffolding, but that the person who inherits the codebase in month six isn't stuck reverse-engineering a hand-built admin panel with no pattern to follow.
