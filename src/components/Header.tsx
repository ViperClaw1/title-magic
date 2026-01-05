import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass-card mx-4 mt-4 md:mx-8">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <Youtube className="w-6 h-6 text-primary" />
            </div>
            <span className="font-bold text-lg hidden sm:block">
              Title<span className="text-gradient">Rewriter</span>
            </span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/results"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
