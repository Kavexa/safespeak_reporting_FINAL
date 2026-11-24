import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Bot,
  Mic,
  MessageSquare,
  ShieldAlert,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Heart,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AiSupport = () => {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'boundaries' | 'dialogue'>('capabilities');

  const capabilities = [
    'Listen and empathetically understand a child’s message without rush.',
    'Respond in clear, soothing, age-appropriate language free of bureaucratic jargon.',
    'Support text-based and speech-based voice conversations seamlessly.',
    'Help children explain concerns they find confusing, frightening, or difficult to articulate.',
    'Identify potential safety concerns, distress markers, and indicators of acute urgency.',
    'Ask gentle, non-pressuring clarification questions to understand what the child needs.',
    'Transparently explain reporting, anonymity, and support options before asking for facts.',
    'Assist in intelligent concern categorisation and routing to appropriate human teams.',
    'Encourage and facilitate safe connection to qualified human professionals.',
    'Support ongoing follow-up through pseudonymous case codes.',
  ];

  const boundaries = [
    {
      title: 'Does NOT Diagnose Mental Health Conditions',
      desc: 'SafeSpeak AI is not a clinician, psychologist, or psychiatrist and does not issue medical or psychological diagnoses.',
    },
    {
      title: 'Does NOT Judge Truthfulness or Verify Evidence',
      desc: 'The AI never evaluates whether a disclosure is "true" or "fabricated"; that is the role of trained human professionals.',
    },
    {
      title: 'Does NOT Conduct Forensic Interrogations',
      desc: 'It avoids aggressive questioning, repetitive grilling, or leading prompts that could distort recollection or traumatize a child.',
    },
    {
      title: 'Does NOT Determine Guilt or Fault',
      desc: 'SafeSpeak AI never assigns blame, investigates suspects, or determines legal or disciplinary culpability.',
    },
    {
      title: 'Does NOT Make Disciplinary Decisions',
      desc: 'Suspensions, penalties, or institutional consequences are strictly handled by authorized human bodies under due process.',
    },
    {
      title: 'Does NOT Replace Professional Counsellors',
      desc: 'It is a conversational bridge to care, not a replacement for human empathy, therapy, or social work.',
    },
    {
      title: 'Does NOT Guarantee Complete Secrecy in Danger',
      desc: 'The AI never promises absolute secrecy where immediate protective action or legal mandatory reporting is required to save a child.',
    },
  ];

  const sampleDialogue = [
    {
      speaker: 'child',
      text: "I don't know if I should be here. I'm scared something bad will happen if I say anything.",
    },
    {
      speaker: 'ai',
      text: "Take your time. You are completely safe right now. You don't have to share anything you aren't ready for, and you don't have to tell me your name. Do you want to just talk about how you're feeling first?",
    },
    {
      speaker: 'child',
      text: "Some older kids at school keep waiting for me after 4th period. They took my backpack yesterday and said tomorrow will be worse.",
    },
    {
      speaker: 'ai',
      text: "Thank you for telling me that. Nobody deserves to be treated that way, and it is not your fault. Because this involves your safety tomorrow, we can help you connect with someone who can make sure you're protected. Would you like to see how we handle this quietly without exposing who you are?",
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
              <Bot className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-primary">
                Conversational Triage System
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              SafeSpeak AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              More than a chatbot. A child-centred conversational companion engineered to listen without judgement, prioritize emotional safety, and bridge disclosures to human care.
            </p>
          </div>
        </section>

        {/* SECTION: PHILOSOPHY */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Child-First Interaction</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Empathetic Communication, Not an Interrogation Form</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unlike traditional complaint boxes or web intake forms, SafeSpeak AI allows children to express concerns in their own words, in their own voice, at their own comfortable pace.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Children are never required to describe their experiences using formal legal terms, nor are they pressed for identifying facts before basic emotional reassurance and clear privacy boundaries are established.
                </p>
                <div className="flex gap-4">
                  <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                    <Mic className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Voice & Speech</div>
                      <div className="text-xs text-muted-foreground">Spoken interaction</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-secondary" />
                    <div>
                      <div className="font-semibold text-sm">Adaptive NLP</div>
                      <div className="text-xs text-muted-foreground">Age-adapted dialogue</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Sample Dialogue Preview */}
              <div className="p-6 rounded-3xl bg-card border border-border shadow-card space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold">SafeSpeak AI — Guided First Contact</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground">Demo Preview</span>
                </div>

                <div className="space-y-3 text-xs md:text-sm">
                  {sampleDialogue.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-3 ${
                        msg.speaker === 'child' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {msg.speaker === 'ai' && (
                        <div className="h-7 w-7 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                          <Bot className="h-4 w-4" />
                        </div>
                      )}
                      <div
                        className={`p-3.5 rounded-2xl max-w-[80%] leading-relaxed ${
                          msg.speaker === 'child'
                            ? 'bg-primary text-primary-foreground rounded-br-none'
                            : 'bg-muted/80 text-foreground rounded-bl-none border border-border/60'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-muted-foreground">
                    Gentle, reassuring tone • Explains privacy clearly • No coercion
                  </span>
                </div>
              </div>
            </div>

            {/* TABBED EXPLORATION: CAPABILITIES VS STRICT BOUNDARIES */}
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card mb-16">
              <div className="flex justify-center gap-3 mb-8">
                <Button
                  variant={activeTab === 'capabilities' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('capabilities')}
                  className="gap-2"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  What the AI Is Designed to Do
                </Button>
                <Button
                  variant={activeTab === 'boundaries' ? 'destructive' : 'outline'}
                  onClick={() => setActiveTab('boundaries')}
                  className="gap-2"
                >
                  <XCircle className="h-4 w-4" />
                  What the AI Does NOT Do
                </Button>
              </div>

              {activeTab === 'capabilities' ? (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-center text-primary">
                    Core AI Capabilities: Safe, Supportive First Contact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {capabilities.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-semibold text-center mb-6">
                    Safety Warning: To prevent misuse and ethical failure, SafeSpeak enforces strict operational guardrails.
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {boundaries.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-muted/40 border border-destructive/20">
                        <div className="flex items-center gap-2 mb-2 text-destructive font-bold text-sm">
                          <XCircle className="h-4 w-4 shrink-0" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* AI TRIAGE MATRIX */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-primary/20 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Workflow Integration</span>
              <h2 className="text-2xl md:text-3xl font-bold">How AI Triage Feeds into Human Safeguarding</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                The AI serves as the initial empathetic listener and structured categoriser. Once the child communicates, the AI identifies urgency indicators (e.g. self-harm, physical violence, teacher misconduct) and formats a structured summary for authorized safeguarding officers and the proposed CCPRB escalation matrix.
              </p>
              <div className="flex justify-end gap-3 pt-4">
                <Link to="/safeguarding">
                  <Button className="gap-2">
                    Safeguarding & CCPRB Pathways <ArrowRight className="h-4 w-4" />
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

export default AiSupport;
