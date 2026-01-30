import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4" />
          <span>New: AI-Powered Context Mapping</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto font-heading leading-tight">
          Supercharge your workflow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Cognitive AI</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The all-in-one workspace that thinks with you. Organize notes, manage projects, and automate tasks with our neural-link technology.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 h-14 text-lg shadow-xl shadow-indigo-600/25">
            Start Your Trial <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/10 text-white px-8 h-14 text-lg hover:bg-white/5">
            Watch Demo
          </Button>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
          <img 
            src="/images/hero-dashboard.png" 
            alt="AetherFlow Dashboard Interface" 
            className="rounded-xl w-full h-auto shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/30 blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/30 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
