from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.flight import Flight
from app.schemas.flight import FlightResponse, FlightSearchRequest

router = APIRouter(tags=["flights"])


@router.post("/flight-listing", response_model=list[FlightResponse])
def flight_listing(data: FlightSearchRequest, db: Session = Depends(get_db)):
    return (
        db.query(Flight)
        .filter(Flight.source == data.source, Flight.destination == data.destination)
        .order_by(Flight.price.asc())
        .all()
    )
