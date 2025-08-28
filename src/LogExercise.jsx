import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './LogExercise.css';

export default function LogExercise() {

    // variables
    const [form, setForm] = useState({
        userId: '',
        description: '',
        duration: '',
        date: ''
    });
    const [result, setResult] = useState(null);
    const [users, setUsers] = useState([]); // new state for users
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BACKEND_URL;

    // fetch users on mount
    useEffect(() => {
        axios.get(`${baseUrl}/api/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.error('Error fetching users:', err));
    }, [baseUrl]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                description: form.description,
                duration: Number(form.duration),
                date: form.date || undefined
            };

            const response = await axios.post(`${baseUrl}/api/users/${form.userId}/exercises`, payload);

            if (response.data.error) {
                console.error('Backend error: ', response.data.error);
                alert(response.data.error);
                return;
            }

            setResult(response.data);

            setTimeout(() => setResult(null), 2000);

            setForm({
                userId: '',
                description: '',
                duration: '',
                date: ''
            });
        } catch (error) {
            console.error('Error logging exercise:', error);
        }
    };

    return (
        <div className="log-exercise">

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
                    <h2>Log Exercise</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Dropdown for users */}
                        <select
                            className="dropdown"
                            name="userId"
                            value={form.userId}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a user</option>
                            {users.map(user => (
                                <option key={user._id} value={user._id}>
                                    {user.username}
                                </option>
                            ))}
                        </select>

                        <input
                            type="text"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Description"
                            required
                        />
                        <input
                            type="number"
                            name="duration"
                            value={form.duration}
                            onChange={handleChange}
                            placeholder="Duration (in minutes)"
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                        />
                        <button className="submit" type="submit">Log Exercise</button>
                    </form>

                    {result && result.error ? (
                        <p>Error: {result.error}</p>
                    ) : result && (
                        <div className="success">
                            <h3>Exercise Logged Successfully!</h3>
                            <p>User ID: {result._id}</p>
                            <p>Username: {result.username}</p>
                            <p>Description: {result.description}</p>
                            <p>Duration: {result.duration} minutes</p>
                            <p>Date: {result.date}</p>
                        </div>
                    )}
                </div>
            </motion.main>

            <footer className="w-full bg-gray-50 mt-12 py-10 px-6 text-black text-center text-md">
                Coded with 💖 by Sunny Wu
            </footer>

        </div>
    );
}
