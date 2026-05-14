import { Check, ArrowRight, ChevronDown, BarChart3, Users, Zap, Shield, Lightbulb, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface LandingPageProps {
  onNavigateToDashboard?: () => void;
}

export default function LandingPage({ onNavigateToDashboard }: LandingPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Prism Analytics</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 text-sm font-medium">FAQ</a>
            {onNavigateToDashboard && (
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToDashboard(); }} className="text-gray-600 hover:text-gray-900 text-sm font-medium">Live Demo</a>
            )}
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-white pt-20 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-sm font-medium text-blue-900">Trusted by 200+ Series A–C teams</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Making Product Decisions in the Dark
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Prism Analytics gives your product team the clarity you need to ship faster, iterate smarter, and crush your roadmap. Behavioral data meets product intuition.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                Start Your Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={onNavigateToDashboard}
                className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition"
              >
                Watch 3-Min Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
              <p>✓ No credit card required • 14-day free trial • Full feature access</p>
            </div>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold opacity-75">Interactive Dashboard Preview</p>
                  <p className="text-sm opacity-60 mt-2">(Screenshots and embedded demo go here)</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-6 bg-white rounded-lg shadow-lg px-4 py-3 border border-gray-200">
              <p className="text-sm font-semibold text-gray-900">94% faster insights</p>
              <p className="text-xs text-gray-600">vs spreadsheets & manual analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-gray-600 font-semibold mb-8">Trusted by leading product teams</p>
          
          {/* Company logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 opacity-60">
            {['TechCorp', 'InnovateLabs', 'DataFlow', 'CloudScale'].map((name) => (
              <div key={name} className="flex items-center justify-center h-16 bg-gray-100 rounded-lg">
                <span className="font-semibold text-gray-600">{name}</span>
              </div>
            ))}
          </div>

          {/* Featured testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Prism cut our product analysis cycle from days to hours. Our team ships 3x faster now.",
                author: "Sarah Chen",
                title: "VP Product, Growth SaaS Co.",
                company: "$45M Series B"
              },
              {
                quote: "Finally, non-technical PMs can understand user behavior without asking engineers for help. Game-changer.",
                author: "Marcus Johnson",
                title: "Senior PM, FinTech Startup",
                company: "$12M Series A"
              },
              {
                quote: "The dashboards are so intuitive that stakeholders actually look at them. That never happened before.",
                author: "Elena Rodriguez",
                title: "Product Director, Enterprise SaaS",
                company: "$120M Series C"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-900 font-medium mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <p className="text-xs text-blue-600 font-semibold mt-1">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM/SOLUTION NARRATIVE */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem side */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Product Manager's Dilemma
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                You've got ambitious growth targets and a roadmap full of bets. But here's the reality:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Your analytics live in 5 different tools. Answering 'why' takes hours.",
                  "Your data team is buried. Simple product questions turn into 2-week projects.",
                  "By the time you get the numbers, the moment to act has passed.",
                  "You're second-guessing feature decisions because the data isn't clear.",
                  "New PMs spend 3 weeks learning your analytics setup before being useful."
                ].map((problem, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 italic">
                Sound familiar? You're not alone. We talked to 200+ product teams. Every single one had this problem.
              </p>
            </div>

            {/* Solution side */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Prism Analytics
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                One unified platform built specifically for how product teams actually work:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Answers to 'why' in seconds. Not days. Not weeks.",
                  "Non-technical PMs can build their own dashboards. No data team ticket required.",
                  "See patterns before competitors do. Real-time alerts on what matters.",
                  "One source of truth. All your user data in one place.",
                  "Get insights in minutes. Decisions in hours. Shipped in days."
                ].map((solution, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={onNavigateToDashboard}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
              >
                See How It Works
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTIONS */}
      <section id="features" className="bg-white py-20 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Modern Product Teams
            </h2>
            <p className="text-xl text-gray-600">
              Every feature designed to get you faster insights and faster decisions
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {[
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Behavioral Funnels",
                description: "See exactly where users drop off and why. Track complete user journeys from signup to churn. Identify friction points in seconds.",
                benefits: [
                  "Visual funnel builder, no SQL required",
                  "Real-time funnel alerts when conversion drops",
                  "Compare funnels across cohorts and segments"
                ]
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Cohort Analysis",
                description: "Group users by behavior, acquisition source, or custom attributes. Track cohort health over time. Find your most valuable segments.",
                benefits: [
                  "Auto-generated segment suggestions",
                  "Retention curves and LTV calculations built-in",
                  "Export cohorts for targeted campaigns"
                ]
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Real-Time Insights",
                description: "Dashboards update live as users interact with your product. Never miss a spike or anomaly. Catch problems before customers do.",
                benefits: [
                  "Live event ingestion with sub-second latency",
                  "Custom alerts on any metric",
                  "Historical drill-down on any data point"
                ]
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Privacy-First Architecture",
                description: "GDPR and CCPA compliant by default. User-level data stays secure. Audit logs for every query. Enterprise-grade encryption.",
                benefits: [
                  "Zero customer PII storage",
                  "Automatic data retention policies",
                  "SOC 2 Type II certified"
                ]
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Insights Engine",
                description: "AI-powered anomaly detection finds patterns humans miss. Automatic hypothesis generation. Recommendations for growth opportunities.",
                benefits: [
                  "Detects unusual user behavior automatically",
                  "Suggests experiments worth running",
                  "Identifies drop-off points across your product"
                ]
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "No-Code Dashboard Builder",
                description: "Drag, drop, and query. Build professional dashboards in minutes. Share with your entire team. Auto-updates as data changes.",
                benefits: [
                  "Pre-built templates for common analyses",
                  "Smart chart recommendations",
                  "Scheduled reports via email or Slack"
                ]
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Integration section */}
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrates with Your Stack</h3>
            <p className="text-gray-600 mb-6">
              Connect Prism to the tools your team already uses. Native integrations with 50+ platforms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Segment', 'Amplitude', 'Mixpanel', 'BigQuery', 'Snowflake', 'Slack', 'Intercom', 'Datadog'].map((tool) => (
                <div key={tool} className="bg-white p-4 rounded-lg border border-gray-200 text-center text-sm font-medium text-gray-700">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="bg-gradient-to-b from-gray-50 to-white py-20 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Pay for what you use. No hidden fees. Scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-gray-200 rounded-lg p-1">
              <button className="px-4 py-2 bg-white rounded-lg font-medium text-gray-900 shadow-sm">Monthly</button>
              <button className="px-4 py-2 font-medium text-gray-700">Annual <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full ml-2">Save 25%</span></button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Starter",
                price: "$499",
                period: "/month",
                description: "For teams just getting started with product analytics",
                cta: "Start Free Trial",
                highlighted: false,
                features: [
                  "Up to 1M monthly events",
                  "Up to 3 team members",
                  "30-day data retention",
                  "Pre-built dashboards",
                  "Email support",
                  "Slack integration",
                  "Basic cohort analysis"
                ],
                note: "Best for early-stage teams validating product-market fit"
              },
              {
                name: "Growth",
                price: "$1,499",
                period: "/month",
                description: "For high-growth teams scaling their product",
                cta: "Start Free Trial",
                highlighted: true,
                features: [
                  "Up to 50M monthly events",
                  "Unlimited team members",
                  "2-year data retention",
                  "Custom dashboards & alerts",
                  "Priority support (4-hour SLA)",
                  "Slack & email integration",
                  "Advanced cohort analysis",
                  "Custom event tracking",
                  "API access",
                  "Insights engine with AI"
                ],
                note: "Most popular for Series B/C teams"
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                description: "For enterprises with complex requirements",
                cta: "Talk to Sales",
                highlighted: false,
                features: [
                  "Unlimited events & users",
                  "SSO & role-based access control",
                  "Dedicated account manager",
                  "Custom integrations",
                  "SLA guarantee (99.9% uptime)",
                  "Advanced security features",
                  "On-premise deployment option",
                  "Training & onboarding included"
                ],
                note: "Custom enterprise pricing"
              }
            ].map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-lg border transition relative ${
                  plan.highlighted 
                    ? 'border-blue-600 bg-blue-50 shadow-lg ring-2 ring-blue-100' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-sm">{plan.period}</span>
                    <p className="text-xs text-gray-500 mt-2">{plan.note}</p>
                  </div>

                  <button 
                    className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                      plan.highlighted
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border-2 border-gray-300 text-gray-900 hover:border-gray-400'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Rationale */}
          <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why This Pricing?</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Event-Based Pricing (Not Per-Seat)</h4>
                <p className="text-gray-600 mb-4">
                  Your entire product team gets unlimited access for one price. Invite everyone—engineers, designers, PMs, leadership. We don't charge per user because insights should be accessible to everyone who needs them.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Starter plan covers early-stage products with ~1M monthly active users</li>
                  <li>✓ Growth plan scales to companies doing $5M-$50M ARR</li>
                  <li>✓ Enterprise plan for companies doing $100M+ ARR</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">ROI-Focused Pricing</h4>
                <p className="text-gray-600 mb-4">
                  Our customers typically save 150+ hours per quarter on analytics work. That's $30k-$50k of data team time freed up per year. Our pricing starts at $499/month because we're 40-50% cheaper than comparable platforms while being 3x faster.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Saves 3-4 data team headcount per company</li>
                  <li>✓ Faster insights = faster revenue impact</li>
                  <li>✓ Average ROI payback: 6 weeks</li>
                </ul>
              </div>
            </div>

            {/* Annual discount highlight */}
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">💰 Annual Commitment = 25% Discount</h4>
              <p className="text-green-800 text-sm">
                Lock in lower rates and we'll give you extra support. Growth plan becomes $13,491/year (was $17,988). Most customers commit annually because they quickly see the time savings and never look back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-white py-20 border-b border-gray-200">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about getting started with Prism
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does it take to set up Prism?",
                a: "Most teams are up and running in under 30 minutes. If you're already using Segment, Amplitude, or similar event collection tools, we can connect directly to your data warehouse. If not, we provide a simple SDK that takes 5 minutes to install. Your first dashboard is live within an hour."
              },
              {
                q: "Do I need technical skills to use Prism?",
                a: "No. Our dashboard builder is designed for product managers without any technical background. You point-and-click to build queries, and Prism translates them to SQL. That said, SQL experts can write raw queries if they want. It's built for everyone from executive to analyst."
              },
              {
                q: "Can I connect Prism to my existing data warehouse (BigQuery, Snowflake, Redshift)?",
                a: "Yes, absolutely. Prism is data warehouse agnostic. We can connect to BigQuery, Snowflake, Redshift, Postgres, and others. We'll read from your existing data without copying anything. This means your data stays in your control, and we respect your existing security and compliance setup."
              },
              {
                q: "What if we're already using Amplitude or Mixpanel?",
                a: "Prism works seamlessly alongside or as a replacement for these tools. Many customers use Prism as their primary analytics layer because it's faster and more intuitive for product teams. You can keep your existing setup or migrate over time—no rush."
              },
              {
                q: "Is Prism secure? Do you store our customer data?",
                a: "Yes, we're SOC 2 Type II certified and GDPR/CCPA compliant. We never store raw customer PII. We only work with anonymized event data that your team sends us. All data in transit is encrypted with TLS 1.3, and data at rest is encrypted with AES-256. You can also self-host Prism on your infrastructure (Enterprise plan)."
              },
              {
                q: "What happens if we hit our event limit mid-month?",
                a: "We'll notify your team immediately. You won't be cut off—we'll keep logging events. At the end of the month, we'll either bill you for overages (usually 10-30% cheaper than the per-event rate of a higher tier) or you can upgrade mid-cycle. No surprises."
              },
              {
                q: "Do you offer discounts for annual payments?",
                a: "Yes. Annual commitments get 25% off. Starter becomes $4,491/year, Growth becomes $13,491/year. Most customers commit annually because they see ROI so quickly that budget discussions are easy."
              },
              {
                q: "Can we export data from Prism?",
                a: "Yes. Every dashboard, report, and underlying dataset can be exported as CSV or queried via our REST API. All Growth and Enterprise customers get API access. You own your data."
              },
              {
                q: "Do you have a free tier?",
                a: "We don't have a permanent free tier, but we offer a 14-day free trial with full access to all Starter plan features. No credit card required. After that, pricing starts at $499/month."
              },
              {
                q: "What's your customer support like?",
                a: "Starter customers get email support (typically 24-hour response). Growth customers get priority support with a 4-hour response SLA. Enterprise customers get a dedicated account manager. We also have a community Slack with hundreds of product managers, and our team answers questions there daily."
              },
              {
                q: "Can we customize Prism for our specific workflow?",
                a: "For Growth and Enterprise plans, yes. We offer custom integrations, white-label options, and can build features specific to your workflow. Talk to our sales team about what's possible."
              },
              {
                q: "How often do you release new features?",
                a: "Every two weeks, typically. We ship small incremental improvements and listen heavily to customer feedback. Our product roadmap is partly driven by customer requests. You can track what's coming on our public roadmap."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="text-left font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-600 transition ${activeFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-12 text-center p-8 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-gray-900 font-semibold mb-2">Still have questions?</p>
            <p className="text-gray-600 mb-4">Our team is happy to help. Schedule a 15-minute call with our sales engineer.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Stop Flying Blind?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 200+ product teams shipping faster and making smarter decisions with Prism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
              Start Your Free 14-Day Trial
            </button>
            <button 
              onClick={onNavigateToDashboard}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition"
            >
              Talk to Our Team
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            ✓ No credit card required • ✓ Full feature access • ✓ Onboarding support included
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
                <span className="text-white font-bold">Prism</span>
              </div>
              <p className="text-sm">Product analytics built for shipping fast.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
            <p>&copy; 2024 Prism Analytics. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
