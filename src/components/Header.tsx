import React, { useState } from 'react';
import { FileText, Menu, X, Printer, Shield } from 'lucide-react';

interface HeaderProps {
  onOpenAdhesion: () => void;
  onOpenPrint: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdhesion, onOpenPrint }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Statuts & ROI', href: '#statuts' },
    { label: 'Pôles d’Action', href: '#poles' },
    { label: 'Adhésion & Barèmes', href: '#adhesion' },
    { label: 'Gouvernance', href: '#gouvernance' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones, gap-8 */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand title, single line */}
          <a href="#accueil" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
            <img
              src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg"
              alt="Logo officiel Association de Multi-Services AMS Bunia"
              className="w-12 h-12 object-contain shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 group-hover:text-blue-950 transition-colors">
                Association de Multi-Services
              </span>
              <span className="text-xs text-stone-600 hidden sm:inline">
                Bunia, Ituri · RDC
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-stone-950 transition-colors py-1 relative hover:underline underline-offset-8 decoration-amber-700/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenPrint}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 hover:text-stone-950 bg-stone-100/80 hover:bg-stone-200/80 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="Version imprimable et archivage officiel"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>Imprimer</span>
            </button>

            <button
              onClick={onOpenAdhesion}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-md shadow-xs transition-colors whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 text-amber-300" />
              <span>Fiche d’Adhésion en Ligne</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-md"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF9F5] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrint();
              }}
              type="button"
              className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 rounded-md"
            >
              <Printer className="w-4 h-4 text-stone-600" />
              Imprimer les textes statutaires
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdhesion();
              }}
              type="button"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-stone-900 rounded-md"
            >
              <Shield className="w-4 h-4 text-amber-300" />
              Formulaire d’Adhésion & Signalement
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
