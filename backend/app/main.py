from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.api import flights

app = FastAPI(title="Flight Booking API", version="1.0.0")


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(_request: Request, exc: RequestValidationError):
    messages = []
    for error in exc.errors():
        message = error.get("msg", "Invalid value")
        if message.startswith("Value error, "):
            message = message.removeprefix("Value error, ")
        messages.append(message)
    return JSONResponse(status_code=400, content={"detail": messages})

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(flights.router)