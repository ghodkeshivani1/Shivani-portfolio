import { Download, Eye, FileText, Sparkles } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Resume() {
  const { ref, isVisible } = useScrollReveal();
  const hasResume = Boolean(profile.resumeUrl);

  const handleDownload = () => {
    if (!hasResume) return;
    const link = document.createElement('a');
    link.href = profile.resumeUrl;
    link.download = 'Shivani_Ghodke_Professional_Resume.docx';
    link.click();
  };

  const handleView = () => {
    if (!hasResume) return;
    window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="resume" className="relative section-padding overflow-hidden bg-navy-600/30">
      <div className="absolute inset-0 glow-radial-violet" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet/10 blur-[120px]" aria-hidden />

      <div ref={ref} className={`relative max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-cyan/20 flex items-center justify-center mx-auto mb-6 glow-cyan">
            <FileText className="w-8 h-8 text-cyan" />
          </div>

          <p className="section-subheading">Resume</p>
          <h2 className="section-heading mb-4">
            Want to Know More About{' '}
            <span className="text-gradient">My Journey?</span>
          </h2>

          <p className="text-muted text-base md:text-lg max-w-xl mx-auto mb-8">
            Explore my technical skills, projects, internship experience, education, and
            achievements in one place.
          </p>
        </div>

        {hasResume ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleDownload} className="btn-primary">
              <Download className="w-4 h-4" />
              Download My Resume
            </button>
            <button onClick={handleView} className="btn-secondary">
              <Eye className="w-4 h-4" />
              View Resume
            </button>
          </div>
        ) : (
          <div className="p-6 glass-card max-w-md mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-dashed border-white/15 flex items-center justify-center">
                <FileText className="w-7 h-7 text-muted" />
              </div>
              <div>
                <p className="text-offwhite font-medium mb-1">
                  Resume file not connected yet
                </p>
                <p className="text-sm text-muted">
                  Add your PDF resume to the public folder and update the path in the profile data.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 inline-flex items-center gap-2 text-muted">
          <Sparkles className="w-4 h-4 text-cyan" />
          <p className="text-sm font-mono">Available for internships and opportunities</p>
        </div>
      </div>
    </section>
  );
}
