import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Copy, Check, ArrowLeft, RefreshCw, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useTitleContext } from '@/context/TitleContext';
import BackgroundOrbs from '@/components/BackgroundOrbs';
import Header from '@/components/Header';
import { toast } from 'sonner';

const Results = () => {
  const { result, isLoading } = useTitleContext();
  const navigate = useNavigate();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  if (!result && !isLoading) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <BackgroundOrbs />
        <Header />

        <main className="relative z-10 pt-32 pb-20 px-4 flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center glass-card p-10 max-w-md"
          >
            <div className="inline-flex p-4 rounded-2xl bg-muted mb-6">
              <Sparkles className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">No Results Yet</h2>
            <p className="text-muted-foreground mb-6">
              Enter a title on the homepage to get AI-powered suggestions.
            </p>
            <motion.button
              onClick={() => navigate('/')}
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Go to Homepage
            </motion.button>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundOrbs />
      <Header />

      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your <span className="text-gradient">Rewritten Titles</span>
            </h1>
            <p className="text-muted-foreground">
              Click any title to copy it to your clipboard
            </p>
          </motion.div>

          {/* Original Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 mb-8"
          >
            <p className="text-sm text-muted-foreground mb-2">Original Title</p>
            <p className="text-lg font-medium">{result?.original}</p>
          </motion.div>

          {/* Suggestions */}
          <div className="space-y-4">
            {result?.suggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="result-card cursor-pointer group"
                onClick={() => handleCopy(suggestion, index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-primary mb-2">
                      <Sparkles className="w-3 h-3" />
                      Suggestion {index + 1}
                    </span>
                    <p className="text-lg font-medium">{suggestion}</p>
                  </div>
                  <button
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors flex-shrink-0"
                    aria-label="Copy title"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <motion.button
              onClick={() => navigate('/')}
              className="glass-card px-6 py-3 font-medium flex items-center justify-center gap-2 hover:border-primary/20 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RefreshCw className="w-5 h-5" />
              Try Another Title
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Results;
