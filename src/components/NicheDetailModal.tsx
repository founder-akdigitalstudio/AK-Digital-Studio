import React from 'react';
import { X, ArrowRight, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { NicheProject } from '../data/landingData.ts';
import { MockupRenderer } from './NicheMockups.tsx';

interface NicheDetailModalProps {
  project: NicheProject | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: (serviceName: string) => void;
}

export const NicheDetailModal: React.FC<NicheDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenBooking
}) => {
  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A32]/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B2545] text-white p-6 flex items-start justify-between sticky top-0 z-10 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${project.tagBg} ${project.tagText}`}>
                {project.tag}
              </span>
              <span className="text-xs text-slate-300">Case Study Walkthrough</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{project.headline}</h2>
            <p className="text-xs text-[#A1C3EB]">{project.title}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Main Visual & Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Visual Screen Mockup */}
            <div className="h-64 md:h-full min-h-[260px] rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <img
                src={project.image}
                alt={project.headline}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Problem & Impact */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">The UX Bottleneck</h4>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  {project.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#00A896] uppercase tracking-wider">Our Solution</h4>
                <p className="text-sm text-slate-800 mt-1 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] p-2.5 rounded-lg border border-slate-200 text-center">
                    <p className="text-base md:text-lg font-bold text-[#0B2545] tabular-nums">{m.value}</p>
                    <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Deliverables / Screens */}
          <div className="space-y-3 pt-2 border-t border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#00A896]" /> Delivered Core Screens
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.screens.map((screen, sIdx) => (
                <div key={sIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896]" />
                    <span>{screen.label}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{screen.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="bg-[#0B2545]/5 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-slate-900">Facing similar challenges in {project.tag}?</p>
              <p className="text-xs text-slate-600">Get a 3-day complimentary sprint proposal for your team.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenBooking(`${project.tag} Redesign`);
              }}
              className="w-full sm:w-auto bg-[#00A896] hover:bg-[#00534B] text-white py-2.5 px-5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0"
            >
              <span>Schedule {project.tag} Intake</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
