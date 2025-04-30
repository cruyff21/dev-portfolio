import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Phone, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading mb-12">Entre em contato</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              Interessado em trabalhar juntos? Preencha o formulário ou entre em contato diretamente pelos canais abaixo.
            </p>
            
            <div className="space-y-6 mt-8">
              <a 
                href="mailto:contato@developerbackend.com" 
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-muted/20 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="link-underline">victor.ebaia@hotmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/victor-estevam-baia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-muted/20 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="link-underline">linkedin.com/in/victor-estevam</span>
              </a>
              
              <a 
                href="tel:+5594996633597" 
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-muted/20 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="link-underline">(94) 9 9663-3597</span>
              </a>
              
              <a 
                href="https://wa.me/5594996633597" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-muted/20 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="link-underline">WhatsApp</span>
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                type="text" 
                name="name" 
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-muted/20 border-muted"
              />
            </div>
            <div>
              <Input 
                type="email" 
                name="email" 
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-muted/20 border-muted"
              />
            </div>
            <div>
              <Textarea 
                name="message" 
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] bg-muted/20 border-muted"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/80"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
