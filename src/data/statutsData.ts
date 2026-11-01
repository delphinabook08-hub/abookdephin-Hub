/**
 * Données officielles des Statuts Constitutifs et du Règlement d'Ordre Intérieur (ROI)
 * Association de Multi-Services (AMS) - Bunia, Province de l'Ituri, RDC
 */

export interface Article {
  id: string;
  number: number;
  part: 'statuts' | 'roi';
  title: string;
  titreGroup: string;
  titreNumber: string;
  content: string;
  highlights?: string[];
  subPoints?: { letter?: string; text: string }[];
}

export interface FoundingMember {
  id: number;
  name: string;
  role?: string;
  signed: boolean;
}

export interface ActivityPole {
  id: string;
  code: string;
  title: string;
  description: string;
  category: 'social' | 'technique' | 'agropastoral' | 'service';
  objectives: string[];
  articleRef: string;
  image?: string;
}

export interface OrganeNode {
  id: string;
  name: string;
  type: 'deliberatif' | 'direction' | 'execution' | 'controle' | 'operationnel';
  parent?: string;
  mandate: string;
  articleStatuts: string;
  articleROI?: string;
  composition: string;
  reunions: string;
}

export const AMS_INFO = {
  name: "Association de Multi-Services",
  sigle: "AMS",
  logoUrl: "/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg",
  devise: "Ensemble pour un développement durable",
  siege: "Bunia, Ituri, République démocratique du Congo",
  dateAdoption: "25 mai 2026",
  duree: "Indéterminée",
  nature: "Association sans but lucratif (ASBL) à vocation sociale et communautaire",
  valeurs: [
    "Solidarité",
    "Transparence",
    "Participation",
    "Responsabilité",
    "Égalité",
    "Respect de la dignité humaine"
  ]
};

export const FOUNDING_MEMBERS: FoundingMember[] = [
  { id: 1, name: "Tambaki Muhigi David", role: "Membre Fondateur", signed: true },
  { id: 2, name: "Tibasima Bambu Jacques", role: "Membre Fondateur", signed: true },
  { id: 3, name: "Bagaya David", role: "Membre Fondateur", signed: true },
  { id: 4, name: "Bahigani Daniel", role: "Membre Fondateur", signed: true },
  { id: 5, name: "Kansime Rebeka", role: "Membre Fondatrice", signed: true },
  { id: 6, name: "Kabagambe Tresor", role: "Membre Fondateur", signed: true },
  { id: 7, name: "Bulemu Wilson", role: "Membre Fondateur", signed: true },
  { id: 8, name: "Kandole Francis", role: "Membre Fondateur", signed: true },
  { id: 9, name: "Dive Chantal", role: "Membre Fondatrice", signed: true },
  { id: 10, name: "Maki Nyosha", role: "Membre Fondateur", signed: true },
  { id: 11, name: "Twaibu Martin", role: "Membre Fondateur", signed: true }
];

