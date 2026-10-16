import re
from datetime import date, datetime

from pydantic import BaseModel, EmailStr, Field, field_validator, model_validator

CITIES = ("Bengaluru", "Chennai", "Hyderabad")


class FlightSearchRequest(BaseModel):
    first_name: str = Field(min_length=1, max_length=100)
    last_name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    phone: str
    travel_date: date
    source: str
    destination: str

class FlightResponse(BaseModel):
    id: int
    source: str
    destination: str
    start_time: datetime
    duration_minutes: int
    price: int
    rating: int

    model_config = {"from_attributes": True}
