
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Desenvolvedor Backend <br />
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary">Soluções Robustas</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Dedicado no desenvolvimento de sistemas e APIs, com foco em entregar soluções funcionais e que gerem valor real.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 min-[400px]:flex-row">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/80 transition-colors"
              >
                <a href="#contato">Entre em contato</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#projetos">Ver projetos</a>
              </Button>
            </div>
            <div className="mt-6">
              <div className="inline-block py-1 px-3 rounded-full border border-muted text-xs md:text-sm">
                Tecnologias:{" "}
                <span className="font-mono text-primary">
                  Node.js, Python, SQL, NoSQL, AWS
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-3xl opacity-70"></div>
              <div className="relative flex items-center justify-center w-full h-full">
                <div className="rounded-xl bg-muted/20 backdrop-blur-sm border border-muted p-6 shadow-lg">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">
                      <pre><code>{`// Meu código, minhas regras
function iniciarBuildEspecial() {
  const café = true;
  const código = 'limpo';
  const solução = 'escalável';
  
  return { 
    café, 
    código, 
    solução 
  };
}`}</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
