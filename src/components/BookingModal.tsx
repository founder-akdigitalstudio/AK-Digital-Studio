import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Calendar, Sparkles, Building, Mail, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Free 3-Day Trial'
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [service, setService] = useState<string>(initialService);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDetails: '',
    preferredSlot: 'Tomorrow at 2:00 PM EST'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleNextStep1 = () => {
    setStep(2);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid work email';
    }
    if (!formData.company.trim()) newErrors.company = 'Please enter your company or project name';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(3);
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
    }, 300);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A32]/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#0B2545] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A896]" />
            <span className="font-semibold text-sm tracking-wide">AK Digital Studio · Intro & Intake</span>
          </div>
          <button
            onClick={handleResetAndClose}
            aria-label="Close dialog"
            className="text-slate-300 hover:text-white p-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#8BD8D0]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Progress Indicator */}
        <div className="w-full bg-slate-100 h-1">
          <div
            className="bg-[#00A896] h-full transition-all duration-300"
            style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A896]">Step 1 of 3</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">What can we design for you?</h3>
                <p className="text-xs text-slate-500 mt-1">Select an engagement model or custom project goal.</p>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    id: 'Free 3-Day Trial',
                    title: 'Free 3-Day Trial (Zero Risk)',
                    desc: '2–3 fully designed screens with tokens to test our speed and craft.'
                  },
                  {
                    id: 'UX Audit & Flow Redesign',
                    title: 'UX Audit & Flow Redesign',
                    desc: 'Diagnose customer drop-offs and redesign conversion-critical paths.'
                  },
                  {
                    id: '0-to-1 Product Design',
                    title: '0-to-1 Product Design',
                    desc: 'Complete MVP interface from architecture to developer handoff.'
                  },
                  {
                    id: 'Enterprise Design Retainer',
                    title: 'Enterprise Design Retainer',
                    desc: 'Dedicated product design firepower for fast-shipping engineering teams.'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setService(item.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-sm flex items-start gap-3 ${
                      service === item.id
                        ? 'border-[#00A896] bg-[#00A896]/5 text-slate-900 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      service === item.id ? 'border-[#00A896] bg-[#00A896]' : 'border-slate-300'
                    }`}>
                      {service === item.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 leading-tight">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextStep1}
                className="w-full bg-[#0B2545] hover:bg-[#071A32] text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Continue to Project Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep2} className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A896]">Step 2 of 3</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Tell us about your team</h3>
                <p className="text-xs text-slate-500 mt-1">We’ll prepare relevant portfolio artifacts before the call.</p>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Your Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Henderson"
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent"
                  />
                </div>
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent"
                  />
                </div>
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Company / Product Name</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme SaaS"
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent"
                  />
                </div>
                {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Current Bottleneck or Goal (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="e.g. Users get confused during our analytics onboarding flow..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent resize-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#00A896] hover:bg-[#00534B] text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
                >
                  Confirm & Schedule Intro
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-4 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-[#DCFCE7] text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl font-bold text-slate-900">You’re on our calendar!</h3>
                <p className="text-sm text-slate-600">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. A calendar invite has been sent to{' '}
                  <span className="text-[#00534B] font-medium">{formData.email}</span>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="font-medium">Selected Service:</span>
                  <span className="font-semibold text-slate-900">{service}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="font-medium">Company:</span>
                  <span className="font-semibold text-slate-900">{formData.company}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="font-medium">Session:</span>
                  <span className="font-semibold text-[#00A896] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> 30-Min Discovery Call
                  </span>
                </div>
              </div>

              <div className="bg-[#0B2545]/5 rounded-xl p-3 text-xs text-slate-700 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00A896] shrink-0" />
                <span>We’ll prepare custom benchmark wireframes for your niche before our call.</span>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full bg-[#0B2545] hover:bg-[#071A32] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
