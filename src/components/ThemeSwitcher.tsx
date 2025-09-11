import { useTheme } from './ThemeProvider';
import { Sun, Moon, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 border border-primary/20 hover:border-primary/30 transition-all duration-300 group overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Lightning bolt background */}
      <div className="absolute top-1 right-1 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Zap className="w-4 h-4 text-primary" />
      </div>

      <div className="relative flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            rotateY: theme === 'dark' ? 180 : 0,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-6 h-6"
        >
          {/* Sun icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: theme === 'light' ? 1 : 0,
              scale: theme === 'light' ? 1 : 0.8,
              rotate: theme === 'light' ? 0 : -90,
            }}
            transition={{ duration: 0.4 }}
          >
            <Sun className="w-6 h-6 text-primary" />
          </motion.div>

          {/* Moon icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: theme === 'dark' ? 1 : 0,
              scale: theme === 'dark' ? 1 : 0.8,
              rotate: theme === 'dark' ? 0 : 90,
            }}
            transition={{ duration: 0.4 }}
          >
            <Moon className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </div>

      {/* Pulse animation for active state */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-primary/30"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}