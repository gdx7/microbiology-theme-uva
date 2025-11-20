// components/Navbar.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Still use Next Link, but handle scrolling manually
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Define navigation items with their respective section IDs
const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Research', href: '#research' },
  { name: 'People', href: '#people' },
  { name: 'Education', href: '#education' },
  { name: 'News', href: '#news' },
  { name: 'Contact', href: '#contact' }, // Assuming a contact section
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md text-uva-black shadow-lg py-4 border-b border-gray-100'
          : 'bg-gradient-to-b from-black/60 to-transparent text-white py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area - Links to top of page */}
        <Link href="#hero" className="text-2xl font-bold tracking-tighter z-50" onClick={(e) => scrollToSection(e, '#hero')}>
          UvA <span className={`font-light ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>Microbiology</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="hover:text-science-teal transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-science-teal transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen
            ? <X className={isScrolled ? "text-uva-black" : "text-white"} />
            : <Menu className={isScrolled ? "text-uva-black" : "text-white"} />
          }
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`absolute top-full left-0 w-full bg-white text-uva-black shadow-xl md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen py-8' : 'max-h-0'}`}
      >
        <div className="flex flex-col px-8 gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-xl font-bold border-b border-gray-100 pb-2 hover:text-science-teal"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}