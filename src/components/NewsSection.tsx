import React, { useState, useMemo } from 'react';
import { Calendar, MapPin, ArrowRight, Tag, Eye, X, BookOpen, Share2, Check } from 'lucide-react';

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  location: string;
  category: 'institutionnel' | 'agropastoral' | 'formation' | 'wash';
  categoryLabel: string;
  summary: string;
  fullText: string[];
  articleRef: string;
  articleNum: number;
  part: 'statuts' | 'roi';
  image: string;
  featured?: boolean;
}

interface NewsSectionProps {
  onSelectArticleRef: (articleNum: number, part: 'statuts' | 'roi') => void;
  onOpenAdhesion: () => void;
}

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'news-1',
    title: "Adoption constitutive des Statuts et lancement officiel des activités de l'AMS à Bunia",
    date: "25 Mai 2026",
    location: "Bunia, Province de l'Ituri",
    category: 'institutionnel',
    categoryLabel: "Vie Institutionnelle",
    summary: "Réunis en assemblée constitutive solennelle à Bunia, les 11 membres fondateurs ont adopté à l'unanimité les Statuts Constitutifs et le Règlement d'Ordre Intérieur (ROI), scellant la devise « Ensemble pour un développement durable ».",
    fullText: [
      "Le 25 mai 2026 marque une date charnière pour le développement communautaire dans la Province de l'Ituri. Réunis en Assemblée Générale Constitutive dans la ville de Bunia, onze personnalités locales engagées ont paraphé et promulgué les textes fondamentaux de l'Association de Multi-Services (AMS).",
      "Sous la conduite de Monsieur Tambaki Muhigi David et des cofondateurs, l'assemblée a fixé comme priorité absolue l'autonomie économique des familles par la formation qualifiante, la structuration agropastorale et la cohésion sociale.",
      "Le Conseil d'Administration et la Coordination Exécutive ont reçu mandat d'accomplir l'ensemble des formalités d'enregistrement administratif auprès des autorités de la République Démocratique du Congo."
    ],
    articleRef: "Article 1 & 25 des Statuts",
    articleNum: 25,
    part: 'statuts',
    image: "/src/assets/images/ams_bunia_hero_1793021907689.jpg",
    featured: true
  },
  {
    id: 'news-2',
    title: "Déploiement agropastoral : Distribution de semences maraîchères aux coopératives périurbaines",
    date: "12 Juin 2026",
    location: "Territoire d'Irumu & périphérie de Bunia",
    category: 'agropastoral',
    categoryLabel: "Agropastoral & Climat",
    summary: "Mise en œuvre du pôle maraîcher (Art. 6b & 6f) : distribution de semences maraîchères certifiées et encadrement technique de 80 exploitants familiaux pour la sécurité alimentaire.",
    fullText: [
      "En droite ligne avec l'Article 6, alinéas (b) et (f) des Statuts Constitutifs, l'AMS a entamé la phase pilote de son programme agropastoral et maraîcher dans la ceinture verte de Bunia.",
      "Plus de 80 exploitants regroupés en comités de solidarité ont reçu des kits de semences sélectionnées (amarantes, choux, tomates, carottes) ainsi qu'un encadrement de proximité sur les techniques de compostage biologique et d'irrigation raisonnée.",
      "Cette initiative vise à approvisionner les marchés de Bunia en légumes frais tout en garantissant des revenus stables et décents aux ménages ruraux."
    ],
    articleRef: "Article 6(b & f) des Statuts",
    articleNum: 6,
    part: 'statuts',
    image: "/src/assets/images/ams_agropastoral_ituri_1793021909382.jpg"
  },
  {
    id: 'news-3',
    title: "Inauguration du point d'eau communautaire WASH et campagne d'assainissement public",
    date: "04 Juillet 2026",
    location: "Quartier périphérique de Bunia, Ituri",
    category: 'wash',
    categoryLabel: "WASH & Environnement",
    summary: "Conformément à l'Article 6(i), l'AMS a procédé à la remise d'une borne-fontaine d'eau potable gravitaire desservant plus de 400 ménages, accompagnée d'ateliers d'hygiène domestique.",
    fullText: [
      "L'accès à une eau propre et l'assainissement constituent un droit fondamental et un préalable indispensable au développement humain en Ituri. L'AMS a concrétisé son engagement statutaire en inaugurant une station de distribution d'eau potable communautaire.",
      "L'ouvrage, réalisé avec le concours des volontaires locaux et des artisans de la structure, permet de réduire significativement la corvée d'eau pour les femmes et les enfants et d'endiguer la propagation des maladies d'origine hydrique.",
      "Un comité de gestion d'eau a été élu sous la supervision de la Coordination de l'AMS pour veiller à la maintenance durable de l'installation."
    ],
    articleRef: "Article 6(i & j) des Statuts",
    articleNum: 6,
    part: 'statuts',
    image: "/src/assets/images/ams_wash_community_ituri_1793023889415.jpg"
  },
  {
    id: 'news-4',
    title: "Lancement de la première promotion d'apprentissage en coupe-couture et confection",
    date: "18 Août 2026",
    location: "Atelier Central AMS, Bunia",
    category: 'formation',
    categoryLabel: "Formation & Métiers",
    summary: "Accueil de 35 apprenantes pour un cycle qualifiant de 6 mois en patronage, couture et coupe textile industrielle, en application de l'Article 6(g) des Statuts.",
    fullText: [
      "Le pôle Confection et Formation Professionnelle de l'AMS a ouvert ses portes à sa première cohorte d'apprenantes issues de milieux vulnérables de Bunia.",
      "Au programme de cette formation pratique : apprentissage sur machines à coudre à pédale et électriques, traçage de patrons, confection d'uniformes scolaires, vêtements de travail et habits traditionnels en tissu pagne.",
      "À l'issue des six mois d'apprentissage, chaque lauréate bénéficiera d'un accompagnement personnalisé vers l'insertion professionnelle et la constitution de micro-ateliers coopératifs."
    ],
    articleRef: "Article 6(g) des Statuts",
    articleNum: 6,
    part: 'statuts',
    image: "/src/assets/images/ams_vocational_crafts_1793021907805.jpg"
  }
];

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectArticleRef, onOpenAdhesion }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'institutionnel' | 'agropastoral' | 'formation' | 'wash'>('all');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const filteredNews = useMemo(() => {
    if (selectedCategory === 'all') return NEWS_DATA;
    return NEWS_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const featuredNews = filteredNews.find((n) => n.featured) || filteredNews[0];
  const secondaryNews = filteredNews.filter((n) => n.id !== featuredNews?.id);

  const handleShare = (article: NewsArticle) => {
    const text = `${article.title} — Actualités AMS Bunia (Ituri, RDC)`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${text}\n${window.location.origin}#actualites`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="actualites" className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs uppercase tracking-widest font-sans font-bold text-stone-500 block mb-2">
              Dépêches de terrain & Vie associative
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Actualités & Activités Récentes en Ituri
            </h2>
            <p className="mt-2 text-stone-600 text-sm max-w-2xl leading-relaxed">
              Suivez l'avancement concret des programmes de l'AMS à Bunia et dans les territoires : assemblées statutaires, projets agropastoraux, ateliers de formation et points d'eau WASH.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg overflow-x-auto shrink-0 text-xs font-medium">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Toutes ({NEWS_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('institutionnel')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'institutionnel'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Vie Statutaire
            </button>
            <button
              onClick={() => setSelectedCategory('agropastoral')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'agropastoral'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Agropastoral
            </button>
            <button
              onClick={() => setSelectedCategory('wash')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'wash'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              WASH & Eau
            </button>
            <button
              onClick={() => setSelectedCategory('formation')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'formation'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Formation
            </button>
          </div>
        </div>

        {/* Editorial Front-Page 3-Tier Salience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tier 1: Lead Story (Dominant Card, 7 cols) */}
          {featuredNews && (
            <div className="lg:col-span-7 flex flex-col justify-between bg-[#FAF9F5] border border-stone-300 rounded-lg overflow-hidden group shadow-xs">
              <div className="relative h-64 sm:h-80 overflow-hidden bg-stone-200">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 bg-stone-900/90 backdrop-blur-xs text-white text-[11px] font-sans font-semibold px-2.5 py-1 rounded">
                  À la Une · {featuredNews.categoryLabel}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-xs text-stone-200 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-300" />
                    {featuredNews.date}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-300" />
                    {featuredNews.location}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug mb-3">
                    {featuredNews.title}
                  </h3>
                  <p className="text-stone-700 font-serif text-sm sm:text-base leading-relaxed mb-6">
                    {featuredNews.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(featuredNews)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors"
                  >
                    <span>Lire le communiqué complet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-xs text-stone-600 font-mono">
                    Réf : {featuredNews.articleRef}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tier 2: Secondary Features (Vertical Stack, 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {secondaryNews.map((news) => (
              <div
                key={news.id}
                onClick={() => setSelectedArticle(news)}
                className="p-4 bg-white border border-stone-200 hover:border-stone-400 rounded-lg cursor-pointer transition-all hover:shadow-xs flex gap-4 items-start"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded overflow-hidden shrink-0 bg-stone-100 border border-stone-200">
                  <img
                    src={news.image}
                    alt={news.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-1">
                    <span className="font-semibold text-stone-800">{news.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{news.date}</span>
                  </div>

                  <h4 className="font-serif font-bold text-stone-900 text-sm leading-snug line-clamp-2 mb-1.5 hover:text-amber-900 transition-colors">
                    {news.title}
                  </h4>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {news.summary}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Announcement Box */}
            <div className="mt-auto p-4 rounded-lg border border-amber-200/90 bg-amber-50/80">
              <span className="text-[11px] font-sans uppercase font-bold text-amber-900 tracking-wider block mb-1">
                Avis du Secrétariat Général
              </span>
              <p className="text-xs text-amber-950 font-serif leading-relaxed mb-3">
                L'AMS rappelle que les adhésions pour l'exercice 2026-2027 sont ouvertes pour les membres actifs, partenaires et personnes souhaitant s'investir dans le développement durable de Bunia et de l'Ituri.
              </p>
              <button
                onClick={onOpenAdhesion}
                className="text-xs font-semibold text-amber-950 hover:underline inline-flex items-center gap-1"
              >
                <span>Déposer une candidature d'adhésion</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Modal / Reader for Full News Article */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white border border-stone-300 rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden my-8">
            
            <div className="relative h-60 sm:h-72 bg-stone-200">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-stone-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-white text-xs border border-white/10 shadow-sm">
                <img src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg" alt="Logo AMS" className="w-5 h-5 rounded-full object-contain bg-white p-0.5" />
                <span className="font-medium text-[11px] font-sans">Association de Multi-Services</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 bg-stone-900/80 hover:bg-stone-900 text-white rounded-full transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 text-xs text-stone-100 flex items-center gap-3 bg-stone-950/60 px-3 py-1.5 rounded backdrop-blur-xs">
                <span>{selectedArticle.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.location}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug mb-4">
                {selectedArticle.title}
              </h3>

              <div className="space-y-4 text-sm font-serif text-stone-800 leading-relaxed text-justify mb-6">
                {selectedArticle.fullText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="p-3 bg-[#FAF9F5] border border-stone-200 rounded-lg text-xs text-stone-700 flex items-center justify-between mb-6">
                <span className="font-sans">
                  <strong>Cadre juridique :</strong> {selectedArticle.articleRef}
                </span>
                <button
                  onClick={() => {
                    const num = selectedArticle.articleNum;
                    const part = selectedArticle.part;
                    setSelectedArticle(null);
                    onSelectArticleRef(num, part);
                  }}
                  className="font-semibold text-stone-900 hover:text-amber-900 underline inline-flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Consulter l'article statutaire</span>
                </button>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={() => handleShare(selectedArticle)}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Lien copié !' : 'Partager cette actualité'}</span>
                </button>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md"
                >
                  Fermer
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
