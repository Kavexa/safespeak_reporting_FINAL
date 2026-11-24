import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import {
  Menu,
  X,
  Shield,
  Bot,
  Monitor,
  HeartHandshake,
  FileText,
  Activity,
  Users,
  ChevronDown,
  Lock,
  Compass,
} from 'lucide-react';
import safespeakLogo from '@/assets/safespeak-logo-new.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 transition-all shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={safespeakLogo}
            alt="SafeSpeak - Trust Before Disclosure. Support Beyond Reporting."
            className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary font-semibold' : 'text-foreground/80'
            }`}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors focus:outline-none">
              <span>About</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-64 p-3 bg-card rounded-xl border border-border shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <Link
                to="/about"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <Shield className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">About SafeSpeak</div>
                  <div className="text-[11px] text-muted-foreground">Vision, mission, & core principles</div>
                </div>
              </Link>
              <Link
                to="/problem"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <FileText className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">The Problem</div>
                  <div className="text-[11px] text-muted-foreground">Why children remain unheard</div>
                </div>
              </Link>
              <Link
                to="/team"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <Users className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">Team & Partners</div>
                  <div className="text-[11px] text-muted-foreground">Student founders & advisory</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Solution & Tech Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors focus:outline-none">
              <span>Solution & Tech</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-72 p-3 bg-card rounded-xl border border-border shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <Link
                to="/ai"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <Bot className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">SafeSpeak AI</div>
                  <div className="text-[11px] text-muted-foreground">Conversational triage & boundaries</div>
                </div>
              </Link>
              <Link
                to="/kiosk"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <Monitor className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">School Kiosks</div>
                  <div className="text-[11px] text-muted-foreground">Physical non-device access points</div>
                </div>
              </Link>
              <Link
                to="/how-it-works"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <Compass className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">How It Works & Tech</div>
                  <div className="text-[11px] text-muted-foreground">8-step journey & architecture</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Governance & Privacy Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors focus:outline-none">
              <span>Governance</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-72 p-3 bg-card rounded-xl border border-border shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <Link
                to="/safeguarding"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <Shield className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">Safeguarding & CCPRB</div>
                  <div className="text-[11px] text-muted-foreground">Proposed oversight & routing model</div>
                </div>
              </Link>
              <Link
                to="/privacy"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <Lock className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">Privacy & Legal Trust</div>
                  <div className="text-[11px] text-muted-foreground">Case codes, POCSO & DPDP safeguards</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Wellness & Impact Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors focus:outline-none">
              <span>Impact & Care</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full right-0 w-72 p-3 bg-card rounded-xl border border-border shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <Link
                to="/wellness"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <HeartHandshake className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">Wellness & Recovery</div>
                  <div className="text-[11px] text-muted-foreground">Care pathways & Operation Thoofan</div>
                </div>
              </Link>
              <Link
                to="/impact"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <Activity className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">Impact & Innovation</div>
                  <div className="text-[11px] text-muted-foreground">Metrics & core differentiators</div>
                </div>
              </Link>
              <Link
                to="/roadmap"
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <FileText className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-xs">Roadmap & Business Model</div>
                  <div className="text-[11px] text-muted-foreground">Phases, enterprise model & status</div>
                </div>
              </Link>
            </div>
          </div>

          <Link
            to="/faq"
            className={`transition-colors hover:text-primary ${
              isActive('/faq') ? 'text-primary font-semibold' : 'text-foreground/80'
            }`}
          >
            FAQ
          </Link>

          <Link
            to="/contact"
            className={`transition-colors hover:text-primary ${
              isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground/80'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link to="/report">
            <Button className="shadow-soft hover:shadow-glow transition-all gap-1.5 font-medium">
              <Shield className="h-4 w-4" />
              <span>Report Portal</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-foreground/80 hover:text-foreground rounded-lg focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-card/95 backdrop-blur-xl px-4 py-6 max-h-[85vh] overflow-y-auto space-y-4">
          <div className="flex flex-col gap-1 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground"
            >
              Home
            </Link>
            <div className="text-[11px] font-semibold text-muted-foreground px-3 pt-2 uppercase tracking-wider">
              About & Context
            </div>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <Shield className="h-4 w-4 text-primary" />
              About SafeSpeak Master
            </Link>
            <Link
              to="/problem"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <FileText className="h-4 w-4 text-secondary" />
              The Problem We Solve
            </Link>
            <Link
              to="/team"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <Users className="h-4 w-4 text-accent" />
              Team & Advisory
            </Link>

            <div className="text-[11px] font-semibold text-muted-foreground px-3 pt-3 uppercase tracking-wider">
              Solution & Tech
            </div>
            <Link
              to="/ai"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <Bot className="h-4 w-4 text-primary" />
              SafeSpeak AI Support
            </Link>
            <Link
              to="/kiosk"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <Monitor className="h-4 w-4 text-secondary" />
              Physical School Kiosks
            </Link>
            <Link
              to="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <Compass className="h-4 w-4 text-accent" />
              How It Works & Tech
            </Link>

            <div className="text-[11px] font-semibold text-muted-foreground px-3 pt-3 uppercase tracking-wider">
              Governance & Care
            </div>
            <Link
              to="/safeguarding"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <Shield className="h-4 w-4 text-primary" />
              Safeguarding & CCPRB
            </Link>
            <Link
              to="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <Lock className="h-4 w-4 text-secondary" />
              Privacy & Legal Trust
            </Link>
            <Link
              to="/wellness"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <HeartHandshake className="h-4 w-4 text-primary" />
              Wellness & Recovery
            </Link>
            <Link
              to="/impact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <Activity className="h-4 w-4 text-accent" />
              Impact & Innovation
            </Link>
            <Link
              to="/roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2"
            >
              <FileText className="h-4 w-4 text-secondary" />
              Roadmap & Enterprise Model
            </Link>

            <div className="text-[11px] font-semibold text-muted-foreground px-3 pt-3 uppercase tracking-wider">
              Inquiries
            </div>
            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground"
            >
              Frequently Asked Questions
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-muted text-foreground"
            >
              Contact & Pilot Inquiries
            </Link>
          </div>

          <div className="pt-4 border-t border-border flex flex-col gap-2">
            <Link to="/report" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full justify-center gap-2">
                <Shield className="h-4 w-4" />
                Student Report Portal
              </Button>
            </Link>
            <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-center">
                Admin Officer Access
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
