import profilePhoto from "@/assets/profile-photo.jpg";
import projectPlaceholder from "@/assets/project-placeholder.jpg";
import resumePdf from "@/assets/Ngan (Anna) Phan.pdf";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { ExternalLink } from "lucide-react";
import { title } from "process";

const tabContent = {
  home: {
    title: "Hello! I'm Anna",
    body: "I’m a third-year Computer Science student at York University interested in exploring different areas of my field, from software design to data analysis. A lot of my learning has come from building projects, getting stuck, and figuring things out as I go. \
    \n\nThis portfolio highlights my work, along with how I’ve been developing my skills and interests over time.",
  },
  about: {
    title: "About Me",
    body: "Growing up, I was always curious about how things worked, and I was influenced by my mom, who taught me math throughout middle school. That early interest led me to pursue a path in STEM.\
    \n\nNow, as a Computer Science student, I’m still exploring different areas of my field through building projects, getting stuck, and learning as I go.\
    \n\nOutside of coding, I enjoy crocheting, reading, and spending time with my cat, Whiskey. These interests have also started to influence some of my projects, such as exploring data related to crochet patterns and pet nutrition.",
  },
  career: {
  title: "Career",
  body: (
    <div>
      <strong>Experience:</strong>
      <br />
      &nbsp;&nbsp;DevOps Developer Co-op at RBC (Winter 2026)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;• Worked on development and operational tasks in a team environment, gaining exposure to real-world systems and workflows.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;• This experience helped me better understand how large-scale systems are maintained and the importance of communication and adaptability in a professional setting.
      
      <br /><br />
      
      <strong>Education:</strong>
      <br />
      &nbsp;&nbsp;York University, BSc Computer Science (2023–2027)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;• Coursework and projects have provided a foundation in software development, data structures, and system design.

      <br /><br />
      
      <strong>Skills:</strong>
      <br />
      &nbsp;&nbsp;<u>Technical:</u> Java, Python, MSSQL, JavaScript
      <br />
      &nbsp;&nbsp;<u>Transferable:</u> Problem-solving, communication, adaptability
    </div>
  ),
  },
  goals: {
    title: "Goals",
    body: (
      <div>
        <strong>Communication: </strong>
        I want to improve how I present and explain my work to others. This includes being able to clearly communicate technical ideas, provide structured updates, and ask questions when needed. Strengthening this skill will help me collaborate more effectively and contribute more confidently in team settings.
        <br /><br />
        <strong>Critical Thinking & Problem-Solving: </strong>
        I aim to approach problems more analytically rather than reactively. This means planning before implementation, thinking through design decisions, and understanding trade-offs. Developing this skill will help me become more independent and intentional in my work.
        <br /><br />
        <strong>Adaptability:</strong>
        I want to improve how I manage changing requirements and unexpected challenges. By building more flexible planning habits and adjusting when needed, I can reduce stress and work more efficiently in both academic and professional environments.
      </div>
    )
  },
  discover: {
    title: "Discover",
    body: (
      <div>
        This section reflects what I've learned about myself through my academic experiences, projects, and self-assessments. Rather than focusing on specific results, it highlights the patterns I've noticed in how I learn, work, and approach challenges.
        <br /><br />
        <strong>How I Learn: </strong>
        I've realized that I learn best by doing rather than just studying. Working on projects, getting stuck, and figuring things out has been the most effective way for me to understand concepts. While this process can be frustrating, it has helped me become more comfortable with problem-solving and working through uncertainty.
        <br /><br />
        <strong>Strengths: </strong>
        One of my strengths is my ability to persist through challenges and adapt when things don't go as planned. I've also developed strong problem-solving skills through working on technical projects and learning how to research and troubleshoot independently.
        <br /><br />
        <strong>Areas for Growth: </strong>
        At the same time, I've identified areas where I want to improve, particularly in communication, critical thinking, and adaptability. I want to become more intentional in how I approach problems, better at explaining my ideas, and more structured when managing changing requirements.
        <br /><br />
        <strong>Values: </strong>
        I value work that is both intellectually engaging and meaningful. I prefer environments where I can continuously learn, solve problems, and contribute to something that is well-designed and useful. I'm less motivated by repetitive tasks and more interested in work that challenges me to think critically.
        <br /><br />
        Overall, I've learned that my growth comes less from simply completing tasks and more from how I approach challenges and reflect on my experiences. This has shifted my focus from just "getting things done" to understanding how and why I do them, which I believe will be important in my long-term development.
      </div>
    ),
  },
};

