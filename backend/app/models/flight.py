from sqlalchemy import Column, DateTime, Integer, String
from app.db.session import Base


class Flight(Base):
    __tablename__ = "flights"

    id = Column(Integer, primary_key=True, autoincrement=True)
    source = Column(String(50), nullable=False)
    destination = Column(String(50), nullable=False)
    start_time = Column(DateTime, nullable=False)
    duration_minutes = Column(Integer, nullable=False)
    price = Column(Integer, nullable=False)
    rating = Column(Integer, nullable=False)
