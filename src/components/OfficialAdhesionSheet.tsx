import React from 'react';
import { Printer, Download, ArrowLeft, CheckSquare, Square, CheckCircle } from 'lucide-react';

export interface AdhesionFormData {
  adhesionNumber: string;
  adhesionDate: string;
  photoUrl?: string;
  // Section I
  nom: string;
  postnom: string;
  prenom: string;
  sexe: 'Masculin' | 'Féminin';
  dateLieuNaissance: string;
  etatCivil: 'Célibataire' | 'Marié(e)' | 'Autre';
  etatCivilAutre?: string;
  nationalite: string;
  adressePhysique: string;
  territoireCommuneQuartier: string;
  telephone: string;
  profession: string;
  niveauEtudes: string;
  // Section II
  domainesInteret: string[];
  autreDomaine?: string;
  // Section III
  nomEngagement: string;
  // Section IV
  montantFixe: string;
  montantPaye: string;
  solde: string;
  numeroRecu: string;
  // Section V
  faitA: string;
  faitLe: string;
  signatureMembre?: string;
  // Comité
  decisionComite: 'acceptée' | 'attente' | 'refusée';
  observationsComite?: string;
}

interface OfficialAdhesionSheetProps {
  data: AdhesionFormData;
  onBackToEdit?: () => void;
  onPrint?: () => void;
}

export const ALL_DOMAINES = [
  "Formation et encadrement",
  "Activités agropastorales",
  "Lutte contre les VBG",
  "Transport",
  "Chargement et déchargement",
  "Gardiennage",
  "Jardinage",
  "Coupe et couture",
  "Coiffure et esthétique",
  "Eau, hygiène et assainissement (WASH)",
  "Protection de l’environnement"
];

