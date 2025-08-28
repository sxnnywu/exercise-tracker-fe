// imports
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import CreateUser from './CreateUser';
import ListUsers from './ListUsers';
import LogExercise from './LogExercise';
import ExerciseLogs from './ExerciseLogs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/list-users" element={<ListUsers />} />
        <Route path="/log-exercise" element={<LogExercise />} />
        <Route path="/view-logs" element={<ExerciseLogs />} />
      </Routes>
    </Router>
  );
}

export default App;
