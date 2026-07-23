"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslation } from '@/contexts/TranslationContext';

export const PainPointsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'cards' | 'matrix'>('cards');

  const cards = [
    {
      id: 'agencies',
      icon: '⏳',
      painTitle: t('painPoints.cards.0.painTitle'),
      painDesc: t('painPoints.cards.0.painDesc'),
      solutionTitle: t('painPoints.cards.0.solutionTitle'),
      solutionDesc: t('painPoints.cards.0.solutionDesc'),
    },
    {
      id: 'hiring',
      icon: '💸',
      painTitle: t('painPoints.cards.1.painTitle'),
      painDesc: t('painPoints.cards.1.painDesc'),
      solutionTitle: t('painPoints.cards.1.solutionTitle'),
      solutionDesc: t('painPoints.cards.1.solutionDesc'),
    },
    {
      id: 'freelancers',
      icon: '⚠️',
      painTitle: t('painPoints.cards.2.painTitle'),
      painDesc: t('painPoints.cards.2.painDesc'),
      solutionTitle: t('painPoints.cards.2.solutionTitle'),
      solutionDesc: t('painPoints.cards.2.solutionDesc'),
    },
    {
      id: 'nocode',
      icon: '🧱',
      painTitle: t('painPoints.cards.3.painTitle'),
      painDesc: t('painPoints.cards.3.painDesc'),
      solutionTitle: t('painPoints.cards.3.solutionTitle'),
      solutionDesc: t('painPoints.cards.3.solutionDesc'),
    },
  ];

  const tableRows = [
    {
      feature: t('painPoints.tableRows.0.feature'),
      agency: t('painPoints.tableRows.0.agency'),
      inHouse: t('painPoints.tableRows.0.inHouse'),
      freelance: t('painPoints.tableRows.0.freelance'),
      conaiSoft: t('painPoints.tableRows.0.conaiSoft'),
    },
    {
      feature: t('painPoints.tableRows.1.feature'),
      agency: t('painPoints.tableRows.1.agency'),
      inHouse: t('painPoints.tableRows.1.inHouse'),
      freelance: t('painPoints.tableRows.1.freelance'),
      conaiSoft: t('painPoints.tableRows.1.conaiSoft'),
    },
    {
      feature: t('painPoints.tableRows.2.feature'),
      agency: t('painPoints.tableRows.2.agency'),
      inHouse: t('painPoints.tableRows.2.inHouse'),
      freelance: t('painPoints.tableRows.2.freelance'),
      conaiSoft: t('painPoints.tableRows.2.conaiSoft'),
    },
    {
      feature: t('painPoints.tableRows.3.feature'),
      agency: t('painPoints.tableRows.3.agency'),
      inHouse: t('painPoints.tableRows.3.inHouse'),
      freelance: t('painPoints.tableRows.3.freelance'),
      conaiSoft: t('painPoints.tableRows.3.conaiSoft'),
    },
    {
      feature: t('painPoints.tableRows.4.feature'),
      agency: t('painPoints.tableRows.4.agency'),
      inHouse: t('painPoints.tableRows.4.inHouse'),
      freelance: t('painPoints.tableRows.4.freelance'),
      conaiSoft: t('painPoints.tableRows.4.conaiSoft'),
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#080b12] relative overflow-hidden border-b border-slate-800/80" id="pain-points">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono mb-4">
            <span>⚠️</span>
            <span className="font-semibold tracking-wider uppercase">{t('painPoints.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t('painPoints.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t('painPoints.subtitle')}
          </p>

          {/* View Mode Toggle Switch */}
          <div className="mt-8 w-full max-w-md mx-auto inline-flex p-1 bg-slate-900/90 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('cards')}
              className={`flex-1 px-3 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 min-h-11 ${
                activeTab === 'cards'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('painPoints.viewCards')}
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex-1 px-3 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 min-h-11 ${
                activeTab === 'matrix'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('painPoints.viewMatrix')}
            </button>
          </div>
        </div>

        {/* Tab 1: Pain & Solution Cards */}
        {activeTab === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="glass-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group"
              >
                {/* Pain side */}
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl sm:text-3xl p-2 rounded-xl bg-slate-900 border border-slate-800 flex-shrink-0">{card.icon}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {card.painTitle}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 border-b border-slate-800/80 pb-6">
                    {card.painDesc}
                  </p>
                </div>

                {/* ConaiSoft Solution side */}
                <div className="bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900/50 rounded-xl p-4 border border-cyan-500/20">
                  <div className="flex items-start gap-2 text-cyan-400 text-[11px] sm:text-xs font-mono font-bold mb-1.5 uppercase">
                    <span className="w-2 h-2 mt-1 rounded-full bg-cyan-400 flex-shrink-0"></span>
                    <span className="leading-snug">{card.solutionTitle}</span>
                  </div>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    {card.solutionDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Comparison Matrix Table */}
        {activeTab === 'matrix' && (
          <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <p className="px-4 py-2 text-[11px] text-slate-400 border-b border-slate-800 sm:hidden">
              {t('painPoints.scrollHint')}
            </p>
            <div className="overflow-x-auto overscroll-x-contain touch-pan-x">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/90 text-xs font-mono text-slate-300 border-b border-slate-800 uppercase tracking-wider">
                    <th className="sticky left-0 z-10 bg-slate-900 py-3 px-4 sm:py-4 sm:px-6">{t('painPoints.tableHeaders.feature')}</th>
                    <th className="py-3 px-4 sm:py-4 sm:px-6 text-slate-400">{t('painPoints.tableHeaders.agency')}</th>
                    <th className="py-3 px-4 sm:py-4 sm:px-6 text-slate-400">{t('painPoints.tableHeaders.inHouse')}</th>
                    <th className="py-3 px-4 sm:py-4 sm:px-6 text-slate-400">{t('painPoints.tableHeaders.freelance')}</th>
                    <th className="py-3 px-4 sm:py-4 sm:px-6 bg-cyan-950/60 text-cyan-300 font-bold border-l border-cyan-500/30">{t('painPoints.tableHeaders.conaiSoft')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm">
                  {tableRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="sticky left-0 z-10 bg-[#0b1220] py-3 px-4 sm:py-4 sm:px-6 font-semibold text-white whitespace-nowrap">{row.feature}</td>
                      <td className="py-3 px-4 sm:py-4 sm:px-6 text-slate-400">{row.agency}</td>
                      <td className="py-3 px-4 sm:py-4 sm:px-6 text-slate-400">{row.inHouse}</td>
                      <td className="py-3 px-4 sm:py-4 sm:px-6 text-slate-400">{row.freelance}</td>
                      <td className="py-3 px-4 sm:py-4 sm:px-6 font-bold text-cyan-300 bg-cyan-950/30 border-l border-cyan-500/30">{row.conaiSoft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </Container>
    </section>
  );
};
