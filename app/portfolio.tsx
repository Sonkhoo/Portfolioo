"use client"
import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, Moon, Sun, User, Code, Briefcase, Phone, FolderPen, Server, Monitor, Cpu, Cloud, Database, Zap, Plus, ExternalLink, PanelBottomOpen } from "lucide-react"
import { SmoothCursor } from "../components/ui/smooth-cursor"
import { Highlighter } from "../components/magicui/highlighter"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TechCarousel } from "../components/tech-carousel"
import { RetroGrid } from "../components/magicui/retro-grid"

const sections = [
  { id: "about", title: "About", desc: "Learn about my work.", icon: User },
  { id: "skills", title: "Skills", desc: "My technical expertise.", icon: Code },
  { id: "projects", title: "Projects", desc: "Featured work.", icon: FolderPen },
  { id: "contact", title: "Contact", desc: "Get in touch.", icon: Phone },
  { id: "work", title: "Work", desc: "My involvements.", icon: Briefcase },
]

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express",
      "Fastify",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "gRPC",
      "WebSockets",
      "Socket.io",
      "WebRTC",
      "Prisma",
      "Drizzle ORM",
      "Mongoose",
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      "React",
      "Next.js",
      "React Native (Expo)",
      "TailwindCSS",
      "shadcn/ui",
      "HTML/CSS",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    icon: Cpu,
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions)",
      "Monitoring & Logging",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: [
      "AWS (EC2, S3, Lambda, API Gateway, CloudFront)",
      "Supabase",
      "Appwrite",
      "Firebase",
      "NeonDB",
      "Google Cloud Platform",
    ],
  },
  {
    title: "Core Fundamentals",
    icon: Database,
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "SQL",
      "DSA",
      "OOP",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Concurrency",
    ],
  },
  {
    title: "System Design",
    icon: Zap,
    skills: [
      "Microservices",
      "Event-driven Systems",
      "API Gateway & Rate Limiting",
      "Caching (Redis)",
      "Messaging Queues (RabbitMQ, Apache Kafka, BullMQ)",
    ],
  },
  {
    title: "AI/ML & Integrations",
    icon: Plus,
    skills: [
      "Generative AI (LangChain, Mistral 7B, Open-source LLMs)",
      "Vector Databases (Chroma DB)",
      "FastAPI",
      "Elasticsearch",
      "Blockchain Basics",
    ],
  },
]

const projects = [
  {
    title: "Fast-AID",
    desc: "Real-time ambulance dispatch service with location-based routing and live driver/user tracking.",
    tech: ["Node.js", "Express", "PostgreSQL", "React Native", "Uber Maps API", "Docker"],
    image: "/images/projects/fastAID.jpeg",
    github: "https://github.com/Sonkhoo/FastAID",
    live: "https://fast-aid-demo.vercel.app",
  },
  {
    title: "Doc-Ease",
    desc: "AI-driven doctor-patient consultation platform with Web3 security, real-time chat, and AI medical assistant.",
    tech: ["TypeScript", "Node.js", "React", "MongoDB", "Chroma DB", "LangChain", "Web3", "WebSockets"],
    image: "/images/projects/docEase.jpeg",
    github: "https://github.com/Sonkhoo/DocEase-KGEC",
    live: "https://doc-ease-demo.vercel.app",
  },
  {
    title: "Sloop",
    desc: "A gamified project based skill development platform.",
    tech: ["React", "TypeScript", "Python", "Flask", "Supabase"],
    image: "/images/projects/sloop.jpeg",
    github: "https://github.com/Sonkhoo/iiser_stscd_02",
    live: "https://sloop-demo.vercel.app",
  },
//   {
//     title: "Task Management System",
//     desc: "Collaborative project management tool with real-time updates and team collaboration features.",
//     tech: ["Next.js", "Prisma", "WebSockets", "Supabase", "TailwindCSS"],
//     image: "/images/projects/task-manager.jpeg",
//     github: "https://github.com/username/task-manager",
//     live: "https://task-manager-demo.vercel.app",
//   },
//   {
//     title: "Murmr",
//     desc: "A peer to peer mental wellness project for Google genAI Exchange Hackathon",
//     tech: ["React", "TypeScript", "Node.js", "Firebase", "Python", "Gemini", "FastAPI"],
//     image: "/images/projects/murmr.jpeg",
//     github: "https://github.com/Sonkhoo/Murmr",
//     live: "https://murmr-demo.vercel.app",
// },
]


