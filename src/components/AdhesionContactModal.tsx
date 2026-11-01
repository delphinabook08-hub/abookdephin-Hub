import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  FileText, 
  Download, 
  Printer, 
  Edit3, 
  CheckSquare, 
  Square,
  AlertCircle,
  Calculator
} from 'lucide-react';
import { OfficialAdhesionSheet, AdhesionFormData, ALL_DOMAINES } from './OfficialAdhesionSheet';

interface AdhesionContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    domaine?: string;
    montantFixe?: string;
    montantPaye?: string;
    solde?: string;
    profession?: string;
  } | null;
  onSelectArticleRef?: (articleNum: number, part: 'statuts' | 'roi') => void;
}

export const AdhesionContactModal: React.FC<AdhesionContactModalProps> = ({ 
  isOpen, 
  onClose,
  prefillData,
  onSelectArticleRef
}) => {
  const [activeTab, setActiveTab] = useState<'formulaire' | 'apercu' | 'ethique'>('formulaire');
  
  // Official form state matching Fiche_Adhesion_AMS_2c1be05f.pdf
  const [formData, setFormData] = useState<AdhesionFormData>({
    adhesionNumber: `AMS-2026-IT${Math.floor(1000 + Math.random() * 9000)}`,
    adhesionDate: new Date().toLocaleDateString('fr-FR'),
    photoUrl: '',
    nom: '',
    postnom: '',
    prenom: '',
    sexe: 'Masculin',
    dateLieuNaissance: '',
    etatCivil: 'Célibataire',
    etatCivilAutre: '',
    nationalite: 'Congolaise',
    adressePhysique: '',
    territoireCommuneQuartier: 'Bunia',
    telephone: '',
    profession: '',
    niveauEtudes: 'Secondaire / Humanités',
    domainesInteret: ['Formation et encadrement', 'Activités agropastorales'],
    autreDomaine: '',
    nomEngagement: '',
    montantFixe: '10000',
    montantPaye: '10000',
    solde: '0',
    numeroRecu: `RC-${Math.floor(100000 + Math.random() * 900000)}`,
    faitA: 'Bunia',
    faitLe: new Date().toLocaleDateString('fr-FR'),
    signatureMembre: '',
    decisionComite: 'attente',
    observationsComite: "Dossier d'adhésion en ligne transmis pour examen et inscription au registre des membres par le Conseil d'Administration."
  });

  const [commitmentAccepted, setCommitmentAccepted] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

  // Ethics & VBG form state
  const [complaintType, setComplaintType] = useState<'orientation_vbg' | 'reclamation' | 'partenariat' | 'autre'>('orientation_vbg');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [contactInfo, setContactInfo] = useState('');
  const [ethicSubmitted, setEthicSubmitted] = useState(false);

  // Sync prefilled data from simulation or parent
  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        domainesInteret: prefillData.domaine
          ? (prev.domainesInteret.includes(prefillData.domaine)
              ? prev.domainesInteret
              : [...prev.domainesInteret, prefillData.domaine])
          : prev.domainesInteret,
        montantFixe: prefillData.montantFixe || prev.montantFixe,
        montantPaye: prefillData.montantPaye || prev.montantPaye,
        solde: prefillData.solde || prev.solde,
        profession: prefillData.profession || prev.profession
      }));
      setActiveTab('formulaire');
    }
  }, [prefillData]);

  if (!isOpen) return null;

  const handleCheckboxChange = (domaine: string) => {
    setFormData((prev) => {
      const exists = prev.domainesInteret.includes(domaine);
      return {
        ...prev,
        domainesInteret: exists
          ? prev.domainesInteret.filter((d) => d !== domaine)
          : [...prev.domainesInteret, domaine]
      };
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commitmentAccepted) return;
    setIsSubmittedSuccess(true);
    setActiveTab('apercu');
  };

  const handleEthicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEthicSubmitted(true);
  };

  const fullNameDisplay = `${formData.nom} ${formData.postnom} ${formData.prenom}`.trim();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static print:inset-auto">
      
      <div className="relative bg-[#FAF9F5] border border-stone-300 rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden my-6 print:border-none print:shadow-none print:my-0 print:max-w-none">
        
        {/* Top Header of Modal (hidden when printing) */}
        <div className="no-print p-4 sm:p-5 bg-white border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg"
              alt="Logo AMS"
              className="w-11 h-11 object-contain shrink-0 drop-shadow-xs"
            />
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
                Fiche d’Adhésion Officielle d’un Membre
              </h3>
              <p className="text-xs text-stone-600">
                Association de Multi-Services (AMS) · Siège social : Bunia, RDC
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/assets/aistudio/Fiche_Adhesion_AMS_2c1be05f.pdf"
              download="Fiche_Adhesion_AMS_Officielle.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded transition-colors"
              title="Télécharger le document PDF original officiel"
            >
              <Download className="w-3.5 h-3.5 text-stone-600" />
              <span>Télécharger PDF Vierge</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-800 rounded-md hover:bg-stone-100 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selection (hidden when printing) */}
        <div className="no-print flex border-b border-stone-200 bg-stone-100/80 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('formulaire')}
            className={`flex-1 py-3 px-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'formulaire'
                ? 'border-blue-900 text-blue-950 bg-[#FAF9F5]'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5 shrink-0" />
            <span>1. Remplir la Fiche</span>
          </button>

          <button
            onClick={() => setActiveTab('apercu')}
            className={`flex-1 py-3 px-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'apercu'
                ? 'border-blue-900 text-blue-950 bg-[#FAF9F5]'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span>2. Fiche Officielle A4 (Impression / PDF)</span>
          </button>

          <button
            onClick={() => setActiveTab('ethique')}
            className={`flex-1 py-3 px-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'ethique'
                ? 'border-purple-800 text-purple-900 bg-[#FAF9F5]'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>3. Guichet Éthique & VBG</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 max-h-[78vh] overflow-y-auto">
          
          {/* TAB 1: FORMULAIRE EN LIGNE */}
          {activeTab === 'formulaire' && (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Info banner */}
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-950 leading-relaxed font-sans flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <strong>Formulaire officiel conforme au document AMS :</strong> Complétez ce formulaire pour générer automatiquement votre fiche d'adhésion nominative certifiée à imprimer ou conserver.
                </div>
                <a
                  href="/assets/aistudio/Fiche_Adhesion_AMS_2c1be05f.pdf"
                  download="Fiche_Adhesion_AMS_2c1be05f.pdf"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-900 underline whitespace-nowrap"
                >
                  <Download className="w-3 h-3" />
                  <span>Modèle PDF vierge</span>
                </a>
              </div>

              {/* Dossier Header Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white border border-stone-200 rounded-lg">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">
                    N° d’adhésion (Attribué automatiquement)
                  </label>
                  <input
                    type="text"
                    value={formData.adhesionNumber}
                    onChange={(e) => setFormData({ ...formData, adhesionNumber: e.target.value })}
                    className="w-full px-3 py-1.5 bg-stone-100 border border-stone-300 rounded font-mono text-xs font-bold text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">
                    Date de la demande
                  </label>
                  <input
                    type="text"
                    value={formData.adhesionDate}
                    onChange={(e) => setFormData({ ...formData, adhesionDate: e.target.value })}
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900"
                  />
                </div>
              </div>

              {/* Section I: IDENTIFICATION DU MEMBRE */}
              <div className="p-4 sm:p-5 bg-white border border-stone-200 rounded-lg space-y-4">
                <div className="border-b border-stone-200 pb-2">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-900">
                    I. IDENTIFICATION DU MEMBRE
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value.toUpperCase() })}
                      placeholder="Ex : KASEREKA"
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Postnom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postnom}
                      onChange={(e) => setFormData({ ...formData, postnom: e.target.value })}
                      placeholder="Ex : MBUSA"
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      placeholder="Ex : Jean-Paul"
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Sexe *
                    </label>
                    <select
                      value={formData.sexe}
                      onChange={(e) => setFormData({ ...formData, sexe: e.target.value as any })}
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    >
                      <option value="Masculin">Masculin</option>
                      <option value="Féminin">Féminin</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      État civil *
                    </label>
                    <select
                      value={formData.etatCivil}
                      onChange={(e) => setFormData({ ...formData, etatCivil: e.target.value as any })}
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    >
                      <option value="Célibataire">Célibataire</option>
                      <option value="Marié(e)">Marié(e)</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nationalité *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nationalite}
                      onChange={(e) => setFormData({ ...formData, nationalite: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Date et lieu de naissance *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.dateLieuNaissance}
                    onChange={(e) => setFormData({ ...formData, dateLieuNaissance: e.target.value })}
                    placeholder="Ex : Le 14/08/1994 à Bunia"
                    className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Adresse physique de résidence *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.adressePhysique}
                      onChange={(e) => setFormData({ ...formData, adressePhysique: e.target.value })}
                      placeholder="Ex : Av. de la Libération, N° 14"
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Territoire / Commune / Quartier *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.territoireCommuneQuartier}
                      onChange={(e) => setFormData({ ...formData, territoireCommuneQuartier: e.target.value })}
                      placeholder="Ex : Ville de Bunia / C. Mbunya / Q. Mudzi-Pela"
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Téléphone (Airtel, Vodacom, Orange) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      placeholder="+243 ..."
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Profession / occupation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      placeholder="Ex : Agronome, Enseignant, Commerçant, Couturière..."
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Niveau d’études
                    </label>
                    <select
                      value={formData.niveauEtudes}
                      onChange={(e) => setFormData({ ...formData, niveauEtudes: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    >
                      <option value="Primaire">Primaire</option>
                      <option value="Secondaire / Humanités">Secondaire / Humanités</option>
                      <option value="Graduat / Baccalauréat">Graduat / Baccalauréat</option>
                      <option value="Licence / Master">Licence / Master</option>
                      <option value="Autre / Formation professionnelle">Autre / Formation pro</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section II: DOMAINE(S) D'INTÉRÊT */}
              <div className="p-4 sm:p-5 bg-white border border-stone-200 rounded-lg space-y-3">
                <div className="border-b border-stone-200 pb-2 flex items-center justify-between">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-900">
                    II. DOMAINE(S) D’INTÉRÊT (Sélectionnez les secteurs de votre choix)
                  </h4>
                  <span className="text-[11px] text-stone-500 font-mono">
                    {formData.domainesInteret.length} sélectionné(s)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
                  {ALL_DOMAINES.map((domaine) => {
                    const isChecked = formData.domainesInteret.includes(domaine);
                    return (
                      <label
                        key={domaine}
                        className={`flex items-center gap-2 p-2 rounded border cursor-pointer text-xs transition-colors ${
                          isChecked
                            ? 'bg-blue-50/70 border-blue-900 text-blue-950 font-medium'
                            : 'bg-[#FAF9F5] border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(domaine)}
                          className="rounded border-stone-300 text-blue-900 focus:ring-blue-900"
                        />
                        <span>{domaine}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Autres domaines d'intérêt particuliers :
                  </label>
                  <input
                    type="text"
                    value={formData.autreDomaine}
                    onChange={(e) => setFormData({ ...formData, autreDomaine: e.target.value })}
                    placeholder="Précisez tout autre domaine..."
                    className="w-full px-3 py-1.5 bg-[#FAF9F5] border border-stone-300 rounded text-xs text-stone-900"
                  />
                </div>
              </div>

              {/* Section III: ENGAGEMENT DU MEMBRE */}
              <div className="p-4 sm:p-5 bg-white border border-stone-200 rounded-lg space-y-3">
                <div className="border-b border-stone-200 pb-2">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-900">
                    III. ENGAGEMENT SOLENNEL DU MEMBRE
                  </h4>
                </div>

                <div className="p-4 bg-[#FAF9F5] border border-stone-300 rounded-md font-serif text-xs leading-relaxed text-stone-800 text-justify">
                  <p className="mb-2">
                    Je soussigné(e),{' '}
                    <strong>
                      {fullNameDisplay || '....................................................................'}
                    </strong>
                    , sollicite mon adhésion à l’AMS.
                  </p>
                  <p>
                    Je m’engage à respecter les statuts et le règlement d’ordre intérieur (ROI), les dirigeants et les autres membres, à participer aux réunions et activités, à contribuer aux objectifs de l’association et à respecter les obligations financières régulièrement établies par les organes compétents. Je certifie l’exactitude des informations fournies.
                  </p>
                </div>

                <label className="flex items-start gap-2.5 text-xs text-stone-800 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    required
                    checked={commitmentAccepted}
                    onChange={(e) => setCommitmentAccepted(e.target.checked)}
                    className="mt-0.5 rounded border-stone-300 text-blue-900 focus:ring-blue-900"
                  />
                  <span>
                    <strong>J'accepte et signe cet engagement solennel</strong> conformément aux Statuts Constitutifs et au Règlement d'Ordre Intérieur (ROI) de l'AMS Bunia.
                  </span>
                </label>
              </div>

              {/* Section IV & V: FRAIS & VALIDATION */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-5 bg-white border border-stone-200 rounded-lg">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-900">
                      IV. FRAIS D’ADHÉSION & COTISATION (FC)
                    </h4>
                    <span className="text-[10px] font-mono uppercase bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-semibold">
                      Barème ROI Art. 4
                    </span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <label className="block text-[11px] text-stone-600 mb-0.5">
                        Montant statutaire fixé (FC) :
                      </label>
                      <input
                        type="number"
                        value={formData.montantFixe}
                        onChange={(e) => {
                          const fixe = Number(e.target.value) || 0;
                          const paye = Number(formData.montantPaye) || 0;
                          setFormData({
                            ...formData,
                            montantFixe: e.target.value,
                            solde: String(Math.max(0, fixe - paye))
                          });
                        }}
                        className="w-full px-2.5 py-1.5 bg-[#FAF9F5] border border-stone-300 rounded font-mono font-bold text-xs text-stone-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-600 mb-0.5">
                        Montant provisionné / versé (FC) :
                      </label>
                      <input
                        type="number"
                        value={formData.montantPaye}
                        onChange={(e) => {
                          const paye = Number(e.target.value) || 0;
                          const fixe = Number(formData.montantFixe) || 0;
                          setFormData({
                            ...formData,
                            montantPaye: e.target.value,
                            solde: String(Math.max(0, fixe - paye))
                          });
                        }}
                        className="w-full px-2.5 py-1.5 bg-[#FAF9F5] border border-stone-300 rounded font-mono font-bold text-xs text-emerald-800"
                      />
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-stone-200 text-stone-700">
                      <span className="font-medium">Solde restant à régulariser :</span>
                      <span className="font-mono font-bold text-xs text-stone-900">{formData.solde} FC</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-900 mb-2">
                    V. VALIDATION & SIGNATURE
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-stone-600">Fait à Bunia, le :</span>{' '}
                      <span className="font-medium">{formData.faitLe}</span>
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-600 mb-1">
                        Signature / Paraphe numérique du membre :
                      </label>
                      <input
                        type="text"
                        value={formData.signatureMembre || fullNameDisplay}
                        onChange={(e) => setFormData({ ...formData, signatureMembre: e.target.value })}
                        placeholder="Tapez votre nom complet pour signer"
                        className="w-full px-3 py-1.5 bg-[#FAF9F5] border border-stone-300 rounded font-serif italic text-blue-900 text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200">
                <span className="text-xs text-stone-500 font-sans">
                  * Tous les champs avec astérisque sont requis pour la recevabilité du dossier.
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab('apercu')}
                    className="px-4 py-2 text-xs font-medium text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded transition-colors"
                  >
                    Voir l'aperçu A4
                  </button>

                  <button
                    type="submit"
                    disabled={!commitmentAccepted}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-md shadow-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-300" />
                    <span>Valider & Générer ma Fiche Officielle</span>
                  </button>
                </div>
              </div>

            </form>
          )}

          {/* TAB 2: APERÇU ET IMPRESSION DE LA FICHE OFFICIELLE */}
          {activeTab === 'apercu' && (
            <div>
              {isSubmittedSuccess && (
                <div className="no-print mb-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between text-xs text-emerald-950">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span>
                      <strong>Votre dossier d'adhésion en ligne a été validé avec succès !</strong> Votre fiche officielle est générée ci-dessous. Vous pouvez l'imprimer pour archivage ou dépôt au siège de Bunia.
                    </span>
                  </div>
                </div>
              )}

              <OfficialAdhesionSheet
                data={formData}
                onBackToEdit={() => setActiveTab('formulaire')}
                onPrint={() => window.print()}
              />
            </div>
          )}

          {/* TAB 3: GUICHET ÉTHIQUE & VBG */}
          {activeTab === 'ethique' && (
            <div>
              {ethicSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-stone-900">
                    Message confidentiel transmis avec dignité
                  </h4>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-serif">
                    Votre communication a été transmise au canal dédié. Conformément aux Articles 23, 24 et 26 du ROI, le traitement s'effectue sous le strict sceau de la confidentialité et du respect de la dignité humaine.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setEthicSubmitted(false);
                        onClose();
                      }}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEthicSubmit} className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200/80 p-3.5 rounded-lg text-xs text-amber-950 leading-relaxed font-serif">
                    <span className="font-sans font-bold block mb-1">
                      Garantie de protection, écoute et discrétion :
                    </span>
                    L'AMS applique une politique de tolérance zéro (Art. 23) et assure la protection stricte des informations sensibles. Les situations de VBG sont traitées avec dignité, consentement éclairé et orientation vers les services spécialisés compétents (Art. 24).
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Objet de votre message
                    </label>
                    <select
                      value={complaintType}
                      onChange={(e) => setComplaintType(e.target.value as any)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                    >
                      <option value="orientation_vbg">Orientation / Soutien en matière de VBG (Art. 24)</option>
                      <option value="reclamation">Réclamation ou signalement interne (Art. 26)</option>
                      <option value="partenariat">Proposition de partenariat institutionnel</option>
                      <option value="autre">Demande d'information générale</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Votre message ou exposé de la situation *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Décrivez avec vos propres mots votre demande ou signalement..."
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="rounded border-stone-300 text-stone-900 focus:ring-stone-900"
                      />
                      <span>Je souhaite transmettre ce signalement de manière anonyme</span>
                    </label>

                    {!isAnonymous && (
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Coordonnées de contact sécurisées (Téléphone ou email)
                        </label>
                        <input
                          type="text"
                          value={contactInfo}
                          onChange={(e) => setContactInfo(e.target.value)}
                          placeholder="Pour un retour discret et sécurisé..."
                          className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                        />
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-xs font-medium text-stone-700 hover:text-stone-950"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-800 rounded-md shadow-xs transition-colors"
                    >
                      <Send className="w-3.5 h-3.5 text-amber-200" />
                      <span>Envoyer en toute confidentialité</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
