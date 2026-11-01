import { Search, Compass, BookOpen, ShieldCheck, MapPin, Calendar, FileText } from 'lucide-react';
import { AMS_INFO } from '../data/statutsData';

interface HeroSectionProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onSelectTab: (tab: 'statuts' | 'roi' | 'poles' | 'gouvernance') => void;
  onOpenAdhesion?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchChange,
  searchQuery,
  onSelectTab,
  onOpenAdhesion
}) => {
  return (
    <section id="accueil" className="relative pt-6 pb-14 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header Tagline / Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-700 tracking-wide mb-4">
          <span className="font-semibold text-stone-900">RÉPUBLIQUE DÉMOCRATIQUE DU CONGO</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-stone-600" />
            Bunia, Province de l'Ituri
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-stone-600" />
            Adopté le {AMS_INFO.dateAdoption}
          </span>
          <span aria-hidden="true">·</span>
          <span>Statut : ASBL à vocation sociale</span>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg"
                  alt="Logo officiel AMS Bunia"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0 drop-shadow-xs"
                />
                <div>
                  <p className="font-serif italic text-blue-900 font-medium text-base sm:text-lg leading-snug">
                    « {AMS_INFO.devise} »
                  </p>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-stone-500 font-sans block mt-0.5">
                    Organisation Sociale & Communautaire · Bunia, Ituri
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] text-balance">
                Association de Multi-Services (AMS)
              </h1>
              
              <div className="mt-4 flex items-center gap-3 text-sm text-stone-700 font-medium">
                <span>Statuts Constitutifs</span>
                <span aria-hidden="true" className="text-stone-300">/</span>
                <span>Règlement d’Ordre Intérieur (ROI)</span>
              </div>

              {/* Dignified Institutional Preambule */}
              <div className="mt-6 p-5 bg-[#F4F1EA] border border-stone-300/80 rounded-lg text-stone-800 text-sm sm:text-base leading-relaxed font-serif">
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-stone-700 block mb-2">
                  Préambule officiel
                </span>
                <p>
                  Les membres fondateurs, animés par la volonté de promouvoir la solidarité, la formation, l’encadrement, l’autonomie économique et le développement intégral et inclusif des communautés, constituent l’AMS. L’association entend contribuer à l’amélioration durable des conditions de vie en Ituri par la formation, l’accompagnement, les activités productives, les prestations de services et la protection de l’environnement.
                </p>
              </div>
            </div>

            {/* Live Search Engine in legal articles */}
            <div className="mt-8">
              <label htmlFor="hero-search" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                Recherche intégrale dans les statuts & règlements
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  id="hero-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Ex : VBG, cotisations, quorum, assemblée générale, agropastoral, trésorier..."
                  className="w-full pl-10 pr-24 py-3 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute inset-y-0 right-2 px-2.5 my-1.5 text-xs text-stone-500 hover:text-stone-800 bg-stone-100 rounded hover:bg-stone-200 transition-colors"
                  >
                    Effacer
                  </button>
                )}
              </div>

              {/* Quick Jump Suggestions */}
              <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs text-stone-700">
                <span className="font-medium text-stone-800">Accès rapide :</span>
                <button
                  onClick={() => {
                    onSelectTab('statuts');
                    onSearchChange('Article 6');
                  }}
                  className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors"
                >
                  Art. 6 (12 Pôles d'Action)
                </button>
                <button
                  onClick={() => {
                    onSelectTab('statuts');
                    onSearchChange('Assemblée générale');
                  }}
                  className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors"
                >
                  Art. 14 (Assemblée Générale)
                </button>
                <button
                  onClick={() => {
                    onSelectTab('roi');
                    onSearchChange('Tolérance zéro');
                  }}
                  className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors"
                >
                  Art. 23 (Tolérance Zéro & Éthique)
                </button>
                <button
                  onClick={() => {
                    onSelectTab('statuts');
                    onSearchChange('Membres fondateurs');
                  }}
                  className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors"
                >
                  Art. 25 (11 Fondateurs)
                </button>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-3">
              {onOpenAdhesion && (
                <button
                  onClick={onOpenAdhesion}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-300" />
                  <span>Remplir la Fiche d’Adhésion Officielle</span>
                </button>
              )}
              <button
                onClick={() => onSelectTab('statuts')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-stone-700" />
                <span>Statuts Constitutifs (25 Art.)</span>
              </button>
              <button
                onClick={() => onSelectTab('roi')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
                <span>Règlement ROI (28 Art.)</span>
              </button>
              <button
                onClick={() => onSelectTab('poles')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-stone-950 transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Pôles d'Action</span>
              </button>
            </div>
          </div>

          {/* Column 2: Authentic Hero Visual & Trust Framing */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-lg overflow-hidden border border-stone-300 bg-stone-100 shadow-sm flex-1 min-h-[380px]">
              <img
                src="/src/assets/images/ams_bunia_hero_1793021907689.jpg"
                alt="Membres de l'Association de Multi-Services (AMS) réunis à Bunia, Province de l'Ituri"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-stone-100">
                <span className="text-[11px] font-sans uppercase tracking-widest text-amber-300 font-semibold block mb-1">
                  Siège & Territoires d'intervention
                </span>
                <p className="font-serif text-sm leading-snug text-stone-200">
                  Bunia, Chef-lieu de la Province de l'Ituri. Réunion de concertation et d'encadrement communautaire de l'AMS pour l'autonomie économique locale.
                </p>
              </div>
            </div>

            {/* Institutional KPI Strip */}
            <div className="mt-4 grid grid-cols-3 gap-3 p-3.5 bg-white border border-stone-200 rounded-lg text-center">
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-stone-900 tabular-nums">12</span>
                <span className="text-[11px] text-stone-600">Pôles d’activités</span>
              </div>
              <div className="border-x border-stone-200">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-stone-900 tabular-nums">11</span>
                <span className="text-[11px] text-stone-600">Membres fondateurs</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-stone-900 tabular-nums">53</span>
                <span className="text-[11px] text-stone-600">Articles adoptés</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
