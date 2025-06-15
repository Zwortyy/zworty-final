import React from 'react';
import { motion } from 'framer-motion';

const references = [
  { name: 'Company A', description: 'Glass balcony project in Istanbul.' },
  { name: 'Company B', description: 'Guillotine glass installation in Ankara.' },
  { name: 'Company C', description: 'Aluminum pergola project in Izmir.' }
];

const ReferencesPage = () => {
  return (
    <div className="flex-grow">
      {/* Üst Başlık Alanı */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#b8002d] to-[#eb0029] text-white py-16 px-4 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Our References</h1>
        <p className="mt-2 text-white/90">Projects we proudly completed</p>
      </motion.section>

      {/* Referans Kartları */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          {references.map((ref, index) => (
            <div key={index} className="bg-white shadow-md rounded p-6 border-t-4 border-[#eb0029]">
              <h2 className="text-xl font-semibold text-[#b8002d] mb-2">{ref.name}</h2>
              <p className="text-gray-700">{ref.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReferencesPage;
