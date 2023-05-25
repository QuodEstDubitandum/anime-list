## About

This template includes following setups:

- Redux
- Prisma
- Nextjs
- NextAuth
- Docker
- Docker compose for multiple environments
- React Query
- Shadcn UI Library

## Running Docker

- building dev: docker compose -f docker/development/docker-compose.yml build
- running dev: docker compose -f docker/development/docker-compose.yml up -d
- stopping dev: docker compose -f docker/development/docker-compose.yml down

- building prod: docker compose -f docker/production/docker-compose.yml build
- running prod: docker compose -f docker/production/docker-compose.yml up -d
- stopping prod: docker compose -f docker/production/docker-compose.yml down
