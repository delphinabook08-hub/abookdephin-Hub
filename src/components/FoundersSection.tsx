import React from 'react';
import { FOUNDING_MEMBERS, AMS_INFO } from '../data/statutsData';
import { Award, CheckCircle, FileSignature, MapPin, Calendar } from 'lucide-react';

interface FoundersSectionProps {
  onOpenPrint: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onOpenPrint }) => {
  return (
    <section id="fondateurs" className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-widest font-sans font-bold text-stone-500 block mb-2">
            Article 25 des Statuts Constitutifs
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Registre Officiel des Membres Fondateurs
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Les membres fondateurs ci-après ont pris l'initiative historique de créer l'Association de Multi-Services (AMS) et ont formellement adopté et paraphé les Statuts Constitutifs et le Règlement d'Ordre Intérieur lors de l'Assemblée Générale constitutive réunie à Bunia.
          </p>
        </div>

        {/* Official Registry Card */}
        <div className="border border-stone-300 rounded-lg overflow-hidden bg-[#FAF9F5] shadow-xs">
          
          {/* Header of Registry */}
          <div className="p-5 sm:p-6 bg-[#F4F1EA] border-b border-stone-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-stone-600 font-bold block mb-1">
                Acte d’Adoption Constitutif
              </span>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Procès-Verbal de Signature des Statuts
              </h3>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-stone-600">
              <span className="inline-flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-stone-700" />
                Bunia, Ituri
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 font-medium">
                <Calendar className="w-3.5 h-3.5 text-stone-700" />
                {AMS_INFO.dateAdoption}
              </span>
            </div>
          </div>

          {/* Table of the 11 Founding Members */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-xs font-semibold text-stone-700 uppercase tracking-wider bg-stone-100/60">
                  <th scope="col" className="py-3.5 pl-6 pr-3 font-mono text-center w-16">N°</th>
                  <th scope="col" className="py-3.5 px-4">Nom et Prénom du Membre Fondateur</th>
                  <th scope="col" className="py-3.5 px-4 hidden sm:table-cell">Qualité Statutaire</th>
                  <th scope="col" className="py-3.5 pr-6 pl-4 text-right">Paraphe / Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-sm font-serif">
                {FOUNDING_MEMBERS.map((member) => (
                  <tr key={member.id} className="hover:bg-white/80 transition-colors">
                    <td className="py-3.5 pl-6 pr-3 font-mono text-xs font-bold text-stone-700 text-center">
                      {String(member.id).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-stone-900">
                      {member.name}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-stone-600 font-sans hidden sm:table-cell">
                      {member.role || 'Membre Fondateur'}
                    </td>
                    <td className="py-3.5 pr-6 pl-4 text-right">
                      <span className="inline-flex items-center gap-1.5 text-xs font-sans text-stone-800 bg-stone-200/80 px-2.5 py-1 rounded">
                        <CheckCircle className="w-3 h-3 text-stone-700" />
                        <span>Signé à Bunia</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legal Sign-Off Block */}
          <div className="p-6 bg-white border-t border-stone-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              
              <div className="p-4 rounded border border-stone-200 bg-[#FCFBF8] text-center">
                <span className="text-xs uppercase tracking-wider font-sans font-bold text-stone-600 block mb-2">
                  Pour l'Assemblée Constitutive
                </span>
                <p className="font-serif font-bold text-base text-stone-900">
                  Le Président de Séance
                </p>
                <div className="my-5 border-b border-dashed border-stone-300 w-44 mx-auto" />
                <span className="text-[11px] font-sans text-stone-600 italic">
                  Signature & Paraphe officiel
                </span>
              </div>

              {/* Official Seal Badge */}
              <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col items-center justify-center text-center shadow-xs">
                <img 
                  src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg" 
                  alt="Sceau officiel AMS" 
                  className="w-20 h-20 rounded-full object-contain p-1 bg-white border border-blue-200 shadow-sm"
                />
                <span className="mt-2 text-xs font-serif font-bold text-blue-950 uppercase tracking-wider">
                  Sceau Officiel AMS
                </span>
                <span className="text-[10px] text-stone-600 font-sans">
                  Bunia · République Démocratique du Congo
                </span>
              </div>

              <div className="p-4 rounded border border-stone-200 bg-[#FCFBF8] text-center">
                <span className="text-xs uppercase tracking-wider font-sans font-bold text-stone-600 block mb-2">
                  Pour le Secrétariat de Séance
                </span>
                <p className="font-serif font-bold text-base text-stone-900">
                  Le Secrétaire de Séance
                </p>
                <div className="my-5 border-b border-dashed border-stone-300 w-44 mx-auto" />
                <span className="text-[11px] font-sans text-stone-600 italic">
                  Signature & Paraphe officiel
                </span>
              </div>

            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100 text-xs text-stone-600 font-sans">
              <p>
                Fait à Bunia, Province de l'Ituri, République Démocratique du Congo, le 25 mai 2026.
              </p>
              <button
                onClick={onOpenPrint}
                className="inline-flex items-center gap-2 font-semibold text-stone-900 hover:text-amber-900 transition-colors"
              >
                <FileSignature className="w-4 h-4 text-stone-700" />
                <span>Imprimer l'Acte d'Adoption officiel</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
