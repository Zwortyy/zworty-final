import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CepheDetail = ({ category, onBackClick }) => {
  const cepheProducts = [
    {
      id: 'isi-yalitimli-yalitimsiz-dograma',
      title: 'Hinged Systems',
      image: '/products/Hinged-Systems.jpg',
      mainDescription: 'Enerji Tasarrufu ve dış cephe konforunu artırmak için inşa edilmiş alüminyum ısıyalıtımlı ve yalıtımsız doğrama sistemlerimiz, çeşitli tasarım seçenekleriyle sunulmaktadır. Modern mimari anlayışıyla birleşen bu sistemler, uzun ömürlü ve dayanıklıdır.',
      features: [
        {
          title: 'Isı Yalıtımı',
          description: 'Termal kesit; ısı yalıtımı sağlayan özel bir termal kesit ile üretilir. Böylece iç ve dış ortamlar arasındaki sıcaklık aktarımını en aza indirir.'
        },
        {
          title: 'Yalıtım Malzemeleri',
          description: 'Gözenekleri poliüretan veya polistiren gibi soğutucu malzemeleri kullanılır.'
        },
        {
          title: 'Dayanıklılık',
          description: 'Alüminyum, oksitlenmeye karşı dayanıklıdır, bu nedenle uzun ömürlüdür. Mekanik dayanıklılık: yüksek dayanımlı yapısıyla dış etkenlere karşı direnç gösterir.'
        },
        {
          title: 'Estetik',
          description: 'Farklı renk ve yüzey kaplamaları ile estetik görünümler sunar. Modern görünüm: ince çerçeveler sayesinde modern mimariye uyum sağlar.'
        },
        {
          title: 'Güvenlik',
          description: 'Güçlü yapısı sayesinde hırsızlığa ve yangına karşı daha dayanıklıdır.'
        },
        {
          title: 'Enerji Verimliliği',
          description: 'Isı yalıtımı sayesinde enerji tasarrufu sağlar, bu da maliyet kaybını önler.'
        }
      ]
    },
    {
      id: 'aluminyum-isi-yalitimli-surme',
      title: 'Facade Systems',
      image: '/products/Facade-Systems.jpg',
      mainDescription: 'Geniş açıklıklar ve modern tasarımlar için ideal olan ısı yalıtımlı sürme sistemleri, yüksek performans ve estetiği bir araya getirir.',
      features: []
    },
    {
      id: 'kapakli-aluminyum-giydirme',
      title: 'Sliding Systems',
      image: '/products/Sliding-Systems.jpg',
      mainDescription: 'Binalara modern ve prestijli bir görünüm kazandıran kapaklı giydirme cephe sistemleri, farklı kapak seçenekleriyle tasarım esnekliği sunar.',
      features: []
    },
    {
      id: 'aluminyum-silikon-giydirme',
      title: 'Office Partition Systems',
      image: '/products/Office-Partition Systems.jpg',
      mainDescription: 'Camın ön planda olduğu, kesintisiz bir cephe görünümü sağlayan silikon giydirme sistemleri, minimalist ve şık tasarımlar için idealdir.',
      features: []
    },
    {
      id: 'aluminyum-kompozit-panel',
      title: 'Handrail Systems',
      image: '/products/Handrail-Systems.jpg',
      mainDescription: 'Hafif, dayanıklı ve estetik alüminyum kompozit paneller, binalara modern bir kimlik kazandırırken, renk ve doku çeşitliliğiyle öne çıkar.',
      features: []
    }
  ];

  const [selectedProduct, setSelectedProduct] = React.useState(cepheProducts[0]);

  const handleProductSelect = (productId) => {
    const product = cepheProducts.find(p => p.id === productId);
    setSelectedProduct(product);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Üst breadcrumb ve geri butonu */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            className="flex items-center text-gray-600 hover:text-primary mr-4"
            onClick={onBackClick}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri
          </Button>

          <div className="breadcrumb">
            <span className="breadcrumb-item">Home Page</span>
            <ChevronRight className="h-4 w-4" />
            <span className="breadcrumb-item">Products</span>
            <ChevronRight className="h-4 w-4" />
            <span className="breadcrumb-item font-medium text-primary">{category.title}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sol Menü */}
          <aside className="md:w-1/4 mb-8 md:mb-0">
            <div className="product-sidebar sticky top-24">
              <h3 className="product-sidebar-title">Our Products</h3>
              <ul className="space-y-1">
                {cepheProducts.map((product) => (
                  <li key={product.id}>
                    <a
                      href="#"
                      className={`product-sidebar-link ${selectedProduct.id === product.id ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleProductSelect(product.id); }}
                    >
                      {product.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="product-sidebar-title">Catalog</h3>
                <a href="#" className="product-sidebar-link text-primary flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Download Catalog
                </a>
              </div>
            </div>
          </aside>

          {/* Sağ İçerik */}
          <main className="md:w-3/4 md:pl-8">
            {selectedProduct && (
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-primary text-white p-6 rounded-t-lg">
                  <h1 className="text-3xl font-bold mb-2">{selectedProduct.title}</h1>
                </div>
                <div className="bg-white p-6 rounded-b-lg shadow-lg">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        className="w-full h-auto object-cover rounded-md shadow-md"
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <h2 className="text-2xl font-semibold text-primary mb-3">{selectedProduct.title}</h2>
                      <p className="text-gray-700 mb-4">{selectedProduct.mainDescription}</p>
                      {selectedProduct.features.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">Özellikler:</h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            {selectedProduct.features.map((feature, index) => (
                              <li key={index}>
                                <span className="font-semibold">{feature.title}:</span> {feature.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">For More Information</h3>
              <p className="text-gray-600 mb-4">
                Contact us to learn more about our products, request a quote, or discuss your custom projects.
              </p>
              <Button className="contact-button">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CepheDetail;