export const OfficialAdhesionSheet: React.FC<OfficialAdhesionSheetProps> = ({
  data,
  onBackToEdit,
  onPrint
}) => {
  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  return (
    <div className="bg-white text-stone-900 max-w-4xl mx-auto my-4 font-sans text-xs sm:text-sm">
      
      {/* Top action toolbar (hidden when printing) */}
      <div className="no-print bg-[#F5F2EB] border border-stone-300 rounded-lg p-3.5 mb-6 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          {onBackToEdit && (
            <button
              onClick={onBackToEdit}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Modifier les informations</span>
            </button>
          )}
          <span className="text-xs text-stone-600 font-serif hidden sm:inline">
            Fiche officielle d'adhésion prête pour archivage et signature
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/assets/aistudio/Fiche_Adhesion_AMS_2c1be05f.pdf"
            download="Fiche_Adhesion_AMS_Officielle.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded transition-colors"
            title="Télécharger le PDF officiel vierge fourni par l'AMS"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF Vierge</span>
          </a>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors shadow-xs"
          >
            <Printer className="w-3.5 h-3.5 text-amber-300" />
            <span>Imprimer la Fiche Remplie (A4)</span>
          </button>
        </div>
      </div>

      {/* Official Sheet Canvas strictly reproducing Fiche_Adhesion_AMS_2c1be05f.pdf */}
      <div className="border border-stone-400 p-6 sm:p-10 bg-white rounded shadow-sm print:border-none print:p-2 print:shadow-none font-sans text-[11px] sm:text-xs leading-normal">
        
        {/* Header Block */}
        <div className="text-center pb-4 mb-4">
          <img
            src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg"
            alt="Logo officiel Association de Multi-Services AMS Bunia"
            className="w-20 h-20 object-contain mx-auto mb-2"
          />
          <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-blue-900 font-sans">
            ASSOCIATION DE MULTI-SERVICES
          </h1>
          <h2 className="text-base sm:text-lg font-bold text-stone-900 tracking-wider">
            AMS
          </h2>
          <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-stone-700 font-medium">
            SIÈGE SOCIAL : BUNIA – RÉPUBLIQUE DÉMOCRATIQUE DU CONGO
          </p>
          <div className="mt-2 inline-block px-4 py-1 border-b-2 border-stone-900">
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-stone-950 font-sans">
              FICHE D’ADHÉSION D’UN MEMBRE
            </h3>
          </div>
        </div>

        {/* Number, Date & Photo Box */}
        <div className="border border-stone-400 p-2.5 mb-5 flex items-center justify-between">
          <div className="space-y-1">
            <p>
              <strong className="font-semibold">N° d’adhésion :</strong>{' '}
              <span className="font-mono font-bold text-stone-900 underline px-1">
                {data.adhesionNumber || '........................................'}
              </span>
            </p>
            <p>
              <strong className="font-semibold">Date :</strong>{' '}
              <span className="font-mono font-medium text-stone-900">
                {data.adhesionDate || '......... / ......... / ............'}
              </span>
            </p>
          </div>

          <div className="w-24 h-28 border border-stone-400 bg-stone-50 flex flex-col items-center justify-center text-center p-1 text-[10px] text-stone-500 uppercase font-sans">
            {data.photoUrl ? (
              <img
                src={data.photoUrl}
                alt="Photo du membre"
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <span>PHOTO</span>
            )}
          </div>
        </div>

        {/* Section I: Identification du membre */}
        <div className="mb-5">
          <div className="bg-stone-100/80 px-2 py-1 font-bold text-stone-900 uppercase border-y border-stone-300 text-[11px] mb-2.5">
            I. IDENTIFICATION DU MEMBRE
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p>
                <strong>Nom :</strong>{' '}
                <span className="font-semibold text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-36">
                  {data.nom || '.......................................................'}
                </span>
              </p>
              <p>
                <strong>Postnom :</strong>{' '}
                <span className="font-semibold text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-36">
                  {data.postnom || '.......................................................'}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
              <p>
                <strong>Prénom :</strong>{' '}
                <span className="font-semibold text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-36">
                  {data.prenom || '.......................................................'}
                </span>
              </p>
              <div className="flex items-center gap-4">
                <strong>Sexe :</strong>
                <span className="inline-flex items-center gap-1">
                  {data.sexe === 'Masculin' ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                  <span>Masculin</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  {data.sexe === 'Féminin' ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                  <span>Féminin</span>
                </span>
              </div>
            </div>

            <p>
              <strong>Date et lieu de naissance :</strong>{' '}
              <span className="text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-64">
                {data.dateLieuNaissance || '................................................................................................................................'}
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <strong>État civil :</strong>
              <span className="inline-flex items-center gap-1">
                {data.etatCivil === 'Célibataire' ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                <span>Célibataire</span>
              </span>
              <span className="inline-flex items-center gap-1">
                {data.etatCivil === 'Marié(e)' ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                <span>Marié(e)</span>
              </span>
              <span className="inline-flex items-center gap-1">
                {data.etatCivil === 'Autre' ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                <span>Autre {data.etatCivilAutre ? `(${data.etatCivilAutre})` : ''}</span>
              </span>

              <span className="ml-auto">
                <strong>Nationalité :</strong>{' '}
                <span className="font-medium text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-28">
                  {data.nationalite || 'Congolaise'}
                </span>
              </span>
            </div>

            <p>
              <strong>Adresse physique :</strong>{' '}
              <span className="text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-64">
                {data.adressePhysique || '.............................................................................................................................................'}
              </span>
            </p>

            <p>
              <strong>Territoire / Commune / Quartier :</strong>{' '}
              <span className="text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-64">
                {data.territoireCommuneQuartier || '................................................................................................................................'}
              </span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p>
                <strong>Téléphone :</strong>{' '}
                <span className="font-mono text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-36">
                  {data.telephone || '.......................................................'}
                </span>
              </p>
              <p>
                <strong>Profession / occupation :</strong>{' '}
                <span className="text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-36">
                  {data.profession || '.......................................................'}
                </span>
              </p>
            </div>

            <p>
              <strong>Niveau d’études :</strong>{' '}
              <span className="text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-64">
                {data.niveauEtudes || '................................................................................................................................'}
              </span>
            </p>
          </div>
        </div>

        {/* Section II: Domaines d'intérêt */}
        <div className="mb-5">
          <div className="bg-stone-100/80 px-2 py-1 font-bold text-stone-900 uppercase border-y border-stone-300 text-[11px] mb-2.5">
            II. DOMAINE(S) D’INTÉRÊT
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-1.5 gap-x-3">
            {ALL_DOMAINES.map((domaine) => {
              const isChecked = data.domainesInteret.includes(domaine);
              return (
                <div key={domaine} className="flex items-center gap-1.5 text-[11px]">
                  {isChecked ? (
                    <CheckSquare className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                  ) : (
                    <Square className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  )}
                  <span className={isChecked ? 'font-semibold text-stone-900' : 'text-stone-700'}>
                    {domaine}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-2 flex items-center gap-2 text-[11px]">
            {data.autreDomaine ? (
              <CheckSquare className="w-3.5 h-3.5 text-blue-900 shrink-0" />
            ) : (
              <Square className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            )}
            <span>Autres :</span>
            <span className="border-b border-dotted border-stone-400 flex-1 text-stone-900">
              {data.autreDomaine || '................................................................................................................................'}
            </span>
          </div>
        </div>

        {/* Section III: Engagement du membre */}
        <div className="mb-5">
          <div className="bg-stone-100/80 px-2 py-1 font-bold text-stone-900 uppercase border-y border-stone-300 text-[11px] mb-2.5">
            III. ENGAGEMENT DU MEMBRE
          </div>

          <div className="text-justify font-serif text-[11px] sm:text-xs leading-relaxed space-y-1.5">
            <p>
              Je soussigné(e),{' '}
              <strong className="font-sans font-bold text-stone-900 border-b border-dotted border-stone-400 px-1">
                {data.nomEngagement || `${data.nom} ${data.postnom} ${data.prenom}`.trim() || '................................................................................................................'}
              </strong>
              , sollicite mon adhésion à l’AMS.
            </p>
            <p>
              Je m’engage à respecter les statuts et le règlement d’ordre intérieur (ROI), les dirigeants et les autres membres, à participer aux réunions et activités, à contribuer aux objectifs de l’association et à respecter les obligations financières régulièrement établies par les organes compétents. Je certifie l’exactitude des informations fournies.
            </p>
          </div>
        </div>

        {/* Section IV: Frais d'adhésion */}
        <div className="mb-5">
          <div className="bg-stone-100/80 px-2 py-1 font-bold text-stone-900 uppercase border-y border-stone-300 text-[11px] mb-2.5">
            IV. FRAIS D’ADHÉSION
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <p>
              <strong>Montant fixé :</strong>{' '}
              <span className="font-mono font-bold text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-20">
                {data.montantFixe || '................'}
              </span>{' '}
              FC
            </p>
            <p>
              <strong>Montant payé :</strong>{' '}
              <span className="font-mono font-bold text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-20">
                {data.montantPaye || '................'}
              </span>{' '}
              FC
            </p>
            <p>
              <strong>Solde :</strong>{' '}
              <span className="font-mono font-bold text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-20">
                {data.solde || '................'}
              </span>{' '}
              FC
            </p>
          </div>

          <p className="mt-1.5">
            <strong>N° de reçu :</strong>{' '}
            <span className="font-mono text-stone-900 border-b border-dotted border-stone-400 inline-block min-w-64">
              {data.numeroRecu || '................................................................................................................................'}
            </span>
          </p>
        </div>

        {/* Section V: Validation & Signatures */}
        <div className="mb-5">
          <div className="bg-stone-100/80 px-2 py-1 font-bold text-stone-900 uppercase border-y border-stone-300 text-[11px] mb-2.5">
            V. VALIDATION
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <p>
              <strong>Fait à :</strong>{' '}
              <span className="border-b border-dotted border-stone-400 inline-block min-w-40 font-medium">
                {data.faitA || 'Bunia'}
              </span>
            </p>
            <p>
              <strong>Le :</strong>{' '}
              <span className="font-mono border-b border-dotted border-stone-400 inline-block min-w-32">
                {data.faitLe || '......... / ......... / ............'}
              </span>
            </p>
          </div>

          <div className="border border-stone-400 grid grid-cols-3 divide-x divide-stone-400 text-center">
            <div className="p-2 flex flex-col justify-between min-h-[90px]">
              <span className="font-semibold block text-[10px] sm:text-[11px]">
                Signature / Empreinte du membre
              </span>
              <div className="my-auto font-serif italic text-blue-900 text-xs">
                {data.signatureMembre || `${data.prenom} ${data.nom}`}
              </div>
            </div>

            <div className="p-2 flex flex-col justify-between min-h-[90px]">
              <span className="font-semibold block text-[10px] sm:text-[11px]">
                Signature du Secrétaire
              </span>
              <div className="my-auto text-[10px] text-stone-400 italic">
                (Cadre réservé)
              </div>
            </div>

            <div className="p-2 flex flex-col justify-between min-h-[90px]">
              <span className="font-semibold block text-[10px] sm:text-[11px]">
                Signature du Président
              </span>
              <div className="my-auto text-[10px] text-stone-400 italic">
                (Cadre réservé)
              </div>
            </div>
          </div>
        </div>

        {/* Décision du Comité */}
        <div className="border border-stone-400 p-3 bg-stone-50/50">
          <div className="font-bold text-stone-900 uppercase text-[11px] mb-2">
            DÉCISION DU COMITÉ
          </div>

          <div className="flex items-center gap-6 mb-2">
            <span className="inline-flex items-center gap-1.5">
              {data.decisionComite === 'acceptée' ? (
                <CheckSquare className="w-3.5 h-3.5 text-emerald-800" />
              ) : (
                <Square className="w-3.5 h-3.5 text-stone-400" />
              )}
              <span className={data.decisionComite === 'acceptée' ? 'font-bold text-emerald-950' : ''}>
                Adhésion acceptée
              </span>
            </span>

            <span className="inline-flex items-center gap-1.5">
              {data.decisionComite === 'attente' ? (
                <CheckSquare className="w-3.5 h-3.5 text-amber-800" />
              ) : (
                <Square className="w-3.5 h-3.5 text-stone-400" />
              )}
              <span className={data.decisionComite === 'attente' ? 'font-bold text-amber-950' : ''}>
                Adhésion en attente
              </span>
            </span>

            <span className="inline-flex items-center gap-1.5">
              {data.decisionComite === 'refusée' ? (
                <CheckSquare className="w-3.5 h-3.5 text-rose-800" />
              ) : (
                <Square className="w-3.5 h-3.5 text-stone-400" />
              )}
              <span className={data.decisionComite === 'refusée' ? 'font-bold text-rose-950' : ''}>
                Adhésion refusée
              </span>
            </span>
          </div>

          <p className="mb-2">
            <strong>Observations :</strong>{' '}
            <span className="text-stone-800 border-b border-dotted border-stone-400 inline-block min-w-64">
              {data.observationsComite || 'Dossier transmis pour examen lors de la prochaine réunion ordinaire du Conseil d’Administration.'}
            </span>
          </p>

          <div className="flex items-end justify-between pt-2">
            <div>
              <strong>Nom et signature du responsable habilité :</strong>{' '}
              <span className="border-b border-dotted border-stone-400 inline-block min-w-44">
                ....................................................................
              </span>
            </div>

            <div className="text-center">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg"
                alt="Cachet officiel de l'AMS"
                className="w-16 h-16 object-contain opacity-85 mx-auto"
              />
              <span className="text-[10px] text-stone-600 font-serif italic block mt-0.5">
                Cachet officiel de l’AMS
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
