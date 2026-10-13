---
title: Family Tree
abstract: A family tree web app with an auto-laid-out, generation-based tree. Anyone can view it, and logged-in admins manage people and relationships.
date: 2026-09-01
tags: react, typescript, dotnet, postgresql, docker
---
A web app for visualising my family as a generation-based tree. Anyone can browse it, while only logged-in users can change it.

## Features

- Generations are laid out automatically from parent and spouse data, with couples kept together and connector lines between generations.
- Any branch can be collapsed or expanded from its card.
- Opening a person shows their full details, and lets you edit, delete or manage their relationships.
- Anyone can view the tree, but adding, editing and deleting require a login.
- There is no public sign-up: only admin accounts can create new login accounts.

## Technology

- **Frontend:** React + TypeScript, built with Vite
- **Backend:** .NET 10 minimal API + Entity Framework Core
- **Database:** PostgreSQL (Neon in production, Docker locally)
- **Hosting:** Render (static site + Docker web service), with DNS on Cloudflare

## Getting started

Visit the live site, or run it locally: start the database with `docker compose up -d`, run the API with `dotnet run`, then start the frontend with `npm install && npm run dev`. The repository README lists the exact steps, including database migrations.

## Links

- [Live site](https://familytree.stolenpancake.com)
- [Source on GitHub](https://github.com/Rafael-Hoek/FamilyTree)
