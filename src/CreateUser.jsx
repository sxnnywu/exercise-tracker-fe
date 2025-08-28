import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserPlus } from 'react-icons/fa';
import './CreateUser.css';
import axios from 'axios';

export default function CreateUser() {

    // variables
    const [username, setUsername] = useState('');
    const [createdUser, setCreatedUser] = useState(null);
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BACKEND_URL;

    // handle submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Posting to:', `${baseUrl}/api/users`);

        try {
            const response = await axios.post(`${baseUrl}/api/users`, { username });
            setCreatedUser(response.data);
            setUsername('');

            setTimeout(() => {
                setCreatedUser(null);
            }, 2000)
        } catch (error) {
        }
    }

    return (
        <div className="create-user">

            <header className="w-full py-10 mb-20 px-6 text-left text-white text-lg font-semibold">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 hover:scale-105 transition-transform">
                    🏋️‍♀️ Your Exercise Tracker
                </button>
            </header>

            <motion.main
                className="main"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container">
                    <h2>Create New User</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            required
                        />
                        <button className="submit" type="submit">Create User</button>
                    </form>
                </div>
                {createdUser && (
                    <div className="success">
                        <h3>User Created Successfully!</h3>
                        <p>Username: {createdUser.username}</p>
                    </div>
                )}
            </motion.main>

            <footer className="w-full bg-gray-50 mt-12 py-10 px-6 text-black text-center text-md">
                Coded with 💖 by Sunny Wu
            </footer>
        </div>
    );
}