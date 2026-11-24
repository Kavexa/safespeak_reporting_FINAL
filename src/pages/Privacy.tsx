import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Lock,
  ShieldCheck,
  KeyRound,
  FileText,
  EyeOff,
  UserCheck,
  Scale,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Database,
  FileCheck2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  const privacyPrinciples = [
    {
      title: 'Data Minimisation',
      desc: 'Collect only information necessary for the stated safeguarding purpose. Avoid unnecessary identity, location, biometric, or device-tracking data.',
    },
    {
      title: 'Strict Confidentiality',
      desc: 'Restrict sensitive information strictly to authorised personnel with a verified safeguarding role under role-based access control (RBAC).',
    },
    {
      title: 'Pseudonymous Access',
      desc: 'Allow children to communicate via randomly generated case codes instead of forcing phone numbers, email, or institutional logins.',
    },
    {
      title: 'Total Transparency',
      desc: 'Clearly explain what data is collected, why it is collected, who has access, and when legal mandates require escalation.',
    },
    {
      title: 'Defense-in-Depth Security',
      desc: 'End-to-end data encryption, session sanitization, encrypted cloud databases, and tamper-resistant audit logs.',
    },
    {
      title: 'Strict Purpose Limitation',
      desc: 'Information collected for child safeguarding must never be repurposed for marketing, behavioural advertising, or academic profiling.',
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
              <Lock className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-primary">
                Trust & Legal Safeguards
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Privacy, Anonymity & Digital Trust
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Trust must be built into the system. Children should never have to guess whether SafeSpeak is private, who can read their disclosures, or what happens after they reach out.
            </p>
          </div>
        </section>

        {/* SECTION: PRIVACY PRINCIPLES */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">Core Commitments</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Our Six Privacy Principles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Engineered to establish safe, verifiable boundaries before a child shares a single word.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {privacyPrinciples.map((item, idx) => (
                <Card key={idx} className="border-border/80 shadow-soft hover:border-primary/50 transition-all">
                  <CardContent className="pt-6">
                    <ShieldCheck className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ANONYMOUS VS CONFIDENTIAL COMPARISON */}
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card mb-20">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Clarity Over Illusion</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">Anonymous vs. Confidential Reporting</h3>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-2">
                  SafeSpeak never presents anonymity as a false guarantee if technology or legal duties could reveal identity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-muted/40 border border-border space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold text-base">
                    <EyeOff className="h-5 w-5" />
                    <span>Anonymous Reporting</span>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Identity is not collected and is unknown to the software.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Great for low-pressure first contact and broad school issues.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Limits direct physical outreach if the child is in immediate danger.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-muted/40 border border-border space-y-3">
                  <div className="flex items-center gap-2 text-secondary font-bold text-base">
                    <UserCheck className="h-5 w-5" />
                    <span>Confidential Reporting</span>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      <span>Identity is known only to authorized, vetted safeguarding professionals.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      <span>Allows ongoing protective interventions, counselling, and recovery support.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      <span>Protected by strict institutional firewalls and legal safeguarding duties.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* THE CASE-CODE MECHANISM */}
            <div className="p-8 md:p-12 rounded-3xl bg-muted/30 border border-border shadow-soft mb-20 space-y-6">
              <div className="flex items-center gap-3">
                <KeyRound className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">The Case-Code Mechanism</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                SafeSpeak solves the communication paradox without requiring accounts, passwords, or emails. Upon submission or first chat, the system generates a random, cryptographically secure 6-digit Case Code (e.g. <code className="bg-primary/10 text-primary px-2 py-0.5 rounded font-mono">SPK-7842</code>).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-bold text-foreground mb-1">1. Zero Registration</div>
                  <p className="text-muted-foreground">No names, student admission numbers, or phone numbers are required to track status.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-bold text-foreground mb-1">2. Two-Way Asynchronous Chat</div>
                  <p className="text-muted-foreground">Entering the code allows the child to read messages from the safeguarding officer safely.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-bold text-foreground mb-1">3. Cross-Device Freedom</div>
                  <p className="text-muted-foreground">A child can initiate on a school kiosk and check updates later from home or vice versa.</p>
                </div>
              </div>
            </div>

            {/* LEGAL & STATUTORY FRAMEWORKS (INDIA) */}
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card mb-16 space-y-6">
              <div className="flex items-center gap-3">
                <Scale className="h-8 w-8 text-primary" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Indian Jurisdictional Compliance</span>
                  <h3 className="text-2xl font-bold">Child Protection & Legal Safeguards</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                SafeSpeak is designed to operate within applicable Indian child-protection statutes and professional standards. The platform supports existing statutory duties rather than attempting to supersede them.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground">
                <div className="p-4 rounded-xl bg-muted/40 border border-border">
                  <span className="font-bold text-foreground block mb-1">POCSO Act, 2012:</span>
                  Protection of Children from Sexual Offences. SafeSpeak complies with mandatory reporting obligations for offenses under POCSO, facilitating immediate routing to Special Juvenile Police Units (SJPU) and Child Welfare Committees.
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border">
                  <span className="font-bold text-foreground block mb-1">Juvenile Justice (JJ) Act:</span>
                  Framework for the care, protection, and rehabilitation of children in need of care and protection, honoring Child Welfare Committee (CWC) jurisdiction.
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border">
                  <span className="font-bold text-foreground block mb-1">Digital Personal Data Protection (DPDP) Act:</span>
                  Compliant data handling standards concerning verifiable parental consent pathways for general apps while respecting protective exemptions for child welfare emergencies.
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border">
                  <span className="font-bold text-foreground block mb-1">UNCRC & Child Rights Frameworks:</span>
                  Centered on the best interests of the child, non-discrimination, right to be heard, and physical and emotional integrity.
                </div>
              </div>

              {/* Ethical Commitments */}
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-xs text-foreground space-y-1">
                <strong>Our Legal & Ethical Commitments:</strong> Never promise absolute secrecy in severe danger • Transparently explain privacy limits • Never use child data for ads • Involve vetted human experts for every legal escalation.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
