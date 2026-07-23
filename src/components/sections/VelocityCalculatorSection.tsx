"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslation } from '@/contexts/TranslationContext';

export const VelocityCalculatorSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTypeId, setSelectedTypeId] = useState<string>('saas');

  const projectTypes = [
    {
      id: 'saas',
      name: t('calculator.projectTypes.0.name'),
      tradTime: t('calculator.projectTypes.0.tradTime'),
      tradCost: t('calculator.projectTypes.0.tradCost'),
      aiTime: t('calculator.projectTypes.0.aiTime'),
      aiCost: t('calculator.projectTypes.0.aiCost'),
      savings: t('calculator.projectTypes.0.savings'),
    },
    {
      id: 'ai-app',
      name: t('calculator.projectTypes.1.name'),
      tradTime: t('calculator.projectTypes.1.tradTime'),
      tradCost: t('calculator.projectTypes.1.tradCost'),
      aiTime: t('calculator.projectTypes.1.aiTime'),
      aiCost: t('calculator.projectTypes.1.aiCost'),
      savings: t('calculator.projectTypes.1.savings'),
    },
    {
      id: 'mobile',
      name: t('calculator.projectTypes.2.name'),
      tradTime: t('calculator.projectTypes.2.tradTime'),
      tradCost: t('calculator.projectTypes.2.tradCost'),
      aiTime: t('calculator.projectTypes.2.aiTime'),
      aiCost: t('calculator.projectTypes.2.aiCost'),
      savings: t('calculator.projectTypes.2.savings'),
    },
    {
      id: 'workflow',
      name: t('calculator.projectTypes.3.name'),
      tradTime: t('calculator.projectTypes.3.tradTime'),
      tradCost: t('calculator.projectTypes.3.tradCost'),
      aiTime: t('calculator.projectTypes.3.aiTime'),
      aiCost: t('calculator.projectTypes.3.aiCost'),
      savings: t('calculator.projectTypes.3.savings'),
    },
  ];

  const activeProject = projectTypes.find(p => p.id === selectedTypeId) || projectTypes[0];

  return (
    <section className="py-20 lg:py-32 bg-[#07090e] relative overflow-hidden border-b border-slate-800/80" id="velocity">
      {/* Glow highlight */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <span>⚡</span>
            <span className="font-semibold tracking-wider uppercase">{t('calculator.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t('calculator.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t('calculator.subtitle')}
          </p>
        </div>

        {/* Interactive Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {projectTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedTypeId(type.id)}
              className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                selectedTypeId === type.id
                  ? 'bg-slate-900 border-cyan-500/80 text-white shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">PROYECTO</div>
              <div className="text-sm font-bold truncate">{type.name}</div>
            </button>
          ))}
        </div>

        {/* Display Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Column 1: Traditional */}
            <div className="p-6 bg-slate-950/60 rounded-xl border border-red-500/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-red-400 uppercase font-bold tracking-wider">
                  {t('calculator.labels.traditional')}
                </span>
                <span className="text-xs text-slate-400">Agencias / Hiring</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Tiempo de Desarrollo</div>
                  <div className="text-2xl font-extrabold text-slate-300 font-mono mt-0.5">{activeProject.tradTime}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Inversión Estimada</div>
                  <div className="text-2xl font-extrabold text-red-400 font-mono mt-0.5">{activeProject.tradCost}</div>
                </div>
              </div>
            </div>

            {/* Column 2: ConaiSoft AI Engine */}
            <div className="p-6 bg-gradient-to-tr from-blue-950/80 via-slate-900/90 to-cyan-950/80 rounded-xl border border-cyan-500/40 shadow-xl shadow-cyan-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-[10px] font-mono font-extrabold px-3 py-1 rounded-bl-lg uppercase">
                Ahorro ~ {activeProject.savings}
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-300 uppercase font-bold tracking-wider flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
                  {t('calculator.labels.conaiSoft')}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-300 font-medium">Tiempo a Producción</div>
                  <div className="text-3xl font-extrabold text-cyan-300 font-mono mt-0.5">{activeProject.aiTime}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">Inversión Sprints ConaiSoft</div>
                  <div className="text-3xl font-extrabold text-emerald-400 font-mono mt-0.5">{activeProject.aiCost}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Guarantee Banner */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
            <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{t('calculator.labels.guarantee')}:</span>
            </div>
            <div className="text-slate-400 text-center sm:text-right">
              {t('calculator.labels.guaranteeDesc')}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
