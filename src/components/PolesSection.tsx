import React, { useState } from 'react';
import { ACTIVITY_POLES, ActivityPole } from '../data/statutsData';
import { Sprout, ShieldAlert, Scissors, Truck, Sparkles, Droplets, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PolesSectionProps {
  onSelectArticleRef: (articleNum: number, part: 'statuts' | 'roi') => void;
}

export const PolesSection: React.FC<PolesSectionProps> = ({ onSelectArticleRef }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'agropastoral' | 'technique' | 'social' | 'service'>('all');
  const [activePole, setActivePole] = useState<ActivityPole>(ACTIVITY_POLES[1]); // Agropastoral by default

  const filteredPoles = ACTIVITY_POLES.filter((pole) => {
    if (selectedFilter === 'all') return true;
    return pole.category === selectedFilter;
  });

  const getPoleIcon = (code: string) => {
    switch (code) {
      case 'b':
      case 'f':
        return <Sprout className="w-4 h-4 text-emerald-700" />;
      case 'c':
        return <ShieldAlert className="w-4 h-4 text-amber-700" />;
      case 'g':
      case 'h':
        return <Scissors className="w-4 h-4 text-rose-700" />;
      case 'd':
      case 'e':
        return <Truck className="w-4 h-4 text-blue-700" />;
      case 'i':
      case 'j':
        return <Droplets className="w-4 h-4 text-cyan-700" />;
      case 'k':
      case 'l':
      default:
        return <Users className="w-4 h-4 text-stone-700" />;
    }
  };

  return (
    <section id="poles" className="py-16 border-b border-stone-200 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-widest font-sans font-bold text-stone-500 block mb-2">
            Article 6 & Article 7 des Statuts
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Pôles d’Intervention & Objectifs Opérationnels
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            L'AMS développe un modèle intégré d'autonomie communautaire à Bunia et en Province de l'Ituri, combinant formation professionnelle certifiante, sécurité alimentaire, insertion économique, respect des droits et préservation de l'environnement.
          </p>
        </div>

        {/* Photography Showcase Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="relative rounded-lg overflow-hidden border border-stone-300 bg-stone-100 group">
            <div className="h-64 sm:h-72 overflow-hidden">
              <img
                src="/src/assets/images/ams_agropastoral_ituri_1793021909382.jpg"
                alt="Coopérative maraîchère et agropastorale en Ituri, RDC"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <span>Pôle Agropastoral & Maraîchage</span>
                <span aria-hidden="true">·</span>
                <span>Art. 6 (b & f)</span>
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900">
                Cultures maraîchères, élevage durable & sécurité alimentaire en Ituri
              </h3>
              <p className="mt-1 text-xs text-stone-600 line-clamp-2">
                Structuration des groupements agricoles, techniques d'irrigation et diffusion de semences améliorées pour les familles rurales.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-stone-300 bg-stone-100 group">
            <div className="h-64 sm:h-72 overflow-hidden">
              <img
                src="/src/assets/images/ams_vocational_crafts_1793021907805.jpg"
                alt="Atelier de confection textile et formation technique à Bunia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <span>Pôle Confection, Couture & Métiers</span>
                <span aria-hidden="true">·</span>
                <span>Art. 6 (a, g & h)</span>
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900">
                Ateliers d’apprentissage de coupe-couture, coiffure & métiers pratiques
              </h3>
              <p className="mt-1 text-xs text-stone-600 line-clamp-2">
                Formation qualifiante de proximité pour l'autonomie des jeunes et des femmes, valorisation des savoir-faire et création d'ateliers coopératifs.
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/70 rounded-lg max-w-fit mb-8 overflow-x-auto">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              selectedFilter === 'all'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            Tous les 12 pôles
          </button>
          <button
            onClick={() => setSelectedFilter('agropastoral')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              selectedFilter === 'agropastoral'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            Agropastoral & Jardinage
          </button>
          <button
            onClick={() => setSelectedFilter('technique')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              selectedFilter === 'technique'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            Formation & Métiers
          </button>
          <button
            onClick={() => setSelectedFilter('social')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              selectedFilter === 'social'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            VBG, Protection & WASH
          </button>
          <button
            onClick={() => setSelectedFilter('service')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              selectedFilter === 'service'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            Transport & Gardiennage
          </button>
        </div>

        {/* Grid of Activity Poles Cards + Focused Detail Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List of Poles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredPoles.map((pole) => {
              const isSelected = activePole.id === pole.id;
              return (
                <div
                  key={pole.id}
                  onClick={() => setActivePole(pole)}
                  className={`p-4 rounded-lg border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-white border-stone-900 shadow-xs ring-1 ring-stone-900'
                      : 'bg-[#FDFCFA] border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded bg-stone-100 flex items-center justify-center font-mono text-xs font-bold text-stone-700">
                      {pole.code}
                    </span>
                    <span className="text-[11px] font-sans text-stone-600">
                      {pole.articleRef.split('&')[0]}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm mb-1 leading-snug">
                    {pole.title}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {pole.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Focused Pole Detail Card */}
          <div className="lg:col-span-5 bg-white border border-stone-300 rounded-lg p-6 shadow-xs sticky top-28">
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
              <span className="w-5 h-5 rounded bg-stone-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                {activePole.code}
              </span>
              <span>Dossier Opérationnel</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-stone-800">{activePole.articleRef}</span>
            </div>

            <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">
              {activePole.title}
            </h3>

            <p className="text-sm text-stone-700 leading-relaxed font-serif mb-5">
              {activePole.description}
            </p>

            <div className="mb-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Lignes d’action & Objectifs assignés
              </h5>
              <ul className="space-y-2.5">
                {activePole.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <button
                onClick={() => onSelectArticleRef(6, 'statuts')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-amber-900 transition-colors"
              >
                <span>Lire l’Article 6 complet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] text-stone-600 font-mono">
                Code Statuts : Art. 6({activePole.code})
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
