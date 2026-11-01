import React, { useState } from 'react';
import { 
  Users, 
  FolderCheck, 
  Compass, 
  HeartHandshake, 
  ShieldCheck, 
  MapPin, 
  TrendingUp, 
  ArrowUpRight,
  Sparkles,
  Info
} from 'lucide-react';

interface IndicatorItem {
  id: string;
  metric: string;
  unit?: string;
  label: string;
  category: 'impact' | 'membres' | 'gouvernance';
  description: string;
  details: {
    title: string;
    items: string[];
    statutRef: string;
  };
}

const INDICATORS: IndicatorItem[] = [
  {
    id: 'poles',
    metric: '12',
    label: "Pôles d'Intervention Opérationnels",
    category: 'impact',
    description: "Filières d'action sociale, technique, agropastorale et environnementale.",
    details: {
      title: "Périmètre des Pôles Actifs",
      items: [
        "Formation professionnelle & encadrement technique (Art. 6a)",
        "Agriculture, élevage & pôle agropastoral (Art. 6b)",
        "Prévention des VBG & écoute bienveillante (Art. 6c & Art. 24 ROI)",
        "WASH — Eau, hygiène & assainissement public (Art. 6i)",
        "Coupe-couture, confection & coiffure mixte (Art. 6g-h)",
        "Jardinage, transport & gardiennage réglementé (Art. 6d-f)"
      ],
      statutRef: "Articles 5, 6 & 7 des Statuts Constitutifs"
    }
  },
  {
    id: 'membres',
    metric: '185',
    unit: '+',
    label: "Membres Enregistrés au Registre",
    category: 'membres',
    description: "Membres fondateurs, adhérents actifs et partenaires d'Ituri.",
    details: {
      title: "Répartition selon l'Article 8 des Statuts",
      items: [
        "11 Membres Fondateurs signataires du 25 mai 2026",
        "142 Membres Actifs participant aux assemblées et activités",
        "24 Membres Associés et partenaires d'appui technique",
        "8 Membres d'Honneur pour le soutien moral et mécénat"
      ],
      statutRef: "Statuts Art. 8-12 & ROI Art. 3"
    }
  },
  {
    id: 'projets',
    metric: '14',
    label: "Projets & Ateliers de Terrain Réalisés",
    category: 'impact',
    description: "Initiatives concrètes déployées à Bunia et périphérie depuis l'assemblée.",
    details: {
      title: "Actions Phares Exécutées en 2026",
      items: [
        "Distribution de semences maraîchères certifiées à 80 ménages",
        "Mise en service d'une borne-fontaine WASH gravitaire (400 ménages)",
        "Atelier pilote d'apprentissage de coupe-couture (35 boursières)",
        "3 campagnes d'assainissement salongo communautaire",
        "Cycles de sensibilisation aux droits fondamentaux et VBG"
      ],
      statutRef: "Articles 6, 7 & 16 des Statuts"
    }
  },
  {
    id: 'beneficiaires',
    metric: '520',
    unit: '+',
    label: "Ménages & Bénéficiaires Directs",
    category: 'impact',
    description: "Familles rurales, apprenties, maraîchers et usagers de l'eau saine.",
    details: {
      title: "Groupes Cibles Encadrés",
      items: [
        "80 exploitants agricoles familiaux en périphérie d'Irumu",
        "35 jeunes filles et mères en apprentissage textile",
        "400+ familles riveraines alimentées en eau potable",
        "Accompagnement et orientation sociale confidentielle"
      ],
      statutRef: "Statuts Art. 5 (Développement inclusif)"
    }
  },
  {
    id: 'territoires',
    metric: '3',
    label: "Territoires d'Intervention en Ituri",
    category: 'impact',
    description: "Déploiement progressif du siège de Bunia vers les zones rurales.",
    details: {
      title: "Implantation Géographique (Art. 3)",
      items: [
        "Bunia Ville : Siège central, secrétariat et ateliers techniques",
        "Territoire d'Irumu : Bassin agropastoral et coopératives maraîchères",
        "Territoire de Djugu : Projets pilotes d'adduction d'eau et sensibilisation"
      ],
      statutRef: "Article 3 des Statuts Constitutifs"
    }
  },
  {
    id: 'conformite',
    metric: '100',
    unit: '%',
    label: "Régularité & Double Validation",
    category: 'gouvernance',
    description: "Gouvernance transparente, tolérance zéro et double validation bancaire.",
    details: {
      title: "Dispositif de Contrôle Financier & Éthique",
      items: [
        "Double signature obligatoire (Trésorier & Président - Art. 14 ROI)",
        "Compte bancaire officiel distinct du patrimoine des membres (Art. 20)",
        "Audits indépendants par la Commission de Contrôle (Art. 18 ROI)",
        "Application stricte de la charte de tolérance zéro (Art. 23 ROI)"
      ],
      statutRef: "Articles 19-21 Statuts & Articles 14, 18-20, 23 ROI"
    }
  }
];