export const ACTIVITY_POLES: ActivityPole[] = [
  {
    id: "formation",
    code: "a",
    title: "Formation professionnelle & Encadrement technique",
    description: "Organisation de modules pratiques qualifiants pour jeunes et adultes, renforcement des compétences et accompagnement aux métiers porteurs en Ituri.",
    category: "technique",
    objectives: [
      "Transmettre des compétences techniques certifiables",
      "Offrir un encadrement pédagogique de proximité",
      "Accompagner la transition vers l'apprentissage et l'auto-emploi"
    ],
    articleRef: "Article 6 (a) & Article 7 des Statuts"
  },
  {
    id: "agropastoral",
    code: "b",
    title: "Agriculture, Élevage & Activités agropastorales",
    description: "Promotion de pratiques culturales résilientes, élevage de bétail et volailles, structuration en coopératives et sécurité alimentaire locale.",
    category: "agropastoral",
    objectives: [
      "Moderniser et valoriser les filières agricoles locales",
      "Développer l'élevage bovin, caprin et avicole durable",
      "Garantir la sécurité nutritionnelle des ménages en province d'Ituri"
    ],
    articleRef: "Article 6 (b) & Article 7 des Statuts"
  },
  {
    id: "vbg",
    code: "c",
    title: "Prévention des Violences Basées sur le Genre (VBG) & Protection",
    description: "Sensibilisation communautaire approfondie, écoute bienveillante, respect strict de la confidentialité et orientation digne vers les structures médicales et juridiques compétentes.",
    category: "social",
    objectives: [
      "Prévenir activement toutes les formes de violences de genre",
      "Mener des campagnes de déstigmatisation et d'égalité",
      "Orienter avec consentement éclairé vers les services agréés sans se substituer aux spécialistes"
    ],
    articleRef: "Article 6 (c) des Statuts & Article 24 du ROI"
  },
  {
    id: "transport",
    code: "d",
    title: "Services de Transport & Mobilité",
    description: "Développement de services de transport et logistique adaptés aux réalités de Bunia et des territoires environnants, facilitant l'écoulement des produits et la mobilité des personnes.",
    category: "service",
    objectives: [
      "Fluidifier le désenclavement des zones de production agropastorale",
      "Offrir des solutions de transport sécurisées et abordables",
      "Créer des opportunités d'emplois pour les jeunes conducteurs et mécaniciens"
    ],
    articleRef: "Article 6 (d) des Statuts"
  },
  {
    id: "gardiennage",
    code: "e",
    title: "Gardiennage & Sécurité de proximité",
    description: "Prestations professionnelles de gardiennage et de surveillance de biens dans le strict respect des autorisations administratives et des textes légaux en vigueur en RDC.",
    category: "service",
    objectives: [
      "Assurer la surveillance responsable des patrimoines communautaires et privés",
      "Former le personnel aux gestes de vigilance et respect des droits fondamentaux",
      "Opérer en conformité stricte avec les agréments officiels de l'État"
    ],
    articleRef: "Article 6 (e) des Statuts"
  },
  {
    id: "jardinage",
    code: "f",
    title: "Jardinage, Horticulture & Maraîchage",
    description: "Cultures potagères périurbaines, production de légumes frais, pépinières d'arbres fruitiers et embellissement écologique des espaces.",
    category: "agropastoral",
    objectives: [
      "Favoriser l'horticulture maraîchère à haute rentabilité pour les familles",
      "Encourager la consommation d'aliments sains et biologiques",
      "Diffuser les techniques de compostage et gestion de l'eau"
    ],
    articleRef: "Article 6 (f) des Statuts"
  },
  {
    id: "couture",
    code: "g",
    title: "Coupe, Couture & Confection textile",
    description: "Ateliers d'apprentissage des techniques de couture, patronage, confection d'habits traditionnels et modernes, uniformes et articles textiles.",
    category: "technique",
    objectives: [
      "Doter les femmes et les jeunes d'un métier d'autonomie financière immédiate",
      "Produire des vêtements de qualité accessibles aux communautés",
      "Valoriser l'artisanat textile et l'entrepreneuriat féminin"
    ],
    articleRef: "Article 6 (g) des Statuts"
  },
  {
    id: "coiffure",
    code: "h",
    title: "Coiffure & Soins esthétiques",
    description: "Centre de formation pratique en coiffure mixte, soins capillaires et esthétiques, gestion d'un salon et hygiène professionnelle.",
    category: "technique",
    objectives: [
      "Former des professionnels qualifiés de la beauté et de l'esthétique",
      "Inculquer les règles d'hygiène et de stérilisation du matériel",
      "Incuber des micro-salons de coiffure de quartier"
    ],
    articleRef: "Article 6 (h) des Statuts"
  },
  {
    id: "wash",
    code: "i",
    title: "WASH — Eau, Hygiène & Assainissement",
    description: "Aménagement de points d'eau potable, construction d'infrastructures sanitaires hygiéniques et sensibilisation communautaire aux règles d'assainissement.",
    category: "social",
    objectives: [
      "Réduire l'incidence des maladies d'origine hydrique",
      "Promouvoir le lavage des mains et l'hygiène domestique",
      "Garantir l'accès à une eau saine pour les populations vulnérables"
    ],
    articleRef: "Article 6 (i) des Statuts"
  },
  {
    id: "environnement",
    code: "j",
    title: "Protection de l'Environnement & Gestion durable",
    description: "Actions de reboisement, assainissement public, gestion responsable des déchets et préservation des écosystèmes fragiles de la région d'Ituri.",
    category: "social",
    objectives: [
      "Lutter contre l'érosion des sols et la déforestation",
      "Organiser des salongo et campagnes d'assainissement urbain et rural",
      "Sensibiliser les populations aux enjeux climatiques et à la gestion durable des ressources"
    ],
    articleRef: "Article 6 (j) des Statuts"
  },
  {
    id: "insertion",
    code: "k",
    title: "Insertion socio-économique & Entrepreneuriat",
    description: "Appui à la création de micro-entreprises, formation en gestion simplifiée, accompagnement vers l'accès au microcrédit et création d'emplois durables.",
    category: "social",
    objectives: [
      "Briser le cycle de la précarité par l'auto-emploi rémunérateur",
      "Encadrer l'esprit d'entreprise chez les jeunes et les femmes vulnérables",
      "Créer des coopératives d'épargne et de solidarité mutuelle"
    ],
    articleRef: "Article 6 (k) des Statuts"
  },
  {
    id: "solidarite",
    code: "l",
    title: "Solidarité & Développement communautaire",
    description: "Renforcement du lien social, entraide communautaire, inclusion des personnes en situation de vulnérabilité et cohésion pacifique en province de l'Ituri.",
    category: "social",
    objectives: [
      "Tisser des filets de sécurité sociale communautaire",
      "Promouvoir la paix et la coexistence harmonieuse entre les communautés",
      "Encourager le bénévolat et l'action citoyenne concertée"
    ],
    articleRef: "Article 6 (l) des Statuts"
  }
];

