import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PergolaDetail = ({ category, onBackClick }) => {
  const pergolaProducts = [
    { id: 'camli-bioklimatik', title: 'Camlı Bioklimatik Pergola', ... },
    { id: 'bioklimatik-pergola', title: 'Bioklimatik Pergola', ... },
    ...
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="py-8 scroll-smooth"> {/* scroll-smooth sınıfı burada */}
      <div className="container mx-auto px-4">
        {/* Geri Butonu ve Breadcrumb */}
        ...

        <div className="flex flex-col md:flex-row">
          {/* Sol Menü */}
          <div className="md:w-1/4 mb-8 md:mb-0">
            <div className="product-sidebar sticky top-24">
              <h3 className="product-sidebar-title">Ürünlerimiz</h3>
              <ul className="space-y-1">
                {pergolaProducts.map((product) => (
                  <li key={product.id}>
                    <a href={`#${product.id}`} className="product-sidebar-link">
                      {product.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="product-sidebar-title">Katalog</h3>
                <a href="#" className="product-sidebar-link text-primary flex items-center">
                  {/* İndir ikonuyla katalog */}
                  ...
                </a>
              </div>
            </div>
          </div>

          {/* Ürün Kartları */}
          <div className="md:w-3/4 md:pl-8">
            <motion.div className="..."> {/* Başlık bölümü */} </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {pergolaProducts.map((product) => (
                <motion.div
                  key={product.id}
                  id={product.id} {/* 👈 bu satır scroll hedefi için */}
                  className="product-card bg-white rounded-lg overflow-hidden shadow-md"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
                    <div className="mt-4">
                      <a href={`#${product.id}`} className="text-primary font-medium flex items-center hover:underline">
                        Detaylı Bilgi
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Alt Bilgi Kutusu */}
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Daha Fazla Bilgi İçin</h3>
              <p className="text-gray-600 mb-4">
                Ürünlerimiz hakkında detaylı bilgi almak, fiyat teklifi istemek veya özel projeleriniz için bizimle iletişime geçebilirsiniz.
              </p>
              <Button className="contact-button">
                İletişime Geç
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PergolaDetail;
