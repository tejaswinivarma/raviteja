import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mock';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { 
  Moon, 
  Sun, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  ExternalLink,
  Calendar,
  Award,
  Users,
  TrendingUp,
  Code,
  Database,
  Cloud,
  Palette,
  TestTube,
  Star,
  Quote,
  ChevronRight,
  Download,
  Eye
} from 'lucide-react';

const Portfolio = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillIcons = {
    Frontend: <Code className="w-4 h-4" />,
    Backend: <Database className="w-4 h-4" />,
    Cloud: <Cloud className="w-4 h-4" />,
    Database: <Database className="w-4 h-4" />,
    Testing: <TestTube className="w-4 h-4" />
  };

  const SkillChart = ({ skills }) => (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {skillIcons[skill.category]}
              <span className="font-medium">{skill.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </div>
      ))}
    </div>
  );

  const ExperienceTimeline = ({ experiences }) => (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={exp.id} className="relative pl-8 pb-8 border-l-2 border-muted-foreground/20">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="font-bold text-lg">{exp.position}</h3>
              <Badge variant="outline">{exp.duration}</Badge>
            </div>
            <p className="text-primary font-medium">{exp.company} • {exp.location}</p>
            <p className="text-muted-foreground">{exp.description}</p>
            <div className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ProjectCard = ({ project }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <Code className="w-8 h-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">{project.category}</p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span>{project.impact.users} users</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
              <span>{project.impact.efficiency}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const TestimonialCard = ({ testimonial }) => (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={`/api/placeholder/48/48`} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
            <CardDescription>{testimonial.position} at {testimonial.company}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="relative">
            <Quote className="w-6 h-6 text-muted-foreground/30 absolute -top-2 -left-2" />
            <p className="text-muted-foreground pl-4">{testimonial.text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className={`min-h-screen transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src={portfolioData.personalInfo.profileImage} alt={portfolioData.personalInfo.name} />
                <AvatarFallback>RV</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-bold text-lg">{portfolioData.personalInfo.name}</h1>
                <p className="text-sm text-muted-foreground">{portfolioData.personalInfo.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-primary/10"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button className="hidden md:flex">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Full-Stack
                  <span className="block text-primary">Developer</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-lg">
                  {portfolioData.personalInfo.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{portfolioData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Hyderabad, India</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 flex items-center justify-center">
                  <Avatar className="w-64 h-64">
                    <AvatarImage src={portfolioData.personalInfo.profileImage} alt={portfolioData.personalInfo.name} />
                    <AvatarFallback className="text-4xl">RV</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-6 lg:grid-cols-6">
            <TabsTrigger value="home">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="testimonials">Reviews</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {portfolioData.about.summary}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Key Highlights</h3>
                      <ul className="space-y-2">
                        {portfolioData.about.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Education</h3>
                      <div className="space-y-3">
                        {portfolioData.education.map((edu, i) => (
                          <div key={i} className="space-y-1">
                            <p className="font-medium">{edu.degree}</p>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                            <p className="text-sm text-primary">{edu.percentage} • {edu.duration}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Technical Skills
                </CardTitle>
                <CardDescription>
                  My proficiency across different technologies and frameworks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SkillChart skills={portfolioData.skills.technical} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.soft.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Professional Experience
                </CardTitle>
                <CardDescription>
                  My journey in software development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ExperienceTimeline experiences={portfolioData.experience} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A showcase of my technical expertise and problem-solving abilities
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Client Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What colleagues and clients say about working with me
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} testimonial={testimonial} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Let's Connect
                </CardTitle>
                <CardDescription>
                  Ready to discuss your next project or opportunity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">{portfolioData.personalInfo.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">{portfolioData.personalInfo.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <a href={portfolioData.personalInfo.linkedin} className="text-sm text-primary hover:underline">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Awards & Recognition</h3>
                      {portfolioData.awards.map((award, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-yellow-500 mt-0.5" />
                          <div>
                            <p className="font-medium">{award.title}</p>
                            <p className="text-sm text-muted-foreground">{award.organization} • {award.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Certifications</h3>
                    {portfolioData.certifications.map((cert, i) => (
                      <div key={i} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{cert.name}</p>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                          <Badge variant={cert.status === 'Completed' ? 'default' : 'secondary'}>
                            {cert.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2024 {portfolioData.personalInfo.name}. Built with React & Modern Web Technologies.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;