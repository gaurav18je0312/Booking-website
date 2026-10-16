"""create flights table and seed inventory

Revision ID: d5f9b2c3e4a1
Revises:
Create Date: 2026-10-16 18:30:00.000000

"""
from datetime import datetime
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = "d5f9b2c3e4a1"
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

FLIGHTS = [
    {"source": "Hyderabad", "destination": "Chennai", "start_time": datetime(2000, 1, 1, 7, 0), "duration_minutes": 45, "price": 4800, "rating": 4},
    {"source": "Chennai", "destination": "Hyderabad", "start_time": datetime(2000, 1, 1, 7, 30), "duration_minutes": 45, "price": 5000, "rating": 4},
    {"source": "Hyderabad", "destination": "Bengaluru", "start_time": datetime(2000, 1, 1, 8, 0), "duration_minutes": 55, "price": 5200, "rating": 4},
    {"source": "Bengaluru", "destination": "Hyderabad", "start_time": datetime(2000, 1, 1, 8, 10), "duration_minutes": 55, "price": 5300, "rating": 4},
    {"source": "Bengaluru", "destination": "Chennai", "start_time": datetime(2000, 1, 1, 8, 30), "duration_minutes": 40, "price": 4200, "rating": 4},
    {"source": "Chennai", "destination": "Bengaluru", "start_time": datetime(2000, 1, 1, 9, 0), "duration_minutes": 40, "price": 4400, "rating": 4},
    {"source": "Hyderabad", "destination": "Chennai", "start_time": datetime(2000, 1, 1, 8, 0), "duration_minutes": 45, "price": 5300, "rating": 5},
    {"source": "Chennai", "destination": "Hyderabad", "start_time": datetime(2000, 1, 1, 8, 30), "duration_minutes": 45, "price": 5500, "rating": 5},
    {"source": "Hyderabad", "destination": "Bengaluru", "start_time": datetime(2000, 1, 1, 9, 0), "duration_minutes": 55, "price": 5700, "rating": 5},
    {"source": "Bengaluru", "destination": "Hyderabad", "start_time": datetime(2000, 1, 1, 9, 10), "duration_minutes": 55, "price": 5800, "rating": 5},
    {"source": "Bengaluru", "destination": "Chennai", "start_time": datetime(2000, 1, 1, 9, 30), "duration_minutes": 40, "price": 4700, "rating": 5},
    {"source": "Chennai", "destination": "Bengaluru", "start_time": datetime(2000, 1, 1, 10, 0), "duration_minutes": 40, "price": 4900, "rating": 5},
]


def upgrade() -> None:
    op.create_table(
        "flights",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("source", sa.String(length=50), nullable=False),
        sa.Column("destination", sa.String(length=50), nullable=False),
        sa.Column("start_time", sa.DateTime(), nullable=False),
        sa.Column("duration_minutes", sa.Integer(), nullable=False),
        sa.Column("price", sa.Integer(), nullable=False),
        sa.Column("rating", sa.Integer(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    flights = sa.table(
        "flights",
        sa.column("source", sa.String),
        sa.column("destination", sa.String),
        sa.column("start_time", sa.DateTime),
        sa.column("duration_minutes", sa.Integer),
        sa.column("price", sa.Integer),
        sa.column("rating", sa.Integer),
    )
    op.bulk_insert(flights, FLIGHTS)


def downgrade() -> None:
    op.drop_table("flights")
