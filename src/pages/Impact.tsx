import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Activity,
  Target,
  Sparkles,
  Shield,
  HeartHandshake,
  Bot,
  Monitor,
  KeyRound,
  Scale,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Impact = () => {
  const metrics = [
    {
      metric: 'Access & Initiation',
      tells: 'How many hesitant children actively initiate initial contact through web and school kiosks.',
    },
    {
      metric: 'Multimodal Accessibility',
      tells: 'Whether children successfully converse across speech, voice, text, and different device modalities.',
    },
    {
      metric: 'First-Response Latency',
      tells: 'How rapidly a submitted concern receives qualified human review and initial assessment.',
    },
    {
      metric: 'Urgent Escalation Completion',
      tells: 'Whether acute danger or severe exploitation concerns reliably reach designated external protective channels.',
    },
    {
      metric: 'Referral & Connection Rate',
      tells: 'Whether children requiring counselling or medical care are successfully connected with qualified professionals.',
    },
    {
      metric: 'Follow-Up Completion',
      tells: 'Whether cases receive sustained attention, check-ins, and recovery support over time instead of premature closure.',
    },
    {
      metric: 'User Trust & Safety Perception',
      tells: 'Whether students report feeling safe, believed, and comfortable with the reporting and follow-up process.',
    },
    {
      metric: 'System & Kiosk Reliability',
      tells: 'Uptime, sandbox integrity, and tamper-resistance of school hardware kiosks during school hours.',
    },
  ];

  const differentiators = [
    {
      num: '01',
      title: 'Trust Before Disclosure',
      desc: 'A child can begin by understanding privacy boundaries and exploring support options rather than facing an immediate demand for evidence.',
      icon: Shield,
    },
    {
      num: '02',
      title: 'Conversational First Contact',
      desc: 'AI-assisted dialogue helps children communicate complex, confusing trauma at their own pace without formal legal vocabulary.',
      icon: Bot,
    },
    {
      num: '03',
      title: 'Physical + Digital Access',
      desc: 'School kiosks bridge the digital divide, ensuring equal access for students who do not own smartphones or home internet.',
      icon: Monitor,
    },
    {
      num: '04',
      title: 'Pseudonymous Follow-Up',
      desc: 'Random 6-digit case codes eliminate reliance on institutional student IDs or phone numbers for tracking outcomes.',
      icon: KeyRound,
    },
    {
      num: '05',
      title: 'Independent Escalation (CCPRB)',
      desc: 'Designed to prevent internal school cover-ups when teachers, coaches, or administrators are accused of misconduct.',
      icon: Scale,
    },
    {
      num: '06',
      title: 'Beyond Reporting into Recovery',
      desc: 'Connects disclosures directly with longitudinal wellness, clinical counselling, family support, and campus reintegration.',
      icon: HeartHandshake,
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
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-primary">
                Outcomes & Innovation
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Impact & Innovation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our impact is measured by what happens after a child seeks help. SafeSpeak is engineered to strengthen the accessibility, timeliness, and continuity of child support systems.
            </p>
          </div>
        </section>

        {/* SECTION: EXPECTED OUTCOMES */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">Tangible Change</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Four Expected Social Outcomes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                How SafeSpeak transforms the experience of seeking help for vulnerable youth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <Card className="border-primary/30 shadow-card bg-card">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">01</div>
                  <h3 className="font-bold text-base mb-2">Lower Barriers to Help</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Make seeking support approachable for children who currently suffer in silence due to fear of adults or exposure.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/30 shadow-card bg-card">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-secondary mb-2">02</div>
                  <h3 className="font-bold text-base mb-2">Earlier Attention</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Identify distress signals, peer bullying, and emotional anxiety before problems deteriorate into irreversible harm.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/30 shadow-card bg-card">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-accent mb-2">03</div>
                  <h3 className="font-bold text-base mb-2">Accountable Safeguarding</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Ensure consistent case review, structured prioritization, and uncompromised external escalation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30 shadow-card bg-card">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">04</div>
                  <h3 className="font-bold text-base mb-2">Continued Care & Healing</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Promote sustained access to mental wellness resources, clinical counselling, and safe campus reintegration.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* OUR INNOVATION & SIX DIFFERENTIATORS */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">What Makes Us Different</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Our Six Core Differentiators</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Most solutions focus on submitting complaints. SafeSpeak focuses on why a child might never complain at all.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {differentiators.map((diff, idx) => {
                  const Icon = diff.icon;
                  return (
                    <Card key={idx} className="border-border/80 shadow-soft hover:border-primary/50 transition-all">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-bold text-muted-foreground font-mono">{diff.num}</span>
                        </div>
                        <h3 className="font-bold text-base mb-2">{diff.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{diff.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* HOW WE MEASURE IMPACT */}
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card mb-20">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Accountability Metrics</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">Impact Measurement Framework</h3>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-2">
                  Evaluating safeguarding effectiveness through qualitative and quantitative rigor.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/70 text-foreground border-b border-border">
                    <tr>
                      <th className="py-4 px-6 font-semibold w-1/3">Evaluation Metric</th>
                      <th className="py-4 px-6 font-semibold w-2/3">What It Tells Us</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {metrics.map((m, idx) => (
                      <tr key={idx} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 px-6 font-medium text-foreground flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{m.metric}</span>
                        </td>
                        <td className="py-4 px-6 text-muted-foreground text-xs md:text-sm leading-relaxed">
                          {m.tells}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* OUR IMPACT PRINCIPLE */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Target className="h-4 w-4" />
                <span>Our Impact Principle</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Why Report Volume Alone Is Not the Metric of Success</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                SafeSpeak does not measure success by raw numbers of submitted reports. A high number of reports may indicate improved student trust and access, or a worsening underlying environment. A low number of reports does not mean children are safe—it often signifies fear and suppression.
              </p>
              <div className="p-4 rounded-xl bg-card border border-border text-foreground font-medium text-xs md:text-sm">
                Our true impact assessment evaluates accessibility, response speed, follow-up continuity, child emotional safety, and successful connections to certified human care.
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Link to="/roadmap">
                  <Button className="gap-2">
                    Implementation Roadmap <ArrowRight className="h-4 w-4" />
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

export default Impact;