export const STATUTS_ARTICLES: Article[] = [
  {
    id: "statut-preambule",
    number: 0,
    part: "statuts",
    title: "Préambule",
    titreNumber: "PRÉAMBULE",
    titreGroup: "PRÉAMBULE",
    content: "Les membres fondateurs, animés par la volonté de promouvoir la solidarité, la formation, l’encadrement, l’autonomie économique et le développement intégral et inclusif des communautés, décident de constituer une association dénommée « Association de Multi-Services », en sigle AMS. L’association entend contribuer à l’amélioration des conditions de vie par la formation, l’accompagnement, les activités productives, les prestations de services et la protection de l’environnement.",
    highlights: ["solidarité", "formation", "autonomie économique", "développement durable"]
  },
  {
    id: "statut-art-1",
    number: 1,
    part: "statuts",
    title: "Dénomination",
    titreNumber: "TITRE I",
    titreGroup: "DISPOSITIONS GÉNÉRALES",
    content: "Il est constitué une association sans but lucratif dénommée « Association de Multi-Services », en sigle AMS, régie par les présents statuts et par les lois applicables en République démocratique du Congo."
  },
  {
    id: "statut-art-2",
    number: 2,
    part: "statuts",
    title: "Nature et principes",
    titreNumber: "TITRE I",
    titreGroup: "DISPOSITIONS GÉNÉRALES",
    content: "L’AMS est une organisation à vocation sociale et communautaire, sans discrimination. Elle agit selon les principes de solidarité, de transparence, de participation, de responsabilité, d’égalité et de respect de la dignité humaine. Les revenus de ses activités sont affectés à son objet et ne sont pas distribués aux membres à titre de bénéfices."
  },
  {
    id: "statut-art-3",
    number: 3,
    part: "statuts",
    title: "Siège et antennes",
    titreNumber: "TITRE I",
    titreGroup: "DISPOSITIONS GÉNÉRALES",
    content: "Le siège social est établi à Bunia, province de l’Ituri, RDC. L’association peut créer des antennes, sections ou représentations dans d’autres localités par décision du Conseil d’administration, sous réserve de ratification par l’Assemblée générale et des formalités légales applicables."
  },
  {
    id: "statut-art-4",
    number: 4,
    part: "statuts",
    title: "Durée",
    titreNumber: "TITRE I",
    titreGroup: "DISPOSITIONS GÉNÉRALES",
    content: "L’association est constituée pour une durée indéterminée à compter de son adoption et de l’accomplissement des formalités requises."
  },
  {
    id: "statut-art-5",
    number: 5,
    part: "statuts",
    title: "Objet général",
    titreNumber: "TITRE II",
    titreGroup: "OBJET ET OBJECTIFS",
    content: "L’AMS a pour objet de contribuer au développement intégral, inclusif et durable des personnes et des communautés, notamment par la formation, l’emploi, l’entrepreneuriat, les activités agropastorales, les prestations de services et la protection de l’environnement."
  },
  {
    id: "statut-art-6",
    number: 6,
    part: "statuts",
    title: "Objectifs spécifiques",
    titreNumber: "TITRE II",
    titreGroup: "OBJET ET OBJECTIFS",
    content: "L’association vise à poursuivre les objectifs spécifiques suivants :",
    subPoints: [
      { letter: "a", text: "organiser la formation professionnelle et l’encadrement technique ;" },
      { letter: "b", text: "promouvoir l’agriculture, l’élevage et les activités agropastorales ;" },
      { letter: "c", text: "prévenir les violences basées sur le genre (VBG), sensibiliser et orienter les personnes vers les services compétents ;" },
      { letter: "d", text: "développer les services de transport ;" },
      { letter: "e", text: "organiser des prestations de gardiennage dans le respect des autorisations requises ;" },
      { letter: "f", text: "promouvoir le jardinage, l’horticulture et le maraîchage ;" },
      { letter: "g", text: "développer la coupe, la couture et la confection ;" },
      { letter: "h", text: "offrir des formations en coiffure et soins esthétiques ;" },
      { letter: "i", text: "soutenir les activités WASH — eau, hygiène et assainissement ;" },
      { letter: "j", text: "protéger l’environnement, encourager l’assainissement et la gestion durable des ressources ;" },
      { letter: "k", text: "favoriser l’insertion socio-économique, l’entrepreneuriat et la création d’emplois ;" },
      { letter: "l", text: "encourager la solidarité et le développement communautaire." }
    ]
  },
  {
    id: "statut-art-7",
    number: 7,
    part: "statuts",
    title: "Activités",
    titreNumber: "TITRE II",
    titreGroup: "OBJET ET OBJECTIFS",
    content: "Pour atteindre ses objectifs, l’AMS peut mener des formations, ateliers, campagnes de sensibilisation, projets agricoles et d’élevage, activités de jardinage, ateliers de couture et de coiffure, services de transport, activités d’assainissement et environnementales, projets WASH, actions de prévention des VBG et autres activités licites liées à son objet. Les activités réglementées ne sont exercées qu’après obtention des autorisations requises."
  },
  {
    id: "statut-art-8",
    number: 8,
    part: "statuts",
    title: "Catégories",
    titreNumber: "TITRE III",
    titreGroup: "MEMBRES",
    content: "L’association comprend les membres fondateurs, les membres actifs, les membres associés ou partenaires et les membres d’honneur. Les conditions particulières d’admission et les droits de vote sont fixés par le règlement d’ordre intérieur (ROI)."
  },
  {
    id: "statut-art-9",
    number: 9,
    part: "statuts",
    title: "Admission",
    titreNumber: "TITRE III",
    titreGroup: "MEMBRES",
    content: "Toute personne qui adhère à l’objet et aux principes de l’AMS peut demander son admission selon la procédure prévue au ROI. L’admission est constatée par le Conseil d’administration et inscrite au registre des membres."
  },
  {
    id: "statut-art-10",
    number: 10,
    part: "statuts",
    title: "Droits",
    titreNumber: "TITRE III",
    titreGroup: "MEMBRES",
    content: "Les membres en règle ont le droit de participer aux activités, d’être informés de la gestion, de prendre part aux assemblées selon leur catégorie et de présenter des propositions dans l’intérêt de l’association."
  },
  {
    id: "statut-art-11",
    number: 11,
    part: "statuts",
    title: "Devoirs",
    titreNumber: "TITRE III",
    titreGroup: "MEMBRES",
    content: "Les membres doivent respecter les statuts et le ROI, préserver les biens de l’association, s’acquitter des cotisations décidées, participer aux activités et éviter tout acte portant atteinte à la réputation ou aux intérêts de l’AMS."
  },
  {
    id: "statut-art-12",
    number: 12,
    part: "statuts",
    title: "Perte de qualité",
    titreNumber: "TITRE III",
    titreGroup: "MEMBRES",
    content: "La qualité de membre se perd par démission écrite, décès, dissolution de la personne morale membre, non-paiement prolongé selon le ROI, ou exclusion pour motif grave après que l’intéressé a pu présenter ses explications. Toute décision d’exclusion peut faire l’objet d’un recours devant l’Assemblée générale."
  },
  {
    id: "statut-art-13",
    number: 13,
    part: "statuts",
    title: "Organes",
    titreNumber: "TITRE IV",
    titreGroup: "ORGANES ET ATTRIBUTIONS",
    content: "Les organes de l’AMS sont : l’Assemblée générale, le Conseil d’administration, la Coordination exécutive et, si l’Assemblée générale l’institue, une Commission de contrôle."
  },
  {
    id: "statut-art-14",
    number: 14,
    part: "statuts",
    title: "Assemblée générale",
    titreNumber: "TITRE IV",
    titreGroup: "ORGANES ET ATTRIBUTIONS",
    content: "L’Assemblée générale est l’organe suprême. Elle adopte et modifie les statuts et le ROI, élit ou révoque les administrateurs, approuve les rapports d’activités et financiers, examine le budget, fixe les grandes orientations, statue sur les recours, décide de la dissolution et de l’affectation du patrimoine conformément à la loi. Elle se réunit au moins une fois par an. La convocation précise la date, le lieu et l’ordre du jour."
  },
  {
    id: "statut-art-15",
    number: 15,
    part: "statuts",
    title: "Conseil d’administration",
    titreNumber: "TITRE IV",
    titreGroup: "ORGANES ET ATTRIBUTIONS",
    content: "Le Conseil d’administration assure l’orientation stratégique et la surveillance de la gestion. Il prépare le plan d’action et le budget, adopte les politiques internes, suit les projets, autorise les dépenses dans les limites approuvées, supervise la Coordination exécutive, recherche des partenariats et présente à l’Assemblée générale les rapports annuels. Il se réunit au moins une fois par trimestre ou chaque fois que nécessaire."
  },
  {
    id: "statut-art-16",
    number: 16,
    part: "statuts",
    title: "Coordination exécutive",
    titreNumber: "TITRE IV",
    titreGroup: "ORGANES ET ATTRIBUTIONS",
    content: "La Coordination exécutive assure la gestion quotidienne et l’exécution des décisions des organes. Elle prépare les programmes, coordonne le personnel et les volontaires, suit les activités de terrain, tient les dossiers administratifs, prépare les rapports périodiques et propose les besoins budgétaires. Elle agit dans les limites des délégations reçues."
  },
  {
    id: "statut-art-17",
    number: 17,
    part: "statuts",
    title: "Commission de contrôle",
    titreNumber: "TITRE IV",
    titreGroup: "ORGANES ET ATTRIBUTIONS",
    content: "Lorsqu’elle est instituée, la Commission de contrôle vérifie la régularité des opérations financières et administratives, consulte les pièces justificatives, formule des recommandations et présente son rapport à l’Assemblée générale. Elle ne se substitue pas aux organes de gestion."
  },
  {
    id: "statut-art-18",
    number: 18,
    part: "statuts",
    title: "Mandats et vacance",
    titreNumber: "TITRE IV",
    titreGroup: "ORGANES ET ATTRIBUTIONS",
    content: "Le nombre d’administrateurs, la durée de leur mandat, les conditions d’élection, de renouvellement et de remplacement sont fixés par l’Assemblée générale et précisés au ROI. Les responsables agissent dans l’intérêt de l’association et rendent compte de leur gestion."
  },
  {
    id: "statut-art-19",
    number: 19,
    part: "statuts",
    title: "Ressources",
    titreNumber: "TITRE V",
    titreGroup: "RESSOURCES ET GESTION FINANCIÈRE",
    content: "Les ressources proviennent notamment des cotisations, dons et contributions autorisés, subventions, financements de partenaires, recettes des activités licites et toute autre ressource conforme à la loi."
  },
  {
    id: "statut-art-20",
    number: 20,
    part: "statuts",
    title: "Gestion",
    titreNumber: "TITRE V",
    titreGroup: "RESSOURCES ET GESTION FINANCIÈRE",
    content: "Les fonds sont utilisés exclusivement pour l’objet social. Une comptabilité régulière et des pièces justificatives sont tenues. Le budget est préparé par la Coordination exécutive, examiné par le Conseil d’administration et soumis à l’approbation de l’Assemblée générale. Les dépenses suivent une procédure d’autorisation et de justification définie au ROI."
  },
  {
    id: "statut-art-21",
    number: 21,
    part: "statuts",
    title: "Patrimoine et conflits d’intérêts",
    titreNumber: "TITRE V",
    titreGroup: "RESSOURCES ET GESTION FINANCIÈRE",
    content: "Les biens de l’association sont distincts des biens personnels des membres. Tout responsable ayant un intérêt personnel dans une décision doit le déclarer et s’abstenir de participer au vote concerné. Aucun membre ne peut s’approprier les fonds ou biens de l’AMS."
  },
  {
    id: "statut-art-22",
    number: 22,
    part: "statuts",
    title: "Modification des statuts",
    titreNumber: "TITRE VI",
    titreGroup: "MODIFICATION, DISSOLUTION ET DISPOSITIONS FINALES",
    content: "Toute proposition de modification est communiquée aux membres avec la convocation de l’Assemblée générale. Elle est adoptée selon les règles de quorum et de majorité prévues au ROI, sous réserve des exigences légales applicables."
  },
  {
    id: "statut-art-23",
    number: 23,
    part: "statuts",
    title: "Dissolution",
    titreNumber: "TITRE VI",
    titreGroup: "MODIFICATION, DISSOLUTION ET DISPOSITIONS FINALES",
    content: "La dissolution ne peut être décidée que par une Assemblée générale extraordinaire convoquée à cet effet et conformément à la législation. Après apurement du passif, l’actif net est attribué à une organisation poursuivant des objectifs similaires ou à toute destination autorisée par la loi ; il ne peut être partagé entre les membres."
  },
  {
    id: "statut-art-24",
    number: 24,
    part: "statuts",
    title: "Adoption et entrée en vigueur",
    titreNumber: "TITRE VI",
    titreGroup: "MODIFICATION, DISSOLUTION ET DISPOSITIONS FINALES",
    content: "Les présents statuts sont adoptés par les membres fondateurs à Bunia, le 25 mai 2026, sous réserve des formalités légales nécessaires."
  },
  {
    id: "statut-art-25",
    number: 25,
    part: "statuts",
    title: "Membres fondateurs",
    titreNumber: "TITRE VI",
    titreGroup: "MODIFICATION, DISSOLUTION ET DISPOSITIONS FINALES",
    content: "Les 11 personnes désignées sont identifiées comme membres fondateurs de l’AMS ayant adopté et paraphé les statuts constitutifs à Bunia le 25 mai 2026."
  }
];

