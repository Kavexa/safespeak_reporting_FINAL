import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Users,
  Code,
  ShieldAlert,
  HeartHandshake,
  GraduationCap,
  Building,
  Sparkles,
  ArrowRight,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Team = () => {
  const leadershipRoles = [
    {
      role: 'Project Founder / Lead',
      description: 'Project vision, safeguarding system design, product direction, multi-agency coordination, and student advocacy.',
      icon: GraduationCap,
      color: 'text-primary bg-primary/10',
    },
    {
      role: 'Technology & Development',
      description: 'Full-stack engineering, conversational AI integration, kiosk sandbox architecture, and cryptographic case-code security.',
      icon: Code,
      color: 'text-secondary bg-secondary/10',
    },
    {
      role: 'Research & Safeguarding Advisory',
      description: 'Child-safety legal research (POCSO, JJ Act), developmental psychology validation, and non-accusatory interaction design.',
      icon: ShieldAlert,
      color: 'text-accent bg-accent/10',
    },
  ];

  const potentialPartners = [
    {
      title: 'Educational Institutions',
      desc: 'School deployments, kiosk placement, internal safeguarding officer collaboration, and campus pilot supervision.',
    },
    {
      title: 'Child Psychologists & Counsellors',
      desc: 'Professional validation of communication tone, emotional triage logic, and direct clinical referral networks.',
    },
    {
      title: 'Child Protection & Legal Professionals',
      desc: 'Statutory compliance validation with POCSO Act 2012, Juvenile Justice Act, and legal escalation review.',
    },
    {
      title: 'Youth NGOs & Community Charities',
      desc: 'Student rights advocacy, anti-substance awareness drives, and community-level outreach for vulnerable youth.',
    },
    {
      title: 'Healthcare & Recovery Specialists',
      desc: 'Specialized adolescent rehabilitation, psychological recovery programs, and continuous family support care.',
    },
    {
      title: 'Technology & Security Partners',
      desc: 'Penetration testing, encrypted cloud infrastructure, hardware hardening, and accessible assistive tech.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 py-20 px-4 border-b border-border/40">
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-primary">
                The People & Collaborators
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Team & Leadership
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A student-led innovation with a child-centred purpose. Combining modern technology development, child safety research, and empathetic design to solve a vital real-world crisis.
            </p>
          </div>
        </section>

        {/* SECTION: STUDENT INNOVATION LEADERSHIP */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card mb-20 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Student Innovation</span>
              <h2 className="text-2xl md:text-3xl font-bold">Driven by Empathy, Engineered for Impact</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4 text-sm md:text-base leading-relaxed">
                <p>
                  SafeSpeak began as a student-driven initiative born from a simple realization: countless classmates and young peers struggle in complete silence because traditional reporting channels feel intimidating, untrustworthy, and punitive.
                </p>
                <p>
                  Our vision is to build a practical and scalable solution that addresses this real-world safeguarding challenge while prioritising the safety, dignity, and rights of children.
                </p>
              </div>

              {/* Leadership Role Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {leadershipRoles.map((lead, idx) => {
                  const Icon = lead.icon;
                  return (
                    <div key={idx} className="p-6 rounded-2xl bg-muted/40 border border-border flex flex-col justify-between">
                      <div>
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${lead.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-base text-foreground mb-2">{lead.role}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{lead.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PARTNERSHIPS & COLLABORATION */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">Collective Responsibility</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Partnerships & Advisory Ecosystem</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Safeguarding is a collective societal responsibility. SafeSpeak actively collaborates with professionals across child welfare, education, and healthcare.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {potentialPartners.map((item, idx) => (
                  <Card key={idx} className="border-border/80 shadow-soft hover:border-primary/50 transition-all">
                    <CardContent className="pt-6">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Building className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* WHAT WE SEEK */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <HeartHandshake className="h-4 w-4" />
                <span>Join Our Mission</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Collaborate With SafeSpeak</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                We are actively seeking responsible partnerships with educational institutions, legal experts, child psychologists, and child-protection bodies who can help validate, test, pilot, and responsibly scale SafeSpeak.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Reach Out for Pilot Inquiries
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button size="lg" variant="outline">
                    Read Project FAQ
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

export default Team;
