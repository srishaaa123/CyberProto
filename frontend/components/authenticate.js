import React, { useState } from 'react';
import axios from 'axios';

const Authenticate = () => {
    const [username, setUsername] = useState('');
    const [r, setR] = useState('');
    const [s, setS] = useState('');
    const [c, setC] = useState('');

    const handleAuthenticate = async () => {
        const response = await axios.post('http://localhost:3000/authenticate', { username, r, s, c });
        console.log(response.data);
    };

    return (
        <div>
            <h2>Authenticate</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Random Value (r)" onChange={(e) => setR(e.target.value)} />
            <input type="text" placeholder="Response (s)" onChange={(e) => setS(e.target.value)} />
            <input type="text" placeholder="Challenge (c)" onChange={(e) => setC(e.target.value)} />
            <button onClick={handleAuthenticate}>Authenticate</button>
        </div>
    );
};

export default Authenticate;
