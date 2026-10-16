# Flight Booking API

FastAPI backend with PostgreSQL.

## Setup

```bash
uv sync
uv run alembic upgrade head
uv run uvicorn app.main:app --reload
```

## Endpoint

`POST /flight-listing` validates passenger and journey details and returns matching flights sorted by price.
