import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  HeartHandshake,
  Smile,
  Shield,
  Pill,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WellnessRecovery = () => {
  const modules = [
    {
      title: 'Emotional Wellbeing & Stress Awareness',
      desc: 'Age-appropriate stress awareness, supportive conversational exercises, emotional literacy, and guidance on reaching professional mental health care.',
      icon: Smile,
      badge: 'Emotional Care',
    },
    {
      title: 'Anti-Bullying & Respectful Relationships',
      desc: 'Proactive peer education, bullying de-escalation strategies, safe bystander intervention guides, and non-stigmatising reporting pathways.',
      icon: Shield,
      badge: 'Prevention',
    },
    {
      title: 'Substance-Use Prevention & Awareness',
      desc: 'Objective, non-stigmatising education on peer pressure, early identification of risk, and confidential healthcare navigation.',
      icon: Pill,
      badge: 'Youth Health',
    },
    {
      title: 'Safe Family Support Pathways',
      desc: 'Resources for caregivers and family counselling connections, while strictly evaluating safety when family members themselves may be compromised.',
      icon: Users,
      badge: 'Family Support',
    },
    {
      title: 'Recovery & Campus Reintegration',
      desc: 'Structured re-entry support after traumatic incidents, academic accommodations, follow-up counselling, and peer reconnection.',
      icon: HeartHandshake,
      badge: 'Rehabilitation',
    },
  ];

  const recoveryStages = [
    {
      stage: '1. Identify',
      desc: 'Recognise a concern, stress symptom, or need for help through AI dialogue, kiosk check-in, or voluntary disclosure.',
    },
    {
      stage: '2. Support',
      desc: 'Provide immediate emotional grounding, clarify privacy boundaries, and offer non-judgemental options.',
    },
    {
      stage: '3. Connect',
      desc: 'Connect the child with certified human counsellors, child psychologists, or safeguarding authorities.',
    },
    {
      stage: '4. Recover',
      desc: 'Deliver continuous professional psychological care, medical treatment, or structured mediation.',
    },
    {
      stage: '5. Follow-Up',
      desc: 'Maintain longitudinal check-ins and support to ensure safety is sustained and recurrence is prevented.',
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
              <HeartHandshake className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-primary">
                Comprehensive Care
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Wellness, Prevention & Recovery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Support should not stop after a report. A child who receives help still needs emotional comfort, counselling, ongoing care, and a safe path to recovery.
            </p>
          </div>
        </section>

        {/* SECTION: FIVE WELLNESS MODULES */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">Interconnected Care</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">The SafeSpeak Wellness Framework</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Safeguarding, mental health, prevention, and healing are inseparable. Here is how our wellness module serves the whole child.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {modules.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card key={idx} className="border-border/80 shadow-soft hover:border-primary/50 transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* THE RECOVERY JOURNEY TIMELINE */}
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card mb-20">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Continuous Continuum</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">The 5-Stage Recovery Journey</h3>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-2">
                  Safeguarding is not an instantaneous transaction; it is an enduring journey of healing.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {recoveryStages.map((stg, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-muted/40 border border-border flex flex-col justify-between">
                    <div>
                      <div className="h-7 w-7 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mb-3">
                        0{idx + 1}
                      </div>
                      <h4 className="font-bold text-sm text-foreground mb-1.5">{stg.stage}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{stg.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CONCEPTUAL ALIGNMENT: OPERATION THOOFAN 2.0 */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-amber-500/10 via-card to-primary/10 border border-amber-500/20 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <Flame className="h-4 w-4" />
                <span>Youth Prevention & Awareness Alignment</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">SafeSpeak & Operation Thoofan 2.0 Alignment</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                SafeSpeak’s wellness and recovery roadmap aligns conceptually with the prevention, awareness, care, and rehabilitation objectives championed by youth anti-substance initiatives such as Operation Thoofan.
              </p>
              <div className="p-3 bg-muted/60 rounded-xl text-xs text-muted-foreground italic">
                *Note: This is a conceptual and operational framework alignment, not a claim that SafeSpeak is an officially gazetted program of any specific enforcement agency.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-card border border-border space-y-2">
                  <h4 className="font-bold text-sm text-foreground">Thoofan Strike — Early Identification</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Facilitates early, private disclosure of substance risks and peer pressure before harm escalates. Does not conduct law-enforcement raids.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-card border border-border space-y-2">
                  <h4 className="font-bold text-sm text-foreground">Thoofan Warriors — Peer Awareness</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Supports school wellness drives, positive student leadership, and peer support education without criminalising curious adolescents.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-card border border-border space-y-2">
                  <h4 className="font-bold text-sm text-foreground">Thoofan Care — Rehabilitation Pathways</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Connects struggling youth with certified adolescent de-addiction specialists, non-stigmatising therapy, and campus reintegration plans.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Link to="/impact">
                  <Button className="gap-2">
                    Impact & Outcomes <ArrowRight className="h-4 w-4" />
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

export default WellnessRecovery;
