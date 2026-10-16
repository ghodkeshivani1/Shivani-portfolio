import { FolderGit2, ArrowRight, CheckCircle2, Lightbulb, Plus, Building2 } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-violet/5 blur-[120px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">Featured Projects</p>
          <h2 className="section-heading mb-4">
            Projects That Turn{' '}
            <span className="text-gradient">Ideas Into Practice</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group flex flex-col p-6 glass-card hover:border-cyan/30 transition-all duration-700 hover:glow-border hover:-translate-y-1.5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FolderGit2 className="w-6 h-6 text-cyan" />
                </div>
                {project.org && (
                  <span className="text-xs font-mono text-muted px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Building2 className="w-3 h-3" />
                    {project.org}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-heading font-semibold text-offwhite mb-3 group-hover:text-cyan transition-colors">
                {project.title}
              </h3>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Features */}
              {project.features.length > 0 && (
                <ul className="space-y-1.5 mb-4">
                  {project.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Areas explored */}
              {project.areas && project.areas.length > 0 && (
                <ul className="space-y-1.5 mb-4">
                  {project.areas.map((area, ai) => (
                    <li key={ai} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 className="w-4 h-4 text-violet flex-shrink-0 mt-0.5" />
                      {area}
                    </li>
                  ))}
                </ul>
              )}

              {/* Key learning */}
              <div className="p-3 rounded-lg bg-violet/5 border border-violet/10 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-violet mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-3 h-3" />
                  Key Learning
                </p>
                <p className="text-sm text-muted">{project.keyLearning}</p>
              </div>

              {/* Button */}
              <button
                onClick={() =>
                  project.link
                    ? window.open(project.link, '_blank', 'noopener,noreferrer')
                    : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:gap-2.5 transition-all duration-300"
              >
                {project.linkLabel}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}

          {/* More projects card */}
          <div className={`group flex flex-col items-center justify-center p-6 glass-card border-dashed border-white/10 hover:border-cyan/30 transition-all duration-700 min-h-[280px] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: `${projects.length * 120}ms` }}>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Plus className="w-6 h-6 text-cyan" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-offwhite mb-2">
              More Projects Coming Soon
            </h3>
            <p className="text-muted text-sm text-center">
              I'm continuously learning, experimenting, and working on new ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