export const ROI_ARTICLES: Article[] = [
  {
    id: "roi-art-1",
    number: 1,
    part: "roi",
    title: "Objet",
    titreNumber: "TITRE I",
    titreGroup: "DISPOSITIONS GÉNÉRALES",
    content: "Le présent règlement d’ordre intérieur (ROI) précise les modalités pratiques d’application des statuts et les règles de vie, de discipline et de fonctionnement de l’AMS."
  },
  {
    id: "roi-art-2",
    number: 2,
    part: "roi",
    title: "Application",
    titreNumber: "TITRE I",
    titreGroup: "DISPOSITIONS GÉNÉRALES",
    content: "Le ROI s’applique à tous les membres, responsables, employés, volontaires et participants aux activités, dans la mesure compatible avec leur statut et la loi."
  },
  {
    id: "roi-art-3",
    number: 3,
    part: "roi",
    title: "Demande d’adhésion",
    titreNumber: "TITRE II",
    titreGroup: "ADHÉSION ET VIE ASSOCIATIVE",
    content: "Le candidat adresse une demande écrite ou remplit le formulaire d’adhésion. Il fournit les informations nécessaires, accepte les statuts et le ROI et s’engage à respecter les décisions régulièrement prises."
  },
  {
    id: "roi-art-4",
    number: 4,
    part: "roi",
    title: "Cotisations",
    titreNumber: "TITRE II",
    titreGroup: "ADHÉSION ET VIE ASSOCIATIVE",
    content: "Le montant, la périodicité et les modalités de paiement des cotisations sont décidés par l’Assemblée générale. Toute modification est communiquée aux membres. Une difficulté de paiement peut être soumise au Conseil d’administration pour arrangement."
  },
  {
    id: "roi-art-5",
    number: 5,
    part: "roi",
    title: "Participation et comportement",
    titreNumber: "TITRE II",
    titreGroup: "ADHÉSION ET VIE ASSOCIATIVE",
    content: "Les membres participent aux réunions et activités, respectent les personnes et les biens, évitent les propos discriminatoires, le harcèlement, l’exploitation, les violences et l’utilisation abusive du nom ou du logo de l’association."
  },
  {
    id: "roi-art-6",
    number: 6,
    part: "roi",
    title: "Démission et exclusion",
    titreNumber: "TITRE II",
    titreGroup: "ADHÉSION ET VIE ASSOCIATIVE",
    content: "La démission est adressée par écrit au Secrétariat. En cas de manquement, un avertissement ou une mesure proportionnée peut être prise. Toute exclusion pour motif grave exige une notification des faits, la possibilité de présenter une défense et une décision motivée, susceptible de recours."
  },
  {
    id: "roi-art-7",
    number: 7,
    part: "roi",
    title: "Convocation",
    titreNumber: "TITRE III",
    titreGroup: "RÉUNIONS ET PROCÉDURES",
    content: "Les convocations indiquent la date, l’heure, le lieu ou le moyen de participation et l’ordre du jour. Sauf urgence, un délai raisonnable est observé."
  },
  {
    id: "roi-art-8",
    number: 8,
    part: "roi",
    title: "Délibérations",
    titreNumber: "TITRE III",
    titreGroup: "RÉUNIONS ET PROCÉDURES",
    content: "Les décisions sont recherchées par consensus ; à défaut, elles sont prises à la majorité simple des membres présents ayant droit de vote, sauf disposition légale ou statutaire imposant une majorité particulière. Les abstentions et résultats sont consignés au procès-verbal."
  },
  {
    id: "roi-art-9",
    number: 9,
    part: "roi",
    title: "Procès-verbaux",
    titreNumber: "TITRE III",
    titreGroup: "RÉUNIONS ET PROCÉDURES",
    content: "Chaque réunion donne lieu à un procès-verbal indiquant les participants, points examinés, décisions, responsables d’exécution et échéances. Le procès-verbal est signé par le président de séance et le secrétaire."
  },
  {
    id: "roi-art-10",
    number: 10,
    part: "roi",
    title: "Président",
    titreNumber: "TITRE IV",
    titreGroup: "ATTRIBUTIONS PRATIQUES DES RESPONSABLES",
    content: "Le Président représente l’association dans les actes de la vie civile dans les limites des pouvoirs qui lui sont conférés ; convoque et préside les réunions des organes concernés ; veille à l’exécution des décisions ; signe les documents officiels et autorise les engagements conformément aux décisions budgétaires. Il rend compte à l’Assemblée générale."
  },
  {
    id: "roi-art-11",
    number: 11,
    part: "roi",
    title: "Vice-président",
    titreNumber: "TITRE IV",
    titreGroup: "ATTRIBUTIONS PRATIQUES DES RESPONSABLES",
    content: "Le Vice-président assiste le Président, suit les tâches qui lui sont déléguées et remplace le Président en cas d’absence ou d’empêchement, dans les limites prévues par les statuts et les décisions du Conseil d’administration."
  },
  {
    id: "roi-art-12",
    number: 12,
    part: "roi",
    title: "Secrétaire général",
    titreNumber: "TITRE IV",
    titreGroup: "ATTRIBUTIONS PRATIQUES DES RESPONSABLES",
    content: "Le Secrétaire prépare les convocations, rédige et conserve les procès-verbaux, tient le registre des membres et les archives, assure la correspondance, suit les décisions et veille à la conservation des documents administratifs."
  },
  {
    id: "roi-art-13",
    number: 13,
    part: "roi",
    title: "Secrétaire adjoint",
    titreNumber: "TITRE IV",
    titreGroup: "ATTRIBUTIONS PRATIQUES DES RESPONSABLES",
    content: "Il appuie le Secrétaire général, assure les tâches qui lui sont confiées et le remplace en cas d’absence."
  },
  {
    id: "roi-art-14",
    number: 14,
    part: "roi",
    title: "Trésorier",
    titreNumber: "TITRE IV",
    titreGroup: "ATTRIBUTIONS PRATIQUES DES RESPONSABLES",
    content: "Le Trésorier suit les recettes et dépenses, conserve les pièces justificatives, prépare les états financiers, tient ou supervise les livres comptables, effectue les rapprochements et présente périodiquement la situation financière. Les retraits et paiements suivent le mécanisme de double validation adopté par le Conseil d’administration."
  },
  {
    id: "roi-art-15",
    number: 15,
    part: "roi",
    title: "Trésorier adjoint",
    titreNumber: "TITRE IV",
    titreGroup: "ATTRIBUTIONS PRATIQUES DES RESPONSABLES",
    content: "Il assiste le Trésorier, vérifie les pièces selon les délégations reçues et assure l’intérim en cas d’absence."
  },
  {
    id: "roi-art-16",
    number: 16,
    part: "roi",
    title: "Coordinateur exécutif",
    titreNumber: "TITRE IV",
    titreGroup: "ATTRIBUTIONS PRATIQUES DES RESPONSABLES",
    content: "Le Coordinateur planifie les activités, coordonne les équipes et les antennes, suit les indicateurs, prépare les rapports techniques, identifie les besoins en formation et veille à la mise en œuvre des décisions et des projets."
  },
  {
    id: "roi-art-17",
    number: 17,
    part: "roi",
    title: "Responsables de secteurs et d’antennes",
    titreNumber: "TITRE IV",
    titreGroup: "ATTRIBUTIONS PRATIQUES DES RESPONSABLES",
    content: "Ils préparent les plans de travail, organisent les activités locales, gèrent les moyens qui leur sont confiés, transmettent les rapports et respectent les procédures de sécurité, de protection et de reddition des comptes."
  },
  {
    id: "roi-art-18",
    number: 18,
    part: "roi",
    title: "Commission de contrôle",
    titreNumber: "TITRE IV",
    titreGroup: "ATTRIBUTIONS PRATIQUES DES RESPONSABLES",
    content: "Elle examine les documents et opérations, vérifie la conformité des dépenses, signale les risques et présente ses observations à l’Assemblée générale. Elle doit rester indépendante des opérations qu’elle contrôle."
  },
  {
    id: "roi-art-19",
    number: 19,
    part: "roi",
    title: "Autorisation des dépenses",
    titreNumber: "TITRE V",
    titreGroup: "GESTION FINANCIÈRE ET MATÉRIELLE",
    content: "Toute dépense doit être liée à l’objet de l’association, prévue au budget ou autorisée selon la procédure exceptionnelle approuvée, et appuyée par une pièce justificative. Les seuils d’autorisation sont fixés par décision du Conseil d’administration."
  },
  {
    id: "roi-art-20",
    number: 20,
    part: "roi",
    title: "Caisse et banque",
    titreNumber: "TITRE V",
    titreGroup: "GESTION FINANCIÈRE ET MATÉRIELLE",
    content: "Les fonds sont conservés dans un compte au nom de l’association lorsque cela est possible. Les personnes habilitées à signer sont désignées par décision écrite. Les fonds personnels et ceux de l’AMS ne doivent jamais être confondus."
  },
  {
    id: "roi-art-21",
    number: 21,
    part: "roi",
    title: "Inventaire",
    titreNumber: "TITRE V",
    titreGroup: "GESTION FINANCIÈRE ET MATÉRIELLE",
    content: "Les équipements, matériels, documents et biens sont inscrits dans un inventaire. Tout emprunt, transfert, perte ou dommage est signalé et documenté."
  },
  {
    id: "roi-art-22",
    number: 22,
    part: "roi",
    title: "Rapports",
    titreNumber: "TITRE V",
    titreGroup: "GESTION FINANCIÈRE ET MATÉRIELLE",
    content: "Les responsables d’activités transmettent des rapports techniques et financiers selon le calendrier fixé par la Coordination exécutive."
  },
  {
    id: "roi-art-23",
    number: 23,
    part: "roi",
    title: "Tolérance zéro",
    titreNumber: "TITRE VI",
    titreGroup: "ÉTHIQUE, PROTECTION ET SANCTIONS",
    content: "Sont interdits la fraude, la corruption, le détournement de fonds, le harcèlement, l’exploitation sexuelle, les violences, les discriminations, l’abus d’autorité et les représailles contre les personnes qui signalent de bonne foi un problème."
  },
  {
    id: "roi-art-24",
    number: 24,
    part: "roi",
    title: "Confidentialité et protection",
    titreNumber: "TITRE VI",
    titreGroup: "ÉTHIQUE, PROTECTION ET SANCTIONS",
    content: "Les informations personnelles ou sensibles sont protégées. Les situations de VBG sont traitées avec dignité, confidentialité, consentement éclairé et orientation vers des services spécialisés compétents ; les responsables ne se substituent pas aux professionnels qualifiés."
  },
  {
    id: "roi-art-25",
    number: 25,
    part: "roi",
    title: "Sanctions",
    titreNumber: "TITRE VI",
    titreGroup: "ÉTHIQUE, PROTECTION ET SANCTIONS",
    content: "Selon la gravité et après audition de la personne concernée, les mesures peuvent être : rappel à l’ordre, avertissement écrit, suspension temporaire de responsabilités ou proposition d’exclusion. Les mesures doivent être motivées, proportionnées et susceptibles de recours. Les faits pouvant relever de la justice sont signalés aux autorités compétentes conformément à la loi."
  },
  {
    id: "roi-art-26",
    number: 26,
    part: "roi",
    title: "Réclamations",
    titreNumber: "TITRE VI",
    titreGroup: "ÉTHIQUE, PROTECTION ET SANCTIONS",
    content: "Toute personne peut adresser une plainte au Secrétariat ou à un responsable désigné. Les plaintes impliquant un responsable sont examinées par un organe impartial, sans conflit d’intérêts."
  },
  {
    id: "roi-art-27",
    number: 27,
    part: "roi",
    title: "Modification",
    titreNumber: "TITRE VII",
    titreGroup: "DISPOSITIONS FINALES",
    content: "Toute modification du ROI est proposée au Conseil d’administration et soumise à l’approbation de l’Assemblée générale."
  },
  {
    id: "roi-art-28",
    number: 28,
    part: "roi",
    title: "Entrée en vigueur",
    titreNumber: "TITRE VII",
    titreGroup: "DISPOSITIONS FINALES",
    content: "Le présent ROI entre en vigueur après son adoption par l’Assemblée générale. En cas de contradiction, les statuts et la législation applicable prévalent."
  }
];

