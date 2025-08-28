import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';
import './ListUsers.css';
import axios from 'axios';

export default function ListUsers() {

    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BACKEND_URL;

    return (
        <div className="list-users">

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
                    <h2>All Users</h2>
                </div>
            </motion.main>

            <footer className="w-full bg-gray-50 mt-12 py-10 px-6 text-black text-center text-md">
                Coded with 💖 by Sunny Wu
            </footer>
        </div>
    );
}