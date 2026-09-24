import { useTheme } from '@hook/use-theme';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-bg-surface hover:bg-bg-surface-hover transition-colors text-text-primary"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ scale: theme === 'dark' ? 1 : 0, rotate: theme === 'dark' ? 0 : -90 }}
                className="absolute"
            >
                <Moon size={20} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ scale: theme === 'light' ? 1 : 0, rotate: theme === 'light' ? 0 : 90 }}
                className="absolute"
            >
                <Sun size={20} />
            </motion.div>
        </button>
    );
};
