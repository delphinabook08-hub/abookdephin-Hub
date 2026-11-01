import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Coins, 
  Check, 
  Copy, 
  Printer, 
  ArrowRight, 
  ShieldCheck, 
  Info, 
  Sparkles, 
  FileText, 
  Percent, 
  HeartHandshake, 
  Calendar, 
  Layers, 
  ChevronDown, 
  ChevronUp,
  RotateCcw,
  BadgeAlert,
  Building2,
  CheckCircle2
} from 'lucide-react';

export interface ActivityBarème {
  id: string;
  code: string;
  title: string;
  category: 'artisanat' | 'agropastoral' | 'services' | 'social' | 'gestion' | 'mecenat';
  baseMonthlyCDF: number;
  articleRef: string;
  description: string;
  matchingDomaine: string;
  suggestedProfession: string;
  iconBg: string;
}

export const ACTIVITIES_DATA: ActivityBarème[] = [
  {
    id: 'couture',
    code: 'g',
    title: 'Coupe, Couture & Confection textile',
    category: 'artisanat',
    baseMonthlyCDF: 2500,
    articleRef: 'Art. 6 (g) des Statuts & Art. 4 du ROI',
    description: "Accès aux ateliers de patronage, machines à coudre et commandes d'uniformes scolaires/professionnels.",
    matchingDomaine: 'Coupe et couture',
    suggestedProfession: 'Couturier / Confectionneur textile',
    iconBg: 'bg-rose-50 border-rose-200 text-rose-800'
  },
  {
    id: 'coiffure',
    code: 'h',
    title: 'Coiffure & Soins esthétiques',
    category: 'artisanat',
    baseMonthlyCDF: 2500,
    articleRef: 'Art. 6 (h) des Statuts & Art. 4 du ROI',
    description: "Formation pratique en salon mixte, kits de stérilisation et incubation de micro-salons de quartier.",
    matchingDomaine: 'Coiffure et esthétique',
    suggestedProfession: 'Coiffeur / Spécialiste esthétique',
    iconBg: 'bg-pink-50 border-pink-200 text-pink-800'
  },
  {
    id: 'jardinage',
    code: 'f',
    title: 'Jardinage & Maraîchage périurbain',
    category: 'agropastoral',
    baseMonthlyCDF: 3500,
    articleRef: 'Art. 6 (f) des Statuts & Art. 4 du ROI',
    description: "Cultures maraîchères de légumes frais à Bunia, pépinières fruitières et techniques de compostage.",
    matchingDomaine: 'Jardinage',
    suggestedProfession: 'Horticulteur / Maraîcher',
    iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-800'
  },
  {
    id: 'agropastoral',
    code: 'b',
    title: 'Agriculture vivrière & Élevage',
    category: 'agropastoral',
    baseMonthlyCDF: 5000,
    articleRef: 'Art. 6 (b) des Statuts & Art. 4 du ROI',
    description: "Champs communautaires, semences améliorées, élevage caprin/porcin/volailles et matériel partagé.",
    matchingDomaine: 'Activités agropastorales',
    suggestedProfession: 'Agriculteur / Éleveur',
    iconBg: 'bg-amber-50 border-amber-200 text-amber-800'
  },
  {
    id: 'transport',
    code: 'd',
    title: 'Transport, Mototaxis & Logistique',
    category: 'services',
    baseMonthlyCDF: 8000,
    articleRef: 'Art. 6 (d) des Statuts & Art. 4 du ROI',
    description: "Réseau mutualisé de transporteurs, sécurité routière, assurance assistance panne et gilets officiels.",
    matchingDomaine: 'Transport',
    suggestedProfession: 'Conducteur / Transporteur logistique',
    iconBg: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  {
    id: 'gardiennage',
    code: 'e',
    title: 'Gardiennage & Sécurité civile',
    category: 'services',
    baseMonthlyCDF: 8000,
    articleRef: 'Art. 6 (e) des Statuts & Art. 4 du ROI',
    description: "Surveillance de concessions et locaux, rondes de nuit, tenues homologuées et matricule de service.",
    matchingDomaine: 'Gardiennage',
    suggestedProfession: 'Agent de surveillance / Gardiennage',
    iconBg: 'bg-slate-100 border-slate-300 text-slate-800'
  },
  {
    id: 'manutention',
    code: 'e-bis',
    title: 'Chargement & Déchargement (Manutention)',
    category: 'services',
    baseMonthlyCDF: 4000,
    articleRef: 'Art. 6 (e) des Statuts & Art. 4 du ROI',
    description: "Équipes organisées sur les dépôts et marchés de Bunia, équipements d'ergonomie et solidarité de quai.",
    matchingDomaine: 'Chargement et déchargement',
    suggestedProfession: 'Manutentionnaire / Agent de quai',
    iconBg: 'bg-amber-50 border-amber-300 text-amber-900'
  },
  {
    id: 'wash',
    code: 'i',
    title: 'Eau, Hygiène & Assainissement (WASH)',
    category: 'social',
    baseMonthlyCDF: 3000,
    articleRef: 'Art. 6 (i) des Statuts & Art. 4 du ROI',
    description: "Gestion participative des bornes fontaines, points d'eau potable et sensibilisation communautaire.",
    matchingDomaine: 'Eau, hygiène et assainissement (WASH)',
    suggestedProfession: 'Technicien WASH / Agent d’hygiène',
    iconBg: 'bg-cyan-50 border-cyan-200 text-cyan-800'
  },
  {
    id: 'environnement',
    code: 'j',
    title: 'Protection de l’Environnement',
    category: 'social',
    baseMonthlyCDF: 3000,
    articleRef: 'Art. 6 (j) des Statuts & Art. 4 du ROI',
    description: "Pépinières de reboisement en Ituri, salongo d'assainissement communal et lutte contre l'érosion.",
    matchingDomaine: 'Protection de l’environnement',
    suggestedProfession: 'Éco-garde / Animateur environnement',
    iconBg: 'bg-green-50 border-green-200 text-green-800'
  },
  {
    id: 'formation',
    code: 'a',
    title: 'Formation & Encadrement jeunesse',
    category: 'social',
    baseMonthlyCDF: 2500,
    articleRef: 'Art. 6 (a) des Statuts & Art. 4 du ROI',
    description: "Modules d'alphabétisation, bureautique, gestion de budget familial et développement du leadership.",
    matchingDomaine: 'Formation et encadrement',
    suggestedProfession: 'Formateur / Animateur jeunesse',
    iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-800'
  },
  {
    id: 'vbg',
    code: 'c',
    title: 'Lutte contre les VBG & Protection',
    category: 'social',
    baseMonthlyCDF: 3000,
    articleRef: 'Art. 6 (c) des Statuts & Art. 24 du ROI',
    description: "Écoute bienveillante et confidentielle, assistance de premier secours et réinsertion économique.",
    matchingDomaine: 'Lutte contre les VBG',
    suggestedProfession: 'Assistant social / Écouteur VBG',
    iconBg: 'bg-purple-50 border-purple-200 text-purple-800'
  },
  {
    id: 'cadre',
    code: 'coord',
    title: 'Cadre de Gestion & Responsable de Pôle',
    category: 'gestion',
    baseMonthlyCDF: 15000,
    articleRef: 'Art. 15-16 des Statuts & Art. 16 du ROI',
    description: "Responsabilité opérationnelle, planification des programmes, encadrement d'équipes et comités.",
    matchingDomaine: 'Formation et encadrement',
    suggestedProfession: 'Coordinateur de pôle / Superviseur',
    iconBg: 'bg-stone-100 border-stone-300 text-stone-900'
  },
  {
    id: 'bienfaiteur',
    code: 'honneur',
    title: 'Membre d’Honneur & Bienfaiteur (Mécène)',
    category: 'mecenat',
    baseMonthlyCDF: 50000,
    articleRef: 'Art. 8 des Statuts & Art. 2-4 du ROI',
    description: "Contribution volontaire de soutien civique permettant de subventionner l'accès aux plus vulnérables.",
    matchingDomaine: 'Formation et encadrement',
    suggestedProfession: 'Partenaire bienfaiteur / Mécène',
    iconBg: 'bg-amber-100 border-amber-300 text-amber-950 font-bold'
  }
];

export type MemberStatusType = 'adherent' | 'actif' | 'effectif' | 'honneur';
export type PeriodicityType = 'mensuel' | 'trimestriel' | 'annuel';

interface MemberStatusOption {
  id: MemberStatusType;
  label: string;
  sublabel: string;
  multiplier: number;
  discountNotice?: string;
  badge: string;
}

const MEMBER_STATUSES: MemberStatusOption[] = [
  {
    id: 'adherent',
    label: 'Membre Adhérent (Apprenant / Vulnérable)',
    sublabel: 'Bénéficiaire d’un pôle d’apprentissage ou femme chef de ménage',
    multiplier: 0.9,
    discountNotice: 'Tarif social solidaire (-10%)',
    badge: 'Statut Social'
  },
  {
    id: 'actif',
    label: 'Membre Actif (Opérateur de terrain)',
    sublabel: 'Pratiquant régulier d’une activité avec plein droit de vote',
    multiplier: 1.0,
    badge: 'Statut Régulier'
  },
  {
    id: 'effectif',
    label: 'Membre Effectif (Cadre / Formateur référent)',
    sublabel: 'Responsable technique de pôle et membre du collège délibérant',
    multiplier: 1.25,
    badge: 'Statut Titulaire'
  },
  {
    id: 'honneur',
    label: 'Membre d’Honneur / Soutien',
    sublabel: 'Personnalité ou bienfaiteur apportant un soutien moral et civique',
    multiplier: 2.0,
    badge: 'Mécénat Civique'
  }
];

const STATUTORY_ADHESION_FEE_CDF = 10000; // Section IV Fiche Adhesion
const EXCHANGE_RATE_CDF_USD = 2800; // 1 USD = 2800 CDF (référence courante Bunia / Ituri)

interface CotisationSimulatorProps {
  onApplyToAdhesionModal?: (params: {
    domaine: string;
    montantFixe: string;
    montantPaye: string;
    solde: string;
    profession: string;
  }) => void;
  onSelectArticleRef?: (articleNum: number, part: 'statuts' | 'roi') => void;
}

export const CotisationSimulator: React.FC<CotisationSimulatorProps> = ({
  onApplyToAdhesionModal,
  onSelectArticleRef
}) => {
  // Simulator state
  const [selectedActivityId, setSelectedActivityId] = useState<string>('couture');
  const [selectedStatus, setSelectedStatus] = useState<MemberStatusType>('actif');
  const [periodicity, setPeriodicity] = useState<PeriodicityType>('trimestriel');
  const [includeSolidarityFund, setIncludeSolidarityFund] = useState<boolean>(true);
  const [includeEquipmentInsurance, setIncludeEquipmentInsurance] = useState<boolean>(false);
  const [currencyDisplay, setCurrencyDisplay] = useState<'CDF' | 'USD' | 'BOTH'>('BOTH');
  const [copyConfirmed, setCopyConfirmed] = useState<boolean>(false);
  const [showLegalGuide, setShowLegalGuide] = useState<boolean>(false);

  // Selected Activity Object
  const currentActivity = useMemo(() => {
    return ACTIVITIES_DATA.find((a) => a.id === selectedActivityId) || ACTIVITIES_DATA[0];
  }, [selectedActivityId]);

  // Selected Member Status
  const currentStatus = useMemo(() => {
    return MEMBER_STATUSES.find((s) => s.id === selectedStatus) || MEMBER_STATUSES[1];
  }, [selectedStatus]);

  // Financial Calculations
  const calculations = useMemo(() => {
    // 1. Base monthly rate tailored to activity & member category
    const adjustedMonthlyCDF = Math.round(currentActivity.baseMonthlyCDF * currentStatus.multiplier);
    const standardAnnualBaseCDF = adjustedMonthlyCDF * 12;

    // 2. Frequency discount calculation (Article 4 ROI incentives)
    let frequencyDiscountPercent = 0;
    if (periodicity === 'trimestriel') {
      frequencyDiscountPercent = 0.05; // 5% discount for quarterly advance
    } else if (periodicity === 'annuel') {
      frequencyDiscountPercent = 0.10; // 10% discount for annual single settlement
    }

    const discountAmountAnnualCDF = Math.round(standardAnnualBaseCDF * frequencyDiscountPercent);
    const netCotisationAnnualCDF = standardAnnualBaseCDF - discountAmountAnnualCDF;

    // 3. Optional Funds
    // Solidarity fund (Article 24 ROI & Article 6l Statuts): 2000 CDF / month
    const solidarityMonthlyCDF = includeSolidarityFund ? 2000 : 0;
    const solidarityAnnualCDF = solidarityMonthlyCDF * 12;

    // Equipment mutuality fund: 1500 CDF / month
    const equipmentMonthlyCDF = includeEquipmentInsurance ? 1500 : 0;
    const equipmentAnnualCDF = equipmentMonthlyCDF * 12;

    // Total Annual Dues
    const totalAnnualCDF = netCotisationAnnualCDF + solidarityAnnualCDF + equipmentAnnualCDF;

    // Installments count
    let installmentsCount = 12;
    if (periodicity === 'trimestriel') installmentsCount = 4;
    if (periodicity === 'annuel') installmentsCount = 1;

    const amountPerInstallmentCDF = Math.round(totalAnnualCDF / installmentsCount);

    // Initial Registration Outlay (Droits d'adhésion fixes 10 000 FC + 1ère échéance de cotisation)
    const initialDueAtRegistrationCDF = STATUTORY_ADHESION_FEE_CDF + amountPerInstallmentCDF;

    // USD conversions
    const totalAnnualUSD = Number((totalAnnualCDF / EXCHANGE_RATE_CDF_USD).toFixed(2));
    const amountPerInstallmentUSD = Number((amountPerInstallmentCDF / EXCHANGE_RATE_CDF_USD).toFixed(2));
    const initialDueAtRegistrationUSD = Number((initialDueAtRegistrationCDF / EXCHANGE_RATE_CDF_USD).toFixed(2));
    const statutoryAdhesionFeeUSD = Number((STATUTORY_ADHESION_FEE_CDF / EXCHANGE_RATE_CDF_USD).toFixed(2));

    return {
      adhesionFeeCDF: STATUTORY_ADHESION_FEE_CDF,
      adhesionFeeUSD: statutoryAdhesionFeeUSD,
      adjustedMonthlyCDF,
      standardAnnualBaseCDF,
      frequencyDiscountPercent: frequencyDiscountPercent * 100,
      discountAmountAnnualCDF,
      netCotisationAnnualCDF,
      solidarityAnnualCDF,
      equipmentAnnualCDF,
      totalAnnualCDF,
      totalAnnualUSD,
      installmentsCount,
      amountPerInstallmentCDF,
      amountPerInstallmentUSD,
      initialDueAtRegistrationCDF,
      initialDueAtRegistrationUSD
    };
  }, [currentActivity, currentStatus, periodicity, includeSolidarityFund, includeEquipmentInsurance]);

  // Copy Summary to Clipboard
  const handleCopySummary = () => {
    const text = `================================================
SIMULATION OFFICIELLE DE COTISATION — AMS BUNIA
Conforme au Règlement d'Ordre Intérieur (ROI - Art. 4, 14 & 20)
================================================
Activité choisie : ${currentActivity.title}
Catégorie du membre : ${currentStatus.label}
Périodicité de versement : ${periodicity.toUpperCase()} (${calculations.installmentsCount} échéance(s)/an)

DÉTAILS FINANCIERS :
1. Droit d'adhésion unique (Section IV Fiche) : ${calculations.adhesionFeeCDF.toLocaleString('fr-FR')} FC (~${calculations.adhesionFeeUSD} $)
2. Cotisation annuelle nette d'activité : ${calculations.netCotisationAnnualCDF.toLocaleString('fr-FR')} FC
${calculations.frequencyDiscountPercent > 0 ? `   (Remise périodicité de ${calculations.frequencyDiscountPercent}% appliquée : -${calculations.discountAmountAnnualCDF.toLocaleString('fr-FR')} FC)` : ''}
${includeSolidarityFund ? `3. Caisse de Solidarité & Secours mutuel (Art. 24) : +${calculations.solidarityAnnualCDF.toLocaleString('fr-FR')} FC/an` : ''}
${includeEquipmentInsurance ? `4. Assurance outillage partagé : +${calculations.equipmentAnnualCDF.toLocaleString('fr-FR')} FC/an` : ''}

TOTAL ANNUEL ASSOCIATIF : ${calculations.totalAnnualCDF.toLocaleString('fr-FR')} FC (~${calculations.totalAnnualUSD} $)
Versement par échéance : ${calculations.amountPerInstallmentCDF.toLocaleString('fr-FR')} FC (${periodicity})
MONTANT INITIAL À L'ADHÉSION (Droit + 1ère tranche) : ${calculations.initialDueAtRegistrationCDF.toLocaleString('fr-FR')} FC (~${calculations.initialDueAtRegistrationUSD} $)

Dépôt sur compte bancaire officiel AMS Bunia avec reçu à souche.
Compte sécurisé par double signature du Trésorier et du Président (ROI Art. 14 et 20).
================================================`;

    navigator.clipboard.writeText(text).then(() => {
      setCopyConfirmed(true);
      setTimeout(() => setCopyConfirmed(false), 3000);
    });
  };

  // Quick print of simulation quote
  const handlePrintQuote = () => {
    window.print();
  };

  // Transfer simulation values to official adhesion modal
  const handleApplyToModal = () => {
    if (onApplyToAdhesionModal) {
      onApplyToAdhesionModal({
        domaine: currentActivity.matchingDomaine,
        montantFixe: STATUTORY_ADHESION_FEE_CDF.toString(),
        montantPaye: calculations.initialDueAtRegistrationCDF.toString(),
        solde: '0',
        profession: currentActivity.suggestedProfession
      });
    }
  };

  const formatMoney = (cdf: number, usd: number) => {
    if (currencyDisplay === 'CDF') {
      return `${cdf.toLocaleString('fr-FR')} FC`;
    }
    if (currencyDisplay === 'USD') {
      return `${usd.toFixed(2)} $`;
    }
    return (
      <span>
        <strong className="text-stone-900 font-mono">{cdf.toLocaleString('fr-FR')} FC</strong>
        <span className="text-stone-500 font-normal text-xs ml-1.5">(~{usd.toFixed(2)} $)</span>
      </span>
    );
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden my-6">
      
      {/* Simulator Top Header */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 p-5 sm:p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-amber-400/20 border border-amber-400/30 rounded-lg text-amber-300 shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-amber-400/20 text-amber-300 text-[10px] font-mono uppercase font-bold tracking-wider rounded border border-amber-400/30">
                  Outil Officiel ROI Art. 4
                </span>
                <span className="text-blue-200/80 text-xs hidden sm:inline">
                  Barèmes statutaires votés par l'AG
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight">
                Simulateur Interactif de Cotisations selon l'Activité
              </h3>
              <p className="text-xs text-blue-100/90 mt-0.5">
                Calculez en toute transparence vos cotisations annuelles, vos droits d'adhésion et vos échéances à Bunia (Ituri).
              </p>
            </div>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1.5 self-start md:self-auto bg-blue-900/60 p-1 rounded-lg border border-blue-700/50 text-xs">
            <span className="text-[11px] text-blue-200 px-2 font-medium">Affichage :</span>
            <button
              onClick={() => setCurrencyDisplay('BOTH')}
              className={`px-2.5 py-1 rounded font-semibold text-xs transition-colors ${
                currencyDisplay === 'BOTH'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              FC & USD
            </button>
            <button
              onClick={() => setCurrencyDisplay('CDF')}
              className={`px-2.5 py-1 rounded font-semibold text-xs transition-colors ${
                currencyDisplay === 'CDF'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              FC (CDF)
            </button>
            <button
              onClick={() => setCurrencyDisplay('USD')}
              className={`px-2.5 py-1 rounded font-semibold text-xs transition-colors ${
                currencyDisplay === 'USD'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Parameters on Left, Live Financial Statement on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
        
        {/* LEFT COLUMN: PARAMETERS (7 cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 space-y-6 bg-[#FCFBF8]">
          
          {/* STEP 1: SELECT ACTIVITY */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white text-[11px] inline-flex items-center justify-center font-mono">1</span>
                <span>Pôle d'activité ou filière technique :</span>
              </label>
              <span className="text-[11px] text-stone-500 font-mono">
                {ACTIVITIES_DATA.length} filières disponibles
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto p-1 border border-stone-200 rounded-lg bg-white">
              {ACTIVITIES_DATA.map((act) => {
                const isSelected = act.id === selectedActivityId;
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => setSelectedActivityId(act.id)}
                    className={`p-2.5 text-left rounded-md border transition-all text-xs flex flex-col justify-between gap-1 cursor-pointer ${
                      isSelected
                        ? 'border-blue-900 bg-blue-50/80 ring-1 ring-blue-900'
                        : 'border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-semibold text-stone-900 leading-snug">
                        {act.title}
                      </span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border shrink-0 ${act.iconBg}`}>
                        Art. {act.code}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                      <span>Base indicative :</span>
                      <span className="font-mono font-bold text-stone-800">
                        {act.baseMonthlyCDF.toLocaleString('fr-FR')} FC/mois
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Activity Details Pill */}
            <div className="mt-2.5 p-3 bg-amber-50/60 border border-amber-200 rounded-md text-xs text-amber-950 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-stone-900">{currentActivity.title} :</strong>{' '}
                <span className="text-stone-700">{currentActivity.description}</span>
                <span className="block mt-1 font-mono text-[11px] text-amber-900">
                  Référence juridique : {currentActivity.articleRef}
                </span>
              </div>
            </div>
          </div>

          {/* STEP 2: MEMBER CATEGORY */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white text-[11px] inline-flex items-center justify-center font-mono">2</span>
                <span>Catégorie statutaire du membre (Art. 8 Statuts & Art. 2 ROI) :</span>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {MEMBER_STATUSES.map((status) => {
                const isSelected = status.id === selectedStatus;
                return (
                  <button
                    key={status.id}
                    type="button"
                    onClick={() => setSelectedStatus(status.id)}
                    className={`p-3 text-left rounded-lg border transition-all text-xs cursor-pointer ${
                      isSelected
                        ? 'border-blue-900 bg-blue-50/80 ring-1 ring-blue-900'
                        : 'border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-bold text-stone-900">
                        {status.label.split('(')[0].trim()}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                        {status.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed">
                      {status.sublabel}
                    </p>
                    {status.discountNotice && (
                      <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {status.discountNotice}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3: PAYMENT PERIODICITY */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white text-[11px] inline-flex items-center justify-center font-mono">3</span>
                <span>Périodicité de versement souhaitée (Art. 4 ROI) :</span>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPeriodicity('mensuel')}
                className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                  periodicity === 'mensuel'
                    ? 'border-blue-900 bg-blue-50/80 ring-1 ring-blue-900'
                    : 'border-stone-200 bg-white hover:bg-stone-50'
                }`}
              >
                <div className="font-bold text-xs text-stone-900">Mensuelle</div>
                <div className="text-[11px] text-stone-500 mt-0.5">12 versements / an</div>
                <div className="text-[10px] text-stone-600 mt-2 font-mono">Paiement au mois le mois</div>
              </button>

              <button
                type="button"
                onClick={() => setPeriodicity('trimestriel')}
                className={`p-3 rounded-lg border text-left cursor-pointer transition-all relative ${
                  periodicity === 'trimestriel'
                    ? 'border-blue-900 bg-blue-50/80 ring-1 ring-blue-900'
                    : 'border-stone-200 bg-white hover:bg-stone-50'
                }`}
              >
                <span className="absolute top-2 right-2 text-[10px] font-mono font-bold text-amber-800 bg-amber-100 px-1 rounded border border-amber-300">
                  -5% remise
                </span>
                <div className="font-bold text-xs text-stone-900">Trimestrielle</div>
                <div className="text-[11px] text-stone-500 mt-0.5">4 versements / an</div>
                <div className="text-[10px] text-amber-800 mt-2 font-semibold">Recommandé</div>
              </button>

              <button
                type="button"
                onClick={() => setPeriodicity('annuel')}
                className={`p-3 rounded-lg border text-left cursor-pointer transition-all relative ${
                  periodicity === 'annuel'
                    ? 'border-blue-900 bg-blue-50/80 ring-1 ring-blue-900'
                    : 'border-stone-200 bg-white hover:bg-stone-50'
                }`}
              >
                <span className="absolute top-2 right-2 text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-1 rounded border border-emerald-300">
                  -10% remise
                </span>
                <div className="font-bold text-xs text-stone-900">Annuelle unique</div>
                <div className="text-[11px] text-stone-500 mt-0.5">1 versement unique</div>
                <div className="text-[10px] text-emerald-800 mt-2 font-semibold">Remise maximale</div>
              </button>
            </div>
          </div>

          {/* STEP 4: OPTIONAL SOLIDARITY FUNDS */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white text-[11px] inline-flex items-center justify-center font-mono">4</span>
                <span>Contributions de Solidarité & Mutuelle (Optionnelles) :</span>
              </label>
            </div>

            <div className="space-y-2">
              {/* Caisse de Secours Social */}
              <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors text-xs ${
                includeSolidarityFund
                  ? 'bg-amber-50/70 border-amber-300'
                  : 'bg-white border-stone-200 hover:bg-stone-50'
              }`}>
                <input
                  type="checkbox"
                  checked={includeSolidarityFund}
                  onChange={(e) => setIncludeSolidarityFund(e.target.checked)}
                  className="mt-0.5 rounded border-stone-300 text-blue-900 focus:ring-blue-900"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900">
                      Caisse de Secours & Solidarité Mutuelle (Art. 24 ROI & Art. 6l Statuts)
                    </span>
                    <span className="font-mono text-stone-800 font-bold shrink-0">
                      +2 000 FC/mois
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                    Assistance mutuelle d'urgence en province de l'Ituri (frais funéraires, secours maladie grave, hospitalisation d'un membre ou ayant droit direct).
                  </p>
                </div>
              </label>

              {/* Assurance Outillage / Matériel */}
              <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors text-xs ${
                includeEquipmentInsurance
                  ? 'bg-blue-50/70 border-blue-300'
                  : 'bg-white border-stone-200 hover:bg-stone-50'
              }`}>
                <input
                  type="checkbox"
                  checked={includeEquipmentInsurance}
                  onChange={(e) => setIncludeEquipmentInsurance(e.target.checked)}
                  className="mt-0.5 rounded border-stone-300 text-blue-900 focus:ring-blue-900"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900">
                      Fonds d'Entretien du Matériel Collectif & Outillage de Pôle
                    </span>
                    <span className="font-mono text-stone-800 font-bold shrink-0">
                      +1 500 FC/mois
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                    Participation au remplacement et à l'affûtage des outils, maintenance préventive des machines à coudre, motopompes et équipements de sécurité.
                  </p>
                </div>
              </label>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: FINANCIAL STATEMENT & RECEIPT (5 cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-[#FAF9F5] flex flex-col justify-between">
          
          <div className="space-y-5">
            
            {/* Simulation Header */}
            <div className="border-b border-stone-300 pb-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 font-bold block mb-1">
                Décompte Prévisionnel Officiel
              </span>
              <h4 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                Simulation de Cotisation Annuelle
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                Établie selon le barème du Règlement d'Ordre Intérieur (AMS Bunia).
              </p>
            </div>

            {/* Line-by-line Financial Breakdown */}
            <div className="space-y-2.5 text-xs">
              
              {/* Line 1: Frais d'Adhésion Fixes */}
              <div className="flex items-center justify-between p-2.5 bg-white border border-stone-200 rounded">
                <div>
                  <span className="font-semibold text-stone-900 block">
                    1. Droit d'adhésion unique (Fixe)
                  </span>
                  <span className="text-[11px] text-stone-500">
                    Fiche d'adhésion Section IV (Payable 1 fois à l'admission)
                  </span>
                </div>
                <div className="text-right">
                  {formatMoney(calculations.adhesionFeeCDF, calculations.adhesionFeeUSD)}
                </div>
              </div>

              {/* Line 2: Cotisation Annuelle Brute de l'activité */}
              <div className="flex items-center justify-between p-2.5 bg-white border border-stone-200 rounded">
                <div>
                  <span className="font-semibold text-stone-900 block">
                    2. Cotisation annuelle brute d'activité
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {currentActivity.title} ({calculations.adjustedMonthlyCDF.toLocaleString('fr-FR')} FC/mois × 12)
                  </span>
                </div>
                <div className="text-right font-mono font-medium text-stone-800">
                  {calculations.standardAnnualBaseCDF.toLocaleString('fr-FR')} FC
                </div>
              </div>

              {/* Line 3: Remise Périodicité (si applicable) */}
              {calculations.discountAmountAnnualCDF > 0 && (
                <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded text-emerald-900">
                  <div>
                    <span className="font-semibold block">
                      3. Remise versement {periodicity} ({calculations.frequencyDiscountPercent}%)
                    </span>
                    <span className="text-[11px] text-emerald-700">
                      Avantage trésorerie voté par l'AG (Art. 4 ROI)
                    </span>
                  </div>
                  <div className="text-right font-mono font-bold text-emerald-800">
                    -{calculations.discountAmountAnnualCDF.toLocaleString('fr-FR')} FC
                  </div>
                </div>
              )}

              {/* Line 4: Caisse Solidarité (si cochée) */}
              {includeSolidarityFund && (
                <div className="flex items-center justify-between p-2.5 bg-amber-50 border border-amber-200 rounded text-amber-950">
                  <div>
                    <span className="font-semibold block">
                      4. Caisse de Solidarité & Secours mutuel
                    </span>
                    <span className="text-[11px] text-amber-800">
                      2 000 FC/mois × 12 mois (Art. 24 ROI)
                    </span>
                  </div>
                  <div className="text-right font-mono font-semibold">
                    +{calculations.solidarityAnnualCDF.toLocaleString('fr-FR')} FC
                  </div>
                </div>
              )}

              {/* Line 5: Assurance Matériel (si cochée) */}
              {includeEquipmentInsurance && (
                <div className="flex items-center justify-between p-2.5 bg-blue-50 border border-blue-200 rounded text-blue-950">
                  <div>
                    <span className="font-semibold block">
                      5. Fonds outillage collectif de pôle
                    </span>
                    <span className="text-[11px] text-blue-800">
                      1 500 FC/mois × 12 mois
                    </span>
                  </div>
                  <div className="text-right font-mono font-semibold">
                    +{calculations.equipmentAnnualCDF.toLocaleString('fr-FR')} FC
                  </div>
                </div>
              )}

            </div>

            {/* TOTAL CARDS */}
            <div className="space-y-3 pt-2">
              
              {/* Grand Total Annual */}
              <div className="p-4 bg-stone-900 text-white rounded-lg shadow-sm border border-stone-800">
                <div className="flex items-center justify-between text-xs text-stone-300 mb-1">
                  <span className="uppercase tracking-wider font-semibold font-mono">
                    Total Cotisation Annuelle Nette :
                  </span>
                  <span className="px-2 py-0.5 rounded bg-stone-800 text-amber-300 text-[10px] font-mono">
                    {periodicity.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">
                    {calculations.totalAnnualCDF.toLocaleString('fr-FR')} FC
                  </span>
                  <span className="text-sm sm:text-base font-mono text-stone-300">
                    ~ {calculations.totalAnnualUSD} USD
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-stone-800 flex items-center justify-between text-xs text-stone-300">
                  <span>Montant par versement ({calculations.installmentsCount}× / an) :</span>
                  <span className="font-mono font-bold text-white">
                    {calculations.amountPerInstallmentCDF.toLocaleString('fr-FR')} FC
                  </span>
                </div>
              </div>

              {/* Outlay at Registration */}
              <div className="p-3.5 bg-blue-50 border border-blue-300 rounded-lg text-xs text-blue-950">
                <div className="flex items-center justify-between">
                  <div>
                    <strong className="block text-stone-900 font-bold">
                      Montant à verser à l'adhésion :
                    </strong>
                    <span className="text-[11px] text-stone-600">
                      Droit d'adhésion (10 000 FC) + 1ère échéance de cotisation
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-mono font-bold text-blue-900 block">
                      {calculations.initialDueAtRegistrationCDF.toLocaleString('fr-FR')} FC
                    </span>
                    <span className="text-[11px] text-stone-500 font-mono">
                      ~ {calculations.initialDueAtRegistrationUSD} USD
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Statutory Security & Transparency Guarantee */}
            <div className="p-3 bg-white border border-stone-200 rounded-md text-[11px] text-stone-600 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-stone-800">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>Garanties de transparence financière (ROI Art. 14, 19 & 20) :</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-stone-600">
                <li>Versements sur compte bancaire officiel de l'AMS avec reçu numéroté à souche.</li>
                <li>Règle stricte de double signature du Trésorier et du Président pour toute dépense.</li>
                <li>Facilité de paiement ou moratoire possible sur requête motivée auprès du CA (Art. 4).</li>
              </ul>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-5 pt-4 border-t border-stone-300 space-y-2.5">
            
            {/* Primary Action: Transfer directly to official adhesion modal */}
            {onApplyToAdhesionModal && (
              <button
                type="button"
                onClick={handleApplyToModal}
                className="w-full py-2.5 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Appliquer cette simulation à ma Fiche d'Adhésion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Secondary Utility Actions: Copy & Print */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={handleCopySummary}
                className="py-2 px-3 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-md font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="Copier le détail de la simulation pour enregistrement"
              >
                {copyConfirmed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="text-emerald-700 font-bold">Copié !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-600" />
                    <span>Copier devis</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handlePrintQuote}
                className="py-2 px-3 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-md font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="Imprimer ce justificatif de simulation"
              >
                <Printer className="w-3.5 h-3.5 text-stone-600" />
                <span>Imprimer devis</span>
              </button>
            </div>

            {/* Optional Legal Guide Accordion Toggle */}
            <button
              type="button"
              onClick={() => setShowLegalGuide(!showLegalGuide)}
              className="w-full py-1.5 text-center text-[11px] font-semibold text-stone-600 hover:text-stone-900 flex items-center justify-center gap-1"
            >
              <span>{showLegalGuide ? 'Masquer' : 'Afficher'} les bases légales statutaires (Articles du ROI)</span>
              {showLegalGuide ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {showLegalGuide && (
              <div className="p-3 bg-stone-100/90 border border-stone-200 rounded text-[11px] text-stone-700 space-y-1.5 animate-fadeIn">
                <p>
                  <strong>Article 4 du ROI (Cotisations) :</strong> Le montant, la périodicité et les modalités de paiement des cotisations sont arrêtés par l'Assemblée Générale. Une difficulté financière peut donner lieu à un rééchelonnement amiable accordé par le Conseil d'Administration.
                </p>
                <p>
                  <strong>Article 14 du ROI (Trésorerie) :</strong> Le Trésorier tient la comptabilité rigoureuse, délivre les reçus officiels et applique la double validation bancaire avec le Président.
                </p>
                <p>
                  <strong>Article 20 du ROI (Gestion bancaire) :</strong> Tous les fonds sont obligatoirement déposés sur le compte bancaire associatif. Tout retrait exige l'accord conjoint du Trésorier et du Président.
                </p>
                {onSelectArticleRef && (
                  <div className="pt-1 flex gap-2">
                    <button
                      onClick={() => onSelectArticleRef(4, 'roi')}
                      className="text-blue-900 underline font-semibold hover:text-blue-950"
                    >
                      Voir Article 4 ROI
                    </button>
                    <span>·</span>
                    <button
                      onClick={() => onSelectArticleRef(14, 'roi')}
                      className="text-blue-900 underline font-semibold hover:text-blue-950"
                    >
                      Voir Article 14 ROI
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
