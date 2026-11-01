import React, { useState } from 'react';
import { ORGANIGRAMME_DATA, OrganeNode } from '../data/statutsData';
import { Users, Landmark, FileCheck, Layers, Briefcase, ChevronRight, UserCheck } from 'lucide-react';

export const GovernanceOrganigramme: React.FC = () => {
  const [selectedOrgane, setSelectedOrgane] = useState<OrganeNode>(ORGANIGRAMME_DATA[0]);
  const [activeTab, setActiveTab] = useState<'organes' | 'responsables'>('organes');

  const leaders = [
    {
      role: "Président",
      article: "Art. 10 du ROI",
      summary: "Représente l'association dans les actes de la vie civile, convoque et préside les réunions des organes, veille à l'exécution des décisions, signe les actes officiels et autorise les engagements dans la limite du budget."
    },
    {
      role: "Vice-président",
      article: "Art. 11 du ROI",
      summary: "Assiste le Président dans ses fonctions, suit les dossiers spécifiques délégués et assure le remplacement du Président en cas d'absence ou d'empêchement."
    },
    {
      role: "Secrétaire général",
      article: "Art. 12 du ROI",
      summary: "Prépare les convocations officielles, rédige et conserve les procès-verbaux, tient le registre des membres et les archives, assure la correspondance officielle et le suivi documentaire."
    },
    {
      role: "Secrétaire adjoint",
      article: "Art. 13 du ROI",
      summary: "Appuie le Secrétaire général dans l'ensemble de ses attributions administratives et assure l'intérim du secrétariat en cas d'absence."
    },
    {
      role: "Trésorier",
      article: "Art. 14 du ROI",
      summary: "Suit les recettes et dépenses, conserve les pièces justificatives, dresse les états financiers et livres comptables, applique le principe de double validation pour les retraits et décaissements."
    },
    {
      role: "Trésorier adjoint",
      article: "Art. 15 du ROI",
      summary: "Assiste le Trésorier dans le contrôle des pièces justificatives, rapprochements bancaires et assure l'intérim de la trésorerie."
    },
    {
      role: "Coordinateur exécutif",
      article: "Art. 16 du ROI",
      summary: "Assure la gestion quotidienne, planifie les programmes techniques, encadre les équipes de terrain et antennes de l'Ituri, et soumet les rapports périodiques au Conseil d'administration."
    },
    {
      role: "Responsables de secteurs & antennes",
      article: "Art. 17 du ROI",
      summary: "Pilotent les activités techniques locales (formation, agropastoral, VBG, WASH, confection, transport), gèrent les moyens alloués et veillent à la conformité éthique et sécuritaire."
    },
    {
      role: "Commission de contrôle",
      article: "Art. 18 du ROI & Art. 17 Statuts",
      summary: "Vérifie de manière indépendante la conformité financière et administrative des dépenses, consulte les pièces justificatives et présente son rapport annuel direct à l'Assemblée générale."
    }
  ];

  const getOrganeIcon = (type: string) => {
    switch (type) {
      case 'deliberatif':
        return <Users className="w-5 h-5 text-stone-900" />;
      case 'direction':
        return <Landmark className="w-5 h-5 text-amber-900" />;
      case 'controle':
        return <FileCheck className="w-5 h-5 text-emerald-800" />;
      case 'execution':
        return <Layers className="w-5 h-5 text-blue-900" />;
      case 'operationnel':
      default:
        return <Briefcase className="w-5 h-5 text-stone-800" />;
    }
  };

  return (
    <section id="gouvernance" className="py-16 border-b border-stone-200 bg-[#F7F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-sans font-bold text-stone-500 block mb-2">
              Annexe Statutaire & Titre IV du ROI
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Organigramme & Attributions des Responsables
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              L'AMS repose sur une gouvernance démocratique, transparente et décentralisée, assurant une stricte séparation entre l'orientation souveraine (AG), le contrôle stratégique (CA), la vérification indépendante (Contrôle) et l'exécution de terrain (Coordination).
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-200 shadow-xs shrink-0">
            <img 
              src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg" 
              alt="Logo AMS" 
              className="w-12 h-12 object-contain rounded-full"
            />
            <div className="text-left">
              <span className="block text-xs font-serif font-bold text-stone-900">Instances Dirigeantes</span>
              <span className="block text-[11px] text-stone-500 font-sans">Bunia · RDC</span>
            </div>
          </div>
        </div>

        {/* View Switcher: Organigramme vs Responsabilités nominatives */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-lg max-w-fit mb-8">
          <button
            onClick={() => setActiveTab('organes')}
            className={`px-4 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
              activeTab === 'organes' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            Organigramme Hiérarchique
          </button>
          <button
            onClick={() => setActiveTab('responsables')}
            className={`px-4 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
              activeTab === 'responsables' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            Attributions des Responsables (Articles 10-18)
          </button>
        </div>

        {activeTab === 'organes' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Visual Organigramme Tree */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Level 1: Assemblée Générale */}
              <div
                onClick={() => setSelectedOrgane(ORGANIGRAMME_DATA[0])}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedOrgane.id === 'ag'
                    ? 'bg-white border-stone-900 ring-2 ring-stone-900 shadow-sm'
                    : 'bg-white/70 border-stone-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center">
                      <Users className="w-5 h-5 text-stone-800" />
                    </div>
                    <div>
                      <span className="text-[11px] font-sans uppercase font-bold text-stone-500">
                        Niveau 1 · Organe Suprême
                      </span>
                      <h4 className="font-serif font-bold text-stone-900 text-base">
                        Assemblée Générale (AG)
                      </h4>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </div>
              </div>

              {/* Vertical Connector */}
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-stone-300" />
              </div>

              {/* Level 2: Conseil d'Administration & Commission de Contrôle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div
                  onClick={() => setSelectedOrgane(ORGANIGRAMME_DATA[1])}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedOrgane.id === 'ca'
                      ? 'bg-white border-amber-900 ring-2 ring-amber-900/40 shadow-sm'
                      : 'bg-white/70 border-stone-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-amber-50 flex items-center justify-center shrink-0">
                      <Landmark className="w-4 h-4 text-amber-900" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans uppercase font-bold text-amber-800">
                        Niveau 2 · Direction Stratégique
                      </span>
                      <h4 className="font-serif font-bold text-stone-900 text-sm">
                        Conseil d’Administration (CA)
                      </h4>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setSelectedOrgane(ORGANIGRAMME_DATA[2])}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedOrgane.id === 'controle'
                      ? 'bg-white border-emerald-900 ring-2 ring-emerald-900/40 shadow-sm'
                      : 'bg-white/70 border-stone-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-emerald-50 flex items-center justify-center shrink-0">
                      <FileCheck className="w-4 h-4 text-emerald-800" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans uppercase font-bold text-emerald-800">
                        Organe Indépendant
                      </span>
                      <h4 className="font-serif font-bold text-stone-900 text-sm">
                        Commission de Contrôle
                      </h4>
                    </div>
                  </div>
                </div>

              </div>

              {/* Vertical Connector */}
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-stone-300" />
              </div>

              {/* Level 3: Coordination Exécutive */}
              <div
                onClick={() => setSelectedOrgane(ORGANIGRAMME_DATA[3])}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedOrgane.id === 'coordination'
                    ? 'bg-white border-blue-900 ring-2 ring-blue-900/40 shadow-sm'
                    : 'bg-white/70 border-stone-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <span className="text-[11px] font-sans uppercase font-bold text-blue-900">
                        Niveau 3 · Gestion Quotidienne & Opérations
                      </span>
                      <h4 className="font-serif font-bold text-stone-900 text-base">
                        Coordination Exécutive
                      </h4>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </div>
              </div>

              {/* Vertical Connector */}
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-stone-300" />
              </div>

              {/* Level 4: Pôles de Terrain & Antennes */}
              <div
                onClick={() => setSelectedOrgane(ORGANIGRAMME_DATA[4])}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedOrgane.id === 'poles-terrain'
                    ? 'bg-white border-stone-900 ring-2 ring-stone-900 shadow-sm'
                    : 'bg-white/70 border-stone-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-stone-900" />
                    </div>
                    <div>
                      <span className="text-[11px] font-sans uppercase font-bold text-stone-600">
                        Niveau 4 · Terrain & Proximité Ituri
                      </span>
                      <h4 className="font-serif font-bold text-stone-900 text-base">
                        Responsables de Secteurs & Antennes Locales
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Formation · Agropastoral · VBG · Transport & Gardiennage · Confection & Coiffure · WASH & Climat
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </div>
              </div>

            </div>

            {/* Organe Detail Inspector Card */}
            <div className="lg:col-span-5 bg-white border border-stone-300 rounded-lg p-6 shadow-xs sticky top-28">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-200 mb-4">
                <div className="p-2.5 rounded bg-stone-100">
                  {getOrganeIcon(selectedOrgane.type)}
                </div>
                <div>
                  <span className="text-[11px] font-sans uppercase font-semibold text-stone-600">
                    Fiche Institutionnelle
                  </span>
                  <h3 className="font-serif font-bold text-xl text-stone-900">
                    {selectedOrgane.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm font-serif text-stone-800">
                <div>
                  <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-600 mb-1">
                    Attributions & Mandat Légal
                  </h5>
                  <p className="leading-relaxed bg-[#FAF9F5] p-3 rounded border border-stone-200">
                    {selectedOrgane.mandate}
                  </p>
                </div>

                <div>
                  <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-600 mb-1">
                    Composition
                  </h5>
                  <p className="leading-relaxed text-xs text-stone-700">
                    {selectedOrgane.composition}
                  </p>
                </div>

                <div>
                  <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-600 mb-1">
                    Périodicité des Réunions
                  </h5>
                  <p className="leading-relaxed text-xs text-stone-700">
                    {selectedOrgane.reunions}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 text-xs text-stone-600 font-sans flex items-center justify-between">
                  <span>Réf. Statuts : {selectedOrgane.articleStatuts}</span>
                  {selectedOrgane.articleROI && (
                    <span>ROI : {selectedOrgane.articleROI}</span>
                  )}
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* Responsables Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-amber-900">
                      {leader.article}
                    </span>
                    <UserCheck className="w-4 h-4 text-stone-400" />
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mb-2">
                    {leader.role}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-serif">
                    {leader.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-600">
                  Règlement d’Ordre Intérieur (Titre IV)
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
