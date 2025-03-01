from fastapi import FastAPI
from auth import auth_router

app = FastAPI()

# Include authentication router
app.include_router(auth_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
