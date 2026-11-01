/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Breadcrumb } from './components/Breadcrumb';
import { HeroSection } from './components/HeroSection';
import { KeyIndicatorsSection } from './components/KeyIndicatorsSection';
import { NewsSection } from './components/NewsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PolesSection } from './components/PolesSection';
import { PartnersSection } from './components/PartnersSection';
import { StatutsReader } from './components/StatutsReader';
import { FaqSection } from './components/FaqSection';
import { GovernanceOrganigramme } from './components/GovernanceOrganigramme';
import { FoundersSection } from './components/FoundersSection';
import { AdhesionContactModal } from './components/AdhesionContactModal';
import { PrintDocument } from './components/PrintDocument';
import { Footer } from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticleNum, setSelectedArticleNum] = useState<number | null>(null);
  const [isAdhesionOpen, setIsAdhesionOpen] = useState(false);
  const [isPrintOpen, setIsPrintOpen] = useState(false);
  const [readerPart, setReaderPart] = useState<'statuts' | 'roi'>('statuts');
  const [currentSectionId, setCurrentSectionId] = useState<string>('accueil');
  const [adhesionPrefill, setAdhesionPrefill] = useState<{
    domaine?: string;
    montantFixe?: string;
    montantPaye?: string;
    solde?: string;
    profession?: string;
  } | null>(null);

  const handleOpenAdhesionWithPrefill = (params: {
    domaine: string;
    montantFixe: string;
    montantPaye: string;
    solde: string;
    profession: string;
  }) => {
    setAdhesionPrefill(params);
    setIsAdhesionOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    setCurrentSectionId(sectionId);
    if (sectionId === 'statuts') {
      setReaderPart('statuts');
      const el = document.getElementById('statuts') || document.getElementById('corpus-juridique');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'roi') {
      setReaderPart('roi');
      const el = document.getElementById('roi') || document.getElementById('corpus-juridique');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTab = (tab: 'statuts' | 'roi' | 'poles' | 'gouvernance') => {
    handleNavigateSection(tab);
  };

  const handleSelectArticleRef = (articleNum: number, part: 'statuts' | 'roi') => {
    setReaderPart(part);
    setSelectedArticleNum(articleNum);
    setCurrentSectionId(part);
    const targetId = `${part === 'statuts' ? 'statut' : 'roi'}-art-${articleNum}`;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      const readerEl = document.getElementById(part) || document.getElementById('corpus-juridique');
      readerEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1C1917]">
      {/* Top Header */}
      <Header
        activeSection={readerPart}
        onOpenAdhesion={() => setIsAdhesionOpen(true)}
        onOpenPrint={() => setIsPrintOpen(true)}
      />

      {/* Breadcrumb Navigation Rail */}
      <Breadcrumb
        currentSectionId={currentSectionId}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectTab={handleSelectTab}
          onOpenAdhesion={() => setIsAdhesionOpen(true)}
        />

        {/* Indicateurs Clés & Dashboard Opérationnel */}
        <KeyIndicatorsSection
          onSelectArticleRef={handleSelectArticleRef}
          onOpenAdhesion={() => setIsAdhesionOpen(true)}
        />

        {/* Actualités & Activités Récentes en Ituri */}
        <NewsSection
          onSelectArticleRef={handleSelectArticleRef}
          onOpenAdhesion={() => setIsAdhesionOpen(true)}
        />

        {/* Témoignages de Membres & Retours d'Expérience */}
        <TestimonialsSection
          onOpenAdhesion={() => setIsAdhesionOpen(true)}
          onSelectArticleRef={handleSelectArticleRef}
        />

        {/* 12 Pôles d'intervention & Objectifs (Article 6 & 7) */}
        <PolesSection onSelectArticleRef={handleSelectArticleRef} />

        {/* Espace Partenaires & Bailleurs de Fonds (Article 19 des Statuts) */}
        <PartnersSection onSelectArticleRef={handleSelectArticleRef} />

        {/* Legal Text Reader: Statuts Constitutifs & ROI */}
        <StatutsReader
          key={readerPart}
          initialPart={readerPart}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedArticleNum={selectedArticleNum}
          onPartChange={(part) => {
            setReaderPart(part);
            setCurrentSectionId(part);
          }}
        />

        {/* Section Adhésion & Simulateur de Cotisations selon le ROI & FAQ */}
        <FaqSection
          onSelectArticleRef={handleSelectArticleRef}
          onOpenAdhesion={() => {
            setAdhesionPrefill(null);
            setIsAdhesionOpen(true);
          }}
          onOpenAdhesionWithPrefill={handleOpenAdhesionWithPrefill}
        />

        {/* Organigramme & Governance Structure */}
        <GovernanceOrganigramme />

        {/* Registre des 11 Membres Fondateurs (Article 25) */}
        <FoundersSection onOpenPrint={() => setIsPrintOpen(true)} />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenAdhesion={() => {
          setAdhesionPrefill(null);
          setIsAdhesionOpen(true);
        }}
        onOpenPrint={() => setIsPrintOpen(true)}
      />

      {/* Modal: Adhésion, Simulateur & Guichet Éthique/VBG */}
      <AdhesionContactModal
        isOpen={isAdhesionOpen}
        onClose={() => setIsAdhesionOpen(false)}
        prefillData={adhesionPrefill}
        onSelectArticleRef={handleSelectArticleRef}
      />

      {/* Modal: Document Imprimable & Homologation */}
      <PrintDocument
        isOpen={isPrintOpen}
        onClose={() => setIsPrintOpen(false)}
      />
    </div>
  );
}
