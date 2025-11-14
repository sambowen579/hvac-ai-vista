import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Cpu, Download, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            HVAC Compliance AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Instant EPA-Compliant Refrigerant Reports — Powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button size="lg" className="w-full sm:w-auto text-base px-8">
                Log In
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="container mx-auto px-4 pb-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Upload className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Upload Job Notes</h3>
              <p className="text-muted-foreground">
                Simply upload your technician's field notes, photos, or service records.
              </p>
            </Card>

            <Card className="p-8 border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Cpu className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. AI Processes Data</h3>
              <p className="text-muted-foreground">
                Our advanced AI extracts key information and formats it for EPA compliance.
              </p>
            </Card>

            <Card className="p-8 border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Download className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Download Perfect PDF</h3>
              <p className="text-muted-foreground">
                Get a professionally formatted, EPA-compliant refrigerant report instantly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Built for HVAC Professionals
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">EPA Compliant</h4>
                  <p className="text-sm text-muted-foreground">
                    Every report meets EPA Section 608 requirements
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Time Saving</h4>
                  <p className="text-sm text-muted-foreground">
                    Generate reports in seconds, not hours
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Professional Output</h4>
                  <p className="text-sm text-muted-foreground">
                    Consistently formatted, ready-to-submit PDFs
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Secure & Private</h4>
                  <p className="text-sm text-muted-foreground">
                    Your data is encrypted and never shared
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 HVAC Compliance AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
