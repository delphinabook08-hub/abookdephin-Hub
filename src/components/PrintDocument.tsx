import React from 'react';
import { Printer, X, Download } from 'lucide-react';
import { AMS_INFO, STATUTS_ARTICLES, ROI_ARTICLES, FOUNDING_MEMBERS } from '../data/statutsData';

interface PrintDocumentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintDocument: React.FC<PrintDocumentProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 print:p-0 print:bg-white print:static print:inset-auto">
      
      {/* Floating control bar for screen view */}
      <div className="no-print fixed top-4 right-4 z-50 flex items-center gap-2 bg-stone-900 text-white p-2 rounded-lg shadow-lg">
        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-amber-600 hover:bg-amber-500 rounded transition-colors"
        >
          <Printer className="w-4 h-4" />
          <span>Lancer l'impression / PDF</span>
        </button>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-stone-800 rounded transition-colors text-stone-300 hover:text-white"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Document Sheet */}
      <div className="bg-white text-stone-900 max-w-4xl w-full p-8 sm:p-14 rounded-lg shadow-2xl print:shadow-none print:max-w-none print:p-6 print:rounded-none font-serif text-[13px] sm:text-sm leading-relaxed">
        
        {/* Formal Institutional Header */}
        <div className="text-center pb-8 border-b-2 border-stone-900 mb-8">
          <img
            src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg"
            alt="Logo officiel Association de Multi-Services AMS Bunia"
            className="w-24 h-24 object-contain mx-auto mb-3"
          />
          <span className="text-xs uppercase tracking-widest font-sans font-bold text-stone-600 block mb-1">
            RÉPUBLIQUE DÉMOCRATIQUE DU CONGO · PROVINCE DE L'ITURI
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif uppercase tracking-tight text-stone-950 mb-1">
            ASSOCIATION DE MULTI-SERVICES (AMS)
          </h1>
          <p className="font-sans font-bold text-sm tracking-wide text-stone-800 mb-2">
            STATUTS CONSTITUTIFS ET RÈGLEMENT D’ORDRE INTÉRIEUR (ROI)
          </p>
          <p className="italic text-base text-stone-700 mb-3">
            « Ensemble pour un développement durable »
          </p>
          <div className="text-xs font-sans text-stone-600 flex flex-wrap justify-center gap-4 pt-2 border-t border-stone-200">
            <span><strong>Siège :</strong> Bunia, Ituri, RDC</span>
            <span>·</span>
            <span><strong>Date d'adoption :</strong> 25 mai 2026</span>
            <span>·</span>
            <span><strong>Durée :</strong> Indéterminée</span>
          </div>
        </div>

        {/* PARTIE I — STATUTS CONSTITUTIFS */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-lg sm:text-xl font-bold font-sans uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-2 inline-block">
              PARTIE I — STATUTS CONSTITUTIFS
            </h2>
          </div>

          {/* Préambule */}
          <div className="mb-8">
            <h3 className="font-sans font-bold text-sm uppercase tracking-wide text-stone-800 mb-2">
              PRÉAMBULE
            </h3>
            <p className="text-justify leading-relaxed">
              Les membres fondateurs, animés par la volonté de promouvoir la solidarité, la formation, l’encadrement, l’autonomie économique et le développement intégral et inclusif des communautés, décident de constituer une association dénommée « Association de Multi-Services », en sigle AMS. L’association entend contribuer à l’amélioration des conditions de vie par la formation, l’accompagnement, les activités productives, les prestations de services et la protection de l’environnement.
            </p>
          </div>

          {/* Articles grouped by Titres */}
          {['TITRE I', 'TITRE II', 'TITRE III', 'TITRE IV', 'TITRE V', 'TITRE VI'].map((titreNum) => {
            const titreArticles = STATUTS_ARTICLES.filter((a) => a.titreNumber === titreNum);
            if (titreArticles.length === 0) return null;
            const groupName = titreArticles[0].titreGroup;

            return (
              <div key={titreNum} className="mb-8">
                <h3 className="font-sans font-bold text-sm uppercase tracking-wide text-stone-800 mb-4 pb-1 border-b border-stone-200">
                  {titreNum} — {groupName}
                </h3>

                <div className="space-y-4">
                  {titreArticles.map((art) => (
                    <div key={art.id} className="text-justify">
                      <p>
                        <strong className="font-sans text-xs uppercase tracking-wide text-stone-900">
                          Article {art.number} — {art.title}.
                        </strong>{' '}
                        <span>{art.content}</span>
                      </p>

                      {art.subPoints && art.subPoints.length > 0 && (
                        <ul className="mt-2 pl-6 space-y-1 list-none font-serif">
                          {art.subPoints.map((sp, i) => (
                            <li key={i} className="text-stone-800">
                              <span className="font-mono text-xs font-bold mr-1">({sp.letter})</span> {sp.text}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Special founder table for Article 25 */}
                      {art.number === 25 && (
                        <div className="mt-4 border border-stone-300 rounded overflow-hidden">
                          <table className="w-full text-left text-xs font-sans">
                            <thead className="bg-stone-100 border-b border-stone-300">
                              <tr>
                                <th className="py-2 px-3 w-12 text-center">N°</th>
                                <th className="py-2 px-3">Nom et prénom</th>
                                <th className="py-2 px-3 text-right">Signature / Paraphe</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200">
                              {FOUNDING_MEMBERS.map((m) => (
                                <tr key={m.id}>
                                  <td className="py-1.5 px-3 text-center font-mono">{m.id}</td>
                                  <td className="py-1.5 px-3 font-medium">{m.name}</td>
                                  <td className="py-1.5 px-3 text-right text-stone-500 italic">Signé à Bunia</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="p-4 bg-stone-50 border-t border-stone-200 font-sans text-xs">
                            <p className="mb-4">Fait à Bunia, le 25 mai 2026.</p>
                            <div className="flex justify-between pt-2">
                              <div>
                                <span>Le Président : </span>
                                <span className="inline-block border-b border-stone-400 w-36"></span>
                              </div>
                              <div>
                                <span>Le Secrétaire : </span>
                                <span className="inline-block border-b border-stone-400 w-36"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Page break for printing */}
        <div className="page-break-before my-8 border-t-2 border-dashed border-stone-300" />

        {/* PARTIE II — RÈGLEMENT D'ORDRE INTÉRIEUR (ROI) */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-lg sm:text-xl font-bold font-sans uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-2 inline-block">
              PARTIE II — RÈGLEMENT D’ORDRE INTÉRIEUR (ROI)
            </h2>
          </div>

          {['TITRE I', 'TITRE II', 'TITRE III', 'TITRE IV', 'TITRE V', 'TITRE VI', 'TITRE VII'].map((titreNum) => {
            const titreArticles = ROI_ARTICLES.filter((a) => a.titreNumber === titreNum);
            if (titreArticles.length === 0) return null;
            const groupName = titreArticles[0].titreGroup;

            return (
              <div key={titreNum} className="mb-8">
                <h3 className="font-sans font-bold text-sm uppercase tracking-wide text-stone-800 mb-4 pb-1 border-b border-stone-200">
                  {titreNum} — {groupName}
                </h3>

                <div className="space-y-4">
                  {titreArticles.map((art) => (
                    <div key={art.id} className="text-justify">
                      <p>
                        <strong className="font-sans text-xs uppercase tracking-wide text-stone-900">
                          Article {art.number} — {art.title}.
                        </strong>{' '}
                        <span>{art.content}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Annexe Organigramme */}
          <div className="mt-8 p-4 bg-stone-50 border border-stone-300 rounded font-sans text-xs">
            <h4 className="font-bold uppercase tracking-wider text-stone-900 mb-2">
              ANNEXE — ORGANIGRAMME INDICATIF
            </h4>
            <div className="text-center py-3 space-y-1 font-mono text-[11px] text-stone-800">
              <p className="font-bold">ASSEMBLÉE GÉNÉRALE (tous les membres)</p>
              <p>↓</p>
              <p className="font-bold">CONSEIL D’ADMINISTRATION</p>
              <p>↓</p>
              <p className="font-bold">COORDINATION EXÉCUTIVE</p>
              <p>↓</p>
              <p>Responsables de secteurs et d’antennes : formation ; agropastoral ; VBG/protection ; transport/gardiennage ; jardinage ; coupe-couture/coiffure ; WASH/environnement</p>
            </div>
          </div>

          {/* Adoption Note & Seal */}
          <div className="mt-6 p-4 border border-stone-200 rounded font-sans text-xs text-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold uppercase text-stone-900 mb-1">
                ADOPTION ET HOMOLOGATION
              </h4>
              <p>
                Les présents statuts et le ROI ont été relus, amendés et adoptés par les membres réunis en assemblée constitutive à Bunia. Fait à Bunia, Province de l'Ituri, RDC, le 25 mai 2026.
              </p>
            </div>
            <div className="text-center shrink-0">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg"
                alt="Sceau officiel AMS"
                className="w-16 h-16 object-contain mx-auto"
              />
              <span className="text-[10px] text-stone-500 font-serif italic block mt-1">
                Sceau légal de l'AMS Bunia
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