export const ORGANIGRAMME_DATA: OrganeNode[] = [
  {
    id: "ag",
    name: "Assemblée Générale (AG)",
    type: "deliberatif",
    mandate: "Organe souverain et suprême de l'AMS. Adopte et modifie les Statuts et le ROI, élit et révoque les administrateurs, examine et approuve les bilans financiers et rapports moraux annuels.",
    articleStatuts: "Article 14 des Statuts",
    articleROI: "Articles 7-9 du ROI",
    composition: "Tous les membres fondateurs, actifs et d'honneur en règle de cotisation.",
    reunions: "Au moins 1 fois par an en session ordinaire, ou en session extraordinaire sur convocation."
  },
  {
    id: "ca",
    name: "Conseil d'Administration (CA)",
    type: "direction",
    parent: "ag",
    mandate: "Orientation stratégique et surveillance de la gestion. Prépare le plan d'action, vote les budgets, adopte les règlements internes et supervise la Coordination Exécutive.",
    articleStatuts: "Article 15 des Statuts",
    articleROI: "Articles 10-15 du ROI",
    composition: "Administrateurs élus par l'AG (Président, Vice-Président, Secrétaire Général, Trésorier, etc.).",
    reunions: "Au moins 1 fois par trimestre ou chaque fois que nécessaire."
  },
  {
    id: "controle",
    name: "Commission de Contrôle",
    type: "controle",
    parent: "ag",
    mandate: "Organe indépendant institué par l'AG pour auditer et vérifier la régularité des opérations financières, administratives et comptables, et présenter son rapport direct à l'AG.",
    articleStatuts: "Article 17 des Statuts",
    articleROI: "Article 18 du ROI",
    composition: "Commissaires aux comptes élus par l'AG, indépendants des organes de gestion quotidienne.",
    reunions: "Vérifications périodiques et rapport annuel à l'Assemblée Générale."
  },
  {
    id: "coordination",
    name: "Coordination Exécutive",
    type: "execution",
    parent: "ca",
    mandate: "Gestion quotidienne et opérationnelle. Planification des projets, coordination du personnel de terrain, exécution budgétaire et rédaction des rapports périodiques.",
    articleStatuts: "Article 16 des Statuts",
    articleROI: "Article 16 du ROI",
    composition: "Coordinateur Exécutif et son équipe administrative et technique permanente.",
    reunions: "Direction continue et réunions hebdomadaires de coordination de terrain."
  },
  {
    id: "poles-terrain",
    name: "Responsables de Secteurs & Antennes",
    type: "operationnel",
    parent: "coordination",
    mandate: "Mise en œuvre des activités sur le terrain dans Bunia et territoires : Formation, Agropastoral, VBG/Protection, Transport/Gardiennage, Jardinage, Coupe-Couture/Coiffure, WASH/Environnement.",
    articleStatuts: "Articles 6, 7 & 16 des Statuts",
    articleROI: "Article 17 du ROI",
    composition: "Chefs de pôles techniques, formateurs, agronomes, travailleurs sociaux et chefs d'antennes.",
    reunions: "Suivi opérationnel continu et rapports d'activités périodiques."
  }
];
