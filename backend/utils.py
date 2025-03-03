import random
from hashlib import sha256
from models import AuthenticationRequest  # Import the class from models.py

def generate_key_pair(secret_key: int):
    """
    Generate a public/private key pair using the Schnorr protocol.
    - g and p are fixed parameters for simplicity.
    """
    g, p = 2, 2**1024 - 109  # Using sample values for g and p
    pub_key = pow(g, secret_key, p)  # g^secret_key mod p
    return pub_key, secret_key

def generate_challenge():
    """
    Generate a random challenge for the Schnorr protocol.
    """
    return random.getrandbits(256)

def schnorr_protocol(secret_key: int):
    """
    Simulate the Schnorr protocol to generate C, c, and s.
    - C: Commitment
    - c: Challenge
    - s: Response
    """
    g, p = 2, 2**1024 - 109  # Using sample values for g and p
    r = random.randint(1, p-1)  # Random nonce
    C = pow(g, r, p)  # Commitment: g^r mod p
    c = generate_challenge()  # Challenge
    s = (r + c * secret_key) % (p-1)  # Response: r + c * secret_key mod (p-1)
    return C, c, s

def verify_schnorr(auth_request: AuthenticationRequest, public_key: int):
    """
    Verify the Schnorr protocol.
    - Check if C == g^s * y^c mod p, where y is the public key.
    """
    g, p = 2, 2**1024 - 109  # Using sample values for g and p
    C_ver = pow(g, auth_request.s, p)  # g^s mod p
    expected_C = (auth_request.C * pow(public_key, auth_request.c, p)) % p  # C * y^c mod p
    return C_ver == expected_C
