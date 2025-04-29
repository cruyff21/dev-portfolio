
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "API de Microservices",
    description: "Sistema de microserviços com Node.js e Express, utilizando comunicação assíncrona via RabbitMQ.",
    tags: ["Node.js", "Express", "RabbitMQ", "Docker"],
    link: "#"
  },
  {
    id: 2,
    title: "Sistema de Gestão de Dados",
    description: "Backend para sistema de gestão empresarial com processamento em tempo real e relatórios customizados.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    link: "#"
  },
  {
    id: 3,
    title: "Infraestrutura Serverless",
    description: "Arquitetura serverless para aplicação de alta escalabilidade com funções lambda e banco NoSQL.",
    tags: ["AWS Lambda", "DynamoDB", "Terraform", "CloudFormation"],
    link: "#"
  },
  {
    id: 4,
    title: "Plataforma de E-commerce",
    description: "Backend para e-commerce com processamento de pagamentos, gestão de estoque e integração com fornecedores.",
    tags: ["Java", "Spring Boot", "MySQL", "Kafka"],
    link: "#"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading mb-12">Projetos recentes</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className={`border border-muted bg-muted/20 backdrop-blur-sm transition-all duration-300 ${
                hoveredProject === project.id ? 'scale-[1.02] shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.link}>Ver detalhes</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Ver mais projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
