import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Eye,
  Target,
  Sparkles,
  Shield,
  Heart,
  Lock,
  UserCheck,
  PhoneOff,
  Smile,
  RefreshCw,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 py-20 px-4 border-b border-border/40">
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-primary">
                Master Project Document
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              About{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                SafeSpeak
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A child-centred safeguarding, wellness, and recovery ecosystem designed to bridge the gap between a child's fear of speaking up and the help they deserve.
            </p>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Vision Card */}
              <Card className="border-primary/30 shadow-card bg-card/80">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Eye className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Our Vision</span>
                  <h2 className="text-2xl font-bold mt-1 mb-4">A World Where Every Child is Heard</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    To build a world where every child feels safe enough to speak, every concern is taken seriously, and every child can access the support, protection, and care they deserve—regardless of their circumstances or background.
                  </p>
                </CardContent>
              </Card>

              {/* Mission Card */}
              <Card className="border-secondary/30 shadow-card bg-card/80">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                    <Target className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">Our Mission</span>
                  <h2 className="text-2xl font-bold mt-1 mb-4">Empowering Care Through Technology</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Our mission is to reduce the barriers children face when seeking help by combining accessible technology, empathetic communication, privacy-conscious reporting, and accountable safeguarding systems. We aim to make it easier for children to express concerns, easier for professionals to identify situations requiring attention, and more reliable for support systems to respond.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* WHY SAFESPEAK EXISTS */}
            <div className="p-8 md:p-12 rounded-3xl bg-muted/30 border border-border/80 shadow-soft mb-20 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">The Foundational Gap</span>
              <h2 className="text-3xl font-bold">Why SafeSpeak Exists</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p className="leading-relaxed">
                  Many traditional safeguarding systems are activated only after a child has successfully disclosed a problem to an adult. However, fear, shame, uncertainty, power imbalances, and lack of trust prevent countless children from ever reaching that point.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      The Gap Before Disclosure
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      SafeSpeak provides an accessible, non-judgemental, and low-pressure way to begin seeking support, exploring options, and understanding privacy before submitting any formal report.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
                      <RefreshCw className="h-5 w-5 text-secondary" />
                      The Gap After Disclosure
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      SafeSpeak aims to provide structured prioritisation, qualified human intervention, independent escalation to avoid conflicts of interest, and continued follow-up.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold text-center mt-6">
                  "Our approach recognises that reporting is not the outcome. Getting a child appropriate help is the outcome we work towards."
                </div>
              </div>
            </div>

            {/* CORE PRINCIPLES */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">Guiding Values</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Core Principles</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Eight non-negotiable commitments that govern every line of code, interaction design, and operational procedure in SafeSpeak.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-soft">
                  <Heart className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-base mb-2">Child-First</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The child’s physical safety, emotional dignity, and long-term wellbeing are prioritized in every decision.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-soft">
                  <Shield className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-bold text-base mb-2">Trust Before Disclosure</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Children must clearly understand how their data is handled and their options before sharing sensitive experiences.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-soft">
                  <Lock className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-bold text-base mb-2">Privacy by Design</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Collect only the information strictly necessary for a justified safeguarding purpose; avoid unnecessary surveillance.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-soft">
                  <UserCheck className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-base mb-2">Human Accountability</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    AI assists in triage and listening; qualified human professionals remain solely responsible for safeguarding actions.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-soft">
                  <PhoneOff className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-bold text-base mb-2">Universal Accessibility</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Support should never depend on personal smartphone ownership, internet privilege, or formal written proficiency.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-soft">
                  <Smile className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-bold text-base mb-2">No Judgement</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Children should never be blamed, shamed, or interrogated for seeking guidance or voicing distress.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-soft">
                  <RefreshCw className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-base mb-2">Continuity of Care</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A concern must never disappear into a digital void; response tracking and follow-up are actively sustained.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-soft">
                  <Cpu className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-bold text-base mb-2">Responsible Tech</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Technological innovation must strictly respect legal frameworks like POCSO & JJ Act and never compromise safety.
                  </p>
                </div>
              </div>
            </div>

            {/* MASTER BLUEPRINT SUMMARY CARD */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-primary/20 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Master Summary</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-6">SafeSpeak Master Profile</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="font-semibold text-foreground block mb-1">Project Category:</span>
                  <p className="text-muted-foreground">
                    AI-assisted Child Safeguarding, Wellness, Prevention & Recovery Platform
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-foreground block mb-1">Core Innovation:</span>
                  <p className="text-muted-foreground">
                    Addressing the barrier that exists before disclosure and connecting first contact to intervention and long-term recovery.
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-foreground block mb-1">Target Stakeholders:</span>
                  <p className="text-muted-foreground">
                    Children, schools, safeguarding professionals, counsellors, healthcare services, and child-protection networks.
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-foreground block mb-1">Long-term Vision:</span>
                  <p className="text-muted-foreground">
                    A scalable, universally accessible child safeguarding infrastructure ensuring no child is left unheard.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-4 items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  Learn about the specific challenges SafeSpeak was designed to overcome:
                </div>
                <Link to="/problem">
                  <Button className="gap-2">
                    The Problem We Solve <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
