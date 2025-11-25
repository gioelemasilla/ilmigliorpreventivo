'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Servizi', href: '/servizi' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contatti', href: '/contact-1' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Il Miglior Preventivo"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#1C244B] hover:text-[#FAB758] font-medium transition-colors text-sm whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button - Right Side */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/collabora-con-noi"
              className="px-4 py-2 bg-[#FAB758] text-white font-semibold rounded-lg hover:bg-[#e5a647] transition-colors text-sm whitespace-nowrap"
            >
              Collabora con Noi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1C244B] hover:text-[#FAB758] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#1C244B] hover:text-[#FAB758] transition-colors"
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col px-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1C244B] hover:text-[#FAB758] hover:bg-[#FAB758]/10 font-medium transition-colors py-3 px-4 rounded-lg text-base"
              >
                {item.title}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/collabora-con-noi"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#FAB758] text-white hover:bg-[#e5a647] font-semibold transition-colors py-3 px-4 rounded-lg text-base mt-4"
            >
              Collabora con Noi
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
