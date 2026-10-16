import { Briefcase, ArrowRight, BadgeCheck, Trophy, Star, Award } from 'lucide-react';
import { experience, leadership } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="relative section-padding overflow-hidden bg-navy-600/30">
      <div className="absolute inset-0 bg-grid-sm opacity-30" aria-hidden />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-cyan/5 blur-[100px]" aria-hidden />

      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">Internship Experience</p>
          <h2 className="section-heading mb-4">
            Learning <span className="text-gradient">Beyond the Classroom</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan/40 via-violet/30 to-transparent md:-translate-x-1/2" />

          {experience.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan glow-cyan -translate-x-1/2 z-10 mt-6 ring-4 ring-navy/80" />
              <div className="hidden md:block md:w-1/2" />
              <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                <div className="p-6 glass-card hover:border-cyan/30 transition-all duration-300 hover:glow-border group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-offwhite">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-cyan font-mono">{exp.org}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet/10 border border-violet/20 mb-4">
                    <span className="text-xs font-mono text-violet">Project focus:</span>
                    <span className="text-sm text-offwhite">{exp.focus}</span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <p className="text-xs font-mono uppercase tracking-wider text-cyan mb-3">
                    Skills & knowledge explored
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="skill-badge text-xs">
                        <BadgeCheck className="w-3 h-3 text-cyan" />
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    disabled={!exp.certificateUrl}
                    onClick={() =>
                      exp.certificateUrl &&
                      window.open(exp.certificateUrl, '_blank', 'noopener,noreferrer')
                    }
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 ${
                      exp.certificateUrl
                        ? 'text-cyan hover:gap-2.5'
                        : 'text-muted/50 cursor-not-allowed'
                    }`}
                  >
                    View Internship Certificate
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership section */}
        <div className="mt-20">
          <div className={`text-center mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-subheading">Leadership & Campus Involvement</p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-offwhite">
              Taking Initiative.{' '}
              <span className="text-gradient">Creating Impact.</span>
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet/40 to-transparent md:-translate-x-1/2" />

            <div className={`relative flex flex-col md:flex-row gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-violet glow-violet -translate-x-1/2 z-10 mt-6 ring-4 ring-navy/80" />
              <div className="hidden md:block md:w-1/2" />
              <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                <div className="p-6 glass-card hover:border-violet/30 transition-all duration-300 hover:glow-border group">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet/15 to-cyan/15 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-5 h-5 text-violet" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-violet/10 border border-violet/20 text-violet text-xs font-mono mb-2">
                        <Star className="w-3 h-3" />
                        Campus Ambassador
                      </div>
                      <h4 className="text-lg font-heading font-semibold text-offwhite">
                        {leadership.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {leadership.description}
                  </p>

                  <p className="text-xs font-mono uppercase tracking-wider text-violet mb-3">
                    Strengths
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {leadership.strengths.map((strength) => (
                      <span key={strength} className="skill-badge text-xs">
                        <Award className="w-3 h-3 text-violet" />
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
