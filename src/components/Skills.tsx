import { Code2, Globe, Cpu, Sparkles, BookOpen } from 'lucide-react';
import { skillsData } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Cpu,
  Sparkles,
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="relative section-padding overflow-hidden bg-navy-600/30">
      <div className="absolute inset-0 bg-grid-sm opacity-40" aria-hidden />
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-cyan/5 blur-[100px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">Technical Skills</p>
          <h2 className="section-heading mb-4">
            My <span className="text-gradient">Technical Toolkit</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-4">
            Currently learning, practising, and expanding my technical skill set.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillsData.map((category, ci) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <div
                key={category.category}
                className={`group p-6 glass-card hover:border-cyan/30 transition-all duration-700 hover:glow-border ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${ci * 120}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-cyan" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-offwhite">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/badge inline-flex flex-col items-start px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan/40 hover:bg-cyan/5 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span className="text-sm font-medium text-offwhite">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-muted group-hover/badge:text-cyan transition-colors">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning note */}
        <div className={`mt-10 flex items-center justify-center gap-2 text-muted transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <BookOpen className="w-4 h-4 text-cyan" />
          <p className="text-sm font-mono">
            Currently learning, practising, and expanding my technical skill set.
          </p>
        </div>
      </div>
    </section>
  );
}
