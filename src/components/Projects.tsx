
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Dashboard de notas fiscais",
    description: "Desenvolvido com foco em visualização de dados fiscais por empresa e por período. A API foi projetada para consumir dados de bancos de dados PostgreSQL e MongoDB. Já está em produção em uma VM na AWS.",
    tags: ["Node.js", "Express", "React", "AWS"],
    link: "#"
  },
  {
    id: 2,
    title: "Serviço ETL de migração de dados SQL Anywhere → PostgreSQL",
    description: "Desenvolvi um serviço ETL em Python para extrair dados contábeis do SQL Anywhere, transformar e carregar em um banco PostgreSQL. Usei pyodbc e psycopg2, focando em automação, integridade dos dados e performance.",
    tags: ["Python", "PostgreSQL", "SQL Anywhere"],
    link: "#"
  },
  {
    id: 3,
    title: "Automação para solicitação de documentos",
    description: "Desenvolvi uma automação para solicitação de documentos na SEFA, tais como NF-e, NFC-e CT-e.",
    tags: ["Python", "Selenium", "PostgreSQL"],
    link: "#"
  },
  {
    id: 4,
    title: "Aplicativo de agendamento",
    description: "Estou desenvolvendo um aplicativo de agendamento de serviços de manicures. O aplicativo está sendo desenvolvido em Dart/Flutter com base dados e autenticação no Firebase.",
    tags: ["Dart", "Flutter", "Firebase"],
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
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" disabled>
            Ver mais projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
