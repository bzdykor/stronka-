import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/20">
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <h1 className="mb-6 text-6xl md:text-8xl font-bold tracking-tight">
          <span className="text-primary">Bee</span>{" "}
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Instalacje
          </span>
        </h1>
        
        <p className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Profesjonalne usługi instalacyjne najwyższej jakości
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-gold)] transition-[var(--transition-smooth)]"
          >
            <Phone className="mr-2 h-5 w-5" />
            Skontaktuj się
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 transition-[var(--transition-smooth)]"
          >
            <Mail className="mr-2 h-5 w-5" />
            Napisz do nas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
