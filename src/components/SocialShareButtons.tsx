import React, { useState } from 'react';
import { Check, Copy, Share2 } from 'lucide-react';

interface SocialShareProps {
  url?: string;
  title?: string;
  summary?: string;
  variant?: 'footer' | 'toolbar' | 'compact' | 'card';
  showLabels?: boolean;
}

export const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.767.463 3.494 1.343 5.018L2 22l5.093-1.336A10.015 10.015 0 0 0 12.03 22c5.535 0 10.031-4.496 10.031-10.031C22.062 6.496 17.566 2 12.031 2Zm0 18.257c-1.523 0-3.013-.41-4.312-1.186l-.31-.184-3.204.84.855-3.123-.203-.323A8.223 8.223 0 0 1 3.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257Zm4.526-6.182c-.248-.124-1.467-.724-1.695-.807-.228-.083-.393-.124-.559.124-.165.248-.641.807-.786.972-.145.165-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.737-.658-1.235-1.47-1.38-1.718-.145-.248-.015-.382.109-.505.111-.112.248-.29.373-.435.124-.145.165-.248.248-.414.083-.165.041-.31-.02-.435-.062-.124-.559-1.347-.766-1.845-.202-.486-.407-.42-.559-.428l-.476-.008c-.165 0-.434.062-.661.31-.228.248-.869.849-.869 2.07 0 1.221.89 2.401 1.014 2.567.124.165 1.751 2.674 4.242 3.75 1.488.643 2.083.684 2.827.573.479-.071 1.467-.6 1.674-1.179.207-.579.207-1.076.145-1.179-.062-.103-.228-.165-.476-.29Z" />
  </svg>
);

export const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const SocialShareButtons: React.FC<SocialShareProps> = ({
  url,
  title = "Association de Multi-Services (AMS) - Bunia, Province de l'Ituri, RDC",
  summary = "Portail officiel de l'AMS : Statuts Constitutifs, Règlement d'Ordre Intérieur (ROI), Fiche d'adhésion en ligne et barèmes de cotisations.",
  variant = 'footer',
  showLabels = true
}) => {
  const [copied, setCopied] = useState(false);

  const getTargetUrl = () => {
    if (url) {
      if (url.startsWith('http')) return url;
      if (typeof window !== 'undefined') {
        return `${window.location.origin}${window.location.pathname}${url}`;
      }
      return url;
    }
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return 'https://ams-bunia.org';
  };

  const handleCopyLink = async () => {
    const target = getTargetUrl();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(target);
      } else {
        const input = document.createElement('input');
        input.value = target;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const targetUrl = getTargetUrl();

  const shareUrls = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n${summary}\n👉 Consulter le portail officiel : ${targetUrl}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(targetUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(targetUrl)}`
  };

  const openShare = (networkUrl: string) => {
    if (typeof window !== 'undefined') {
      window.open(networkUrl, '_blank', 'noopener,noreferrer,width=640,height=580');
    }
  };

  // 1. FOOTER VARIANT
  if (variant === 'footer') {
    return (
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          {/* WhatsApp */}
          <button
            type="button"
            onClick={() => openShare(shareUrls.whatsapp)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-stone-950 border border-[#25D366]/40 transition-colors cursor-pointer"
            title="Diffuser sur WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>

          {/* Facebook */}
          <button
            type="button"
            onClick={() => openShare(shareUrls.facebook)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#1877F2]/20 hover:bg-[#1877F2] text-[#60a5fa] hover:text-white border border-[#1877F2]/40 transition-colors cursor-pointer"
            title="Partager sur Facebook"
          >
            <FacebookIcon className="w-3.5 h-3.5" />
            <span>Facebook</span>
          </button>

          {/* LinkedIn */}
          <button
            type="button"
            onClick={() => openShare(shareUrls.linkedin)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#0A66C2]/20 hover:bg-[#0A66C2] text-[#93c5fd] hover:text-white border border-[#0A66C2]/40 transition-colors cursor-pointer"
            title="Diffuser sur LinkedIn"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </button>

          {/* Copier le lien */}
          <button
            type="button"
            onClick={handleCopyLink}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer border ${
              copied 
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500' 
                : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
            }`}
            title="Copier le lien direct"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Lien copié !' : 'Copier le lien'}</span>
          </button>
        </div>
      </div>
    );
  }

  // 2. TOOLBAR VARIANT (for StatutsReader top toolbar)
  if (variant === 'toolbar') {
    return (
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="text-xs text-stone-600 font-medium flex items-center gap-1 mr-1">
          <Share2 className="w-3.5 h-3.5 text-stone-500" />
          <span>Diffuser :</span>
        </span>

        {/* WhatsApp */}
        <button
          type="button"
          onClick={() => openShare(shareUrls.whatsapp)}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded bg-[#25D366]/15 hover:bg-[#25D366] text-emerald-900 hover:text-white border border-emerald-300 transition-colors cursor-pointer"
          title="Partager sur WhatsApp"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-700 hover:text-white" />
          {showLabels && <span className="hidden sm:inline">WhatsApp</span>}
        </button>

        {/* Facebook */}
        <button
          type="button"
          onClick={() => openShare(shareUrls.facebook)}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded bg-[#1877F2]/10 hover:bg-[#1877F2] text-blue-900 hover:text-white border border-blue-200 transition-colors cursor-pointer"
          title="Partager sur Facebook"
        >
          <FacebookIcon className="w-3.5 h-3.5 text-blue-700 hover:text-white" />
          {showLabels && <span className="hidden sm:inline">Facebook</span>}
        </button>

        {/* LinkedIn */}
        <button
          type="button"
          onClick={() => openShare(shareUrls.linkedin)}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-blue-950 hover:text-white border border-blue-300 transition-colors cursor-pointer"
          title="Partager sur LinkedIn"
        >
          <LinkedInIcon className="w-3.5 h-3.5 text-blue-800 hover:text-white" />
          {showLabels && <span className="hidden sm:inline">LinkedIn</span>}
        </button>

        {/* Copier le lien */}
        <button
          type="button"
          onClick={handleCopyLink}
          className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded border transition-colors cursor-pointer ${
            copied
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold'
              : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-300'
          }`}
          title="Copier le lien direct vers ces statuts"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
          <span className="hidden sm:inline">{copied ? 'Copié !' : 'Lien'}</span>
        </button>
      </div>
    );
  }

  // 3. COMPACT VARIANT (for article action bar)
  return (
    <div className="inline-flex items-center gap-1">
      <button
        type="button"
        onClick={() => openShare(shareUrls.whatsapp)}
        className="p-1 rounded text-stone-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
        title="Partager cet article sur WhatsApp"
      >
        <WhatsAppIcon className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => openShare(shareUrls.facebook)}
        className="p-1 rounded text-stone-400 hover:text-blue-700 hover:bg-blue-50 transition-colors"
        title="Partager cet article sur Facebook"
      >
        <FacebookIcon className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => openShare(shareUrls.linkedin)}
        className="p-1 rounded text-stone-400 hover:text-blue-900 hover:bg-blue-50 transition-colors"
        title="Partager cet article sur LinkedIn"
      >
        <LinkedInIcon className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={handleCopyLink}
        className={`p-1 rounded transition-colors ${
          copied ? 'text-emerald-600 bg-emerald-50' : 'text-stone-400 hover:text-stone-700 hover:bg-stone-100'
        }`}
        title={copied ? "Lien de l'article copié !" : "Copier le lien direct vers cet article"}
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
