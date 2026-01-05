import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { useTitleContext } from '@/context/TitleContext';
import { toast } from 'sonner';

const TitleForm = () => {
  const [title, setTitle] = useState('');
  const { setResult, isLoading, setIsLoading } = useTitleContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast.error('Please enter a title to rewrite');
      return;
    }

    setIsLoading(true);

    try {
      const webhookUrl = 'https://lukinist.app.n8n.cloud/webhook-test/0086d71b-a264-4042-afde-b8ae958f08bc';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to process title');
      }

      const data = await response.json();
      
      setResult({
        original: title.trim(),
        suggestions: data.suggestions || data.titles || [data.title] || [],
        timestamp: new Date(),
      });

      navigate('/results');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to rewrite title. Please check your webhook URL.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="glass-card p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <label htmlFor="title" className="block text-sm font-medium text-muted-foreground">
              Enter your YouTube title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="How I Made $10,000 in One Week..."
              className="glass-input text-lg"
              disabled={isLoading}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isLoading || !title.trim()}
            className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Rewriting...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Rewrite Title</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Powered by AI to create click-worthy titles
        </p>
      </div>
    </motion.div>
  );
};

export default TitleForm;
