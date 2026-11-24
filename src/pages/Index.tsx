import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Shield,
  Lock,
  HeartHandshake,
  Bot,
  Monitor,
  Activity,
  ArrowRight,
  Sparkles,
  HelpCircle,
  EyeOff,
  UserCheck,
  Scale,
  Smile,
  Compass,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 py-24 md:py-32 px-4 border-b border-border/40">
          <div className="container max-w-5xl mx-auto text-center relative z-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fadeIn">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-primary">
                Trust Before Disclosure • Support Beyond Reporting
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.15]">
              <span className="text-foreground">THEIR SILENCE IS NOT THE </span>
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ABSENCE OF A PROBLEM.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
              Every child deserves a space where they can speak without fear, be heard without judgement, and receive help without being left alone.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/about">
                <Button size="lg" className="h-13 px-8 text-base shadow-glow gap-2 font-medium">
                  Explore SafeSpeak
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="h-13 px-8 text-base gap-2 bg-card/50">
                  <Compass className="h-4 w-4" />
                  How It Works
                </Button>
              </Link>
              <Link to="/report">
                <Button size="lg" variant="secondary" className="h-13 px-8 text-base gap-2 font-medium">
                  <Shield className="h-4 w-4" />
                  Student Portal
                </Button>
              </Link>
            </div>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 text-left">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-card/60 border border-border/60 shadow-soft">
                <Lock className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <div className="text-xs font-semibold">100% Confidential</div>
                  <div className="text-[11px] text-muted-foreground">Anonymous case codes</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-card/60 border border-border/60 shadow-soft">
                <Bot className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <div className="text-xs font-semibold">Conversational AI</div>
                  <div className="text-[11px] text-muted-foreground">Empathetic listening</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-card/60 border border-border/60 shadow-soft">
                <Monitor className="h-8 w-8 text-accent shrink-0" />
                <div>
                  <div className="text-xs font-semibold">School Kiosks</div>
                  <div className="text-[11px] text-muted-foreground">No phone required</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-card/60 border border-border/60 shadow-soft">
                <Scale className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <div className="text-xs font-semibold">CCPRB Oversight</div>
                  <div className="text-[11px] text-muted-foreground">Independent escalation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative ambient lights */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* SECTION: PROBLEM INTRODUCTION & THE CORE QUESTION */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">The Silence Gap</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Why Asking for Help Can Feel More Frightening Than Silence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A child may be struggling with bullying, abuse, academic pressure, emotional distress, peer pressure, or problems at home. Yet reaching out is fraught with terror.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
              <div className="p-4 rounded-xl bg-muted/40 border border-border/60">
                <div className="text-primary font-bold text-lg mb-1">Fear of Judgement</div>
                <div className="text-xs text-muted-foreground">Worry of being blamed or disbelieved</div>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/60">
                <div className="text-secondary font-bold text-lg mb-1">Fear of Exposure</div>
                <div className="text-xs text-muted-foreground">Peers or family finding out</div>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/60">
                <div className="text-accent font-bold text-lg mb-1">Power Imbalance</div>
                <div className="text-xs text-muted-foreground">Involvement of seniors or staff</div>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/60">
                <div className="text-primary font-bold text-lg mb-1">Loss of Control</div>
                <div className="text-xs text-muted-foreground">Not knowing what happens next</div>
              </div>
            </div>

            {/* The Shift in Question */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-primary/20 shadow-soft text-center space-y-6">
              <div className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">
                Rethinking Child Safeguarding
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="p-6 rounded-2xl bg-background/80 border border-border/60">
                  <div className="text-xs text-muted-foreground uppercase font-semibold mb-2">Traditional Systems Ask:</div>
                  <div className="text-xl md:text-2xl font-bold text-foreground/70 italic">
                    "What happened?"
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Demands formal complaint, identifying facts, and immediate disclosure.
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30 shadow-card">
                  <div className="text-xs text-primary uppercase font-bold mb-2">SafeSpeak Begins With:</div>
                  <div className="text-xl md:text-2xl font-bold text-primary italic">
                    "Do you feel safe enough to talk?"
                  </div>
                  <div className="text-xs text-primary/80 mt-2 font-medium">
                    Prioritises emotional safety, explains boundaries, and builds trust first.
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto pt-2">
                We believe safeguarding should not begin only when a child is ready to file a complaint. It should begin the moment a child needs support.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: OUR APPROACH & FOUR PILLARS */}
        <section className="py-20 px-4 bg-muted/30 border-y border-border/40">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">The Foundation</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                The Four Pillars of SafeSpeak
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                From the very first conversation to professional intervention and continued follow-up, SafeSpeak bridges the gap between speaking up and receiving help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <Card className="border-primary/30 hover:border-primary/60 transition-all hover:-translate-y-1 shadow-card bg-card">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mb-6 font-bold text-xl">
                    <Bot className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Pillar 01</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">Listen</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    A low-pressure, child-centred first point of contact where children can express themselves in natural text or voice without fear of judgement.
                  </p>
                  <Link to="/ai" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    SafeSpeak AI Features <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>

              {/* Pillar 2 */}
              <Card className="border-secondary/30 hover:border-secondary/60 transition-all hover:-translate-y-1 shadow-card bg-card">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="h-14 w-14 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-6 font-bold text-xl">
                    <Shield className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">Pillar 02</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">Protect</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Privacy-conscious reporting, random pseudonymous case codes, and human-led safeguarding workflows compliant with POCSO & JJ Act standards.
                  </p>
                  <Link to="/safeguarding" className="text-xs font-semibold text-secondary hover:underline inline-flex items-center gap-1">
                    Safeguarding Framework <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>

              {/* Pillar 3 */}
              <Card className="border-accent/30 hover:border-accent/60 transition-all hover:-translate-y-1 shadow-card bg-card">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="h-14 w-14 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-6 font-bold text-xl">
                    <UserCheck className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">Pillar 03</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">Support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Direct, accountable connections to certified counsellors, designated safeguarding officers, healthcare professionals, and support networks.
                  </p>
                  <Link to="/how-it-works" className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1">
                    Explore Support Routing <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>

              {/* Pillar 4 */}
              <Card className="border-primary/30 hover:border-primary/60 transition-all hover:-translate-y-1 shadow-card bg-card">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mb-6 font-bold text-xl">
                    <HeartHandshake className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Pillar 04</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">Recover</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Longitudinal prevention, emotional wellness tracking, rehabilitation pathways, and continued care so no child is abandoned after reporting.
                  </p>
                  <Link to="/wellness" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    Wellness & Recovery <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION: THE SAFESPEAK ECOSYSTEM MAP */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">Unified Architecture</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                The SafeSpeak Ecosystem
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                How every component coordinates seamlessly to protect, listen, and follow through.
              </p>
            </div>

            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border/80 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-muted/40 border border-border/60 hover:bg-muted/70 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Bot className="h-6 w-6 text-primary" />
                    <h4 className="font-bold text-base">SafeSpeak AI</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Conversational support, non-accusatory interaction, age-appropriate language, and assistance with urgency classification.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border/60 hover:bg-muted/70 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Monitor className="h-6 w-6 text-secondary" />
                    <h4 className="font-bold text-base">SafeSpeak Kiosk</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Dedicated school hardware booth offering private touch and voice access without requiring personal mobile devices.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border/60 hover:bg-muted/70 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-accent" />
                    <h4 className="font-bold text-base">Safeguarding Workflows</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Structured human review, urgency prioritization, and independent escalation pathways when internal staff are implicated.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border/60 hover:bg-muted/70 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="h-6 w-6 text-primary" />
                    <h4 className="font-bold text-base">CCPRB Concept</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Proposed independent oversight framework ensuring reports cannot be buried, delayed, or improperly dismissed.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border/60 hover:bg-muted/70 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Smile className="h-6 w-6 text-secondary" />
                    <h4 className="font-bold text-base">Wellness & Prevention</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Emotional wellbeing guides, anti-bullying awareness, and conceptual alignment with youth prevention like Operation Thoofan.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border/60 hover:bg-muted/70 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <HeartHandshake className="h-6 w-6 text-accent" />
                    <h4 className="font-bold text-base">Recovery Pathways</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Connecting disclosures with ongoing psychological care, safe reintegration, family support, and rehabilitation networks.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                <div>Explore the deep-dive technical blueprint and governance layers:</div>
                <div className="flex gap-3">
                  <Link to="/about" className="text-primary hover:underline font-semibold">
                    Master Document →
                  </Link>
                  <Link to="/safeguarding" className="text-secondary hover:underline font-semibold">
                    CCPRB Framework →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CLOSING STATEMENT & CALL TO ACTION */}
        <section className="py-24 px-4 bg-gradient-to-t from-primary/10 via-background to-background text-center">
          <div className="container max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              A Safer Future Begins When a Child No Longer Has to Choose Between Staying Silent and Being Afraid.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              SafeSpeak exists to make help more accessible, trust more achievable, and support more meaningful.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link to="/report">
                <Button size="lg" className="shadow-glow font-medium gap-2">
                  <Shield className="h-4 w-4" />
                  Access Student Portal
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Partner / School Inquiries
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
