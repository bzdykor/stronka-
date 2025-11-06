import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">Kontakt</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-gold)]">
            <Mail className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
            <a 
              href="mailto:beeinstalacje@gmail.com"
              className="text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]"
            >
              beeinstalacje@gmail.com
            </a>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-gold)]">
            <Phone className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Telefon</h3>
            <a 
              href="tel:518104514"
              className="text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]"
            >
              518 104 514
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
