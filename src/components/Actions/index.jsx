import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Package, Shirt, HeartHandshake } from 'lucide-react';

export default function Actions() {
  return (
    <section id="acoes" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nossas Ações Diárias</h2>
            <div className="w-20 h-1.5 bg-pink-500 rounded-full mb-8"></div>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Realizamos o <strong className="text-slate-800">Sopão Solidário</strong> todas as segundas-feiras no bairro do Prado, onde distribuímos rações, remédios, cestas básicas e roupas. Também conseguimos doações no Ceasa para ajudar a alimentar as pessoas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                  <Utensils className="w-6 h-6" />
                </div>
                <div className="font-semibold text-slate-800">Distribuição de Alimentos e Sopão</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Package className="w-6 h-6" />
                </div>
                <div className="font-semibold text-slate-800">Cestas Básicas, Rações e Remédios</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="bg-pink-100 p-3 rounded-lg text-pink-600">
                  <Shirt className="w-6 h-6" />
                </div>
                <div className="font-semibold text-slate-800">Doação de Roupas e Fraldas</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col gap-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-pink-100 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
              
              <div className="relative z-10">
                <HeartHandshake className="w-12 h-12 text-pink-500 mb-6" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Faça parte dessa corrente do bem</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Cada doação, seja de alimentos, roupas, ou qualquer valor financeiro, tem um impacto direto e imediato na vida das famílias e animais que atendemos.
                </p>
                <a
                  href="#doar"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
                >
                  Como posso ajudar?
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-md flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-extrabold mb-1">Apoio</div>
                <div className="text-blue-100 font-medium">Constante às famílias</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-md flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-extrabold mb-1">100%</div>
                <div className="text-pink-100 font-medium">Amor e Dedicação</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}