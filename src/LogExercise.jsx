import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserList() {

    // variables
    const [form, setForm] = useState({
        userId: '',
        description: '',
        duration: '',
        date: ''
    });
    const [result, setResult] = useState(null);
    const baseUrl = process.env.BACKEND_URL;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/api/exercise`, form);
            setResult(response.data);
            setForm({
                userId: '',
                description: '',
                duration: '',
                date: ''
            });
        } catch (error) {
            console.error('Error logging exercise:', error);
        }
    }

    return(
        <div>
            <h2>Log Exercise</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="userId"
                    value={form.userId} 
                    onChange={handleChange} 
                    placeholder="User ID" 
                    required 
                />
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
                <button type="submit">Log Exercise</button>
            </form>
            {result && (
                <div>
                    <h3>Exercise Logged Successfully!</h3>
                    <p>User ID: {result.userId}</p>
                    <p>Description: {result.description}</p>
                    <p>Duration: {result.duration} minutes</p>
                    <p>Date: {new Date(result.date).toDateString()}</p>
                </div>
            )}
        </div>
    );
}