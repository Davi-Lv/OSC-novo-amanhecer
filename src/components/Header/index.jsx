import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Ações', href: '#acoes' },
    { name: 'Campanhas', href: '#campanhas' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="font-bold text-xl text-slate-800 tracking-tight">OSC Novo Amanhecer</span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-pink-500 transition-colors font-medium text-sm"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#doar"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg"
              >
                Quero Doar
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Nav Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col touch-none overscroll-none overflow-hidden"
            style={{ height: '100dvh', position: 'fixed' }}
          >
            <div className="px-4 sm:px-6 flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <Heart className="h-8 w-8 text-pink-500" />
                <span className="font-bold text-xl text-slate-800 tracking-tight">OSC Novo Amanhecer</span>
              </div>
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-20">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-2xl font-bold text-slate-700 hover:text-pink-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#doar"
                onClick={toggleMenu}
                className="mt-6 bg-blue-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all active:scale-95"
              >
                Quero Doar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}