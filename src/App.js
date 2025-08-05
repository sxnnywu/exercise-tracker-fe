// imports
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';

import Home from './Home';
import CreateUser from './CreateUser';
import UserList from './UserList';
import LogExercise from './LogExercise';
import ExerciseLogs from './ExerciseLogs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/log-exercise" element={<LogExercise />} />
        <Route path="/logs/:id" element={<ExerciseLogs />} />
      </Routes>
    </Router>
  );
}

export default App;
