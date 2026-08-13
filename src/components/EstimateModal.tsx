import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    serviceType: 'Roof Replacement',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative">
        
        {/* Modal Header */}
        <div className="bg-[#0F172A] text-white p-6 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" /> Zero Obligation • Free Inspection
          </div>
          <h3 className="text-xl font-bold text-white">Request Your Free Roof Estimate</h3>
          <p className="text-xs text-slate-300 mt-1">Get an expert roof inspection & itemized quote within 24 hours.</p>
        </div>

        {/* Modal Content / Form */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#0F172A]">Estimate Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{formData.name || 'valued customer'}</span>. An Austin roofing specialist will call you shortly at <span className="font-semibold text-slate-900">{formData.phone || 'your phone number'}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(512) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="78701"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Service Needed
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-sm bg-white"
                >
                  <option value="Roof Replacement">Full Roof Replacement</option>
                  <option value="Roof Repair">Roof Repair / Leak Fix</option>
                  <option value="Storm Damage">Storm / Hail Damage Inspection</option>
                  <option value="Commercial Roofing">Commercial Roofing</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#EA580C] hover:bg-[#c84906] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Submit Estimate Request</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Privacy Protected
                </span>
                <a href="tel:5125550198" className="flex items-center gap-1 text-[#2563EB] font-semibold">
                  <PhoneCall className="w-3.5 h-3.5" /> Call Directly: (512) 555-0198
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
