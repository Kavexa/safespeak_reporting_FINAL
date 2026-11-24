import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Compass,
  Building,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Users,
  Coins,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Roadmap = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Core Prototype (Current Stage)',
      status: 'Current Development',
      badgeClass: 'bg-primary/20 text-primary',
      items: [
        'Web-based student reporting and AI conversation interface.',
        'Initial kiosk hardware sandbox and touch/voice interaction testing.',
        'Case-management foundation with random case-code retrieval.',
        'Teacher-misconduct detection and priority triage experimentation.',
        'Administrative dashboard for verified officer review.',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Safety & Clinical Validation',
      status: 'Planned Next',
      badgeClass: 'bg-secondary/20 text-secondary',
      items: [
        'Independent child-protection and psychological safety review.',
        'Comprehensive privacy, threat-modelling, and penetration testing.',
        'AI dialogue safety evaluations against adversarial inputs.',
        'Controlled usability testing with adolescent focus groups.',
        'Hardware kiosk accessibility and tamper-resistance hardening.',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Controlled School Pilots',
      status: 'Upcoming',
      badgeClass: 'bg-accent/20 text-accent',
      items: [
        'Supervised pilot deployments in partner educational institutions.',
        'On-site safeguarding workflow validation with school counsellors.',
        'Real-world response-time evaluations and SLA auditing.',
        'Refining case-routing algorithms and escalation protocols.',
        'Student feedback and user-experience iteration.',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Partnerships & Scale',
      status: 'Roadmap',
      badgeClass: 'bg-muted text-muted-foreground',
      items: [
        'Institutional partnerships with CBSE, state school boards, and trusts.',
        'Deep integration with verified NGO and psychological clinic networks.',
        'Formal legal validation of CCPRB escalation pathways.',
        'CSR funding partnerships for subsidized public school deployment.',
      ],
    },
    {
      phase: 'Phase 5',
      title: 'Ecosystem Expansion',
      status: 'Future Vision',
      badgeClass: 'bg-muted text-muted-foreground',
      items: [
        'Multilingual voice and text support (major Indian regional languages).',
        'National child welfare and recovery network integration.',
        'Longitudinal impact research on campus bullying reduction.',
        'Open research publications on child-centred safeguarding technology.',
      ],
    },
  ];

  const stakeholders = [
    'Private Schools & K-12 Academies',
    'CBSE & State Board Affiliated Institutions',
    'Government & State Schools (via CSR / NGO funding)',
    'Educational Trusts & Campus Networks',
    'Child-Focused Non-Profit Organisations (NGOs)',
    'Corporate CSR Programs focused on Youth Wellness',
    'Child Protection Committees & Healthcare Services',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary/15 via-primary/10 to-accent/15 py-20 px-4 border-b border-border/40">
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 mb-6">
              <Compass className="h-4 w-4 text-secondary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-secondary">
                Scalability & Sustainability
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Roadmap & Enterprise Model
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From working prototype to scalable, ethically sustainable safeguarding infrastructure.
            </p>
          </div>
        </section>

        {/* SECTION: IMPLEMENTATION ROADMAP */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">Phased Evolution</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Five-Phase Implementation Roadmap</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Development stages represent planned milestones and are verified iteratively with child safety experts.
              </p>
            </div>

            <div className="space-y-6 mb-20">
              {phases.map((ph, idx) => (
                <Card key={idx} className="border-border/80 shadow-soft bg-card overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-border">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {ph.phase}
                        </span>
                        <h3 className="text-xl font-bold text-foreground mt-0.5">{ph.title}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-auto ${ph.badgeClass}`}>
                        {ph.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
                      {ph.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2.5 text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* BUSINESS MODEL & SUSTAINABILITY */}
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card mb-20 space-y-6">
              <div className="flex items-center gap-3">
                <Coins className="h-8 w-8 text-primary" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Social Enterprise</span>
                  <h3 className="text-2xl font-bold">Sustainable Technology for Social Impact</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                SafeSpeak is envisioned as a social enterprise combining institutional hardware deployment, recurring platform services, and CSR partnerships to make child safeguarding financially viable without relying solely on precarious charity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                  <h4 className="font-bold text-sm text-foreground">Kiosk Deployment</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Hardware procurement, installation, and secure on-campus configuration for participating schools.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                  <h4 className="font-bold text-sm text-foreground">Platform Subscription</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Annual institutional subscription covering cloud hosting, AI triage tokens, and administrative software.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                  <h4 className="font-bold text-sm text-foreground">Maintenance & Updates</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Regular hardware calibration, OS security patch management, and privacy compliance updates.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                  <h4 className="font-bold text-sm text-foreground">CSR & NGO Sponsorship</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Corporate social responsibility grants to fund kiosk installations in underfunded state schools.
                  </p>
                </div>
              </div>

              {/* Strict Non-Monetisation Principle */}
              <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-xs md:text-sm leading-relaxed space-y-2">
                <div className="font-bold flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" />
                  Ethical Sustainability Guarantee
                </div>
                <p>
                  SafeSpeak's financial sustainability must <strong>never</strong> depend on selling children’s personal information, advertising to children, monetising sensitive disclosures, or exploiting data generated by safeguarding interactions.
                </p>
              </div>
            </div>

            {/* TARGET STAKEHOLDERS */}
            <div className="p-8 md:p-12 rounded-3xl bg-muted/30 border border-border shadow-soft mb-20">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Deployment Reach</span>
              <h3 className="text-2xl font-bold mt-1 mb-6">Target Stakeholders</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs md:text-sm">
                {stakeholders.map((s, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-card border border-border flex items-center gap-2.5">
                    <Building className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PROTOTYPE TRANSPARENCY NOTICE */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <AlertCircle className="h-4 w-4" />
                <span>Prototype Transparency</span>
              </div>
              <h2 className="text-2xl font-bold">Built with Purpose. Evolving Through Testing.</h2>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                SafeSpeak is a developing innovation. While core reporting software, AI triage, and kiosk concepts have been prototyped, full end-to-end statutory integration, CCPRB independent board governance, and clinical networks remain subject to formal pilot validation and institutional agreements.
              </p>
              <div className="flex justify-end gap-3 pt-2">
                <Link to="/team">
                  <Button className="gap-2">
                    Meet the Team & Partners <ArrowRight className="h-4 w-4" />
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

export default Roadmap;
