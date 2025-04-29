
const About = () => {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading mb-12">Sobre mim</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <p className="text-lg mb-6">
              Sou um desenvolvedor backend apaixonado por criar soluções robustas e escaláveis. Com experiência em desenvolvimento de APIs, arquitetura de sistemas e otimização de bancos de dados, meu foco é construir o coração das aplicações - a parte que os usuários não veem, mas que sustenta todo o sistema.
            </p>
            <p className="text-lg mb-6">
              Minha abordagem combina pensamento analítico com práticas modernas de engenharia de software. Sou adepto de metodologias ágeis, integração contínua e desenvolvimento orientado a testes.
            </p>
            <p className="text-lg">
              Quando não estou codando, estou explorando novas tecnologias, contribuindo para projetos open source ou compartilhando conhecimento com a comunidade de desenvolvimento.
            </p>
          </div>
          
          <div className="order-first md:order-last grid grid-cols-2 gap-4">
            <div className="bg-muted/20 backdrop-blur-sm border border-muted p-6 rounded-lg shadow-sm card-hover">
              <h3 className="font-mono text-lg font-medium mb-2">3+</h3>
              <p className="text-muted-foreground">Anos de experiência</p>
            </div>
            <div className="bg-muted/20 backdrop-blur-sm border border-muted p-6 rounded-lg shadow-sm card-hover">
              <h3 className="font-mono text-lg font-medium mb-2">25+</h3>
              <p className="text-muted-foreground">Projetos concluídos</p>
            </div>
            <div className="bg-muted/20 backdrop-blur-sm border border-muted p-6 rounded-lg shadow-sm card-hover">
              <h3 className="font-mono text-lg font-medium mb-2">10+</h3>
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
