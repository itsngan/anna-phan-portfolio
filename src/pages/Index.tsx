import profilePhoto from "@/assets/profile-photo.jpg";
import aboutMePhoto from "@/assets/about-me-photo.png";
import projectPlaceholder from "@/assets/project-placeholder.jpg";
import resume from "@/assets/ngan-phan-resume.pdf";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { ExternalLink } from "lucide-react";
import { title } from "process";
import { useState } from "react";

const tabContent = {
  home: {
    title: "Hello! I'm Anna",
    body: "I’m a third-year Computer Science student at York University interested in exploring different areas of my field, from software design to data analysis.\
    Growing up, I was always curious about how things worked, and I was influenced by my mom, who taught me math throughout middle school. That early interest led me to pursue a path in STEM.\
    \nNow, as a Computer Science student, I’ve learned a lot frombuilding projects, getting stuck, and improving as I go.\
    \nOutside of coding, I enjoy crocheting, reading, and spending time with my cat, Whiskey.\
    These interests have also started to influence some of my projects, such as exploring data related to crochet patterns and pet nutrition.\
    \n\nThis portfolio highlights my work, along with how I’ve been developing my skills and interests over time."
  },
  about: {
    title: "About Me",
    body: "My name is Anna, and I was born in Ho Chi Minh City, Vietnam. From a young age, my parents invested deeply in my education, enrolling me in an international school in Vietnam which followed the Ontario curriculum. There, I met my third-grade teacher, Miss Sam, who taught me how to truly read and started a spark of love for books that persists today. From her, I learned to consistently and continuously pursue knowledge.\
    \n\nIn middle school, my mom tutored me in math. Nights filled with silence, tears, and messy scribbles on the backs of torn calendar pages slowly shaped my love for problem solving and logical reasoning. Through these challenges, I began to see myself pursuing a future in STEM.\
    \n\nAt sixteen, after more than a decade at the same school, I moved to Toronto to continue my education. I attended a public school in Etobicoke, and for the first time, became “the new student”. Compared to what I was used to, it felt big, loud, and intimidating. Because of classroom capacity, I was placed in an art course that I had not chosen. Unexpectedly, that class was my turning point.\
    \n\nThis attached drawing is an assignment I completed in this course—a media remix of how one of my favourite characters, Phineas, would have experienced the pandemic. Beyond the remix, this reflected what I felt like during the pandemic, and what I saw myself becoming if I didn’t change how I approach this new experience. That moment of reflection pushed me out of my comfort zone and taught me that adaptation begins with actions. Sometimes the way forward is simply to start.\
    \n\nWhen considering my path, I was searching for a career that can combine logic, math, and creativity, and this led me into technology, and ultimately, computer science. I chose York University after hearing about its supportive and balanced environment from my sister. I knew that I grow best under an environment that balances work and life, and The Lassonde Engineering program has exceeded these expectations, offering me not only academics, but opportunities to join in fun events, hackathons, and club activities.\
    \n\nAs I continue my journey in computer science, I remain driven by the same curiosity that first made me a bookworm and the same persistence shaped by late nights of problem solving. I am still learning, still growing, and still starting."
  },
  whyMe: {
    title: "Why Me",
    body: (
      <div className="flex flex-col items-center justify-center gap-4 h-full min-h-[400px]">
        <div className="w-full h-full rounded-2xl bg-secondary flex items-center justify-center">
          <p className="text-muted-foreground">Video coming soon...</p>
        </div>
      </div>
    )
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
    title: "Cat Food Nutrition Analyzer",
    description: "Currently developing a custom database of commercial cat food products for a web application that analyzes dietary and nutritional intake of a cat.",
    image: projectPlaceholder,
    tags: ["Python", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/itsngan/cat-food-nutrition-analyzer",
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
  const [activeTab, setActiveTab] = useState("home");

  const tabImages: Record<string, string> = {
    home: profilePhoto,
    about: aboutMePhoto,
    whyMe: profilePhoto,
    career: profilePhoto,
    goals: profilePhoto,
    discover: profilePhoto,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Title */}
      <header className="container mx-auto px-8 pt-12 lg:pt-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Anna Phan</h1>
        <a href={resume} target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg font-medium text-primary hover:underline mt-2 inline-flex items-center gap-2">
          Resume
          <ExternalLink className="w-4 h-4" />
        </a>
      </header>
      {/* Hero Section */}
      <section className="container mx-auto px-8 pt-6 pb-10 lg:pt-8 lg:pb-16">
        <div className="grid grid-cols-3 gap-8 lg:gap-12 auto-rows-max">
          {/* Left Column - Photo and Skills */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            {/* Photo - Top */}
            <div className="rounded-2xl overflow-hidden border border-border w-full aspect-[3/4] transition-all duration-300">
              <img
                src={tabImages[activeTab]}
                alt="Profile photo"
                className="w-full h-full object-cover"
                width={512}
                height={640}
              />
            </div>
            {/* Skills - Bottom */}
            <div className="rounded-2xl bg-card border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">Java</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">Python</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">React</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">SQL</span>
              </div>
            </div>
          </div>

          {/* Tabs Column - Right */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="home" onValueChange={setActiveTab} className="h-full flex flex-col">
              <TabsList className="w-full justify-start rounded-2xl bg-secondary p-1.5 gap-1">
                <TabsTrigger value="home" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Home
                </TabsTrigger>
                <TabsTrigger value="about" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  About Me
                </TabsTrigger>
                <TabsTrigger value="whyMe" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Why Me
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
