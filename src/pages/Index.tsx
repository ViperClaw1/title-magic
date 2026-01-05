import { motion } from 'framer-motion';
import { Wand2, Zap, TrendingUp } from 'lucide-react';
import BackgroundOrbs from '@/components/BackgroundOrbs';
import TitleForm from '@/components/TitleForm';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundOrbs />
      <Header />

      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Wand2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Title Magic</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your
              <br />
              <span className="text-gradient">YouTube Titles</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Turn boring titles into click-worthy masterpieces. Our AI analyzes top-performing
              videos to craft titles that get more views.
            </p>
          </motion.div>

          {/* Form Section */}
          <TitleForm />

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Zap,
                title: 'Instant Results',
                description: 'Get multiple title suggestions in seconds, not hours.',
              },
              {
                icon: TrendingUp,
                title: 'Data-Driven',
                description: 'Powered by analysis of millions of viral videos.',
              },
              {
                icon: Wand2,
                title: 'AI Magic',
                description: 'Smart algorithms that understand what makes titles click.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary/20 transition-colors"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;
