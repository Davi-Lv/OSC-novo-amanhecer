import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HeartHandshake } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-pink-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium text-sm mb-6"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Organização Social Novo Amanhecer</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight"
          >
            Fazendo a diferença na vida de <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">quem mais precisa</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
          >
            Juntos, podemos mudar a realidade de muitas pessoas em situação vulnerável na nossa região. Junte-se a nós e ajude a mudar a vida de alguém hoje.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#doar"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Quero Doar Agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#sobre"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-lg border border-slate-200 transition-all shadow-sm hover:shadow-md"
            >
              Conheça o Projeto
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
