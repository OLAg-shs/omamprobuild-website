const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4 text-foreground">
              GlobalTrade<span className="text-accent">Pro</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your trusted partner in global business development and international trade since 2009.
            </p>
            <p className="text-muted-foreground text-sm">
              Connecting businesses worldwide with expert solutions.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-accent">Our Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Business Development</li>
              <li>General Trading</li>
              <li>Import & Export</li>
              <li>Market Analysis</li>
              <li>Supply Chain Solutions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-accent">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>📧 omampcoltd@outlook.com</li>
              <li>📱 +1 (555) 123-4567</li>
              <li>📍 Greater Accra, London House Street</li>
              <li>🏢 GL-066-9438</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>&copy; OmamProBuild LTD All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
