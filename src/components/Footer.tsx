export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg" />
          <span className="text-lg font-bold text-white font-heading">AetherFlow</span>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
        
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} AetherFlow Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
