
import { Progress } from '@/components/ui/progress';

const techSkills = [
  { name: "Node.js", level: 95 },
  { name: "Python", level: 90 },
  { name: "SQL (PostgreSQL/MySQL)", level: 85 },
  { name: "NoSQL (MongoDB/DynamoDB)", level: 80 },
  { name: "Docker/Kubernetes", level: 75 },
  { name: "CI/CD (Jenkins/GitHub Actions)", level: 85 },
  { name: "AWS/Cloud", level: 80 },
  { name: "REST/GraphQL APIs", level: 90 }
];

const toolsAndFrameworks = [
  "Express.js", "FastAPI", "Django", "Flask", 
  "Spring Boot", "Sequelize", "TypeORM", "Prisma",
  "Jest", "Pytest", "Terraform", "Git"
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 px-4 bg-muted/5">
      <div className="container mx-auto">
        <h2 className="section-heading mb-12">Habilidades técnicas</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-lg font-medium mb-4">Tecnologias principais</h3>
            {techSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-mono">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Ferramentas & Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {toolsAndFrameworks.map((tool) => (
                <div 
                  key={tool}
                  className="bg-muted/20 backdrop-blur-sm border border-muted rounded-lg p-3 text-center shadow-sm card-hover"
                >
                  <span className="text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-medium mb-6">O que ofereço</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Arquitetura de Backend",
                description: "Projeto e implementação de sistemas robustos e escaláveis"
              },
              {
                title: "Otimização de Banco de Dados",
                description: "Melhoria de performance e estruturação de dados"
              },
              {
                title: "Segurança & Autenticação",
                description: "Implementação de práticas seguras e proteção de dados"
              },
              {
                title: "CI/CD & DevOps",
                description: "Automação de deploy e monitoramento de aplicações"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-muted/20 backdrop-blur-sm border border-muted rounded-lg p-6 shadow-sm card-hover"
              >
                <h4 className="font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
