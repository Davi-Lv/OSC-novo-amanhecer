import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, CreditCard, Banknote } from 'lucide-react';

export default function Donate() {
  return (
    <section id="doar" className="py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Faça seu apoio também</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">Sua doação garante alimento e esperança para dezenas de famílias e animais resgatados. Qualquer valor faz a diferença.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* PIX Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white text-slate-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
              <QrCode className="text-pink-500 w-6 h-6" />
              <h3 className="text-xl font-bold">PIX ou Depósito</h3>
            </div>
            <div className="p-6 space-y-4 text-sm md:text-base">
              <p><b>Chave PIX (E-mail):</b> <br/>
                <span className="text-blue-600 font-mono text-lg break-all">novoamanhecerrecife@gmail.com</span>
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="mb-2 text-slate-500 text-sm uppercase tracking-wider font-semibold">Dados Bancários</p>
                <p><b>Banco:</b> 655 - Neon Pagamentos S.A.</p>
                <p><b>Agência:</b> 0655</p>
                <p><b>Conta:</b> 20755558-3</p>
                <p><b>Nome:</b> Igor Mendonça Eloi da Silva</p>
              </div>
            </div>
          </motion.div>

          {/* Boleto/Credit Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="bg-white text-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col"
          >
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
              <CreditCard className="text-blue-500 w-6 h-6" />
              <h3 className="text-xl font-bold">Boleto ou Cartão</h3>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-slate-600 mb-6">Apoie rapidamente através da plataforma segura Asaas escolhendo um valor abaixo:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <a href="https://www.asaas.com/c/591775631563" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:bg-blue-50 font-bold text-blue-700 transition-all">
                  <Banknote className="w-5 h-5" /> R$ 10,00
                </a>
                <a href="https://www.asaas.com/c/038760022746" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:bg-blue-50 font-bold text-blue-700 transition-all">
                  <Banknote className="w-5 h-5" /> R$ 20,00
                </a>
                <a href="https://www.asaas.com/c/060183942912" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:bg-blue-50 font-bold text-blue-700 transition-all">
                  <Banknote className="w-5 h-5" /> R$ 50,00
                </a>
                <a href="https://www.asaas.com/c/268451027512" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold transition-all">
                  Outro Valor
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
