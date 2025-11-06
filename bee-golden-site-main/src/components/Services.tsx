import { Card } from "@/components/ui/card";
import { ShieldAlert, Brain, Zap, Cctv } from "lucide-react";

const services = [
  {
    icon: ShieldAlert,
    title: "Instalacje Alarmowe",
    description: "Gwarancja, że Twój dom lub firma jest w dobrych rękach",
  },
  {
    icon: Zap,
    title: "Instalacje Elektryczne",
    description: "Profesjonalne wykonanie instalacji elektrycznych zgodnie z normami",
  },
  {
    icon: Cctv,
    title: "Telewizja Przemysłowa CCTV",
    description: "Bezpieczeństwo w zasięgu twojego wzroku",
  },
  {
    icon: Brain,
    title: "Inteligentny Dom",
    description: "Jedna aplikacja, nieskończone możliwości",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50" id="services">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">Nasze</span> <span className="text-primary">Usługi</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Oferujemy kompleksowe rozwiązania instalacyjne dla Twojego domu lub firmy
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-gold)] group"
            >
              <service.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-[var(--transition-smooth)]" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
