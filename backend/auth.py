from fastapi import APIRouter, HTTPException
from models import UserRegistration, AuthenticationRequest
from utils import generate_key_pair, schnorr_protocol, verify_schnorr
from hashlib import sha256

# Create an API router
auth_router = APIRouter()

# Temporary in-memory store for users
users = {}

@auth_router.post("/register")
def register(user: UserRegistration):
    if user.username in users:
        raise HTTPException(status_code=400, detail="User already exists")

    secret_key = int(sha256(user.secret_key.encode()).hexdigest(), 16)
    pub_key, priv_key = generate_key_pair(secret_key)
    
    users[user.username] = {"public_key": pub_key, "secret_key": secret_key}
    return {"username": user.username, "public_key": pub_key}

@auth_router.post("/authenticate")
def authenticate(auth_request: AuthenticationRequest):
    if auth_request.username not in users:
        raise HTTPException(status_code=400, detail="User not found")

    user_data = users[auth_request.username]
    public_key = user_data["public_key"]

    if verify_schnorr(auth_request, public_key):
        return {"authenticated": True}
    else:
        raise HTTPException(status_code=401, detail="Authentication failed")