const projects = [
  { 
    title: "Crochet Pattern Market Analysis",
    description: "A data analysis project examining over 2000 datasets from Ravelry API to explore trends and consumer behavior in the crochet pattern market.",
    image: projectPlaceholder,
    tags: ["Python", "Pandas","PowerBI", "Data Analysis"],
    githubUrl: "https://github.com/itsngan/crochet-pattern-market-analysis",
  },
  {
    title: "Hybrid Solar Irradiance Monitoring System",
    description: "A group project for my Embedded Systems course where we researched andbuilt a solar irradiance monitoring system using the Raspberry Pi 3, integrated with multiple light sensors and a 3D printed QFH antenna.",
    image: projectPlaceholder,
    tags: ["Python", "Raspberry Pi", "Sensor Integration"],
    githubUrl: "https://drive.google.com/file/d/1EdB7tyzrNqn9Iy7rwKe8e-gYvuM56Wmz/view?usp=drive_link",
  },
  {
    title: "Cat Nutrition Analysis Dashboard",
    description: "Currently developing a custom database of commercial cat food products for a web application that analyzes dietary and nutritional intake of a cat.",
    image: projectPlaceholder,
    tags: ["Python", "Pandas", "Streamlit"],
    githubUrl: "https://github.com",
  },
  {
    title: "Cruise Booking Database",
    description: "Group project for my introduction to Database Management Systems course where we designed and implemented a relational database for a cruise booking system, including ER diagrams and SQL queries.",
    image: projectPlaceholder,
    tags: ["MSSQL", "Database Design", "SQL"],
    githubUrl: "https://drive.google.com/file/d/1U_sXB-TKJCTC5I-Xkz1p7y3jkaQlnbt9/view?usp=sharing://github.com",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Title */}
      <header className="container mx-auto px-8 pt-12 lg:pt-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Anna Phan</h1>
        <a href="#" className="text-base lg:text-lg font-medium text-primary hover:underline mt-2 inline-flex items-center gap-2">
          Resume
          <ExternalLink className="w-4 h-4" />
        </a>
      </header>
      {/* Hero Section */}
      <section className="container mx-auto px-8 pt-6 pb-10 lg:pt-8 lg:pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Photo Column - 1/3 */}
          <div className="lg:w-1/3 shrink-0">
            <div className="rounded-2xl overflow-hidden border border-border h-full">
              <img
                src={profilePhoto}
                alt="Profile photo"
                className="w-full h-full object-cover min-h-[300px]"
                width={512}
                height={640}
              />
            </div>
          </div>

          {/* Tabs Column - 2/3 */}
          <div className="lg:w-2/3">
            <Tabs defaultValue="home" className="h-full flex flex-col">
              <TabsList className="w-full justify-start rounded-2xl bg-secondary p-1.5 gap-1">
                <TabsTrigger value="home" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Home
                </TabsTrigger>
                <TabsTrigger value="about" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  About Me
                </TabsTrigger>
                <TabsTrigger value="career" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Career
                </TabsTrigger>
                <TabsTrigger value="goals" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Goals
                </TabsTrigger>
                <TabsTrigger value="discover" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Discover
                </TabsTrigger>
              </TabsList>

              {Object.entries(tabContent).map(([key, content]) => (
                <TabsContent key={key} value={key} className="flex-1 mt-4">
                  <div className="rounded-2xl bg-card border border-border p-8 h-full">
                    <h2 className="text-2xl font-bold text-foreground mb-4">{content.title}</h2>
                    <div className="text-muted-foreground leading-relaxed text-base" style={{whiteSpace: 'pre-line'}}>
                      {typeof content.body === 'string' ? content.body : content.body}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-8 pb-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
          <p className="text-muted-foreground mt-2">A collection of things I've built</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
