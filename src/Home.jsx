import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Your Exercise Tracker!</h1>
            <p className="text-lg text-gray-700 mb-8">Track your workouts and progress with ease.</p>

            <button
                onClick={() => navigate('/dashboard')}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-blue-600 transition all">
                    Get Started
                </button>
        </div>
    );
}