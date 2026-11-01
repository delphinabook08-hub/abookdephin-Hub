import React from 'react';
import { AMS_INFO } from '../data/statutsData';
import { MapPin, Calendar, ShieldCheck, Printer, HeartHandshake, Share2 } from 'lucide-react';
import { SocialShareButtons } from './SocialShareButtons';

interface FooterProps {
  onOpenAdhesion: () => void;
  onOpenPrint: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdhesion, onOpenPrint }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Identity & Motto */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg"
                alt="Logo Association de Multi-Services AMS Bunia"
                className="w-12 h-12 object-contain rounded-full bg-white/95 p-0.5 shadow-xs shrink-0"
              />
              <span className="font-serif font-bold text-lg text-white">
                Association de Multi-Services
              </span>
            </div>
            
            <p className="font-serif italic text-amber-200/90 text-sm">
              « {AMS_INFO.devise} »
            </p>

            <p className="text-xs text-stone-400 leading-relaxed font-sans max-w-sm">
              Association sans but lucratif (ASBL) à vocation sociale et communautaire régie par les présents statuts et les lois en vigueur en République Démocratique du Congo.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Siège social : Bunia, Province de l'Ituri, RDC</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Statuts adoptés à Bunia, le {AMS_INFO.dateAdoption}</span>
              </div>
            </div>
          </div>

          {/* Quick Legal Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold text-stone-100">
              Corpus Statutaire & Règlement
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#statuts" className="hover:text-amber-300 transition-colors">
                  Statuts Constitutifs (Articles 1 à 25)
                </a>
              </li>
              <li>
                <a href="#roi" className="hover:text-amber-300 transition-colors">
                  Règlement d’Ordre Intérieur (ROI) (Articles 1 à 28)
                </a>
              </li>
              <li>
                <a href="#indicateurs" className="hover:text-amber-300 transition-colors">
                  Tableau de bord & Indicateurs Clés 2026
                </a>
              </li>
              <li>
                <a href="#actualites" className="hover:text-amber-300 transition-colors">
                  Actualités & Activités Récentes en Ituri
                </a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-amber-300 transition-colors">
                  Témoignages de Membres & Retours de Terrain
                </a>
              </li>
              <li>
                <a href="#poles" className="hover:text-amber-300 transition-colors">
                  Pôles d’intervention (Formation, Agropastoral, VBG, WASH, Couture...)
                </a>
              </li>
              <li>
                <a href="#partenaires" className="hover:text-amber-300 transition-colors">
                  Espace Partenaires & Bailleurs de Fonds (Art. 19)
                </a>
              </li>
              <li>
                <a href="#adhesion" className="hover:text-amber-300 transition-colors">
                  Espace Adhésion, Barèmes & FAQ
                </a>
              </li>
              <li>
                <a href="#gouvernance" className="hover:text-amber-300 transition-colors">
                  Organigramme & Attributions des Responsables
                </a>
              </li>
              <li>
                <a href="#fondateurs" className="hover:text-amber-300 transition-colors">
                  Registre des 11 Membres Fondateurs
                </a>
              </li>
            </ul>
          </div>

          {/* Actions & Commitments */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold text-stone-100">
              Engagements & Contact
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Pour soumettre une demande d’adhésion ou contacter le secrétariat en toute confidentialité :
            </p>

            <div className="space-y-2 pt-1">
              <button
                onClick={onOpenAdhesion}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Adhérer à l’AMS</span>
              </button>

              <button
                onClick={onOpenPrint}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-stone-400" />
                <span>Imprimer les Textes Complets</span>
              </button>
            </div>

            {/* Social Sharing block */}
            <div className="pt-3 border-t border-stone-800">
              <div className="flex items-center gap-1.5 text-xs text-stone-300 font-semibold mb-2">
                <Share2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Diffuser le portail officiel</span>
              </div>
              <p className="text-[11px] text-stone-400 mb-2 leading-relaxed">
                Partagez le lien de l'AMS avec vos proches et réseaux :
              </p>
              <SocialShareButtons variant="footer" />
            </div>
          </div>

        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Association de Multi-Services (AMS Bunia). Tous droits statutaires réservés.
          </p>
          <div className="flex items-center gap-4">
            <span>Province de l'Ituri</span>
            <span aria-hidden="true">·</span>
            <span>République démocratique du Congo</span>
            <span aria-hidden="true">·</span>
            <span>Développement Durable</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
