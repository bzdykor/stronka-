const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-secondary/30">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-primary font-semibold">Bee Instalacje</span>. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
