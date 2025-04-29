
const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-muted">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold gradient-text">
              dev<span className="text-primary">.</span>
            </a>
            <p className="text-sm mt-2 text-muted-foreground">
              Desenvolvendo soluções robustas desde 2020
            </p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
