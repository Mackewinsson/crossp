"use client";

import React from 'react';
import { Modal } from './Modal';
import { PortfolioProject } from '@/data/portfolio';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        {/* Project Image */}
        <div className="relative h-64 w-full rounded-xl overflow-hidden border border-slate-800">
          <img
            src={project.portfolioImage}
            alt={project.title}
            className="w-full h-full object-cover object-left-top"
          />
        </div>
        
        {/* Project Details */}
        <div className="space-y-4">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-mono font-semibold">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">
              {project.clientName}
            </span>
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase mb-1">Tecnologías / Stack</h4>
            <p className="text-sm text-slate-300">{project.meta}</p>
          </div>
          
          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase mb-1">Resumen del Proyecto</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.projectDescriptions}</p>
          </div>
          
          {/* Date */}
          {project.date && (
            <div className="pt-3 border-t border-slate-800">
              <p className="text-xs text-slate-400 font-mono">
                Fecha de Despliegue: {project.date}
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};