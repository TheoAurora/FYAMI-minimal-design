
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our growth strategists will be in touch within 24 hours.');
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
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
                  onChange={e => setFormData({...formData, name: e.target.value})}
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
                  onChange={e => setFormData({...formData, email: e.target.value})}
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
                onChange={e => setFormData({...formData, company: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#425B76]">How can we help you grow?</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your challenges..."
                className="w-full px-6 py-4 bg-[#FAF9F6] border border-[#D7D9E3] rounded-xl focus:outline-none focus:border-[#6D28D9] transition-colors resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-5 bg-[#6D28D9] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Send Growth Request
            </button>
            <p className="text-center text-xs opacity-50">By submitting this form, you agree to our privacy policy. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
