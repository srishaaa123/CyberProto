from pydantic import BaseModel

class UserRegistration(BaseModel):
    username: str
    secret_key: str

class AuthenticationRequest(BaseModel):
    username: str
    C: int
    c: int
    s: int
