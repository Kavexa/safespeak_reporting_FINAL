import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Building,
  School,
  HeartHandshake,
  Send,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: 'School Leader / Administrator',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 py-20 px-4 border-b border-border/40">
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-primary">
                Collaboration & Inquiries
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Contact & School Pilot Inquiries
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Help us build a safer ecosystem. We welcome conversations with schools, child psychologists, legal experts, NGOs, and technical contributors.
            </p>
          </div>
        </section>

        {/* SECTION: CONTACT FORM & INFO */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Info Column */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Get in Touch</span>
                  <h2 className="text-3xl font-bold mt-1 mb-4">Let's Connect for Child Safety</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Whether you are an educational institution interested in a pilot deployment, a child psychologist willing to advise on tone, or a developer interested in privacy tech, we would love to speak.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-card border border-border shadow-soft flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Official Project Email</h4>
                      <a href="mailto:kavexa432@gmail.com" className="text-xs text-primary underline">
                        kavexa432@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-border shadow-soft flex items-start gap-4">
                    <School className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">School Pilot Applications</h4>
                      <p className="text-xs text-muted-foreground">
                        Coordinated pilot trials for CBSE, State, and private school campuses.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-border shadow-soft flex items-start gap-4">
                    <HeartHandshake className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Advisory & Mentorship</h4>
                      <p className="text-xs text-muted-foreground">
                        Child protection advocates and adolescent clinicians guiding ethics and safety.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-400 leading-relaxed flex items-start gap-2.5">
                  <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    <strong>Emergency Note:</strong> This form is for administrative and pilot inquiries. If you or a child is in imminent physical danger, immediately call national emergency <strong>112</strong> or Childline India <strong>1098</strong>.
                  </span>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="p-8 rounded-3xl bg-card border border-border shadow-card">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Inquiry Received</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out to SafeSpeak. Our team will review your message and respond shortly.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                    <h3 className="text-xl font-bold text-foreground mb-4">Pilot & Inquiry Form</h3>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Mr. / Ms. Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        Official Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@school.edu.in"
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        School / Organisation
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="School Name or NGO"
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        Role / Interest
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      >
                        <option>School Leader / Administrator</option>
                        <option>School Counsellor / Psychologist</option>
                        <option>Child Protection / NGO Representative</option>
                        <option>CSR / Funding Partner</option>
                        <option>Technology & Research Contributor</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        Message / Pilot Scope
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your campus, pilot interests, or questions..."
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>

                    <Button type="submit" className="w-full gap-2 shadow-soft mt-2">
                      <Send className="h-4 w-4" />
                      Submit Inquiry
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
