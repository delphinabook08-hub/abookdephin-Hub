import React, { useState } from 'react';
import { 
  Handshake, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Send, 
  Building2, 
  Coins, 
  Scale, 
  FileSpreadsheet, 
  Users, 
  Globe2, 
  ArrowRight,
  ExternalLink,
  Lock
} from 'lucide-react';
import { ACTIVITY_POLES } from '../data/statutsData';

interface PartnershipForm {
  organizationName: string;
  orgType: string;
  headquarters: string;
  contactPerson: string;
  contactRole: string;
  email: string;
  phone: string;
  targetPole: string;
  supportType: string;
  estimatedBudget: string;
  currency: 'USD' | 'FC';
  projectDuration: string;
  description: string;
  auditAgreement: boolean;
}

interface PartnersSectionProps {
  onSelectArticleRef: (articleNum: number, part: 'statuts' | 'roi') => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onSelectArticleRef }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<PartnershipForm>({
    organizationName: '',
    orgType: 'Agence de développement / Bailleur',
    headquarters: '',
    contactPerson: '',
    contactRole: '',
    email: '',
    phone: '',
    targetPole: 'Formation professionnelle & Encadrement technique',
    supportType: 'Subvention financière directe',
    estimatedBudget: '',
    currency: 'USD',
    projectDuration: '12 mois',
    description: '',
    auditAgreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.auditAgreement) return;
    setIsSubmitted(true);
  };

  const partnerTypes = [
    {
      title: "Agences de Développement & Bailleurs",
      icon: <Globe2 className="w-5 h-5 text-blue-900" />,
      desc: "Cofinancement de programmes d'infrastructures WASH, de résilience agropastorale et d'équipements structurants en Ituri."
    },
    {
      title: "ONG Internationales & Humanitaires",
      icon: <Building2 className="w-5 h-5 text-emerald-900" />,
      desc: "Partenariats de mise en œuvre rapide pour l'assistance aux populations déplacées, l'encadrement des jeunes et la lutte contre les VBG."
    },
    {
      title: "Coopératives & Acteurs Économiques",
      icon: <Users className="w-5 h-5 text-amber-900" />,
      desc: "Structuration des filières vivrières, approvisionnement maraîcher, confection d'uniformes scolaires et transport sécurisé."
    },
    {
      title: "Fondations & Mécénat Privé",
      icon: <Handshake className="w-5 h-5 text-stone-900" />,
      desc: "Octroi de bourses d'apprentissage technique pour les orphelins et femmes cheffes de ménage, kits de réinsertion artisanale."
    }
  ];

  const statutoryGuarantees = [
    {
      title: "Contrôle & Audit Indépendant",
      statut: "Art. 17 Statuts & Art. 18 ROI",
      desc: "La Commission de Contrôle audite périodiquement toutes les opérations et présente son rapport annuel direct à l'Assemblée Générale."
    },
    {
      title: "Double Validation Bancaire",
      statut: "Art. 14 & 20 ROI",
      desc: "Tous les fonds partenaires transitent par un compte bancaire officiel. Les décaissements exigent la double signature du Trésorier et du Président."
    },
    {
      title: "Séparation Stricte des Patrimoines",
      statut: "Art. 21 Statuts",
      desc: "Les fonds et actifs alloués aux projets sont strictement séparés du patrimoine personnel des membres et réservés à l'objet social."
    },
    {
      title: "Rapports Techniques & Financiers",
      statut: "Art. 20 Statuts & Art. 22 ROI",
      desc: "Production d'états financiers certifiés et de rapports narratifs réguliers conformes aux standards des bailleurs de fonds internationaux."
    }
  ];

  return (
    <section id="partenaires" className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-stone-600 mb-1">
              <span>Article 19 des Statuts Constitutifs</span>
              <span aria-hidden="true">·</span>
              <span>Ressources & Coopération</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Espace Partenaires & Bailleurs de Fonds
            </h2>
            <p className="mt-2 text-stone-600 text-sm max-w-2xl leading-relaxed">
              L'AMS mobilise des partenariats stratégiques avec les agences de développement, ONG, coopératives et bailleurs pour amplifier l'impact communautaire en Province de l'Ituri, dans le respect d'une transparence financière irréprochable.
            </p>
          </div>

          <button
            onClick={() => {
              setIsSubmitted(false);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors shrink-0 shadow-xs"
          >
            <Handshake className="w-4 h-4 text-amber-300" />
            <span>Proposer un Partenariat / Financement</span>
          </button>
        </div>

        {/* 4 Typologies de Partenaires */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {partnerTypes.map((pt, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg border border-stone-200 bg-[#FAF9F5] flex flex-col justify-between hover:border-stone-400 transition-colors shadow-2xs"
            >
              <div>
                <div className="w-10 h-10 rounded bg-white border border-stone-200 flex items-center justify-center mb-3">
                  {pt.icon}
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-stone-500 font-sans">
                Conventions de droit congolais
              </div>
            </div>
          ))}
        </div>

        {/* Cadre de Transparence & Audit (Articles 17, 19, 20 & 21) */}
        <div className="bg-[#F5F2EB]/80 border border-stone-300 rounded-xl p-6 sm:p-8">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-stone-600 block mb-1">
              Garanties Institutionnelles & Audit
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Cadre de Rigueur et de Redevabilité de l'AMS
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 mt-2 font-serif leading-relaxed">
              « Les fonds sont utilisés exclusivement pour l’objet social. Une comptabilité régulière et des pièces justificatives sont tenues. » — Article 20 des Statuts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statutoryGuarantees.map((g, i) => (
              <div key={i} className="p-4 bg-white border border-stone-200 rounded-lg shadow-2xs">
                <span className="text-[10px] font-mono font-bold text-blue-900 block mb-1">
                  {g.statut}
                </span>
                <h4 className="font-serif font-bold text-sm text-stone-900 mb-1.5">
                  {g.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-stone-300/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>
                <strong>Commission de Contrôle indépendante :</strong> Droit d'inspection permanente sur les pièces comptables de tous les financements.
              </span>
            </div>

            <button
              onClick={() => onSelectArticleRef(19, 'statuts')}
              className="font-semibold text-stone-900 hover:text-amber-900 underline underline-offset-4 shrink-0"
            >
              Consulter l'Article 19 des Statuts
            </button>
          </div>
        </div>

      </div>

      {/* Modal: Formulaire Spécifique « Proposer un partenariat / Financement de projet » */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="relative bg-[#FAF9F5] border border-stone-300 rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden my-6">
            
            {/* Modal Header */}
            <div className="p-5 bg-white border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg" 
                  alt="Logo AMS" 
                  className="w-10 h-10 object-contain rounded-full bg-white border border-stone-200 p-0.5 shadow-xs shrink-0" 
                />
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
                    Proposition de Partenariat & Financement de Projet
                  </h3>
                  <p className="text-xs text-stone-600 font-sans">
                    Guichet de Coopération · Article 19 des Statuts Constitutifs
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-stone-400 hover:text-stone-800 rounded-md hover:bg-stone-100 transition-colors"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-stone-900">
                    Proposition de Partenariat Enregistrée
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-serif">
                    Merci pour l'intérêt et la confiance que votre organisation ({formData.organizationName ? <strong>{formData.organizationName}</strong> : 'votre structure'}) témoigne envers l'<strong>Association de Multi-Services (AMS)</strong>. Votre dossier a été transmis au Bureau de Coordination et au Conseil d'Administration de Bunia pour instruction préalable.
                  </p>
                  <div className="p-3 bg-stone-100 border border-stone-200 rounded text-xs text-stone-700 max-w-md mx-auto text-left font-sans">
                    <div><strong>Accusé de réception :</strong> AMS-PART-2026-{Math.floor(1000 + Math.random() * 9000)}</div>
                    <div><strong>Contact de suivi :</strong> coordination@ams-ituri.cd / Secrétariat Bunia</div>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md"
                    >
                      Fermer la fenêtre
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-950 font-sans leading-relaxed">
                    <strong>Cadre statutaire (Art. 19 & 20) :</strong> Les subventions, dons et financements sont affectés strictement à l'objet social validé. Toutes les opérations sont soumises à la double validation bancaire et aux audits indépendants de la Commission de Contrôle de l'AMS.
                  </div>

                  {/* Section 1 : Organisation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Nom de l'Organisation / Institution *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organizationName}
                        onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                        placeholder="Ex : Agence de Coopération, ONG X..."
                        className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Typologie d'Organisme *
                      </label>
                      <select
                        value={formData.orgType}
                        onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                        className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                      >
                        <option value="Agence de développement / Bailleur">Agence de développement / Bailleur</option>
                        <option value="ONG Internationale">ONG Internationale</option>
                        <option value="ONG Nationale / Locale">ONG Nationale / Locale</option>
                        <option value="Coopérative agricole / commerciale">Coopérative agricole / commerciale</option>
                        <option value="Fondation / Mécène privé">Fondation / Mécène privé</option>
                        <option value="Entreprise / RSE">Entreprise / RSE</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Siège (Ville / Pays) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.headquarters}
                        onChange={(e) => setFormData({ ...formData, headquarters: e.target.value })}
                        placeholder="Ex : Kinshasa / Genève / Bunia"
                        className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Personne de contact *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="Prénom & Nom"
                        className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Fonction / Titre *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactRole}
                        onChange={(e) => setFormData({ ...formData, contactRole: e.target.value })}
                        placeholder="Ex : Chargé de programmes"
                        className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@organisation.org"
                        className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Téléphone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+243 ... / +33 ..."
                        className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  {/* Section 2 : Projet & Pôle */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-200">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Pôle d'intervention ciblé (Art. 6)
                      </label>
                      <select
                        value={formData.targetPole}
                        onChange={(e) => setFormData({ ...formData, targetPole: e.target.value })}
                        className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                      >
                        {ACTIVITY_POLES.map((pole) => (
                          <option key={pole.id} value={pole.title}>
                            {pole.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Nature de l'appui envisagé *
                      </label>
                      <select
                        value={formData.supportType}
                        onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                        className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                      >
                        <option value="Subvention financière directe">Subvention financière directe</option>
                        <option value="Dotation en équipements / matériel / intrants">Dotation en équipements / matériel / intrants</option>
                        <option value="Assistance technique & renforcement de capacités">Assistance technique & renforcement de capacités</option>
                        <option value="Partenariat opérationnel conjoint de terrain">Partenariat opérationnel conjoint de terrain</option>
                        <option value="Financement mixte / Bourse d'études">Financement mixte / Bourse d'études</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Budget prévisionnel estimé *
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          required
                          value={formData.estimatedBudget}
                          onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                          placeholder="Ex : 15 000"
                          className="flex-1 px-3 py-1.5 bg-white border border-stone-300 rounded-l text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                        />
                        <select
                          value={formData.currency}
                          onChange={(e) => setFormData({ ...formData, currency: e.target.value as any })}
                          className="px-3 py-1.5 bg-stone-100 border border-l-0 border-stone-300 rounded-r text-xs font-mono font-bold text-stone-800"
                        >
                          <option value="USD">USD ($)</option>
                          <option value="FC">FC (CDF)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Durée prévisionnelle
                      </label>
                      <select
                        value={formData.projectDuration}
                        onChange={(e) => setFormData({ ...formData, projectDuration: e.target.value })}
                        className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                      >
                        <option value="3 à 6 mois">3 à 6 mois</option>
                        <option value="12 mois">12 mois (1 an)</option>
                        <option value="24 mois">24 mois (2 ans)</option>
                        <option value="Pluriannuel (3 ans+)">Pluriannuel (3 ans+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Description sommaire du projet ou des objectifs visés *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Précisez les objectifs, la zone géographique ciblée en Ituri et les résultats attendus..."
                      className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  {/* Engagement de Transparence & Audit */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 text-xs text-stone-800 cursor-pointer bg-white p-3 rounded border border-stone-300">
                      <input
                        type="checkbox"
                        required
                        checked={formData.auditAgreement}
                        onChange={(e) => setFormData({ ...formData, auditAgreement: e.target.checked })}
                        className="mt-0.5 rounded border-stone-300 text-blue-900 focus:ring-blue-900"
                      />
                      <span>
                        <strong>Engagement de conformité statutaire & d'audit :</strong> Je certifie engager ces échanges dans le respect des Statuts Constitutifs de l'AMS, de la gestion bancaire à double validation (Art. 20 ROI) et des contrôles réguliers de la Commission de Contrôle (Art. 17 Statuts & Art. 18 ROI).
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-xs font-medium text-stone-700 hover:text-stone-950"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.auditAgreement}
                      className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed rounded shadow-xs transition-colors"
                    >
                      <Send className="w-3.5 h-3.5 text-amber-300" />
                      <span>Transmettre la Proposition de Partenariat</span>
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
