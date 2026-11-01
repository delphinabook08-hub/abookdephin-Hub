import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Coins, 
  Users, 
  ShieldCheck, 
  Briefcase,
  FileText,
  Calculator,
  Download,
  ClipboardList,
  Sparkles,
  Info
} from 'lucide-react';
import { CotisationSimulator } from './CotisationSimulator';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'adhesion' | 'cotisations' | 'fonctionnement' | 'ethique';
  articleROI: number;
  articleStatuts?: number;
  highlights: string[];
}

interface FaqSectionProps {
  onSelectArticleRef: (articleNum: number, part: 'statuts' | 'roi') => void;
  onOpenAdhesion: () => void;
  onOpenAdhesionWithPrefill?: (params: {
    domaine: string;
    montantFixe: string;
    montantPaye: string;
    solde: string;
    profession: string;
  }) => void;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'adhesion',
    question: "Comment devenir membre de l'Association de Multi-Services (AMS) ?",
    answer: "Toute personne qui adhère à l'objet social et aux principes d'action de l'AMS peut solliciter son admission. Conformément à l'Article 3 du Règlement d'Ordre Intérieur (ROI), le candidat adresse une demande écrite ou remplit le formulaire officiel d'adhésion. Il fournit les renseignements requis, accepte expressément les Statuts et le ROI et s'engage à respecter les décisions régulièrement adoptées. L'admission est formellement constatée par le Conseil d'Administration et enregistrée au registre des membres.",
    articleROI: 3,
    articleStatuts: 9,
    highlights: ["Demande écrite ou formulaire officiel", "Constatation par le Conseil d'Administration", "Inscription au registre"]
  },
  {
    id: 'faq-2',
    category: 'adhesion',
    question: "Quelles sont les différentes catégories de membres reconnues par l'AMS ?",
    answer: "L'AMS comprend quatre catégories de membres (Article 8 des Statuts & Article 2 du ROI) : (1) les membres fondateurs, signataires de l'acte constitutif du 25 mai 2026 ; (2) les membres actifs, participant directement aux activités et assemblées ; (3) les membres associés ou partenaires institutionnels, soutenant techniquement ou financièrement les programmes ; et (4) les membres d'honneur, distingués pour leur soutien moral exceptionnel.",
    articleROI: 2,
    articleStatuts: 8,
    highlights: ["Membres Fondateurs", "Membres Actifs", "Membres Associés / Partenaires", "Membres d'Honneur"]
  },
  {
    id: 'faq-3',
    category: 'cotisations',
    question: "Comment sont fixés le montant, la fréquence et le paiement des cotisations ?",
    answer: "Selon l'Article 4 du ROI, le montant, la périodicité et les modalités de paiement des cotisations sont fixés souverainement par l'Assemblée générale. Toute modification de cotisation est promptement notifiée aux adhérents. En cas de difficulté temporaire de trésorerie ou de situation sociale particulière d'un membre, une demande de moratoire ou d'arrangement peut être soumise à la bienveillance du Conseil d'administration.",
    articleROI: 4,
    articleStatuts: 19,
    highlights: ["Fixation souveraine par l'AG", "Notification préalable", "Possibilité d'arrangement amiable avec le CA"]
  },
  {
    id: 'faq-4',
    category: 'fonctionnement',
    question: "Comment sont prises les décisions et adoptées les délibérations en assemblée ?",
    answer: "Les décisions sont recherchées prioritairement par consensus bienveillant. À défaut d'accord unanime, les résolutions sont adoptées à la majorité simple des voix des membres présents ayant droit de vote (Article 8 du ROI), sauf majorité qualifiée exigée par la loi pour des modifications statutaires. Chaque réunion donne obligatoirement lieu à un procès-verbal signé conjointement par le Président de séance et le Secrétaire (Article 9 du ROI).",
    articleROI: 8,
    articleStatuts: 14,
    highlights: ["Recherche prioritaire du consensus", "Vote à la majorité simple", "Procès-verbal officiel signé"]
  },
  {
    id: 'faq-5',
    category: 'cotisations',
    question: "Comment sont sécurisés les fonds et quelles sont les règles de dépenses (double signature) ?",
    answer: "Les fonds de l'association sont obligatoirement déposés sur un compte bancaire ouvert au nom de l'AMS (Article 20 du ROI). Les fonds personnels des membres et ceux de l'association ne doivent en aucun cas être confondus. Tout retrait ou paiement est soumis au mécanisme strict de double validation adopté par le Conseil d'administration (Trésorier et Président). Toute dépense doit correspondre à une ligne budgétaire votée et être appuyée d'une pièce justificative régulière (Article 19).",
    articleROI: 20,
    articleStatuts: 20,
    highlights: ["Compte bancaire officiel de l'AMS", "Mécanisme de double validation", "Pièces justificatives obligatoires"]
  },
  {
    id: 'faq-6',
    category: 'fonctionnement',
    question: "Quels sont les rôles respectifs du Conseil d'Administration et de la Coordination Exécutive ?",
    answer: "Le Conseil d'Administration assure le pilotage stratégique, le vote budgétaire et la surveillance globale (Article 15 des Statuts). La Coordination Exécutive (Article 16 du ROI) assure la gestion opérationnelle quotidienne sur le terrain à Bunia et dans les territoires d'Ituri : animation des équipes, encadrement des bénéficiaires, suivi des indicateurs techniques et proposition des besoins financiers.",
    articleROI: 16,
    articleStatuts: 15,
    highlights: ["CA : Gouvernance et contrôle", "Coordination : Gestion opérationnelle de terrain", "Séparation des pouvoirs"]
  },
  {
    id: 'faq-7',
    category: 'ethique',
    question: "Que prévoit l'AMS en matière de Tolérance Zéro et de lutte contre les abus ?",
    answer: "L'Article 23 du ROI stipule une tolérance zéro intransigeante : sont formellement interdits la fraude, la corruption, le détournement d'actifs, le harcèlement, l'exploitation sexuelle, les discriminations de toute nature, l'abus d'autorité ainsi que les mesures de représailles envers les lanceurs d'alerte agissant de bonne foi. Les infractions graves peuvent faire l'objet de suspensions, d'exclusions statutaires ou de poursuites judiciaires.",
    articleROI: 23,
    articleStatuts: 2,
    highlights: ["Tolérance zéro absolue", "Protection stricte des lanceurs d'alerte", "Mesures disciplinaires et judiciaires"]
  },
  {
    id: 'faq-8',
    category: 'ethique',
    question: "Comment sont prises en charge et orientées les situations de Violences Basées sur le Genre (VBG) ?",
    answer: "Aux termes de l'Article 24 du ROI, les informations sensibles sont protégées sous le sceau de la confidentialité absolue. L'accompagnement s'effectue avec dignité, bienveillance et consentement libre et éclairé de la personne concernée. L'AMS assure l'orientation immédiate vers les structures médicales, psychosociales et judiciaires qualifiées de l'Ituri, les responsables de l'association ne se substituant jamais aux spécialistes agréés.",
    articleROI: 24,
    articleStatuts: 6,
    highlights: ["Confidentialité et dignité", "Consentement libre et éclairé", "Orientation vers les services spécialisés agréés"]
  },
  {
    id: 'faq-9',
    category: 'adhesion',
    question: "Quelles sont les garanties en cas de sanction, démission ou proposition d'exclusion ?",
    answer: "Conformément à l'Article 6 et à l'Article 25 du ROI, un membre peut démissionner par simple lettre écrite adressée au Secrétariat. En cas de manquement grave aux devoirs statutaires, la procédure disciplinaire garantit strictement les droits de la défense : notification écrite des faits, droit à une audition contradictoire et décision proportionnée et motivée. La personne sanctionnée bénéficie d'un droit de recours devant l'Assemblée générale.",
    articleROI: 25,
    articleStatuts: 12,
    highlights: ["Démission par notification écrite", "Respect du contradictoire et droit d'audition", "Recours garanti devant l'AG"]
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({ 
  onSelectArticleRef, 
  onOpenAdhesion,
  onOpenAdhesionWithPrefill 
}) => {
  // Navigation tabs between the Simulator and the FAQ
  const [sectionTab, setSectionTab] = useState<'simulateur' | 'faq' | 'procedure'>('simulateur');
  
  // FAQ filters
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'adhesion' | 'cotisations' | 'fonctionnement' | 'ethique'>('all');
  const [faqSearch, setFaqSearch] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']); // Open first adhesion and dues by default

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(FAQ_DATA.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const filteredFaqs = useMemo(() => {
    let list = FAQ_DATA;
    if (selectedCategory !== 'all') {
      list = list.filter((item) => item.category === selectedCategory);
    }
    if (faqSearch.trim()) {
      const q = faqSearch.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q) ||
          item.highlights.some((h) => h.toLowerCase().includes(q))
      );
    }
    return list;
  }, [selectedCategory, faqSearch]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'adhesion':
        return <Users className="w-4 h-4 text-stone-700" />;
      case 'cotisations':
        return <Coins className="w-4 h-4 text-amber-800" />;
      case 'fonctionnement':
        return <Briefcase className="w-4 h-4 text-blue-800" />;
      case 'ethique':
      default:
        return <ShieldCheck className="w-4 h-4 text-emerald-800" />;
    }
  };

  return (
    <section id="adhesion" className="py-16 border-b border-stone-200 bg-[#FAF9F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Identity */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-semibold mb-3">
              <Coins className="w-3.5 h-3.5 text-amber-800" />
              <span>Section Adhésion & Barèmes du ROI (Art. 3, 4, 14 & 20)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Espace Adhésion & Simulateur de Cotisations Annuelles
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Consultez les barèmes officiels votés par l'Assemblée Générale, simulez vos cotisations selon votre filière d'activité et accédez à toutes les réponses statutaires de l'AMS à Bunia.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenAdhesion}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-md shadow-xs transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Remplir la Fiche en Ligne</span>
            </button>
            <a
              href="/assets/aistudio/Fiche_Adhesion_AMS_2c1be05f.pdf"
              download="Fiche_Adhesion_AMS_Officielle.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors"
              title="Télécharger la fiche d'adhésion officielle en format PDF"
            >
              <Download className="w-3.5 h-3.5 text-stone-600" />
              <span>PDF Vierge</span>
            </a>
          </div>
        </div>

        {/* Primary View Switcher: Simulateur vs FAQ vs Procédure */}
        <div className="flex border-b border-stone-300 mb-8 bg-white/70 p-1 rounded-lg border border-stone-200">
          <button
            onClick={() => setSectionTab('simulateur')}
            className={`flex-1 py-3 px-4 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
              sectionTab === 'simulateur'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100/70'
            }`}
          >
            <Calculator className={`w-4 h-4 ${sectionTab === 'simulateur' ? 'text-amber-300' : 'text-stone-600'}`} />
            <span>Simulateur Interactif de Cotisations</span>
            <span className={`hidden sm:inline text-[10px] uppercase font-mono px-1.5 py-0.5 rounded ${
              sectionTab === 'simulateur' ? 'bg-amber-400 text-stone-950' : 'bg-stone-200 text-stone-700'
            }`}>
              Barème ROI
            </span>
          </button>

          <button
            onClick={() => setSectionTab('faq')}
            className={`flex-1 py-3 px-4 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
              sectionTab === 'faq'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100/70'
            }`}
          >
            <HelpCircle className={`w-4 h-4 ${sectionTab === 'faq' ? 'text-amber-300' : 'text-stone-600'}`} />
            <span>Foire Aux Questions</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
              sectionTab === 'faq' ? 'bg-stone-800 text-amber-300' : 'bg-stone-200 text-stone-700'
            }`}>
              {FAQ_DATA.length}
            </span>
          </button>

          <button
            onClick={() => setSectionTab('procedure')}
            className={`flex-1 py-3 px-4 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
              sectionTab === 'procedure'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100/70'
            }`}
          >
            <ClipboardList className={`w-4 h-4 ${sectionTab === 'procedure' ? 'text-amber-300' : 'text-stone-600'}`} />
            <span>Guide d'Adhésion en 4 Étapes</span>
          </button>
        </div>

        {/* VIEW 1: SIMULATEUR DE COTISATIONS */}
        {sectionTab === 'simulateur' && (
          <div className="space-y-6">
            <CotisationSimulator
              onApplyToAdhesionModal={onOpenAdhesionWithPrefill}
              onSelectArticleRef={onSelectArticleRef}
            />

            {/* Quick Context Callout about ROI Article 4 */}
            <div className="p-4 bg-white border border-stone-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-50 rounded border border-amber-200 text-amber-900 shrink-0">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">
                    Vous avez des questions sur la fixation des montants ou les facilités de paiement ?
                  </h4>
                  <p className="text-stone-600 mt-0.5">
                    L'Article 4 du ROI prévoit que l'Assemblée générale fixe souverainement les barèmes et autorise le Conseil d'Administration à accorder des rééchelonnements amiables en cas de difficulté passagère.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setSectionTab('faq')}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded font-semibold transition-colors"
                >
                  Lire la FAQ Cotisations
                </button>
                <button
                  onClick={() => onSelectArticleRef(4, 'roi')}
                  className="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded font-semibold transition-colors"
                >
                  Voir Article 4 ROI
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: FOIRE AUX QUESTIONS */}
        {sectionTab === 'faq' && (
          <div>
            {/* Dynamic Controls Bar: Search & Category Tabs */}
            <div className="bg-white border border-stone-200 rounded-lg p-4 sm:p-5 shadow-xs mb-8">
              
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                {/* Search Input */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={faqSearch}
                    onChange={(e) => setFaqSearch(e.target.value)}
                    placeholder="Filtrer une question (ex. montant cotisation, exclusion, compte bancaire, VBG...)"
                    className="w-full pl-10 pr-20 py-2.5 bg-[#FAF9F5] border border-stone-300 rounded-md text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  {faqSearch && (
                    <button
                      onClick={() => setFaqSearch('')}
                      className="absolute inset-y-0 right-2 px-2 text-xs text-stone-500 hover:text-stone-800"
                    >
                      Effacer
                    </button>
                  )}
                </div>

                {/* Expand / Collapse All buttons */}
                <div className="flex items-center gap-2 text-xs shrink-0">
                  <button
                    onClick={expandAll}
                    className="px-3 py-1.5 text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded transition-colors cursor-pointer"
                  >
                    Tout déplier
                  </button>
                  <button
                    onClick={collapseAll}
                    className="px-3 py-1.5 text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded transition-colors cursor-pointer"
                  >
                    Tout replier
                  </button>
                </div>
              </div>

              {/* Interactive Category Segmented Tabs */}
              <div className="pt-4 flex items-center gap-1.5 overflow-x-auto text-xs">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === 'all'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-950 bg-stone-100/70'
                  }`}
                >
                  Toutes les questions ({FAQ_DATA.length})
                </button>
                <button
                  onClick={() => setSelectedCategory('adhesion')}
                  className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === 'adhesion'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-950 bg-stone-100/70'
                  }`}
                >
                  Adhésion & Membres
                </button>
                <button
                  onClick={() => setSelectedCategory('cotisations')}
                  className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === 'cotisations'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-950 bg-stone-100/70'
                  }`}
                >
                  Cotisations & Gestion Financière
                </button>
                <button
                  onClick={() => setSelectedCategory('fonctionnement')}
                  className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === 'fonctionnement'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-950 bg-stone-100/70'
                  }`}
                >
                  Fonctionnement & Délibérations
                </button>
                <button
                  onClick={() => setSelectedCategory('ethique')}
                  className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === 'ethique'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-950 bg-stone-100/70'
                  }`}
                >
                  Éthique & Protection VBG
                </button>
              </div>

            </div>

            {/* Questions List */}
            <div className="space-y-3">
              {filteredFaqs.length === 0 ? (
                <div className="bg-white border border-stone-200 rounded-lg p-8 text-center text-stone-500">
                  <HelpCircle className="w-8 h-8 mx-auto text-stone-400 mb-2" />
                  <p className="text-sm font-semibold text-stone-800">
                    Aucune question ne correspond à votre recherche « {faqSearch} »
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Essayez d'autres mots-clés ou réinitialisez le filtre de catégorie.
                  </p>
                  <button
                    onClick={() => {
                      setFaqSearch('');
                      setSelectedCategory('all');
                    }}
                    className="mt-3 px-3 py-1.5 text-xs text-stone-800 bg-stone-100 hover:bg-stone-200 rounded font-semibold"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              ) : (
                filteredFaqs.map((faq) => {
                  const isOpen = openIds.includes(faq.id);

                  return (
                    <div
                      key={faq.id}
                      className="bg-white border border-stone-200 hover:border-stone-300 rounded-lg transition-all shadow-xs overflow-hidden"
                    >
                      {/* Accordion Trigger */}
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded bg-stone-100 shrink-0 mt-0.5">
                            {getCategoryIcon(faq.category)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                              <span className="font-semibold text-stone-800">
                                ROI Article {faq.articleROI}
                              </span>
                              {faq.articleStatuts && (
                                <>
                                  <span aria-hidden="true">·</span>
                                  <span>Statuts Art. {faq.articleStatuts}</span>
                                </>
                              )}
                            </div>
                            <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
                              {faq.question}
                            </h3>
                          </div>
                        </div>

                        <div className="p-1 text-stone-400 hover:text-stone-700 shrink-0 mt-1">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </button>

                      {/* Accordion Content */}
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-stone-100 bg-[#FCFBF8]">
                          <div className="pl-0 sm:pl-11">
                            <p className="font-serif text-stone-800 text-sm sm:text-base leading-relaxed text-justify mb-4">
                              {faq.answer}
                            </p>

                            {/* Points clés extraits */}
                            <div className="mb-4">
                              <span className="text-[11px] font-sans uppercase font-bold text-stone-500 tracking-wider block mb-2">
                                Points clés statutaires :
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                {faq.highlights.map((h, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-1.5 p-2 bg-white border border-stone-200 rounded text-xs text-stone-800"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                                    <span className="line-clamp-2">{h}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Direct Jump to Article & Adhesion Action */}
                            <div className="pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                              <button
                                onClick={() => onSelectArticleRef(faq.articleROI, 'roi')}
                                className="inline-flex items-center gap-1.5 font-semibold text-stone-900 hover:text-amber-900 transition-colors cursor-pointer"
                              >
                                <FileText className="w-3.5 h-3.5 text-stone-600" />
                                <span>Lire le texte intégral (Article {faq.articleROI} du ROI)</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>

                              <div className="flex items-center gap-2">
                                {faq.category === 'cotisations' && (
                                  <button
                                    onClick={() => setSectionTab('simulateur')}
                                    className="inline-flex items-center gap-1 font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded transition-colors cursor-pointer"
                                  >
                                    <Calculator className="w-3.5 h-3.5 text-amber-800" />
                                    <span>Calculer mes cotisations</span>
                                  </button>
                                )}

                                <button
                                  onClick={onOpenAdhesion}
                                  className="inline-flex items-center gap-1.5 font-semibold text-white bg-stone-900 hover:bg-stone-800 px-3 py-1.5 rounded transition-colors cursor-pointer"
                                >
                                  <span>Remplir le formulaire d'adhésion</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* VIEW 3: GUIDE D'ADHÉSION EN 4 ÉTAPES */}
        {sectionTab === 'procedure' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">
                Le Processus Réglementaire d'Adhésion à l'AMS Bunia
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mb-8">
                L'admission en tant que membre de l'Association de Multi-Services est encadrée par l'Article 9 des Statuts Constitutifs et l'Article 3 du Règlement d'Ordre Intérieur (ROI).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                
                {/* Step 1 */}
                <div className="p-4 bg-[#FAF9F5] border border-stone-200 rounded-lg space-y-2">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-mono font-bold flex items-center justify-center text-sm">
                    1
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Choix du Pôle & Simulation
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Identifiez votre filière (Couture, Coiffure, Agropastoral, Transport, Gardiennage, WASH...) et simulez vos cotisations grâce au simulateur interactif.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 bg-[#FAF9F5] border border-stone-200 rounded-lg space-y-2">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-mono font-bold flex items-center justify-center text-sm">
                    2
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Fiche d'Adhésion Officielle
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Complétez le formulaire officiel en ligne (Sections I à V) ou remplissez la version papier imprimable avec vos coordonnées exactes en Ituri.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-4 bg-[#FAF9F5] border border-stone-200 rounded-lg space-y-2">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-mono font-bold flex items-center justify-center text-sm">
                    3
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Engagement & Droit Fixe
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Signez l'engagement solennel de respect du ROI et acquittez le droit d'adhésion fixe (10 000 FC) contre délivrance d'un reçu officiel à souche (Section IV).
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-4 bg-[#FAF9F5] border border-stone-200 rounded-lg space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 text-white font-mono font-bold flex items-center justify-center text-sm">
                    4
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    Constatation par le CA & Registre
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Le Conseil d'Administration valide formellement l'admission. Le Secrétariat Général vous inscrit au registre matricule et délivre votre carte de membre.
                  </p>
                </div>

              </div>

              {/* Action Banner */}
              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-600">
                  <strong className="text-stone-900">Document de référence officiel :</strong> Fiche d'Adhésion officielle AMS enregistrée à Bunia.
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSectionTab('simulateur')}
                    className="px-4 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
                  >
                    Ouvrir le simulateur
                  </button>
                  <button
                    onClick={onOpenAdhesion}
                    className="px-5 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors shadow-xs"
                  >
                    Remplir la fiche d'adhésion
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Bottom Assistance Banner */}
        <div className="mt-10 p-6 bg-[#F4F1EA] border border-stone-300 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-serif font-bold text-base text-stone-900">
              Vous avez une situation particulière ou souhaitez un moratoire financier ?
            </h4>
            <p className="text-xs text-stone-600 mt-1 max-w-xl">
              Aux termes de l'Article 4 du Règlement d'Ordre Intérieur (ROI), le Conseil d'Administration de l'AMS peut examiner avec bienveillance toute demande d'arrangement ou d'échéancier adapté pour les membres en difficulté passagère.
            </p>
          </div>
          <button
            onClick={onOpenAdhesion}
            className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md shrink-0 shadow-xs transition-colors cursor-pointer"
          >
            Contacter le Secrétariat
          </button>
        </div>

      </div>
    </section>
  );
};
