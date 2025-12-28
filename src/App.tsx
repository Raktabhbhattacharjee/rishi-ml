import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  Terminal, 
  Code2, 
  Database, 
  BarChart3, 
  BrainCircuit,
  ExternalLink,
  Table2
  // ChevronRight was removed from here
} from 'lucide-react';``

// --- YOUR PROJECT DATA ---
// Update this list as you build new things!
const projects = [
  {
    title: "Iris Species Classifier",
    desc: "My first ML model using Scikit-Learn. I used a Random Forest algorithm to classify flower species with 98% accuracy.",
    tags: ["Python", "Scikit-Learn", "NumPy"]
  },
  {
    title: "Sales Data Wrangling",
    desc: "Cleaned a messy dataset of 10k+ rows using Pandas and SQL. Performed exploratory data analysis (EDA) to find trends.",
    tags: ["Pandas", "SQL", "Matplotlib"]
  },
  {
    title: "Portfolio Website",
    desc: "A minimalist, responsive portfolio built with React and TypeScript to showcase my ML learning journey.",
    tags: ["React", "TypeScript", "Tailwind"]
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className="fixed w-full p-6 backdrop-blur-md bg-opacity-70 z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter">
            RISHI<span className="text-blue-500">.ML</span>
          </h1>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-24">
        
        {/* Hero Section */}
        <section className="space-y-8 py-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            LEARNING MACHINE LEARNING
          </div>
          <h2 className="text-6xl font-bold tracking-tight sm:text-8xl">
            Data. Logic. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400">Intelligence.</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            I'm a developer building a strong foundation in Data Science. I specialize in 
            cleaning data with <b>SQL/Pandas</b> and building predictive models with <b>Scikit-Learn</b>.
          </p>
          <div className="flex flex-wrap gap-4">
            <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:your@email.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </section>

        {/* Technical Stack Section */}
        <section id="stack">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-10 flex items-center gap-2">
            <Terminal size={18} /> Technical Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard icon={<Code2 />} name="Python" level="Core Language" />
            <SkillCard icon={<Database />} name="Pandas / NumPy" level="Data Analysis" />
            <SkillCard icon={<Table2 />} name="SQL" level="Databases" />
            <SkillCard icon={<BrainCircuit />} name="Scikit-Learn" level="ML Algorithms" />
            <SkillCard icon={<BarChart3 />} name="Matplotlib" level="Visualization" />
            <SkillCard icon={<BarChart3 />} name="Seaborn" level="Visualization" />
            <SkillCard icon={<Code2 />} name="JS / TS" level="Frontend" />
            <SkillCard icon={<Code2 />} name="React" level="UI Framework" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-2">Projects</h3>
              <h4 className="text-3xl font-bold">Selected Work</h4>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium">© {new Date().getFullYear()} Rishi — ML Journey</p>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-blue-500 transition-colors italic">Built with React & Tailwind v4</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* --- Reusable Components --- */

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300">
      <span className="text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors">{icon}</span>
      <span className="text-sm font-bold tracking-wide">{label}</span>
    </a>
  );
}

function SkillCard({ icon, name, level }: { icon: React.ReactNode; name: string; level: string }) {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 group">
      <div className="mb-4 p-2 inline-block rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-500 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-xs text-slate-500 uppercase mt-1 tracking-widest">{level}</p>
    </div>
  );
}

function ProjectCard({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
  return (
    <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
      <div className="flex justify-between items-start mb-6">
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
          <ExternalLink size={20} />
        </div>
      </div>
      <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-[10px] font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase tracking-tighter">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}