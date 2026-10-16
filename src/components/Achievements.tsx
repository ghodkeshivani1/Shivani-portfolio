import { useState } from 'react';
import { Award, ExternalLink, X, Dumbbell, Activity, GraduationCap, Trophy, Quote } from 'lucide-react';
import { certifications, sports, sportsQualities, sportsQuote, education } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const sportsIconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Activity,
};

export default function Achievements() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="relative section-padding overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-cyan/5 blur-[100px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        {/* Certifications */}
        <div className="mb-24">
          <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-subheading">Certifications & Recognition</p>
            <h2 className="section-heading mb-4">
              Milestones <span className="text-gradient">Along the Way</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className={`group flex flex-col p-6 glass-card hover:border-cyan/30 transition-all duration-700 hover:glow-border ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <button
                  onClick={() => cert.imageUrl && setLightbox(cert.imageUrl)}
                  disabled={!cert.imageUrl}
                  className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-navy-50 to-navy-200 border border-white/10 flex items-center justify-center mb-4 overflow-hidden group-hover:border-cyan/20 transition-colors"
                >
                  {cert.imageUrl ? (
                    <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover" />
                  ) : (
                    <Award className="w-10 h-10 text-cyan/40 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </button>

                <p className="text-xs font-mono uppercase tracking-wider text-cyan mb-1">
                  {cert.org}
                </p>
                <h3 className="text-sm font-heading font-semibold text-offwhite mb-3 flex-1">
                  {cert.title}
                </h3>

                {cert.date && <p className="text-xs text-muted mb-3">{cert.date}</p>}

                <button
                  disabled={!cert.credentialUrl}
                  onClick={() =>
                    cert.credentialUrl &&
                    window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer')
                  }
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 ${
                    cert.credentialUrl ? 'text-cyan hover:gap-2.5' : 'text-muted/50 cursor-not-allowed'
                  }`}
                >
                  View Credential
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            <div className={`group flex flex-col items-center justify-center p-6 glass-card border-dashed border-white/10 min-h-[260px] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: `${certifications.length * 100}ms` }}>
              <Award className="w-8 h-8 text-muted/40 mb-3" />
              <p className="text-sm text-muted text-center">
                More certifications to be added
              </p>
            </div>
          </div>
        </div>

        {/* Sports & Achievements */}
        <div className="mb-24">
          <div className={`text-center mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-subheading">Sports & Achievements</p>
            <h2 className="section-heading mb-4">
              Discipline <span className="text-gradient">Beyond Technology</span>
            </h2>
          </div>

          <div className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid sm:grid-cols-2 gap-4">
              {sports.map((sport, i) => {
                const Icon = sportsIconMap[sport.icon] || Trophy;
                return (
                  <div
                    key={i}
                    className="group p-6 glass-card hover:border-cyan/30 transition-all duration-300 hover:glow-border text-center hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-cyan" />
                    </div>
                    <h3 className="text-base font-heading font-semibold text-offwhite">
                      {sport.achievement}
                    </h3>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6">
              <div className="p-6 glass-card">
                <p className="text-xs font-mono uppercase tracking-wider text-cyan mb-4">
                  Transferable Qualities
                </p>
                <div className="flex flex-wrap gap-2">
                  {sportsQualities.map((quality) => (
                    <span key={quality} className="skill-badge text-sm">
                      <Trophy className="w-3.5 h-3.5 text-violet" />
                      {quality}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 glass-card glow-border relative overflow-hidden">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-violet/15" />
                <p className="text-offwhite text-lg font-heading font-medium italic leading-relaxed relative">
                  "{sportsQuote}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className={`text-center mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-subheading">Education</p>
            <h2 className="section-heading mb-4">
              My <span className="text-gradient">Academic Journey</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan/40 to-transparent md:-translate-x-1/2" />

            {education.map((edu, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan glow-cyan -translate-x-1/2 z-10 mt-6 ring-4 ring-navy/80" />
                <div className="hidden md:block md:w-1/2" />
                <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                  <div className="p-6 glass-card hover:border-cyan/30 transition-all duration-300 group">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-5 h-5 text-cyan" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-offwhite">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-cyan font-mono">{edu.field}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted mb-3">{edu.institution}</p>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan/10 border border-cyan/20 text-cyan text-xs font-mono mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                      {edu.status}
                    </div>

                    <div className="space-y-2 text-sm">
                      {edu.graduationYear && (
                        <p className="text-muted">
                          <span className="text-offwhite">Expected graduation:</span> {edu.graduationYear}
                        </p>
                      )}
                      {edu.cgpa && (
                        <p className="text-muted">
                          <span className="text-offwhite">CGPA / Percentage:</span> {edu.cgpa}
                        </p>
                      )}
                      {edu.coursework && (
                        <p className="text-muted">
                          <span className="text-offwhite">Relevant coursework:</span> {edu.coursework}
                        </p>
                      )}
                      {edu.achievements && (
                        <p className="text-muted">
                          <span className="text-offwhite">Academic achievements:</span> {edu.achievements}
                        </p>
                      )}
                      {!edu.graduationYear && !edu.cgpa && !edu.coursework && !edu.achievements && (
                        <p className="text-muted/60 text-xs italic">
                          Details to be updated.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-navy/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-offwhite hover:text-cyan transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close preview"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Certificate preview"
            className="max-w-full max-h-full rounded-xl border border-cyan/20 glow-cyan"
          />
        </div>
      )}
    </section>
  );
}
