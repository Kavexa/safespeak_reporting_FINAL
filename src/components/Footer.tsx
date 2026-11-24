import { Shield, Lock, HeartHandshake, PhoneCall, AlertTriangle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import safespeakLogo from '@/assets/safespeak-logo-new.png';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-md">
      {/* Top Banner Notice */}
      <div className="bg-primary/5 border-b border-primary/10 py-3 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
            <span>
              <strong>Emergency Notice:</strong> If a child is in immediate physical danger, call emergency services directly: <strong>112 (National Emergency)</strong> or <strong>1098 (Childline India)</strong>.
            </span>
          </div>
          <div className="shrink-0 text-foreground font-medium">
            24/7 National Emergency: 112
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img src={safespeakLogo} alt="SafeSpeak Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-base font-semibold text-primary">
              Trust Before Disclosure. Support Beyond Reporting.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              A child-centred safeguarding and wellness ecosystem focused on making support more accessible, reporting less intimidating, and protection accountable.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                <Lock className="h-3 w-3" /> Privacy by Design
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
                <Shield className="h-3 w-3" /> Human-Led Safeguarding
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium">
                <HeartHandshake className="h-3 w-3" /> Continuity of Care
              </span>
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Explore Project
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About SafeSpeak
                </Link>
              </li>
              <li>
                <Link to="/problem" className="text-muted-foreground hover:text-primary transition-colors">
                  The Problem We Solve
                </Link>
              </li>
              <li>
                <Link to="/ai" className="text-muted-foreground hover:text-primary transition-colors">
                  SafeSpeak AI Support
                </Link>
              </li>
              <li>
                <Link to="/kiosk" className="text-muted-foreground hover:text-primary transition-colors">
                  Physical School Kiosks
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works & Tech
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-muted-foreground hover:text-primary transition-colors">
                  Impact & Outcomes
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Frameworks */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Governance & Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/safeguarding" className="text-muted-foreground hover:text-primary transition-colors">
                  Safeguarding & CCPRB
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy & Digital Trust
                </Link>
              </li>
              <li>
                <Link to="/wellness" className="text-muted-foreground hover:text-primary transition-colors">
                  Wellness & Recovery
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-muted-foreground hover:text-primary transition-colors">
                  Roadmap & Business Model
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team & Advisory
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Portals & Inquiries */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Access & Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/report" className="text-primary font-medium hover:underline flex items-center gap-1">
                  Submit a Report <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-muted-foreground hover:text-primary transition-colors">
                  Officer Review Portal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  School Pilot Requests
                </Link>
              </li>
              <li className="pt-2 text-xs text-muted-foreground">
                <span className="font-semibold block text-foreground mb-1">Official Inquiries:</span>
                <a href="mailto:kavexa432@gmail.com" className="hover:text-primary underline">
                  kavexa432@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Regulatory Framing Notice */}
        <div className="mt-12 pt-8 border-t border-border/80 text-xs text-muted-foreground space-y-3 leading-relaxed">
          <p>
            <strong>Important Operational Notice:</strong> SafeSpeak is a developing student-led social innovation and technology prototype. It is not an emergency dispatch service, a licensed clinic, or a replacement for legally established Indian statutory authorities (such as Child Welfare Committees, Police, or Special Juvenile Police Units).
          </p>
          <p>
            <strong>CCPRB Clarification:</strong> CCPRB (Central Child Protection Response Board) is SafeSpeak's proposed independent safeguarding oversight and escalation framework. It is an internal project governance concept and is <em>not</em> an existing statutory government authority, nor does it hold independent law-enforcement or judicial powers.
          </p>
          <p>
            AI assistance within SafeSpeak is restricted to conversational comfort, structured classification, and workflow triage; qualified human professionals remain solely accountable for all safeguarding evaluations and legal compliance under the POCSO Act 2012 and Juvenile Justice Act.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <div>
            © {new Date().getFullYear()} SafeSpeak — Child Safety, Wellness & Recovery Initiative. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/safeguarding" className="hover:text-foreground">
              Safeguarding Framework
            </Link>
            <Link to="/contact" className="hover:text-foreground">
              Pilot Collaboration
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
