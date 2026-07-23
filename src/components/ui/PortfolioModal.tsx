"use client";

import React from 'react';
import Image from 'next/image';
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
        <div className="relative h-64 w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-muted)]">
          <Image
            src={project.portfolioImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover object-left-top"
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
              {project.category}
            </span>
            <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--ink-soft)]">
              {project.clientName}
            </span>
          </div>

          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
              Tecnologías / Stack
            </h4>
            <p className="text-sm text-[var(--ink-soft)]">{project.meta}</p>
          </div>

          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
              Resumen del Proyecto
            </h4>
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">{project.projectDescriptions}</p>
          </div>

          {project.date && (
            <div className="border-t border-[var(--line)] pt-3">
              <p className="text-xs text-[var(--ink-muted)]">Fecha de Despliegue: {project.date}</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
