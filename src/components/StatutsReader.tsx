import React, { useState, useMemo } from 'react';
import { Article, STATUTS_ARTICLES, ROI_ARTICLES } from '../data/statutsData';
import { Search, Copy, Check, ChevronDown, ChevronUp, BookOpen, Shield, Bookmark, ExternalLink, Share2 } from 'lucide-react';
import { SocialShareButtons } from './SocialShareButtons';

interface StatutsReaderProps {
  initialPart?: 'statuts' | 'roi';
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedArticleNum?: number | null;
  onPartChange?: (part: 'statuts' | 'roi') => void;
}

export const StatutsReader: React.FC<StatutsReaderProps> = ({
  initialPart = 'statuts',
  searchQuery,
  onSearchChange,
  selectedArticleNum,
  onPartChange
}) => {
  const [activePart, setActivePart] = useState<'statuts' | 'roi'>(initialPart);
  const [selectedTitre, setSelectedTitre] = useState<string>('all');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [collapsedArticles, setCollapsedArticles] = useState<Record<string, boolean>>({});

  // Sync initialPart when changed from parent
  React.useEffect(() => {
    setActivePart(initialPart);
  }, [initialPart]);

  const articles = activePart === 'statuts' ? STATUTS_ARTICLES : ROI_ARTICLES;

  // Auto uncollapse and focus on selectedArticleNum if set
  React.useEffect(() => {
    if (selectedArticleNum !== null && selectedArticleNum !== undefined) {
      const targetId = `${activePart === 'statuts' ? 'statut' : 'roi'}-art-${selectedArticleNum}`;
      setCollapsedArticles((prev) => ({ ...prev, [targetId]: false }));
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [selectedArticleNum, activePart]);

  // Extract unique Titres for filters
  const titres = useMemo(() => {
    const map = new Map<string, string>();
    articles.forEach((art) => {
      if (!map.has(art.titreGroup)) {
        map.set(art.titreGroup, art.titreNumber);
      }
    });
    return Array.from(map.entries()).map(([group, number]) => ({ group, number }));
  }, [articles]);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    let list = articles;

    if (selectedTitre !== 'all') {
      list = list.filter((a) => a.titreGroup === selectedTitre);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((a) => {
        const inTitle = a.title.toLowerCase().includes(q);
        const inContent = a.content.toLowerCase().includes(q);
        const inNumber = `article ${a.number}`.includes(q) || `art. ${a.number}`.includes(q) || `art ${a.number}`.includes(q);
        const inSub = a.subPoints?.some((sp) => sp.text.toLowerCase().includes(q));
        return inTitle || inContent || inNumber || inSub;
      });
    }

    return list;
  }, [articles, selectedTitre, searchQuery]);

  const toggleCollapse = (id: string) => {
    setCollapsedArticles((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleCopyCitation = (article: Article) => {
    const textToCopy = `${activePart === 'statuts' ? 'Statuts Constitutifs' : 'Règlement d\'Ordre Intérieur (ROI)'} de l'AMS Bunia - ${article.titreNumber} (${article.titreGroup}) - Article ${article.number} (${article.title}) :\n"${article.content}"`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(article.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Helper for search highlight
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="bg-amber-200 text-amber-950 px-1 py-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const getTextClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-base sm:text-lg leading-relaxed';
      case 'xl':
        return 'text-lg sm:text-xl leading-loose';
      case 'normal':
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  return (
    <section id="corpus-juridique" className="relative py-14 border-b border-stone-200 scroll-mt-28">
      <div id="statuts" className="absolute -top-28" />
      <div id="roi" className="absolute -top-28" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual Mode Switcher Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-8">
          <div className="flex items-center gap-3.5">
            <img
              src="/assets/aistudio/Gemini_Generated_Image_wfuuiuwfuuiuwfuu__1__ed939cde.jpg"
              alt="Logo AMS"
              className="w-12 h-12 object-contain rounded-full bg-white border border-stone-200 p-0.5 shadow-xs shrink-0 hidden sm:block"
            />
            <div>
              <span className="text-xs uppercase tracking-widest font-sans font-bold text-stone-600 block mb-1">
                Corpus Juridique Officiel · Bunia, 25 mai 2026
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {activePart === 'statuts' ? 'Partie I — Statuts Constitutifs' : 'Partie II — Règlement d’Ordre Intérieur (ROI)'}
              </h2>
            </div>
          </div>

          {/* Interactive Document Switcher */}
          <div className="flex items-center p-1 bg-stone-200/80 rounded-lg">
            <button
              onClick={() => {
                setActivePart('statuts');
                setSelectedTitre('all');
                onPartChange?.('statuts');
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                activePart === 'statuts'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-stone-700" />
              <span>Statuts Constitutifs (25 Art.)</span>
            </button>
            <button
              onClick={() => {
                setActivePart('roi');
                setSelectedTitre('all');
                onPartChange?.('roi');
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                activePart === 'roi'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-stone-700" />
              <span>Règlement ROI (28 Art.)</span>
            </button>
          </div>
        </div>

        {/* Reader Utility Toolbar */}
        <div className="bg-[#F8F6F0] border border-stone-200 rounded-lg p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-600">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={`Rechercher dans les ${activePart === 'statuts' ? 'Statuts' : 'ROI'} (ex. adhésion, quorum, sanctions...)`}
              className="w-full pl-9 pr-8 py-2 bg-white border border-stone-300 rounded-md text-xs sm:text-sm text-stone-900 placeholder:text-stone-600 focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-stone-600 hover:text-stone-800"
              >
                ×
              </button>
            )}
          </div>

          {/* Quick jump to specific article */}
          <div className="flex items-center gap-2 shrink-0">
            <label htmlFor="article-select" className="text-xs text-stone-600 whitespace-nowrap font-medium">
              Sauter à :
            </label>
            <select
              id="article-select"
              onChange={(e) => {
                const id = e.target.value;
                if (!id) return;
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  setCollapsedArticles((prev) => ({ ...prev, [id]: false }));
                }
              }}
              className="bg-white border border-stone-300 text-xs text-stone-800 rounded-md px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-stone-900"
              defaultValue=""
            >
              <option value="" disabled>Sélectionner un article...</option>
              {articles.map((art) => (
                <option key={art.id} value={art.id}>
                  {art.number === 0 ? 'Préambule' : `Article ${art.number} — ${art.title}`}
                </option>
              ))}
            </select>
          </div>

          {/* Font Size & Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-stone-600 font-medium">Taille du texte :</span>
            <div className="flex items-center bg-white border border-stone-300 rounded-md overflow-hidden p-0.5">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  fontSize === 'normal' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
                }`}
                title="Taille normale"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 text-sm font-semibold rounded ${
                  fontSize === 'large' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
                }`}
                title="Taille plus grande"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`px-2 py-1 text-base font-semibold rounded ${
                  fontSize === 'xl' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
                }`}
                title="Grand confort de lecture"
              >
                A++
              </button>
            </div>
          </div>

          {/* Social Share Toolbar Buttons */}
          <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l md:pl-4 border-stone-200">
            <SocialShareButtons
              variant="toolbar"
              url={`#${activePart}`}
              title={`Association de Multi-Services (AMS) - ${activePart === 'statuts' ? 'Statuts Constitutifs' : 'Règlement d’Ordre Intérieur (ROI)'}`}
              summary="Consultez les textes juridiques officiels de l'Association de Multi-Services (AMS Bunia, Province de l'Ituri, RDC)."
            />
          </div>
        </div>

        {/* Titres Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 text-xs">
          <button
            onClick={() => setSelectedTitre('all')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors font-medium ${
              selectedTitre === 'all'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Tous les Titres ({articles.length})
          </button>
          {titres.map((t) => (
            <button
              key={t.group}
              onClick={() => setSelectedTitre(t.group)}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors font-medium ${
                selectedTitre === t.group
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {t.number} : {t.group}
            </button>
          ))}
        </div>

        {/* Search Results Summary */}
        {searchQuery.trim() && (
          <div className="mb-6 flex items-center justify-between text-xs text-stone-600 px-1">
            <span>
              <strong>{filteredArticles.length}</strong> article{filteredArticles.length > 1 ? 's' : ''} correspondant à « {searchQuery} »
            </span>
            <button
              onClick={() => onSearchChange('')}
              className="text-stone-800 hover:underline"
            >
              Réinitialiser la recherche
            </button>
          </div>
        )}

        {/* Articles List */}
        <div className="space-y-6">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white border border-stone-200 rounded-lg p-6">
              <p className="text-stone-500 font-serif text-base">
                Aucun article ne correspond à votre recherche « {searchQuery} ».
              </p>
              <button
                onClick={() => {
                  onSearchChange('');
                  setSelectedTitre('all');
                }}
                className="mt-3 px-3 py-1.5 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md"
              >
                Afficher l’ensemble des articles
              </button>
            </div>
          ) : (
            filteredArticles.map((article) => {
              const isCollapsed = collapsedArticles[article.id] || false;
              const isBookmarked = bookmarkedIds.includes(article.id);
              const isHighlighted = selectedArticleNum === article.number;

              return (
                <article
                  key={article.id}
                  id={article.id}
                  className={`bg-white rounded-lg border transition-all ${
                    isHighlighted
                      ? 'border-amber-600 ring-2 ring-amber-500/20 shadow-md'
                      : 'border-stone-200 hover:border-stone-300 shadow-xs'
                  }`}
                >
                  {/* Article Header Card */}
                  <div className="p-4 sm:p-5 flex items-start justify-between gap-4 border-b border-stone-100">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-1">
                        <span className="font-mono font-semibold text-stone-800">
                          {article.titreNumber}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="uppercase tracking-wider text-[11px] font-sans">
                          {article.titreGroup}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 flex items-center gap-2">
                        {article.number === 0 ? (
                          article.title
                        ) : (
                          <>
                            <span className="text-amber-900">Article {article.number}</span>
                            <span aria-hidden="true" className="text-stone-300 font-normal">—</span>
                            <span>{highlightMatch(article.title, searchQuery)}</span>
                          </>
                        )}
                      </h3>
                    </div>

                    {/* Article Action Tools */}
                    <div className="flex items-center gap-1 shrink-0">
                      {/* Social share for this specific article */}
                      <div className="flex items-center border-r border-stone-200 pr-1 mr-0.5">
                        <SocialShareButtons
                          variant="compact"
                          url={`#${article.id}`}
                          title={`AMS Bunia - ${article.part === 'statuts' ? 'Statuts' : 'ROI'} Article ${article.number} : ${article.title}`}
                          summary={article.content.slice(0, 140) + '...'}
                        />
                      </div>

                      <button
                        onClick={() => toggleBookmark(article.id)}
                        className={`p-1.5 rounded hover:bg-stone-100 transition-colors ${
                          isBookmarked ? 'text-amber-700' : 'text-stone-400 hover:text-stone-700'
                        }`}
                        title={isBookmarked ? 'Retirer des signets' : 'Enregistrer cet article'}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-700' : ''}`} />
                      </button>

                      <button
                        onClick={() => handleCopyCitation(article)}
                        className="p-1.5 text-stone-400 hover:text-stone-700 rounded hover:bg-stone-100 transition-colors"
                        title="Copier la citation de l'article"
                      >
                        {copiedId === article.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => toggleCollapse(article.id)}
                        className="p-1.5 text-stone-400 hover:text-stone-700 rounded hover:bg-stone-100 transition-colors"
                        title={isCollapsed ? 'Déplier' : 'Replier'}
                      >
                        {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Article Content */}
                  {!isCollapsed && (
                    <div className="p-4 sm:p-6 bg-white rounded-b-lg">
                      <div className={`font-serif text-stone-800 ${getTextClass()}`}>
                        {highlightMatch(article.content, searchQuery)}
                      </div>

                      {/* Sub points if any (e.g. Article 6 objectives) */}
                      {article.subPoints && article.subPoints.length > 0 && (
                        <div className="mt-4 pl-2 sm:pl-4 space-y-2 border-l border-stone-200">
                          {article.subPoints.map((sp, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base font-serif text-stone-800">
                              <span className="w-5 h-5 rounded bg-stone-100 text-stone-700 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                                {sp.letter}
                              </span>
                              <div className="flex-1">
                                {highlightMatch(sp.text, searchQuery)}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Footnote / Context Indicator for special articles */}
                      {article.number === 23 && activePart === 'roi' && (
                        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-950 font-sans">
                          <strong>Charte Éthique Fondamentale :</strong> La clause de tolérance zéro s'applique strictement à toutes les instances de l'AMS, partenaires et personnels de terrain à Bunia et en Ituri.
                        </div>
                      )}

                      {article.number === 24 && activePart === 'roi' && (
                        <div className="mt-4 p-3 bg-stone-100 border border-stone-200 rounded text-xs text-stone-800 font-sans">
                          <strong>Protection & Dignité :</strong> Traitement confidentiel et orientation bienveillante vers les structures sanitaires et psychosociales spécialisées sans se substituer aux praticiens.
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
