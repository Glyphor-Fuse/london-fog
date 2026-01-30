import { Star, Layers, Zap, Users } from 'lucide-react';

const features = [
  {
    title: "Neural Search",
    desc: "Search across all your apps and documents using natural language. No more keywords.",
    icon: Brain,
    image: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&h=650&w=940",
    className: "md:col-span-2"
  },
  {
    title: "Instant Sync",
    desc: "Real-time collaboration with zero latency across all devices.",
    icon: Zap,
    image: "https://images.pexels.com/photos/35147162/pexels-photo-35147162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    className: "md:col-span-1"
  },
  {
    title: "Context Layers",
    desc: "Organize your knowledge in intuitive spatial layers instead of folders.",
    icon: Layers,
    image: "https://images.pexels.com/photos/29474092/pexels-photo-29474092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    className: "md:col-span-1"
  },
  {
    title: "Team Pulse",
    desc: "Understand your team's velocity and well-being with AI insights.",
    icon: Users,
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/london-fog/main/public/images/feature-team.png",
    className: "md:col-span-2"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">Designed for the future</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Everything you need to manage modern knowledge work in one fluid experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-indigo-500/50 ${f.className}`}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 mb-8 max-w-sm">{f.desc}</p>
              
              <div className="mt-auto overflow-hidden rounded-xl border border-white/10 bg-black/40">
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
