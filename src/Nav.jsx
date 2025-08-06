import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-px items-center justify-center min-h-screen bg-black text-center px-4">

            <header className="w-full py-10 mb-20 px-6 text-left text-white text-lg font-semibold">
                <span>🏋️‍♀️ Your Exercise Tracker</span>
            </header>

            <main>
                <h1 className="text-7xl font-extrabold text-white mb-6">
                    Choose Your Path
                </h1>
                <p className="text-2xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto mb-16">
                    What would you like to do?
                </p>

                <button
                    onClick={() => navigate('/nav')}
                    className="group relative mb-12 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black px-16 py-6 text-2xl font-bold rounded-3xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
                        Get Started
                </button>
            </main>

            <footer className="w-full bg-gray-50 mt-12 py-10 px-6 text-black text-center text-md">
                Coded with 💖 by Sunny Wu
            </footer>
        </div>
    );
}