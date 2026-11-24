import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AlertCircle,
  EyeOff,
  UserX,
  Scale,
  MessageSquareOff,
  HelpCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Problem = () => {
  const comparisons = [
    {
      approach: 'Approaching a Teacher',
      limitation: 'Child may fear judgement, exposure, disbelief, or unpredictable teacher reactions.',
      safeSpeakAdvantage: 'Private conversational AI triage allows child to explore concerns at their own pace without immediate face-to-face exposure.',
    },
    {
      approach: 'School Counselling Office',
      limitation: 'Visiting the physical office is publicly visible to peers; stigma and anxiety prevent visits.',
      safeSpeakAdvantage: 'Direct digital/kiosk booking and anonymous pre-consultation guidance remove social stigma.',
    },
    {
      approach: 'Traditional Complaint Box',
      limitation: 'One-way drop with zero feedback, no clarification, no urgency detection, and prone to being ignored.',
      safeSpeakAdvantage: 'Interactive dialogue, case-code tracking, automated routing, and response monitoring ensure accountability.',
    },
    {
      approach: 'Generic Digital Web Forms',
      limitation: 'Cold, intimidating, legally complex wording; requires extensive facts before any comfort is given.',
      safeSpeakAdvantage: 'Conversational, age-adapted natural dialogue that focuses on emotional safety first.',
    },
    {
      approach: 'Standard Wellness Apps',
      limitation: 'Focuses merely on mood logs or meditation without any structured safeguarding escalation or school pathways.',
      safeSpeakAdvantage: 'Integrates wellness resources directly with vetted human safeguarding pathways and emergency protocols.',
    },
    {
      approach: 'Informal Peer Support',
      limitation: 'Friends lack legal knowledge, psychological training, or resources to intervene safely.',
      safeSpeakAdvantage: 'Structured guidance empowers youth while ensuring critical concerns reach trained professionals.',
    },
    {
      approach: 'School-Only Internal Handling',
      limitation: 'Severe conflict of interest if accusations involve school staff, administrators, or trustees.',
      safeSpeakAdvantage: 'CCPRB framework enables independent external escalation to prevent internal suppression.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-destructive/10 via-secondary/10 to-primary/10 py-20 px-4 border-b border-border/40">
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-destructive/30 bg-destructive/10 mb-6">
              <AlertCircle className="h-4 w-4 text-destructive" />
              <span className="text-xs font-semibold tracking-wide uppercase text-destructive">
                The Challenge
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              The Problem We Are Solving
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The problem is not simply that children have nowhere to report. The deeper problem is that many children do not feel safe enough to report in the first place.
            </p>
          </div>
        </section>

        {/* SECTION: THE INVISIBLE REALITY */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card mb-16 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Why Children Remain Unheard</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p className="leading-relaxed">
                  Children face a wide spectrum of severe challenges: bullying, emotional distress, physical or sexual abuse, academic pressure, peer harassment, social isolation, family difficulties, and exposure to substance risks.
                </p>
                <p className="leading-relaxed">
                  Although schools and communities often have teachers, counsellors, complaint mechanisms, and statutory helplines, children hesitate to approach them. They fear judgement, exposure, disbelief, retaliation, disciplinary punishment, or complete loss of control over what happens next.
                </p>
                <p className="leading-relaxed">
                  Some children struggle to articulate confusing or traumatizing experiences. Others do not recognize that what they are enduring is unlawful or abusive. Most alarmingly, in certain cases the person they need protection from is someone within their own school or family environment.
                </p>
                <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive font-semibold text-center mt-4">
                  "This creates a critical gap: children experience a problem long before any safeguarding system ever discovers it exists."
                </div>
              </div>
            </div>

            {/* THE MAJOR BARRIERS */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">Systemic Friction</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">The Six Major Barriers to Disclosure</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Understanding the psychological and structural walls that lock a child’s voice in silence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-border/80 shadow-soft hover:border-primary/50 transition-all">
                  <CardContent className="pt-6">
                    <EyeOff className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">1. Fear of Exposure</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Terrified that classmates, teachers, or parents will find out they reached out, leading to social ostracization or worsened bullying.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/80 shadow-soft hover:border-secondary/50 transition-all">
                  <CardContent className="pt-6">
                    <UserX className="h-10 w-10 text-secondary mb-4" />
                    <h3 className="font-bold text-lg mb-2">2. Fear of Judgement</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Deep worry about being blamed for the situation, treated as a troublemaker, dismissed as overly sensitive, or simply disbelieved.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/80 shadow-soft hover:border-accent/50 transition-all">
                  <CardContent className="pt-6">
                    <Scale className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-lg mb-2">3. Power Imbalance</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The issue frequently involves an authority figure (senior student, teacher, staff, guardian) whom the child depends upon or cannot challenge.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/80 shadow-soft hover:border-primary/50 transition-all">
                  <CardContent className="pt-6">
                    <MessageSquareOff className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">4. Communication Barriers</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Difficulty putting complex, frightening, or unfamiliar trauma into formal written words without feeling interrogated.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/80 shadow-soft hover:border-secondary/50 transition-all">
                  <CardContent className="pt-6">
                    <HelpCircle className="h-10 w-10 text-secondary mb-4" />
                    <h3 className="font-bold text-lg mb-2">5. Privacy Uncertainty</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Complete opacity on who reads reports, whether parents are called immediately, or whether their privacy will be compromised.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/80 shadow-soft hover:border-accent/50 transition-all">
                  <CardContent className="pt-6">
                    <Clock className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-lg mb-2">6. Delayed Response</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Lack of tracking means concerns can sit unattended for weeks in locked physical boxes or administrative inboxes without resolution.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* COMPARISON TABLE: EXISTING SOLUTIONS & LIMITATIONS */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">Landscape Analysis</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Existing Solutions & Why They Fall Short</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Existing helplines and teachers remain indispensable. SafeSpeak does not replace them; it builds the accessible bridge to reach them.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/70 text-foreground border-b border-border">
                    <tr>
                      <th className="py-4 px-6 font-semibold w-1/4">Existing Approach</th>
                      <th className="py-4 px-6 font-semibold w-3/8 text-destructive">Potential Limitation</th>
                      <th className="py-4 px-6 font-semibold w-3/8 text-primary">SafeSpeak Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparisons.map((item, idx) => (
                      <tr key={idx} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 px-6 font-medium text-foreground">{item.approach}</td>
                        <td className="py-4 px-6 text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                            <span>{item.limitation}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground">{item.safeSpeakAdvantage}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* THE GAP SUMMARY BANNER */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">The Core Gap SafeSpeak Closes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A child needs more than a place to report. They need a place to begin, clear transparency about what happens next, guaranteed access to human help, and a system that takes responsibility for follow-through.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/ai">
                  <Button size="lg" className="gap-2">
                    Discover SafeSpeak AI <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/kiosk">
                  <Button size="lg" variant="outline">
                    Explore School Kiosks
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

export default Problem;
