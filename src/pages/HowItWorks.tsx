import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Compass,
  Layers,
  ArrowRight,
  Monitor,
  Bot,
  Scale,
  Lock,
  HeartHandshake,
  CheckCircle2,
  Server,
  Database,
  Cpu,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  const steps = [
    {
      num: 'STEP 1',
      title: 'ACCESS',
      desc: 'The child enters SafeSpeak through a physical school kiosk, responsive web portal, or mobile interface.',
    },
    {
      num: 'STEP 2',
      title: 'FIRST CONTACT',
      desc: 'The child chooses whether to begin an informal conversation, explore wellness FAQs, or report a specific concern.',
    },
    {
      num: 'STEP 3',
      title: 'TRANSPARENT INTERACTION',
      desc: 'The system explains relevant privacy boundaries, anonymity vs confidentiality, and available support options clearly.',
    },
    {
      num: 'STEP 4',
      title: 'EXPRESSION',
      desc: 'The child communicates via text or voice, in their own words, at their own comfortable pace without interrogation.',
    },
    {
      num: 'STEP 5',
      title: 'AI-ASSISTED ASSESSMENT',
      desc: 'SafeSpeak AI assists in categorising the concern and identifying potential indicators of physical or emotional urgency.',
    },
    {
      num: 'STEP 6',
      title: 'HUMAN REVIEW & ROUTING',
      desc: 'The concern is routed to an authorised, vetted human safeguarding officer or independent CCPRB pathway.',
    },
    {
      num: 'STEP 7',
      title: 'ACTION & SUPPORT',
      desc: 'Qualified human professionals assess the case and take appropriate protective, legal, or counselling action.',
    },
    {
      num: 'STEP 8',
      title: 'FOLLOW-UP & RECOVERY',
      desc: 'Pseudonymous case-code communication allows ongoing status updates, counselling referrals, and long-term care.',
    },
  ];

  const architectureLayers = [
    {
      name: 'LAYER 1: ACCESS & INTERFACE',
      details: 'Responsive Web Application • Physical School Kiosk Hardware • Speech-to-Text & Voice Synthesis • Secure PIN/Case-Code Retrieval',
      color: 'border-primary/40 bg-primary/5',
    },
    {
      name: 'LAYER 2: AI CONVERSATION ENGINE',
      details: 'Child-Safe Language Processing • Empathetic Natural Dialogue • Voice Transcription • Non-Accusatory Clarification Logic',
      color: 'border-secondary/40 bg-secondary/5',
    },
    {
      name: 'LAYER 3: ASSESSMENT & ROUTING LOGIC',
      details: 'Concern Categorisation • Urgency Flagging • Conflict-of-Interest Filter (Staff Detection) • Autonomous Escalation Dispatch',
      color: 'border-accent/40 bg-accent/5',
    },
    {
      name: 'LAYER 4: SECURE DATA & CASE MANAGEMENT',
      details: 'End-to-End Encryption • Pseudonymous Case Hashing • Role-Based Access Control (RBAC) • Immutable Audit Records',
      color: 'border-primary/40 bg-primary/5',
    },
    {
      name: 'LAYER 5: HUMAN RESPONSE & SUPPORT',
      details: 'Designated School Safeguarding Officers • Proposed CCPRB Independent Review • Qualified Counsellors • Emergency Authorities (112/1098)',
      color: 'border-secondary/40 bg-secondary/5',
    },
  ];

  const techComponents = [
    { layer: 'Frontend UI', tech: 'React 18, TypeScript, Tailwind CSS, Lucide Icons, Radix UI' },
    { layer: 'Kiosk Interface', tech: 'Dedicated Kiosk-Mode Sandbox, Narrow-Viewing Privacy Screens, Parabolic Speakers' },
    { layer: 'Voice & Speech', tech: 'Client-side Speech Recognition & Text-to-Speech synthesis for universal accessibility' },
    { layer: 'AI Engine', tech: 'Conversational Language Model with strict non-diagnostic, non-accusatory system guardrails' },
    { layer: 'Classification', tech: 'Multi-label concern categorization, keyword urgency detection, and teacher-misconduct triggers' },
    { layer: 'Backend & API', tech: 'Secure API workflows, case-routing logic, and asynchronous notifications' },
    { layer: 'Database', tech: 'Encrypted document store (Google Firebase / Secure Cloud DB) with granular security rules' },
    { layer: 'Case Access', tech: 'Random 6-digit pseudonymous case codes for account-free ongoing two-way communication' },
    { layer: 'Security', tech: '256-bit encryption in transit and at rest, role-based access, and zero-biometric policies' },
    { layer: 'Human Workflow', tech: 'Verified Officer Portal, CCPRB oversight dashboard, and longitudinal follow-up tracking' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-accent/15 via-primary/10 to-secondary/15 py-20 px-4 border-b border-border/40">
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <Compass className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold tracking-wide uppercase text-accent">
                System Workflow & Tech
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              How SafeSpeak Works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A layered technology ecosystem combining physical school hardware, empathetic AI triage, secure case management, and human safeguarding workflows.
            </p>
          </div>
        </section>

        {/* SECTION: 8-STEP COMPLETE JOURNEY */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">The Child’s Path</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">The Complete 8-Step Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Step-by-step transparency from the initial hesitant approach to sustained post-crisis recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border shadow-soft flex items-start gap-4 hover:border-primary/40 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                      {st.num}
                    </span>
                    <h3 className="font-bold text-base text-foreground mb-1">{st.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SECTION: 5-LAYER TECHNICAL ARCHITECTURE */}
            <div className="p-8 md:p-12 rounded-3xl bg-muted/30 border border-border shadow-card mb-20 space-y-6">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">System Blueprint</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">A Layered Technology Ecosystem</h3>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-2">
                  Each layer is strictly decoupled, auditable, and engineered around child safety.
                </p>
              </div>

              <div className="space-y-4">
                {architectureLayers.map((layer, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border ${layer.color} shadow-sm transition-all flex flex-col md:flex-row md:items-center justify-between gap-4`}
                  >
                    <div>
                      <h4 className="font-bold text-sm tracking-wide text-foreground mb-1">
                        {layer.name}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{layer.details}</p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-background/80 shrink-0 self-start md:self-auto">
                      Tier 0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNICAL COMPONENTS TABLE */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">Component Matrix</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Technology Stack & Specifications</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A target architecture designed for high security, accessibility, and reliability.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/70 text-foreground border-b border-border">
                    <tr>
                      <th className="py-4 px-6 font-semibold w-1/4">System Layer</th>
                      <th className="py-4 px-6 font-semibold w-3/4">Technology Implementation / Function</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {techComponents.map((item, idx) => (
                      <tr key={idx} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 px-6 font-medium text-foreground">{item.layer}</td>
                        <td className="py-4 px-6 text-muted-foreground text-xs md:text-sm leading-relaxed">
                          {item.tech}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-muted/40 border border-border text-xs text-muted-foreground text-center">
                *Note: This architecture describes the target ecosystem design and working software prototype. Specific deployment configurations and third-party models may evolve during institutional pilot phases.
              </div>
            </div>

            {/* ACTION BANNER */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Learn About Our Real-World Impact?</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover the metrics and social outcomes SafeSpeak is designed to measure and deliver.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/impact">
                  <Button size="lg" className="gap-2">
                    Impact & Outcomes <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/roadmap">
                  <Button size="lg" variant="outline">
                    View Project Roadmap
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

export default HowItWorks;
