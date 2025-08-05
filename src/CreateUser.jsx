import { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {

    // variables
    const [username, setUsername] = useState('');
    const [createdUser, setCreatedUser] = useState(null);

    // handle submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users', { username });
            setCreatedUser(response.data);
            setUsername('');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    }

    return(
        <div>
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter username" 
                    required 
                />
                <button type="submit">Create User</button>
            </form>
            {createdUser && (
                <div>
                    <h3>User Created Successfully!</h3>
                    <p>Username: {createdUser.username}</p>
                    <p>User ID: {createdUser._id}</p>
                </div>
            )}
        </div>
    );
}