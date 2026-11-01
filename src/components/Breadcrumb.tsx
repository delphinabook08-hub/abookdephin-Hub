import React, { useState, useEffect } from 'react';
import { ChevronRight, Home, BookOpen, Compass, Shield, HelpCircle, Layers, Users, Newspaper, TrendingUp, MessageSquareQuote, Handshake } from 'lucide-react';

export interface BreadcrumbSection {
  id: string;
  label: string;
  shortLabel?: string;
  category: string;
  icon: React.ReactNode;
}

interface BreadcrumbProps {
  currentSectionId: string;
  onNavigateSection: (sectionId: string) => void;
}

export const SECTIONS: BreadcrumbSection[] = [
  {
    id: 'accueil',
    label: 'Accueil & Présentation',
    shortLabel: 'Accueil',
    category: 'Portail',
    icon: <Home className="w-3.5 h-3.5" />
  },
  {
    id: 'indicateurs',
    label: 'Indicateurs Clés',
    shortLabel: 'Dashboard',
    category: 'Données 2026',
    icon: <TrendingUp className="w-3.5 h-3.5" />
  },
  {
    id: 'actualites',
    label: 'Actualités & Activités',
    shortLabel: 'Actualités',
    category: 'Terrain Ituri',
    icon: <Newspaper className="w-3.5 h-3.5" />
  },
  {
    id: 'temoignages',
    label: 'Témoignages de Membres',
    shortLabel: 'Témoignages',
    category: 'Retours d’expérience',
    icon: <MessageSquareQuote className="w-3.5 h-3.5" />
  },
  {
    id: 'poles',
    label: '12 Pôles d’Intervention',
    shortLabel: 'Pôles',
    category: 'Activités (Art. 6-7)',
    icon: <Compass className="w-3.5 h-3.5" />
  },
  {
    id: 'partenaires',
    label: 'Partenaires & Bailleurs',
    shortLabel: 'Partenaires',
    category: 'Financement (Art. 19)',
    icon: <Handshake className="w-3.5 h-3.5" />
  },
  {
    id: 'statuts',
    label: 'Statuts Constitutifs',
    shortLabel: 'Statuts (25 Art.)',
    category: 'Partie I',
    icon: <BookOpen className="w-3.5 h-3.5" />
  },
  {
    id: 'roi',
    label: 'Règlement Intérieur (ROI)',
    shortLabel: 'ROI (28 Art.)',
    category: 'Partie II',
    icon: <Shield className="w-3.5 h-3.5" />
  },
  {
    id: 'adhesion',
    label: 'Adhésion & Simulateur de Cotisations',
    shortLabel: 'Adhésion & Barèmes',
    category: 'Barèmes ROI & FAQ',
    icon: <HelpCircle className="w-3.5 h-3.5" />
  },
  {
    id: 'gouvernance',
    label: 'Organigramme & Responsables',
    shortLabel: 'Gouvernance',
    category: 'Annexe & ROI Titre IV',
    icon: <Layers className="w-3.5 h-3.5" />
  },
  {
    id: 'fondateurs',
    label: '11 Membres Fondateurs',
    shortLabel: 'Fondateurs',
    category: 'Art. 25 & Signatures',
    icon: <Users className="w-3.5 h-3.5" />
  }
];

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  currentSectionId,
  onNavigateSection
}) => {
  const [activeId, setActiveId] = useState<string>(currentSectionId || 'accueil');

  // Sync with prop changes
  useEffect(() => {
    if (currentSectionId) {
      setActiveId(currentSectionId);
    }
  }, [currentSectionId]);

  // Dynamic scroll spy with IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeSection = SECTIONS.find((s) => s.id === activeId) || SECTIONS[0];

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="sticky top-20 z-30 bg-[#F4F1EA]/95 backdrop-blur-md border-b border-stone-200/90 text-xs text-stone-600 shadow-2xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row md:items-center justify-between gap-2">
        
        {/* Left: Classic Breadcrumb Trail with Typography Separators */}
        <ol className="flex items-center gap-1.5 whitespace-nowrap overflow-x-auto py-0.5 font-sans">
          <li className="inline-flex items-center">
            <button
              onClick={() => onNavigateSection('accueil')}
              className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-950 font-medium transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-stone-500" />
              <span>AMS Bunia</span>
            </button>
          </li>

          <li aria-hidden="true" className="text-stone-400 select-none">
            <ChevronRight className="w-3 h-3" />
          </li>

          <li className="inline-flex items-center text-stone-500">
            <span>{activeSection.category}</span>
          </li>

          <li aria-hidden="true" className="text-stone-400 select-none">
            <ChevronRight className="w-3 h-3" />
          </li>

          <li aria-current="page" className="inline-flex items-center font-bold text-stone-900">
            <span>{activeSection.label}</span>
          </li>
        </ol>

        {/* Right: Quick-jump section pills for direct access */}
        <div className="flex items-center gap-1 overflow-x-auto py-0.5 no-scrollbar">
          <span className="text-[11px] text-stone-400 mr-1 hidden lg:inline font-sans">
            Accès direct :
          </span>
          {SECTIONS.slice(1).map((sec) => {
            const isSelected = activeId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => onNavigateSection(sec.id)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded transition-all whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/70'
                }`}
                title={`Aller à : ${sec.label}`}
              >
                <span>{sec.shortLabel || sec.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
};
