import React, { useState } from 'react';
import { Quote, CheckCircle, ArrowRight, Star, HeartHandshake, ShieldCheck, FileText } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  pole: string;
  location: string;
  quote: string;
  impactMetric: string;
  impactLabel: string;
  articleRef: string;
  avatarLetter: string;
  avatarBg: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'esperance',
    name: 'Espérance Kavira Mapendo',
    role: 'Bénéficiaire du Pôle Confection & Apprentie Couturière',
    pole: 'Coupe-Couture & Métiers',
    location: 'Quartier Mudzi-Pela, Bunia',
    quote: "Avant de rejoindre l'atelier de coupe-couture de l'AMS, je n'avais aucune qualification technique et peinais à subvenir aux besoins de mes enfants. Grâce à l'encadrement rigoureux des formateurs et aux machines professionnelles mises à disposition, je maîtrise aujourd'hui le patronage et confectionne des uniformes scolaires pour les écoles locales. L'AMS m'a redonné dignité et autonomie financière.",
    impactMetric: '4e mois',
    impactLabel: 'Revenus réguliers et autonomes atteints',
    articleRef: 'Statuts Art. 6(g)',
    avatarLetter: 'E',
    avatarBg: 'bg-rose-900 text-rose-100'
  },
  {
    id: 'justin',
    name: 'Justin Bahati Lokana',
    role: 'Chef de groupement maraîcher & Membre Actif',
    pole: 'Agriculture & Maraîchage',
    location: "Périphérie d'Irumu, Province de l'Ituri",
    quote: "La structuration de notre coopérative maraîchère par l'AMS a transformé notre quotidien. La dotation en semences sélectionnées et l'encadrement par les agronomes nous ont permis de doubler nos récoltes d'amarante et de tomates. Ce qui me rassure le plus, c'est la rigueur exemplaire dans la gestion financière : chaque dépense est justifiée et validée par double signature.",
    impactMetric: '+110%',
    impactLabel: 'Rendement agricole sur 2 cycles culturaux',
    articleRef: 'Statuts Art. 6(b & f)',
    avatarLetter: 'J',
    avatarBg: 'bg-emerald-900 text-emerald-100'
  },
  {
    id: 'micheline',
    name: 'Dr. Micheline Neema Zawadi',
    role: 'Praticienne de santé communautaire & Membre Associée',
    pole: 'WASH & Protection Sociale',
    location: 'Commune de Mbunya, Bunia',
    quote: "La mise en service de la borne-fontaine WASH dans notre quartier a considérablement fait reculer les maladies d'origine hydrique chez les enfants. En tant que médecin, j'apprécie tout particulièrement le protocole strict de confidentialité et d'orientation bienveillante instauré par l'AMS pour la prévention des VBG conformément à l'Article 24 du ROI.",
    impactMetric: '400+',
    impactLabel: 'Ménages approvisionnés en eau potable',
    articleRef: 'ROI Art. 24 & Statuts Art. 6(i)',
    avatarLetter: 'M',
    avatarBg: 'bg-blue-900 text-blue-100'
  },
  {
    id: 'pascal',
    name: 'Pascal Kambale Tsongo',
    role: 'Membre Actif, Section Transport & Logistique',
    pole: 'Transport & Mobilité',
    location: 'Ville de Bunia, Ituri',
    quote: "Remplir ma fiche d'adhésion en ligne a été simple et clair. À l'AMS, la voix de chaque membre compte lors des réunions et les délibérations sont prises par consensus ou vote transparent. L'association nous organise pour acheminer en toute sécurité les récoltes agricoles des périphéries vers le grand marché central de Bunia.",
    impactMetric: 'Hebdo',
    impactLabel: 'Liaison logistique régulière assurée',
    articleRef: 'Statuts Art. 6(d) & ROI Art. 8',
    avatarLetter: 'P',
    avatarBg: 'bg-amber-900 text-amber-100'
  }
];

