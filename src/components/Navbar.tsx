import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Cpu } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.5)]">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-heading">AetherFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <Button variant="outline" className="border-indigo-500/50 hover:bg-indigo-500/10 text-white">
            Sign In
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20">
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#features" className="text-lg text-slate-300">Features</a>
          <a href="#solutions" className="text-lg text-slate-300">Solutions</a>
          <a href="#pricing" className="text-lg text-slate-300">Pricing</a>
          <Button className="w-full bg-indigo-600">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
