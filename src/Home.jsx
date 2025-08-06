import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-px items-center justify-center min-h-screen bg-black text-center px-4">

            <header className="w-full py-10 mb-20 px-6 text-left text-white text-lg font-semibold">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 hover:scale-105 transition-transform">
                    🏋️‍♀️ Your Exercise Tracker
                </button>
            </header>

            <motion.main
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >  
                <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-white mb-14">
                    <span className="block leading-[0.8em]">TRACK</span>
                    <span className="block leading-[0.8em] bg-gradient-to-r from-cyan-400 via-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">LIFT</span>
                    <span className="block leading-[0.8em]">GROW</span>
                </h1>
                <p className="text-3xl lg:text-4xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto mb-16">The most beautiful way to log your workouts.</p>

                <button
                    onClick={() => navigate('/nav')}
                    className="group relative mb-12 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black px-16 py-6 text-2xl font-bold rounded-3xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
                        Get Started
                </button>
            </motion.main>

            <footer className="w-full bg-gray-50 mt-12 py-10 px-6 text-black text-center text-md">
                Coded with 💖 by Sunny Wu
            </footer>
        </div>
    );
}