interface TestimonialsSectionProps {
  onOpenAdhesion: () => void;
  onSelectArticleRef: (articleNum: number, part: 'statuts' | 'roi') => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenAdhesion,
  onSelectArticleRef
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial>(TESTIMONIALS[0]);

  return (
    <section id="temoignages" className="py-16 border-b border-stone-200 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs uppercase tracking-widest font-sans font-bold text-stone-500 block mb-2">
              Retours d'Expérience & Impact Humain
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Témoignages des Membres & Bénéficiaires
            </h2>
            <p className="mt-2 text-stone-600 text-sm max-w-2xl leading-relaxed">
              Découvrez comment l'adhésion et les programmes de l'AMS changent concrètement la vie des familles, apprentis et producteurs agricoles à Bunia et en Province de l'Ituri.
            </p>
          </div>

          <button
            onClick={onOpenAdhesion}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors shrink-0 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-amber-300" />
            <span>Rejoindre l'AMS en Ligne</span>
          </button>
        </div>

        {/* Featured Testimonial Banner + Side Selection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Focused Testimonial Spotlight (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-300 rounded-lg p-6 sm:p-8 shadow-xs relative">
            <Quote className="w-10 h-10 text-stone-200 absolute top-6 right-6 pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-xs ${activeTestimonial.avatarBg}`}>
                {activeTestimonial.avatarLetter}
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  {activeTestimonial.name}
                </h3>
                <p className="text-xs text-stone-600">
                  {activeTestimonial.role}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-0.5">
                  <span>{activeTestimonial.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-stone-800">{activeTestimonial.pole}</span>
                </div>
              </div>
            </div>

            {/* Quote Body */}
            <blockquote className="font-serif italic text-stone-800 text-base sm:text-lg leading-relaxed text-justify mb-6">
              « {activeTestimonial.quote} »
            </blockquote>

            {/* Impact Metric & Statutory Reference Ribbon */}
            <div className="pt-5 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-sans uppercase font-bold text-stone-500 block">
                  Résultat vérifié sur le terrain
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-mono text-xl font-extrabold text-blue-900 tabular-nums">
                    {activeTestimonial.impactMetric}
                  </span>
                  <span className="text-xs text-stone-700">
                    {activeTestimonial.impactLabel}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-sans text-stone-500 block">
                  Fondement Statutaire
                </span>
                <span className="text-xs font-mono font-semibold text-stone-900">
                  {activeTestimonial.articleRef}
                </span>
              </div>
            </div>
          </div>

          {/* Side Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-stone-500 block mb-1">
              Autres témoignages par filière
            </span>

            {TESTIMONIALS.map((t) => {
              const isSelected = activeTestimonial.id === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setActiveTestimonial(t)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-white border-blue-900 ring-2 ring-blue-900/20 shadow-xs'
                      : 'bg-white/80 border-stone-200 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-serif font-bold text-sm shrink-0 ${t.avatarBg}`}>
                      {t.avatarLetter}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-serif font-bold text-stone-900 text-sm truncate">
                          {t.name}
                        </h4>
                        <span className="text-[10px] font-mono text-stone-500 shrink-0">
                          {t.impactMetric}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 truncate">
                        {t.role}
                      </p>
                      <p className="text-[11px] text-stone-500 mt-1 line-clamp-1 italic font-serif">
                        « {t.quote.substring(0, 75)}... »
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Adhesion encouragement card */}
            <div className="p-4 rounded-lg bg-blue-50/70 border border-blue-200 mt-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-950">
                  <strong>Vous aussi, participez au développement durable de l'Ituri :</strong> Remplissez votre fiche d'adhésion officielle en 2 minutes en ligne.
                </div>
              </div>
              <button
                onClick={onOpenAdhesion}
                className="mt-3 w-full py-2 bg-blue-900 hover:bg-blue-800 text-white rounded text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Remplir ma Fiche d'Adhésion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
