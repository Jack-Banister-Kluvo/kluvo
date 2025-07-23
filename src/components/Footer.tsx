const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Kluvo</h3>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-md">
              Your fully-managed outbound sales desk without the hiring headaches. 
              Office-based reps, advanced technology, and complete visibility.
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold">Starting from £14/hour</p>
              <p className="text-primary-foreground/80">Simple, transparent pricing</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Outbound Sales</li>
              <li>Lead Generation</li>
              <li>Appointment Setting</li>
              <li>CRM Integration</li>
              <li>Quality Control</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>hello@kluvo.com</li>
              <li>Support available 24/7</li>
              <li>Response within 24h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Kluvo. All rights reserved. Offices in Kuala Lumpur and Beirut.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;