import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserList() {

    // variables
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users')
            .then((res) => setUsers(res.data))
            .catch((err) => console.error('Error fetching users:', err));
    }, []);

    return(
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.username} (ID: {user._id})
                    </li>
                ))}
            </ul>
        </div>
    );
}