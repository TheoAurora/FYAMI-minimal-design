
import React, { useState, useEffect } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/ZxNyLLHCvZZs8OCWHJO2/webhook-trigger/59179c71-a669-4d4e-9847-6cd2332344a0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Clear form and show success message
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          ></div>

          {/* Modal */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
            {/* Close button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Success icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#6D28D9] to-[#425B76] rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Message */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#425B76] text-center mb-4">
              Thank You!
            </h3>
            <p className="text-center text-[#53535B] text-lg mb-8">
              Thank you for submitting the form. A confirmation email has been sent to you.
            </p>

            {/* Button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full py-4 bg-gradient-to-r from-[#6D28D9] to-[#425B76] text-white font-bold rounded-xl hover:shadow-lg transition-all"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-2xl border border-[#D7D9E3] relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#425B76] mb-4">Start Growing Today</h2>
            <p className="text-lg opacity-70">Tell us a bit about your business goals and we'll reach out with a custom strategy.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#425B76]">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-6 py-4 bg-[#FAF9F6] border border-[#D7D9E3] rounded-xl focus:outline-none focus:border-[#6D28D9] transition-colors"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#425B76]">Business Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  required
                  className="w-full px-6 py-4 bg-[#FAF9F6] border border-[#D7D9E3] rounded-xl focus:outline-none focus:border-[#6D28D9] transition-colors"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#425B76]">Company Name</label>
              <input
                type="text"
                placeholder="ScaleTech Ltd"
                className="w-full px-6 py-4 bg-[#FAF9F6] border border-[#D7D9E3] rounded-xl focus:outline-none focus:border-[#6D28D9] transition-colors"
                value={formData.company}
                onChange={e => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#425B76]">How can we help you grow?</label>
              <textarea
                rows={4}
                placeholder="Tell us about your challenges..."
                className="w-full px-6 py-4 bg-[#FAF9F6] border border-[#D7D9E3] rounded-xl focus:outline-none focus:border-[#6D28D9] transition-colors resize-none"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              disabled={isSubmitting}
              className={`w-full py-5 bg-[#6D28D9] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Growth Request'}
            </button>
            <p className="text-center text-xs opacity-50">By submitting this form, you agree to our privacy policy. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section >
  );
};

export default ContactForm;