const workExperience = [
  {
    company: "IEM Research Foundation",
    position: "Lead Developer",
    duration: "May 2025 – Aug 2025",
    image: "/images/work/iem.png",
    description: "Built NAAC DVV Simulation tool with React, Node.js, and MySQL for research projects.",
  }
]


export default function Portfolio() {
  const [theme, setTheme] = useState<string>("light")
  
  // Initialize theme after component mounts (client-side only)
  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme") || 
                        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
    root.classList.remove("light", "dark");
    root.classList.add(initialTheme);
    setTheme(initialTheme);
  }, [])
  const [active, setActive] = useState("about")

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove("light", "dark");
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  return (
    <>
      <SmoothCursor />
        <div
          className="min-h-screen pt-8 flex flex-col bg-background text-foreground hide-scrollbar"
          style={{ position: "relative", zIndex: 0, overflowY: "auto" }}
        >
          <RetroGrid />
          <div className="fixed inset-0 -z-10" style={{ backgroundColor: "transparent" }} />
  
          <div className="w-full max-w-4xl mx-auto px-8 md:px-16">
            {/* Toggle */}
            <button
              onClick={toggleTheme}
              className="fixed top-6 right-6 p-2 rounded-none border border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-colors z-50"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
  
            {/* Hero */}
            <section className="text-center py-16">
              <h1 className="text-5xl md:text-5xl font-bold inline-block pb-2 mb-4">
                Hi, I'm{" "}
                <Highlighter action="underline" color="#FF9800" animationDuration={2000}>
                  Sankhadeep.
                </Highlighter>
              </h1>
              <p className="text-muted-foreground">Full-stack web & mobile developer skilled in backend, cloud, and generative AI.</p>
            </section>
  
            {/* Content container with fixed height and scrolling */}
            <div className="flex-1 overflow-y-auto py-6">
              {/* Nav cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                {sections.map(({ id, title, desc, icon: Icon }) => (
                  <Card
                    key={id}
                    onClick={() => setActive(id)}
                    className="cursor-pointer rounded-none border border-foreground bg-transparent shadow-none transition-all hover:-translate-y-0.5 hover:shadow-[2px_2px_0_var(--foreground)]"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-semibold">
                        <Icon size={16} /> 
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">{desc}</CardContent>
                  </Card>
                ))}
              </div>
  
              {/* Sections */}
              {active === "about" && (
                <section className="py-12 text-center text-base md:text-lg">
  <p className="text-justify max-w-3xl mx-auto">
    I’m a full-stack web and mobile developer with hands-on experience in backend systems, cloud platforms, and AI/ML integrations. 
    I build scalable microservices, real-time apps, and intelligent solutions while leveraging strong fundamentals in DSA, OOP, and system design.
  </p>
  <div className="flex gap-4 justify-center mt-6 py-4">
    {["Full-Stack", "Backend", "Cloud", "Generative AI", "DevOps", "Mobile"].map((t) => (
      <Badge
        key={t}
        className="rounded-none border border-foreground bg-transparent text-foreground font-mono text-xs tracking-wide"
      >
        {t}
      </Badge>
    ))}
  </div>
</section>

              )}
              {active === "skills" && (
                <section className="py-12">
                  <h2 className="text-2xl font-semibold mb-6 text-center">
                    <Highlighter action="underline" color="#FF9800">Skills</Highlighter>
                  </h2>
                  <p className="text-center mb-8 text-muted-foreground font-mono text-sm">Technologies I work with:</p>
                  <TechCarousel/>
                  <div className="space-y-8 max-w-4xl mx-auto">
                    {skillCategories.map((category) => {
                    const IconComponent = category.icon
                    return (
                <div key={category.title} className="border border-foreground bg-transparent p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent size={20} className="text-foreground" />
                    <h3 className="text-lg font-semibold ">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="rounded-none border border-foreground bg-transparent text-foreground font-mono text-xs tracking-wide hover:bg-foreground hover:text-background transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}
      {active === "projects" && (
        <section className="py-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            <Highlighter action="underline" color="#FF9800">Projects</Highlighter>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="rounded-none border border-foreground bg-transparent shadow-none hover:-translate-y-0.5 hover:shadow-[2px_2px_0_#000] transition-all cursor-pointer rounded-none border border-foreground bg-transparent shadow-none transition-all hover:-translate-y-0.5 hover:shadow-[2px_2px_0_var(--foreground)]"
              >
                <div className="aspect-video border-b border-foreground overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-semibold  text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-mono px-2 py-1 border border-foreground/30 rounded-sm hover:bg-foreground/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="rounded-none border border-black bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors flex-1"
                      style={{ cursor: "none" }}
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-none border border-black bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors flex-1"
                      style={{ cursor: "none" }}
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {active === "work" && (
        <section className="py-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            <Highlighter action="underline" color="#FF9800">Work Experience</Highlighter></h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-foreground"></div>

              <div className="space-y-12">
                {workExperience.map((work, index) => (
                  <div key={work.company} className="relative flex items-center">
                    <div className="relative z-10 w-12 h-12 rounded-full border-2 border-black bg-background flex items-center justify-center mr-8">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.company}
                        className="w-8 h-8 object-cover rounded-full"
                      />
                    </div>

                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <h3 className="font-normal mb-1">{work.company}</h3>
                        <p className="text-muted-foreground font-mono text-sm">{work.position}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground font-mono text-sm">{work.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

{active === "contact" && (
  <section className="py-12 text-center">
    <h2 className="text-2xl font-semibold mb-6">
      <Highlighter action="underline" color="#FF9800">Contact Me</Highlighter>
    </h2>
    <p className="text-muted-foreground mb-8 font-mono">
      Let's build something amazing together
    </p>

    <div className="space-y-4 max-w-md mx-auto">
      {/* Email Button */}
      <a
        href="mailto:sankhadeepchowdhury5@gmail.com"
        className="w-full inline-flex items-center justify-center rounded-none border border-black bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors py-2"
      >
        <Mail size={16} className="mr-2" /> sankhadeepchowdhury5@gmail.com
      </a>

      {/* View Resume */}
      <a
        href="/resume.pdf" // resume in public folder
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center rounded-none border border-black bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors py-2"
      >
        <PanelBottomOpen size={16} className="mr-2" /> View Resume
      </a>
    </div>

    {/* Social Buttons */}
    <div className="flex gap-3 justify-center mt-8">
      <a
        href="https://github.com/Sonkhoo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-none border border-foreground text-foreground bg-transparent transition-colors hover:bg-foreground hover:text-background p-2"
        aria-label="GitHub"
      >
        <Github size={16} />
      </a>
      <a
        href="www.linkedin.com/in/sankhadeep-chowdhury-132980274"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-none border border-foreground text-foreground bg-transparent transition-colors hover:bg-foreground hover:text-background p-2"
        aria-label="LinkedIn"
      >
        <Linkedin size={16} />
      </a>
    </div>
  </section>
)}
            </div>
  
            <footer className="py-8 text-center text-muted-foreground text-sm">
              &copy; 2025 Portfolio
            </footer>
          </div>
        </div>
    </>
  )
}  