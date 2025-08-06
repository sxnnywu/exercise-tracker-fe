import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ExerciseLogs() {
  const { id } = useParams();
  const [log, setLog] = useState(null);
  const baseUrl = process.env.BACKEND_URL;

  useEffect(() => {
    axios.get(`${baseUrl}/api/users/${id}/logs`)
      .then((res) => setLog(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!log) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Exercise Log for {log.username}</h2>
      <p>Total Exercises: {log.count}</p>
      <ul className="mt-4 space-y-2">
        {log.log.map((entry, idx) => (
          <li key={idx} className="border p-2">
            <div>{entry.description}</div>
            <div>{entry.duration} min</div>
            <div>{entry.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
