import { useState } from 'react';
import { Linkedin, Mail, Github, Send, CheckCircle2, AlertCircle, Loader2, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { supabase } from '@/lib/supabase';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { ref, isVisible } = useScrollReveal();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (form.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again later.'
      );
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl bg-white/5 border text-offwhite placeholder:text-muted/60 transition-all duration-300 focus:outline-none focus:border-cyan focus:bg-white/8 ${
      errors[field] ? 'border-red-400/60' : 'border-white/10'
    }`;

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 glow-radial" aria-hidden />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-violet/8 blur-[120px]" aria-hidden />

      <div ref={ref} className={`relative max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <p className="section-subheading">Contact</p>
          <h2 className="section-heading mb-4">
            Let's Build Something{' '}
            <span className="text-gradient">Meaningful.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-4">
            Have an internship opportunity, project idea, collaboration proposal, or simply
            want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact links */}
          <div className="lg:col-span-2 space-y-4">
            {/* Location card */}
            <div className="flex items-center gap-4 p-5 glass-card">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-cyan" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted mb-0.5">Location</p>
                <p className="text-sm text-offwhite">Solapur, Maharashtra, India</p>
              </div>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 glass-card hover:border-cyan/30 transition-all duration-300 hover:glow-border"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-5 h-5 text-cyan" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted mb-0.5">
                  LinkedIn
                </p>
                <p className="text-sm text-offwhite group-hover:text-cyan transition-colors">
                  Connect with me
                </p>
              </div>
            </a>

            <a
              href={profile.email ? `mailto:${profile.email}` : '#'}
              className={`group flex items-center gap-4 p-5 glass-card transition-all duration-300 ${
                profile.email
                  ? 'hover:border-cyan/30 hover:glow-border'
                  : 'opacity-60 cursor-default'
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-cyan" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted mb-0.5">
                  Email
                </p>
                <p className="text-sm text-offwhite">
                  {profile.email || 'Email to be added'}
                </p>
              </div>
            </a>

            <a
              href={profile.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-5 glass-card transition-all duration-300 ${
                profile.github
                  ? 'hover:border-cyan/30 hover:glow-border'
                  : 'opacity-60 cursor-default'
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Github className="w-5 h-5 text-cyan" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted mb-0.5">
                  GitHub
                </p>
                <p className="text-sm text-offwhite">
                  {profile.github ? 'View my code' : 'GitHub to be added'}
                </p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-6 glass-card space-y-4"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-offwhite mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={inputClass('name')}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-offwhite mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputClass('email')}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-offwhite mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                className={inputClass('subject')}
                placeholder="What's this about?"
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-offwhite mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={`${inputClass('message')} resize-none`}
                placeholder="Tell me more..."
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                Thank you! Your message has been sent. I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
