import React, { useState } from 'react';
import { 
  X, 
  MessageSquareHeart, 
  CheckCircle2, 
  AlertCircle, 
  Send 
} from 'lucide-react';
import { FeedbackCategory, FeedbackSubmission } from '../types/blog';
import { validateFeedbackForm } from '../utils/blogUtils';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoriesList: FeedbackCategory[] = [
  'Website loading and performance',
  'Server errors',
  'Login and registration',
  'User interface and design',
  'Navigation',
  'Internship and job opportunities',
  'Project collaboration',
  'Missing features',
  'General suggestions',
];

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [category, setCategory] = useState<FeedbackCategory>('General suggestions');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formPayload: Partial<FeedbackSubmission> = {
      category,
      name,
      email,
      message,
    };

    const validation = validateFeedbackForm(formPayload);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});

    // Persist to localStorage for user session feedback
    try {
      const existing = JSON.parse(localStorage.getItem('innovatex_feedbacks') || '[]');
      const newFeedback: FeedbackSubmission = {
        id: `fb-${Date.now()}`,
        category,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
        browserInfo: navigator.userAgent,
      };
      existing.push(newFeedback);
      localStorage.setItem('innovatex_feedbacks', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-elevated p-6 sm:p-8 space-y-6 shadow-2xl border border-white/20">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#00D4FF] flex items-center justify-center text-white">
              <MessageSquareHeart className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Help Us Make InnovateX Better</h3>
              <p className="text-xs text-[#AAB4C8]">Direct feedback to the founder & developer</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#AAB4C8] hover:text-white hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Feedback Received!</h4>
            <p className="text-sm text-[#AAB4C8] max-w-md mx-auto leading-relaxed">
              Thank you for contributing to the growth of InnovateX. Your inputs help refine student collaboration workflows and platform performance.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] rounded-xl shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Category Select */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Feedback Category <span className="text-rose-400">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as FeedbackCategory)}
                className="w-full px-3.5 py-2.5 bg-[#080B18] border border-white/10 focus:border-[#635BFF] focus:outline-none rounded-xl text-xs sm:text-sm text-white"
              >
                {categoriesList.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.category}
                </p>
              )}
            </div>

            {/* Name & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white block">
                  Your Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 bg-[#080B18] border border-white/10 focus:border-[#635BFF] focus:outline-none rounded-xl text-xs sm:text-sm text-white placeholder-[#AAB4C8]/50"
                />
                {errors.name && (
                  <p className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white block">
                  Student / Developer Email <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rahul@college.edu"
                  className="w-full px-3.5 py-2.5 bg-[#080B18] border border-white/10 focus:border-[#635BFF] focus:outline-none rounded-xl text-xs sm:text-sm text-white placeholder-[#AAB4C8]/50"
                />
                {errors.email && (
                  <p className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Detailed Feedback or Suggestion <span className="text-rose-400">*</span>
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe any bugs encountered, feature ideas, or improvements for student collaboration..."
                className="w-full px-3.5 py-2.5 bg-[#080B18] border border-white/10 focus:border-[#635BFF] focus:outline-none rounded-xl text-xs sm:text-sm text-white placeholder-[#AAB4C8]/50 leading-relaxed"
              />
              {errors.message && (
                <p className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#AAB4C8] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#7B73FF] hover:from-[#5249EC] hover:to-[#635BFF] rounded-xl shadow-md shadow-[#635BFF]/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Feedback</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
