import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './ExerciseLogs.css';

export default function ExerciseLogs() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [log, setLog] = useState(null);
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  // fetch all users for dropdown
  useEffect(() => {
    axios.get(`${baseUrl}/api/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err));
  }, [baseUrl]);

  // fetch logs whenever selectedUser changes
  useEffect(() => {
    if (!selectedUser) return;
    axios.get(`${baseUrl}/api/users/${selectedUser}/logs`)
      .then(res => setLog(res.data))
      .catch(err => console.error(err));
  }, [selectedUser, baseUrl]);

  return (
    <div className="exercise-logs">

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

        {/* Dropdown for selecting user */}
        <select className="dropdown"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          required
        >
          <option value="">Select a user</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>
              {user.username}
            </option>
          ))}
        </select>

        {log ? (
          <>
            <h2>Exercise Log for {log.username}</h2>
            <p>Total Exercises: {log.count}</p>
            <ul>
              {log.log?.map((entry, idx) => (
                <li key={idx}>
                  <div>{entry.description}</div>
                  <div>{entry.duration} min</div>
                  <div>{entry.date}</div>
                </li>
              )) || <li>No exercises logged yet.</li>}
            </ul>
          </>
        ) : selectedUser ? (
          <p>Loading...</p>
        ) : (
          <p>Please select a user to view logs.</p>
        )}

      </motion.main>

      <footer className="w-full bg-gray-50 mt-12 py-10 px-6 text-black text-center text-md">
        Coded with 💖 by Sunny Wu
      </footer>
    </div>
  );
}
