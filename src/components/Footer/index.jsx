import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
          <span className="font-bold text-xl text-white tracking-tight">OSC Novo Amanhecer</span>
        </div>
        <p className="mb-6 max-w-md mx-auto text-sm">
          Ajudando a construir um futuro melhor para quem mais precisa no nordeste do Brasil.
        </p>
        <div className="border-t border-slate-800 pt-8 mt-8 text-sm">
          <p>© {year} OSC Novo Amanhecer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
