
const About = () => {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading mb-12">Sobre mim</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <p className="text-lg mb-6">
              Meu nome é Victor, sou um desenvolvedor backend em constante evolução, com foco em automação de processos. Tenho experiência prática no desenvolvimento de APIs, integração entre sistemas, web scraping e uso de bancos de dados como PostgreSQL e MongoDB.
            </p>
            <p className="text-lg mb-6">
            Busco escrever códigos simples, organizados e funcionais, sempre seguindo boas práticas. Estou aprendendo cada vez mais sobre arquitetura de sistemas, testes automatizados e metodologias ágeis para melhorar a qualidade das minhas entregas.
            </p>
            <p className="text-lg">
            Quando não estou desenvolvendo soluções para automatizar tarefas repetitivas, estou estudando novas ferramentas, ajudando outros desenvolvedores ou criando projetos que unem tecnologia e produtividade.
            </p>
          </div>
          
          <div className="order-first md:order-last grid grid-cols-2 gap-4">
            <div className="bg-muted/20 backdrop-blur-sm border border-muted p-6 rounded-lg shadow-sm card-hover">
              <h3 className="font-mono text-lg font-medium mb-2">1+</h3>
              <p className="text-muted-foreground">Anos de experiência</p>
            </div>
            <div className="bg-muted/20 backdrop-blur-sm border border-muted p-6 rounded-lg shadow-sm card-hover">
              <h3 className="font-mono text-lg font-medium mb-2">7+</h3>
              <p className="text-muted-foreground">Projetos concluídos</p>
            </div>
            <div className="bg-muted/20 backdrop-blur-sm border border-muted p-6 rounded-lg shadow-sm card-hover">
              <h3 className="font-mono text-lg font-medium mb-2">4+</h3>
              <p className="text-muted-foreground">Tecnologias dominadas</p>
            </div>
            <div className="bg-muted/20 backdrop-blur-sm border border-muted p-6 rounded-lg shadow-sm card-hover">
              <h3 className="font-mono text-lg font-medium mb-2">5+</h3>
              <p className="text-muted-foreground">Contribuições open source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