interface KeyIndicatorsSectionProps {
  onSelectArticleRef: (articleNum: number, part: 'statuts' | 'roi') => void;
  onOpenAdhesion: () => void;
}

export const KeyIndicatorsSection: React.FC<KeyIndicatorsSectionProps> = ({
  onSelectArticleRef,
  onOpenAdhesion
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'impact' | 'membres' | 'gouvernance'>('all');
  const [activeModalItem, setActiveModalItem] = useState<IndicatorItem | null>(null);

  const filteredIndicators = INDICATORS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="indicateurs" className="py-12 border-b border-stone-200 bg-[#F5F2EB]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Status Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-stone-600 mb-1">
              <span>Tableau de Bord Institutionnel</span>
              <span aria-hidden="true">·</span>
              <span>Exercice 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Indicateurs Clés & Données Opérationnelles
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-700 max-w-2xl font-sans leading-relaxed">
              Mesure concrète de l'impact communautaire, de la dynamique associative et de la transparence de l'AMS à Bunia et en Province de l'Ituri.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg overflow-x-auto text-xs font-medium shrink-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Tous les indicateurs ({INDICATORS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('impact')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'impact'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Impact & Réalisations
            </button>
            <button
              onClick={() => setSelectedCategory('membres')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'membres'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Membres & Adhésions
            </button>
            <button
              onClick={() => setSelectedCategory('gouvernance')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'gouvernance'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Gouvernance & Conformité
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredIndicators.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="bg-white border border-stone-300 hover:border-stone-400 rounded-lg p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-500">
                    {item.category === 'impact' ? 'Action de Terrain' : item.category === 'membres' ? 'Vie Associative' : 'Transparence'}
                  </span>
                  <span className="text-xs text-stone-400 group-hover:text-stone-800 transition-colors inline-flex items-center gap-0.5">
                    <span>Détails</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight tabular-nums">
                    {item.metric}
                  </span>
                  {item.unit && (
                    <span className="font-mono text-xl font-bold text-amber-800">
                      {item.unit}
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-base text-stone-900 mb-2 leading-snug group-hover:text-amber-950 transition-colors">
                  {item.label}
                </h3>

                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-sans">
                <span>Vérifié en Assemblée Générale</span>
                <span className="font-mono text-stone-700 font-medium">Ituri, RDC</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Transparency Ribbon */}
        <div className="mt-6 p-4 bg-white border border-stone-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Données statutaires vérifiées :</strong> L'ensemble des chiffres et projets correspond aux rapports moraux et financiers validés par les organes statutaires de l'AMS.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectArticleRef(14, 'statuts')}
              className="text-stone-900 hover:text-amber-900 font-semibold underline underline-offset-4"
            >
              Consulter l'Article 14 (AG)
            </button>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              onClick={onOpenAdhesion}
              className="font-semibold text-stone-900 hover:text-amber-900"
            >
              Rejoindre les membres
            </button>
          </div>
        </div>

      </div>

      {/* Modal with Detailed Breakdown */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white border border-stone-300 rounded-xl shadow-2xl max-w-lg w-full overflow-hidden my-8 p-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-4">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl font-extrabold text-stone-900 tabular-nums">
                  {activeModalItem.metric}{activeModalItem.unit || ''}
                </span>
                <span className="text-xs uppercase font-sans font-bold text-stone-500">
                  {activeModalItem.label}
                </span>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-stone-400 hover:text-stone-800 rounded-md hover:bg-stone-100"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-bold text-base text-stone-900">
                {activeModalItem.details.title}
              </h4>

              <ul className="space-y-2">
                {activeModalItem.details.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-[#FAF9F5] border border-stone-200 rounded text-xs text-stone-700 font-serif">
                <strong>Ancrage statutaire :</strong> {activeModalItem.details.statutRef}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
