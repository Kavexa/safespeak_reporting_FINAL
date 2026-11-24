import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Monitor,
  Touchpad,
  Volume2,
  ShieldCheck,
  EyeOff,
  Lock,
  WifiOff,
  UserX,
  Sparkles,
  ArrowRight,
  School,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Kiosk = () => {
  const kioskFeatures = [
    {
      title: 'Interactive Child-Friendly Touchscreen',
      desc: 'Large, accessible interface designed with high-contrast text, simple navigation, and responsive prompts.',
    },
    {
      title: 'Private Directional Audio & Headphone Jack',
      desc: 'Acoustically shielded sound cones and optional standard 3.5mm jacks ensure privacy during voice interactions.',
    },
    {
      title: 'Integrated Speech-to-Text & Text-to-Speech',
      desc: 'Allows younger children or students with learning barriers to converse naturally without typing.',
    },
    {
      title: 'Random Case-Code Dispenser / Display',
      desc: 'Generates and displays memorable pseudonymous case codes so students can retrieve updates without student IDs.',
    },
    {
      title: 'Secure Locked Kiosk-Mode Operating System',
      desc: 'Locked firmware sandbox preventing web browsing, tampering, app installs, or data extraction.',
    },
    {
      title: 'Universal Access Without Personal Devices',
      desc: 'Ensures equal safeguarding access for students who do not own smartphones or have home internet.',
    },
  ];

  const privacyPrinciples = [
    {
      title: 'Zero Facial Recognition',
      desc: 'Kiosks contain no facial biometrics, facial scanners, or biometric tracking hardware whatsoever.',
    },
    {
      title: 'No Identity-Based Profiling',
      desc: 'The kiosk never queries student ID cards, biometric fingerprints, or school admission databases.',
    },
    {
      title: 'No Routine Surveillance Recordings',
      desc: 'Voice conversations are processed live for triage and are never saved as ambient audio surveillance files.',
    },
    {
      title: 'Privacy-Conscious Placement',
      desc: 'Positioned in accessible, neutral school areas (e.g. near infirmaries, quiet corridors) avoiding CCTV surveillance.',
    },
    {
      title: 'Tamper & Hardware Integrity Monitoring',
      desc: 'Hardware alerts notify administrators of physical enclosure tampering without exposing child interaction logs.',
    },
    {
      title: 'Instant Clear on Exit',
      desc: 'Once the child finishes or steps away, the session timer resets immediately, wiping on-screen buffers.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary/15 via-primary/10 to-accent/15 py-20 px-4 border-b border-border/40">
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 mb-6">
              <Monitor className="h-4 w-4 text-secondary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-secondary">
                Physical School Access
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              The SafeSpeak Kiosk
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A physical gateway to safeguarding inside school environments. Bridging digital reporting with physical access so that every student has a safe sanctuary, even without a smartphone.
            </p>
          </div>
        </section>

        {/* SECTION: WHY PHYSICAL KIOSK */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Digital Equity & Access</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Why a Physical Kiosk in Schools?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A mobile-only or web-only reporting platform inherently excludes children who do not own smartphones, lack private internet at home, or have their devices strictly monitored by abusers or strict guardians.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  School is where children spend the majority of their waking hours, and where peer bullying, harassment, and distress often occur. A physical kiosk creates a permanent, dedicated access point right where help is needed.
                </p>
                <div className="p-4 rounded-2xl bg-muted/40 border border-border flex items-center gap-3">
                  <School className="h-8 w-8 text-secondary shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    "The kiosk is not designed to make reporting visible. It is designed to make help attainable."
                  </p>
                </div>
              </div>

              {/* Hardware Mockup Card */}
              <div className="p-8 rounded-3xl bg-card border border-border shadow-card space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-secondary" />
                    <span className="font-bold text-sm">SafeSpeak Kiosk Terminal Specs</span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary font-semibold">
                    v1 Prototype
                  </span>
                </div>

                <div className="space-y-3 text-xs md:text-sm">
                  <div className="flex justify-between py-2 border-b border-border/40">
                    <span className="text-muted-foreground">Display:</span>
                    <span className="font-medium text-foreground">Anti-glare Privacy Screen (Narrow Viewing Angle)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/40">
                    <span className="text-muted-foreground">Audio System:</span>
                    <span className="font-medium text-foreground">Parabolic Focus Speaker + 3.5mm Headphone Jack</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/40">
                    <span className="text-muted-foreground">Interaction:</span>
                    <span className="font-medium text-foreground">Capacitive Multi-Touch + Noise-Cancelling Mic</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/40">
                    <span className="text-muted-foreground">Security Mode:</span>
                    <span className="font-medium text-foreground">Kiosk-Locked Linux OS Sandbox</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/40">
                    <span className="text-muted-foreground">Case Codes:</span>
                    <span className="font-medium text-foreground">On-screen 6-Digit Random Code Generator</span>
                  </div>
                </div>

                <div className="p-3 bg-secondary/5 rounded-xl border border-secondary/20 text-center text-xs text-secondary font-medium">
                  Privacy-first engineering • Zero biometrics • Encrypted telemetry
                </div>
              </div>
            </div>

            {/* PROPOSED KIOSK FUNCTIONALITY */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold tracking-wider text-secondary uppercase">Hardware Capabilities</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Proposed Kiosk Functionality</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Integrated hardware and software designed to provide maximum ease of use and uncompromised privacy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kioskFeatures.map((feat, idx) => (
                  <Card key={idx} className="border-border/80 shadow-soft hover:border-secondary/50 transition-all">
                    <CardContent className="pt-6">
                      <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                        <Touchpad className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-base mb-2">{feat.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* KIOSK PRIVACY PRINCIPLES */}
            <div className="p-8 md:p-12 rounded-3xl bg-muted/30 border border-border/80 shadow-card mb-16">
              <div className="text-center mb-10">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">Trust Assurance</span>
                <h2 className="text-3xl font-bold mt-2 mb-3">Kiosk Privacy Principles</h2>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                  Children must trust that approaching a kiosk will never expose them to surveillance or school surveillance cameras.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {privacyPrinciples.map((princ, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-card border border-border shadow-soft flex items-start gap-4">
                    <ShieldCheck className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{princ.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{princ.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SCHOOL PLACEMENT BEST PRACTICES */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-secondary/10 via-card to-primary/10 border border-secondary/20 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">Deployment Protocol</span>
              <h2 className="text-2xl md:text-3xl font-bold">Privacy-Preserving Campus Placement</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div className="p-4 rounded-xl bg-card/80 border border-border">
                  <h4 className="font-bold text-foreground mb-2">Neutral Zones</h4>
                  <p className="text-xs leading-relaxed">
                    Install kiosks near school infirmaries, library quiet rooms, or student wellness corners where visiting does not arouse peer suspicion.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-card/80 border border-border">
                  <h4 className="font-bold text-foreground mb-2">CCTV Blindspots</h4>
                  <p className="text-xs leading-relaxed">
                    Kiosks must be deliberately placed away from direct CCTV angles so the screen and student presence are not captured on camera.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-card/80 border border-border">
                  <h4 className="font-bold text-foreground mb-2">Physical Acoustic Wings</h4>
                  <p className="text-xs leading-relaxed">
                    Side wings shield the child's body and display from onlookers standing in the corridor.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Link to="/how-it-works">
                  <Button className="gap-2">
                    System Architecture & Flow <ArrowRight className="h-4 w-4" />
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

export default Kiosk;
