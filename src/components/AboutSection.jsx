import { Briefcase, Code, User } from "lucide-react";
import resume from "../assets/Gory_Resume.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Engineer with a Passion for Scalable Solutions
            </h3>

            <p className="text-muted-foreground">
              I'm a software engineer based in New York with hands-on experience
              building scalable, high-performance web applications using modern
              frameworks like React, Next.js, Django, and FastAPI. I thrive in fast-paced,
              feedback-driven environments and bring a strong bias for action and
              technical rigor to every project I work on.
            </p>

            <p className="text-muted-foreground">
              From crafting sleek, responsive UIs to designing robust backend
              architectures and CI/CD pipelines, I take pride in building
              thoughtful, performant digital experiences. I’m always eager to learn, adapt, and
              push the boundaries of what great software can do.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href={resume}
                download="Gory_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building full-stack applications with React, Next.js,
                    Django, FastAPI, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Creating intuitive, responsive interfaces with a focus on
                    accessibility and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Systems & Scalability</h4>
                  <p className="text-muted-foreground">
                    Designing backend architectures and APIs that scale
                    efficiently under load.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
