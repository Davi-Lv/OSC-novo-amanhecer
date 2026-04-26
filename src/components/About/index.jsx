import React from 'react';
import { motion } from 'framer-motion';
import { Info, Target, Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sobre a Instituição</h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Nossa História */}
          <motion.div variants={itemVariants} className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 text-pink-600">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Nossa História</h3>
            <p className="text-slate-600 leading-relaxed">
              O Projeto OSC Novo Amanhecer surgiu em 2017 com o objetivo de combater a fome e a vulnerabilidade social na região nordeste do Brasil. Ajudamos crianças, adolescentes, adultos e idosos.
            </p>
          </motion.div>

          {/* Como Funcionamos */}
          <motion.div variants={itemVariants} className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Independência</h3>
            <p className="text-slate-600 leading-relaxed">
              Não recebemos ajuda da prefeitura ou políticos. Somos independentes e arrecadamos doações em bairros nobres para ajudar os necessitados e também animais de rua.
            </p>
          </motion.div>

          {/* Nossos Objetivos */}
          <motion.div variants={itemVariants} className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Nossos Objetivos</h3>
            <p className="text-slate-600 leading-relaxed">
              Proporcionar uma vida mais digna. Com sua ajuda, podemos continuar a fazer a diferença na vida de muitas pessoas. Junte-se a nós na luta contra a fome.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
