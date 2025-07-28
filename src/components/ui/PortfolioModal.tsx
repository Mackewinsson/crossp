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
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <img
            src={project.portfolioImage}
            alt={project.title}
            className="w-full h-full object-cover object-left-top"
          />
        </div>
        
        {/* Project Details */}
        <div className="space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              {project.clientName}
            </span>
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies</h4>
            <p className="text-gray-600">{project.meta}</p>
          </div>
          
          {/* Project Overview */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h4>
            <p className="text-gray-600 leading-relaxed">{project.projectDescriptions}</p>
          </div>
          
          {/* Date */}
          {project.date && (
            <div className="pt-2 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Completed: {project.date}
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}; 