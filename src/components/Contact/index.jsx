import React from 'react';
import { MapPin, Mail, Phone, AtSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossos Contatos</h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="bg-pink-100 p-3 rounded-xl text-pink-600 mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Localização da ONG</h3>
                <p className="text-slate-600 mb-3">
                  Rua Escritor Alexandre Neptuno, 278<br/>
                  Afogados, Recife - PE<br/>
                  CEP: 50830-720
                </p>
                <a href="https://goo.gl/maps/e4pVaTxamTLv23Wh7" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:text-blue-800 hover:underline">
                  Abrir no Google Maps →
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Email</h3>
                <a href="mailto:novoamanhecerrecife@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors break-all">
                  novoamanhecerrecife@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="bg-green-100 p-3 rounded-xl text-green-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Telefone e WhatsApp</h3>
                <a href="tel:+5581999814988" className="text-slate-600 hover:text-green-600 transition-colors">
                  (81) 9 9981-4988
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                <AtSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Mídias Sociais</h3>
                <a href="https://www.instagram.com/oscnovoamanhecer/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-purple-600 transition-colors">
                  @oscnovoamanhecer
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map iframe */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4743.2447479673165!2d-34.911837372505964!3d-8.064353706715567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab191c83cff9df%3A0x97e83c9d68713380!2sOsc-%20Organiza%C3%A7%C3%A3o%20Novo%20Amanhecer!5e0!3m2!1spt-BR!2sbr!4v1675269457006!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização OSC Novo Amanhecer"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
