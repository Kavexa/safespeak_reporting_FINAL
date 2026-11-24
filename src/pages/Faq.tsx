import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Shield,
  Bot,
  Monitor,
  HeartHandshake,
  Search,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FaqItem {
  q: string;
  a: string;
  category: 'general' | 'ai' | 'privacy' | 'kiosk' | 'governance';
}

const Faq = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FaqItem[] = [
    {
      q: 'What is SafeSpeak?',
      a: "SafeSpeak is an AI-assisted child safeguarding and wellness platform designed to help children express concerns, access support, and connect with appropriate professionals through digital reporting and physical school kiosks.",
      category: 'general',
    },
    {
      q: 'Why not simply approach a teacher?',
      a: "A trusted teacher can be an excellent source of help. However, not every child feels comfortable approaching an adult face-to-face, and in some distressing cases the concern may involve someone within the school itself. SafeSpeak offers a private, accessible starting point and connects children to the most appropriate, conflict-free support.",
      category: 'general',
    },
    {
      q: 'Is SafeSpeak an AI counsellor or doctor?',
      a: "No. SafeSpeak's AI provides conversational comfort, non-accusatory guidance, and support navigation. It is not a licensed counsellor, psychologist, therapist, or medical professional and never replaces qualified human clinical care.",
      category: 'ai',
    },
    {
      q: 'Is SafeSpeak completely anonymous?',
      a: "Pseudonymous and anonymous access is available in specific intake pathways (such as random case codes). However, absolute anonymity cannot be promised in circumstances involving imminent loss of life, severe abuse, or where protective action is legally mandated under statutes like POCSO. The system transparently explains these boundaries.",
      category: 'privacy',
    },
    {
      q: 'Will every report be sent to the police?',
      a: "No. Different concerns receive proportional, calibrated responses. Peer squabbles, stress, or academic anxiety receive school counselling and mediation. Only serious protection concerns, abuse, and acute threats trigger mandated child-welfare (CWC) or legal reporting pathways.",
      category: 'governance',
    },
    {
      q: 'What if a child is hesitant and does not want to file a formal complaint?',
      a: "A child can begin by having a gentle conversation with SafeSpeak AI, reading wellness guides, or learning how reporting works without being pressured to file a formal complaint. However, if imminent danger is revealed, safety takes precedence.",
      category: 'ai',
    },
    {
      q: 'What is CCPRB?',
      a: "CCPRB stands for the Central Child Protection Response Board. It is SafeSpeak's proposed independent safeguarding oversight and escalation framework. It is an internal project governance concept and is NOT an existing statutory Indian government authority, court, or police unit.",
      category: 'governance',
    },
    {
      q: 'Does SafeSpeak replace school counsellors?',
      a: "No. SafeSpeak is engineered to strengthen access to school counsellors, social workers, and healthcare professionals by making it easier for hesitant students to reach them without fear of peer exposure.",
      category: 'general',
    },
    {
      q: 'What is the purpose of the physical school kiosk?',
      a: "The kiosk provides an equitable physical access point in schools for children who do not own smartphones, lack home internet, or have devices monitored by abusers. It features directional audio and privacy screens to ensure a discreet sanctuary.",
      category: 'kiosk',
    },
    {
      q: 'How does SafeSpeak support long-term recovery?',
      a: "SafeSpeak bridges disclosures to certified psychological therapy, family assistance, anti-substance guidance, and safe school reintegration so no child is abandoned once a report is closed.",
      category: 'general',
    },
    {
      q: 'Is SafeSpeak currently available everywhere?',
      a: "SafeSpeak is an actively developing student innovation and working software prototype. It is not currently deployed nationwide; deployments depend on formal school pilot partnerships and verified professional support networks.",
      category: 'governance',
    },
  ];

  const filteredFaqs = faqs.filter((item) => {
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 py-20 px-4 border-b border-border/40">
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide uppercase text-primary">
                Clear Answers
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about SafeSpeak's purpose, AI boundaries, kiosk access, privacy model, and proposed governance.
            </p>
          </div>
        </section>

        {/* SECTION: SEARCH & ACCORDION */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            {/* Filter Bar */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search questions or keywords (e.g. CCPRB, anonymous, AI, police)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm shadow-soft"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center text-xs">
                {['all', 'general', 'ai', 'privacy', 'kiosk', 'governance'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full capitalize font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <Card
                    key={idx}
                    className={`border transition-all cursor-pointer ${
                      isOpen ? 'border-primary/50 shadow-soft bg-card' : 'border-border/70 hover:border-border bg-card/60'
                    }`}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-bold text-base md:text-lg text-foreground flex items-center gap-3">
                          <span className="text-primary font-mono text-sm">Q{idx + 1}.</span>
                          <span>{faq.q}</span>
                        </h3>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-primary' : ''
                          }`}
                        />
                      </div>
                      {isOpen && (
                        <div className="pt-4 mt-4 border-t border-border/50 text-muted-foreground text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12 text-muted-foreground text-sm">
                  No matching questions found. Try adjusting your search keywords.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;
