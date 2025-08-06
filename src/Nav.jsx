import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaUsers, FaDumbbell, FaChartBar } from 'react-icons/fa';

export default function Nav() {
    const navigate = useNavigate();

    const cards = [

        {
            icon: <FaUserPlus sie={32} />,
            title: 'Create User',
            description: 'Set up a new profile',
            path: '/create-user',
            color: 'bg-emerald-500',
        },
        {
            icon: <FaUsers size={32} />,
            title: 'List Users',
            description: 'View all profiles',
            path: '/list-users',
            color: 'bg-blue-500',
        },
        {
            icon: <FaDumbbell size={32} />,
            title: 'Log Exercise',
            description: 'Record your workout',
            path: '/log-exercise',
            color: 'bg-purple-500',
        },
        {
            icon: <FaChartBar size={32} />,
            title: 'View Logs',
            description: 'See workout history',
            path: '/view-logs',
            color: 'bg-pink-500',
        }
    ]

    return (
        <div className="flex flex-col gap-px items-center justify-center min-h-screen bg-black text-center px-4">

            <header className="w-full py-10 mb-20 px-6 text-left text-white text-lg font-semibold">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 hover:scale-105 transition-transform">
                    🏋️‍♀️ Your Exercise Tracker
                </button>
            </header>

            <main>
                <h1 className="text-7xl font-extrabold text-white mb-6">
                    Choose Your Path
                </h1>
                <p className="text-2xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto mb-16">
                    What would you like to do?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mb-16">
                    {cards.map(({ icon, title, description, path, color }) => (
                        <div
                            key={title}
                            onClick={() => navigate(path)}
                            className="cursor-pointer bg-gray-900 rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:bg-gray-800">
                            
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white ${color}`}>
                                {icon}
                            </div>
                           
                            <h2 className="text-xl text-white font-bold mb-1">{title}</h2>
                            
                            <p className="text-gray-400">{description}</p>
                        </div>
                ))}
                </div>
            </main>

            <footer className="w-full bg-gray-50 mt-12 py-10 px-6 text-black text-center text-md">
                Coded with 💖 by Sunny Wu
            </footer>
        </div>
    );
}