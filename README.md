**#GhostPass Project
#Overview**
GhostPass is a Zero-Knowledge Proof (ZKP)-based passwordless authentication system that ensures privacy, security, and efficiency using the Schnorr Protocol.

**Prerequisites**
Node.js(v14 or later)
NPM (v6 or later)
React (v17 or later)
Installation
Backend
Navigate to the backend directory:
bash
cd GhostPass/backend
Install dependencies:
bash
npm install
Start the server:
bash
node server.js

**Frontend**
Navigate to the frontend directory:
bash
cd GhostPass/frontend

Install dependencies:
bash
npm install
Start the React development server:

bash
npm start

**#Project Structure**
**Backend**

GhostPass
└── backend
    ├── server.js                     # Backend server code
    ├── package.json                  # Node.js dependencies and scripts
    └── README.md                     # Backend README file (this file)

**Frontend**

GhostPass
└── frontend
    ├── public
    │   ├── cyber-security-bg.jpg     # Background image
    │   ├── index.html                # Main HTML file
    │   └── registration_successful.html  # Registration successful page
    ├── src
    │   ├── components
    │   │   ├── Register.js           # Register component
    │   │   ├── Authenticate.js       # Authenticate component
    │   │   ├── Login.js              # Login component
    │   ├── App.js                    # Main App component
    ├── package.json                  # React dependencies and scripts
    └── README.md                     # Frontend README file

Ghostpass is a basic prototype to demonstrate the core concepts of ZKP-based authentication. For a production system, ensure to implement additional security measures and optimizations.
The project uses a hardcoded secret key for demonstration. Replace it with secure key management practices in production.
