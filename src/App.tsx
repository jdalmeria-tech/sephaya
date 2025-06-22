import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Heart, Star, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const products = [
    {
      id: 1,
      name: "Elegant Pearl Collection",
      image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Handcrafted pearl beads with gold accents"
    },
    {
      id: 2,
      name: "Bohemian Earth Tones",
      image: "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Natural stone beads in warm earth colors"
    },
    {
      id: 3,
      name: "Crystal Harmony Set",
      image: "https://images.pexels.com/photos/1191537/pexels-photo-1191537.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Sparkling crystal beads for special occasions"
    },
    {
      id: 4,
      name: "Vintage Charm Beads",
      image: "https://images.pexels.com/photos/1191535/pexels-photo-1191535.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Antique-inspired beads with timeless appeal"
    },
    {
      id: 5,
      name: "Ocean Breeze Collection",
      image: "https://images.pexels.com/photos/1191538/pexels-photo-1191538.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Blue and turquoise beads inspired by the sea"
    },
    {
      id: 6,
      name: "Garden Party Mix",
      image: "https://images.pexels.com/photos/1191533/pexels-photo-1191533.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Floral-inspired beads in soft pastels"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-700">Sephaya</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'products', 'about', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                      activeSection === item
                        ? 'text-amber-700 border-b-2 border-amber-700'
                        : 'text-gray-700 hover:text-amber-700'
                    }`}
                  >
                    {item === 'home' ? 'Home' : item.replace(/([A-Z])/g, ' $1').trim()}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-700 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'products', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50 w-full text-left transition-colors duration-200 capitalize"
                >
                  {item === 'home' ? 'Home' : item.replace(/([A-Z])/g, ' $1').trim()}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Handcrafted
                  <span className="text-amber-700 block">Beads & Dreams</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover Sephaya's exquisite collection of handcrafted beads and accessories. 
                  Each piece tells a story, crafted with love and attention to detail.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('products')}
                  className="bg-amber-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Explore Collection <ArrowRight size={20} />
                </button>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-110"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">50+</div>
                  <div className="text-sm text-gray-600">Unique Designs</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">5-Star Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beautiful handcrafted beads"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collections</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each piece in our collection is carefully curated and handcrafted to bring you 
              the finest quality beads and accessories for your creative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Heart className="text-white" size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="text-amber-700 font-semibold hover:text-amber-800 transition-colors duration-200 flex items-center gap-2">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Love what you see? Visit our social media to place your order!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Instagram size={20} /> Shop on Instagram
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Facebook size={20} /> Shop on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About Sephaya</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Born from a passion for beauty and craftsmanship, Sephaya has been creating 
                  exquisite beads and accessories that inspire creativity and celebrate individuality.
                </p>
                <p>
                  Our journey began with a simple belief: that every piece of jewelry should tell 
                  a story. Each bead in our collection is carefully selected and crafted to ensure 
                  the highest quality and unique character.
                </p>
                <p>
                  From elegant pearls to vibrant crystals, our diverse collection caters to every 
                  style and occasion. We take pride in offering pieces that not only look beautiful 
                  but also carry the essence of artisanal craftsmanship.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-white/70 rounded-xl">
                  <div className="text-2xl font-bold text-amber-700 mb-2">3+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-xl">
                  <div className="text-2xl font-bold text-amber-700 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Handcrafted Quality</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1232440/pexels-photo-1232440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisan crafting beads"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our products or want to stay updated with our latest collections? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <Mail className="text-amber-700" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">hello@sephaya.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <Phone className="text-amber-700" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <MapPin className="text-amber-700" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Handcrafted with love, worldwide</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Follow Our Journey</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-110"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Follow us on social media to see our latest creations and place your orders directly through our posts!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Stay Updated</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your project or ask any questions..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white py-3 rounded-xl font-semibold hover:bg-amber-800 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Sephaya</h3>
              <p className="text-gray-300 leading-relaxed">
                Handcrafted beads and accessories that inspire creativity and celebrate your unique style.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect & Shop</h4>
              <div className="flex gap-4 mb-4">
                <a
                  href="#"
                  className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
              <p className="text-gray-300 text-sm">
                Visit our social media to browse and purchase our latest collections!
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Sephaya. All rights reserved. Made with <Heart className="inline w-4 h-4 text-red-500" /> for bead lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;