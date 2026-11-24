import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Scale,
  AlertTriangle,
  UserCheck,
  CheckCircle2,
  FileCheck,
  ArrowRight,
  EyeOff,
  Building2,
  Flame,
  LifeBuoy,
  Lock,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Safeguarding = () => {
  const routingModel = [
    {
      concern: 'Bullying or Peer Conflict',
      pathway: 'Safeguarding personnel, designated school counsellor, and structured peer mediation response.',
    },
    {
      concern: 'Emotional Distress & Mental Anxiety',
      pathway: 'Clinical child counselling, wellness resources, and qualified mental-health support.',
    },
    {
      concern: 'Abuse, Neglect, or Exploitation',
      pathway: 'Mandated Child-Protection pathway, designated external welfare officers, and legal reporting.',
    },
    {
      concern: 'Immediate Threat of Violence or Self-Harm',
      pathway: 'Emergency protocol, immediate protective escort, distress stabilization, and 112/1098 dispatch.',
    },
    {
      concern: 'Cyberbullying or Online Exploitation',
      pathway: 'Specialized cyber safeguarding, forensic triage, and Child Welfare Committee / cybercrime escalations.',
    },
    {
      concern: 'Substance-Related Peer Pressure or Exposure',
      pathway: 'Qualified healthcare, prevention counselling, non-stigmatising rehabilitation, and Operation Thoofan alignment.',
    },
    {
      concern: 'School Personnel / Management Implicated',
      pathway: 'Strict independent external escalation to CCPRB/CWC, completely bypassing school staff to prevent cover-ups.',
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
              <Scale className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-primary">
                Governance & Accountability
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Safeguarding & CCPRB
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Safeguarding cannot depend on AI alone. Technology assists in identifying and organizing concerns, but protecting a child requires human responsibility, professional judgement, and systemic accountability.
            </p>
          </div>
        </section>

        {/* SECTION: WHAT IS CCPRB & CLARIFICATION */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            {/* Regulatory Notice Banner */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 mb-12 flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 shrink-0 mt-0.5" />
              <div className="text-xs md:text-sm leading-relaxed">
                <strong>Project Framework Definition:</strong> CCPRB stands for the <strong>Central Child Protection Response Board</strong>. It is SafeSpeak's <em>proposed independent oversight, case-routing, and escalation framework</em>. It is an internal project governance blueprint and is <strong>not</strong> an existing statutory government authority, court, or police unit. It is designed to work in compliance with statutory bodies (such as Child Welfare Committees and POCSO courts) without usurping their legal mandates.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">The Governance Gap</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Why SafeSpeak Proposes CCPRB</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A reporting platform alone cannot guarantee that a report is handled correctly. Without independent responsibility, reports can be delayed, misrouted, suppressed, or improperly closed by institutions attempting to protect their reputation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CCPRB is envisioned as a centralized, multi-stakeholder oversight framework within the SafeSpeak ecosystem to ensure every single report receives timely human review, standard triage, and unbiased escalation.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Most critically, when a complaint involves school teachers, administrators, or principals, CCPRB provides an independent external escalation pathway to prevent internal conflicts of interest.
                </p>
              </div>

              {/* CCPRB 4-Pillar Diagram Card */}
              <div className="p-8 rounded-3xl bg-card border border-border shadow-card space-y-4">
                <div className="text-center pb-4 border-b border-border">
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-base">
                    <Shield className="h-5 w-5" />
                    <span>CCPRB Oversight Pillars</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Proposed 4-Part Accountability Structure</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-center">
                    <UserCheck className="h-6 w-6 text-primary mx-auto mb-1.5" />
                    <div className="font-bold text-foreground">Safeguarding Review</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">Professional case assessment</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-secondary/10 border border-secondary/20 text-center">
                    <Scale className="h-6 w-6 text-secondary mx-auto mb-1.5" />
                    <div className="font-bold text-foreground">Response Coordination</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">Appropriate external routing</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-center">
                    <FileCheck className="h-6 w-6 text-accent mx-auto mb-1.5" />
                    <div className="font-bold text-foreground">Accountability</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">Response tracking & SLA monitoring</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-center">
                    <CheckCircle2 className="h-6 w-6 text-primary mx-auto mb-1.5" />
                    <div className="font-bold text-foreground">Quality & Review</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">Workflow auditing & ethics</div>
                  </div>
                </div>

                <div className="p-3 bg-muted/60 rounded-xl text-center text-[11px] text-muted-foreground">
                  Proposed concept • Subject to formal institutional validation and legal clearance prior to deployment.
                </div>
              </div>
            </div>

            {/* SAFEGUARDING ROUTING MODEL TABLE */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">Triage Taxonomy</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Safeguarding Routing Model</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Different concerns require distinct, legally compliant response pathways. One size never fits all.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/70 text-foreground border-b border-border">
                    <tr>
                      <th className="py-4 px-6 font-semibold w-1/3">Concern Category</th>
                      <th className="py-4 px-6 font-semibold w-2/3">Potential Response & Escalation Pathway</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {routingModel.map((item, idx) => (
                      <tr key={idx} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 px-6 font-medium text-foreground">
                          <div className="flex items-center gap-2">
                            {idx === 6 ? (
                              <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                            ) : idx === 3 ? (
                              <Flame className="h-4 w-4 text-destructive shrink-0" />
                            ) : (
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            )}
                            <span>{item.concern}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-muted-foreground leading-relaxed">
                          {item.pathway}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* INDEPENDENT ESCALATION: AVOIDING SCHOOL CONFLICT OF INTEREST */}
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card mb-16 space-y-6">
              <div className="flex items-center gap-3">
                <Building2 className="h-7 w-7 text-primary" />
                <h3 className="text-2xl font-bold">Independent Escalation When School Personnel Are Implicated</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                SafeSpeak never assumes that school administration is always the safest or most appropriate first recipient. If a child’s disclosure involves a teacher, administrator, coach, or school employee, routing the report to school internal staff puts the child in grave danger of retaliation and suppression.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-destructive/10 border border-destructive/20 text-xs text-muted-foreground space-y-2">
                  <div className="font-bold text-destructive text-sm">Traditional School Conflict</div>
                  <p>
                    Schools often investigate themselves. Reports against influential staff can be dismissed to preserve the institution’s public ranking, leaving the vulnerable child exposed.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-xs text-muted-foreground space-y-2">
                  <div className="font-bold text-primary text-sm">SafeSpeak Independent Routing</div>
                  <p>
                    When teacher/staff misconduct flags are triggered, the report automatically bypasses internal campus officers and is routed directly to verified external safeguarding oversight and statutory authorities.
                  </p>
                </div>
              </div>
            </div>

            {/* SEVEN STEP SAFEGUARDING PATHWAY */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-primary/20 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Response Lifecycle</span>
              <h2 className="text-2xl md:text-3xl font-bold">The Safeguarding Response Pathway</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card/70 border border-border">
                  <span className="h-6 w-6 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                  <span className="text-muted-foreground">Concern expressed via SafeSpeak app, kiosk, or AI conversation.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card/70 border border-border">
                  <span className="h-6 w-6 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                  <span className="text-muted-foreground">System assists in categorisation and urgency detection.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card/70 border border-border">
                  <span className="h-6 w-6 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                  <span className="text-muted-foreground">Concern enters appropriate safeguarding workflow based on urgency.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card/70 border border-border">
                  <span className="h-6 w-6 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                  <span className="text-muted-foreground">Authorised human professional reviews concern and determines action.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card/70 border border-border">
                  <span className="h-6 w-6 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-xs">5</span>
                  <span className="text-muted-foreground">Escalation to suitable external authority or medical service where needed.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card/70 border border-border">
                  <span className="h-6 w-6 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-xs">6</span>
                  <span className="text-muted-foreground">Accountability framework tracks response times to prevent unattended cases.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card/70 border border-border md:col-span-2">
                  <span className="h-6 w-6 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-xs">7</span>
                  <span className="text-muted-foreground">Appropriate follow-up, counselling, and reintegration support provided continuously.</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Link to="/privacy">
                  <Button className="gap-2">
                    Privacy & Legal Safeguards <ArrowRight className="h-4 w-4" />
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

export default Safeguarding;
