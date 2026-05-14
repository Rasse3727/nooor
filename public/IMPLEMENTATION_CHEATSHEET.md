# Prism Analytics Landing Page - Implementation Cheatsheet

**Quick reference for building this landing page in Webflow, Framer, or any visual builder**

---

## Section-by-Section Checklist

### 1. NAVIGATION
- [ ] Logo (left) + Product name "Prism Analytics"
- [ ] Navigation links (Features, Pricing, FAQ)
- [ ] "Live Demo" link (bonus—links to interactive demo)
- [ ] Primary CTA button (right): "Start Free Trial"
- [ ] Sticky on scroll
- [ ] Mobile hamburger menu

**Copy Reference:**
- Navigation text: "Features" | "Pricing" | "FAQ" | "Live Demo"
- Button text: "Start Free Trial"

---

### 2. HERO SECTION
- [ ] Badge with pulsing dot: "Trusted by 200+ Series A–C teams"
- [ ] Main headline (H1, centered): "Stop Making Product Decisions in the Dark"
- [ ] Subheadline (P, centered): "Prism Analytics gives your product team..."
- [ ] Two CTA buttons:
  - [ ] Primary (blue): "Start Your Free Trial" + arrow icon
  - [ ] Secondary (outlined): "Watch 3-Min Demo"
- [ ] Trust line: "✓ No credit card • 14-day free trial • Full feature access"
- [ ] Hero image placeholder (16:9 aspect ratio, dark gradient background)
- [ ] Floating badge (bottom left of image): "94% faster insights"

**Copy Reference:**
```
Badge: "Trusted by 200+ Series A–C teams"
H1: "Stop Making Product Decisions in the Dark"
P: "Prism Analytics gives your product team the clarity you need to ship faster, 
iterate smarter, and crush your roadmap. Behavioral data meets product intuition."
CTA 1: "Start Your Free Trial"
CTA 2: "Watch 3-Min Demo"
Trust: "✓ No credit card required • 14-day free trial • Full feature access"
Float: "94% faster insights vs spreadsheets & manual analysis"
```

---

### 3. SOCIAL PROOF SECTION

**Company Logos (8 placeholder boxes)**
- [ ] TechCorp
- [ ] InnovateLabs
- [ ] DataFlow
- [ ] CloudScale
(Use actual customer logos when available)

**3 Testimonial Cards** (3-column grid, responsive)

**Card 1:**
```
Quote: "Prism cut our product analysis cycle from days to hours. Our team ships 3x faster now."
Author: Sarah Chen
Title: VP Product
Company Tag: Growth SaaS Co. ($45M Series B)
Stars: 5★
```

**Card 2:**
```
Quote: "Finally, non-technical PMs can understand user behavior without asking engineers 
for help. Game-changer."
Author: Marcus Johnson
Title: Senior PM
Company Tag: FinTech Startup ($12M Series A)
Stars: 5★
```

**Card 3:**
```
Quote: "The dashboards are so intuitive that stakeholders actually look at them. 
That never happened before."
Author: Elena Rodriguez
Title: Product Director
Company Tag: Enterprise SaaS ($120M Series C)
Stars: 5★
```

---

### 4. PROBLEM/SOLUTION SECTION (Two-Column)

**LEFT COLUMN - PROBLEM:**
```
H2: "The Product Manager's Dilemma"
Intro P: "You've got ambitious growth targets and a roadmap full of bets. 
But here's the reality:"

Problem 1: "Your analytics live in 5 different tools. Answering 'why' takes hours." [✕ icon]
Problem 2: "Your data team is buried. Simple product questions turn into 2-week projects." [✕ icon]
Problem 3: "By the time you get the numbers, the moment to act has passed." [✕ icon]
Problem 4: "You're second-guessing feature decisions because the data isn't clear." [✕ icon]
Problem 5: "New PMs spend 3 weeks learning your analytics setup before being useful." [✕ icon]

Closer P: "Sound familiar? You're not alone. We talked to 200+ product teams. 
Every single one had this problem."
```

**RIGHT COLUMN - SOLUTION:**
```
H2: "Meet Prism Analytics"
Intro P: "One unified platform built specifically for how product teams actually work:"

Solution 1: "Answers to 'why' in seconds. Not days. Not weeks." [✓ check]
Solution 2: "Non-technical PMs can build their own dashboards. 
No data team ticket required." [✓ check]
Solution 3: "See patterns before competitors do. Real-time alerts on what matters." [✓ check]
Solution 4: "One source of truth. All your user data in one place." [✓ check]
Solution 5: "Get insights in minutes. Decisions in hours. Shipped in days." [✓ check]

CTA Button: "See How It Works" + arrow
```

---

### 5. FEATURES SECTION

**Section Header** (centered)
```
H2: "Built for Modern Product Teams"
P: "Every feature designed to get you faster insights and faster decisions"
```

**6-Card Grid** (2x3 on desktop, responsive)

**Card 1: Behavioral Funnels**
```
Icon: BarChart3
Title: "Behavioral Funnels"
Description: "See exactly where users drop off and why. Track complete user journeys 
from signup to churn. Identify friction points in seconds."
• Visual funnel builder, no SQL required
• Real-time funnel alerts when conversion drops
• Compare funnels across cohorts and segments
```

**Card 2: Cohort Analysis**
```
Icon: Users
Title: "Cohort Analysis"
Description: "Group users by behavior, acquisition source, or custom attributes. 
Track cohort health over time. Find your most valuable segments."
• Auto-generated segment suggestions
• Retention curves and LTV calculations built-in
• Export cohorts for targeted campaigns
```

**Card 3: Real-Time Insights**
```
Icon: Zap
Title: "Real-Time Insights"
Description: "Dashboards update live as users interact with your product. 
Never miss a spike or anomaly. Catch problems before customers do."
• Live event ingestion with sub-second latency
• Custom alerts on any metric
• Historical drill-down on any data point
```

**Card 4: Privacy-First Architecture**
```
Icon: Shield
Title: "Privacy-First Architecture"
Description: "GDPR and CCPA compliant by default. User-level data stays secure. 
Audit logs for every query. Enterprise-grade encryption."
• Zero customer PII storage
• Automatic data retention policies
• SOC 2 Type II certified
```

**Card 5: Insights Engine**
```
Icon: Lightbulb
Title: "Insights Engine"
Description: "AI-powered anomaly detection finds patterns humans miss. 
Automatic hypothesis generation. Recommendations for growth opportunities."
• Detects unusual user behavior automatically
• Suggests experiments worth running
• Identifies drop-off points across your product
```

**Card 6: No-Code Dashboard Builder**
```
Icon: TrendingUp
Title: "No-Code Dashboard Builder"
Description: "Drag, drop, and query. Build professional dashboards in minutes. 
Share with your entire team. Auto-updates as data changes."
• Pre-built templates for common analyses
• Smart chart recommendations
• Scheduled reports via email or Slack
```

**Integration Callout Box** (below cards)
```
H3: "Integrates with Your Stack"
P: "Connect Prism to the tools your team already uses. 
Native integrations with 50+ platforms."
[8 integration logos: Segment, Amplitude, Mixpanel, BigQuery, Snowflake, Slack, Intercom, Datadog]
```

---

### 6. PRICING SECTION

**Section Header** (centered)
```
H2: "Simple, Transparent Pricing"
P: "Pay for what you use. No hidden fees. Scale as you grow."
```

**Billing Toggle**
```
[Monthly] [Annual - Save 25%]
```

**3-Pricing Cards** (3-column, middle card highlighted)

**CARD 1: STARTER**
```
Name: "Starter"
Price: "$499"
Period: "/month"
Description: "For teams just getting started with product analytics"
CTA: "Start Free Trial"
Badge: (none)
Note: "Best for early-stage teams validating product-market fit"

Features:
• Up to 1M monthly events
• Up to 3 team members
• 30-day data retention
• Pre-built dashboards
• Email support
• Slack integration
• Basic cohort analysis
```

**CARD 2: GROWTH (MOST POPULAR)**
```
Name: "Growth"
Price: "$1,499"
Period: "/month"
Description: "For high-growth teams scaling their product"
CTA: "Start Free Trial"
Badge: "Most Popular" (absolute positioned above card)
Note: "Most popular for Series B/C teams"

Features:
• Up to 50M monthly events
• Unlimited team members
• 2-year data retention
• Custom dashboards & alerts
• Priority support (4-hour SLA)
• Slack & email integration
• Advanced cohort analysis
• Custom event tracking
• API access
• Insights engine with AI
```

**CARD 3: ENTERPRISE**
```
Name: "Enterprise"
Price: "Custom"
Period: "pricing"
Description: "For enterprises with complex requirements"
CTA: "Talk to Sales"
Badge: (none)
Note: "Custom enterprise pricing"

Features:
• Unlimited events & users
• SSO & role-based access control
• Dedicated account manager
• Custom integrations
• SLA guarantee (99.9% uptime)
• Advanced security features
• On-premise deployment option
• Training & onboarding included
```

**Pricing Rationale Box** (below cards, light blue background)

**Left Column:**
```
H4: "Event-Based Pricing (Not Per-Seat)"
P: "Your entire product team gets unlimited access for one price. 
Invite everyone—engineers, designers, PMs, leadership. We don't charge per user 
because insights should be accessible to everyone who needs them."

Benefits:
• Starter plan covers early-stage products with ~1M monthly active users
• Growth plan scales to companies doing $5M-$50M ARR
• Enterprise plan for companies doing $100M+ ARR
```

**Right Column:**
```
H4: "ROI-Focused Pricing"
P: "Our customers typically save 150+ hours per quarter on analytics work. 
That's $30k-$50k of data team time freed up per year. Our pricing starts at 
$499/month because we're 40-50% cheaper than comparable platforms while being 3x faster."

Benefits:
• Saves 3-4 data team headcount per company
• Faster insights = faster revenue impact
• Average ROI payback: 6 weeks
```

**Annual Discount Callout** (green background box)
```
💰 Annual Commitment = 25% Discount
Lock in lower rates and we'll give you extra support. Growth plan becomes 
$13,491/year (was $17,988). Most customers commit annually because they quickly 
see the time savings and never look back.
```

---

### 7. FAQ SECTION

**Section Header** (centered)
```
H2: "Frequently Asked Questions"
P: "Everything you need to know about getting started with Prism"
```

**12 Accordion Items** (expandable)

```
Q1: How long does it take to set up Prism?
A: Most teams are up and running in under 30 minutes. If you're already using 
Segment, Amplitude, or similar event collection tools, we can connect directly 
to your data warehouse. If not, we provide a simple SDK that takes 5 minutes 
to install. Your first dashboard is live within an hour.

Q2: Do I need technical skills to use Prism?
A: No. Our dashboard builder is designed for product managers without any 
technical background. You point-and-click to build queries, and Prism translates 
them to SQL. That said, SQL experts can write raw queries if they want. 
It's built for everyone from executive to analyst.

Q3: Can I connect Prism to my existing data warehouse (BigQuery, Snowflake, Redshift)?
A: Yes, absolutely. Prism is data warehouse agnostic. We can connect to BigQuery, 
Snowflake, Redshift, Postgres, and others. We'll read from your existing data 
without copying anything. This means your data stays in your control, and we 
respect your existing security and compliance setup.

Q4: What if we're already using Amplitude or Mixpanel?
A: Prism works seamlessly alongside or as a replacement for these tools. Many 
customers use Prism as their primary analytics layer because it's faster and 
more intuitive for product teams. You can keep your existing setup or migrate 
over time—no rush.

Q5: Is Prism secure? Do you store our customer data?
A: Yes, we're SOC 2 Type II certified and GDPR/CCPA compliant. We never store 
raw customer PII. We only work with anonymized event data that your team sends us. 
All data in transit is encrypted with TLS 1.3, and data at rest is encrypted with 
AES-256. You can also self-host Prism on your infrastructure (Enterprise plan).

Q6: What happens if we hit our event limit mid-month?
A: We'll notify your team immediately. You won't be cut off—we'll keep logging events. 
At the end of the month, we'll either bill you for overages (usually 10-30% cheaper 
than the per-event rate of a higher tier) or you can upgrade mid-cycle. No surprises.

Q7: Do you offer discounts for annual payments?
A: Yes. Annual commitments get 25% off. Starter becomes $4,491/year, Growth becomes 
$13,491/year. Most customers commit annually because they see ROI so quickly that 
budget discussions are easy.

Q8: Can we export data from Prism?
A: Yes. Every dashboard, report, and underlying dataset can be exported as CSV or 
queried via our REST API. All Growth and Enterprise customers get API access. 
You own your data.

Q9: Do you have a free tier?
A: We don't have a permanent free tier, but we offer a 14-day free trial with 
full access to all Starter plan features. No credit card required. After that, 
pricing starts at $499/month.

Q10: What's your customer support like?
A: Starter customers get email support (typically 24-hour response). Growth customers 
get priority support with a 4-hour response SLA. Enterprise customers get a dedicated 
account manager. We also have a community Slack with hundreds of product managers, 
and our team answers questions there daily.

Q11: Can we customize Prism for our specific workflow?
A: For Growth and Enterprise plans, yes. We offer custom integrations, white-label 
options, and can build features specific to your workflow. Talk to our sales team 
about what's possible.

Q12: How often do you release new features?
A: Every two weeks, typically. We ship small incremental improvements and listen 
heavily to customer feedback. Our product roadmap is partly driven by customer requests. 
You can track what's coming on our public roadmap.
```

**Still Have Questions Box** (light blue background, centered)
```
H4: "Still have questions?"
P: "Our team is happy to help. Schedule a 15-minute call with our sales engineer."
CTA: "Schedule a Demo"
```

---

### 8. FINAL CTA SECTION

**Dark blue gradient background** (from-blue-600 to-blue-800)

```
H2: "Ready to Stop Flying Blind?"
P: "Join 200+ product teams shipping faster and making smarter decisions with Prism."

Two CTAs:
• Primary (white): "Start Your Free 14-Day Trial"
• Secondary (outlined white): "Talk to Our Team"

Trust line: "✓ No credit card required • ✓ Full feature access • ✓ Onboarding support included"
```

---

### 9. FOOTER

**4-Column Footer Grid** (responsive to 1 column mobile)

**Column 1: Branding**
```
Logo + "Prism Analytics"
"Product analytics built for shipping fast."
```

**Column 2: Product**
```
H4: "Product"
Links:
• Features
• Pricing
• Roadmap
```

**Column 3: Company**
```
H4: "Company"
Links:
• Blog
• About
• Careers
```

**Column 4: Legal**
```
H4: "Legal"
Links:
• Privacy
• Terms
• Security
```

**Footer Bottom** (border-top)
```
Left: "© 2024 Prism Analytics. All rights reserved."
Right: "Twitter | LinkedIn | GitHub"
```

---

## Design Tokens Reference

### Colors
```
Primary: #2563EB (blue-600)
Primary Dark: #1E40AF (blue-800)
Success: #16A34A (green-600)
Error: #DC2626 (red-600)
Background: #FFFFFF (white)
Background Light: #F9FAFB (gray-50)
Background Dark: #111827 (gray-900)
Text Primary: #111827 (gray-900)
Text Secondary: #4B5563 (gray-600)
Text Light: #9CA3AF (gray-400)
Border: #E5E7EB (gray-200)
```

### Typography
```
H1: 56px (desktop), 36px (mobile) | Font-weight: 700
H2: 36px (desktop), 28px (mobile) | Font-weight: 700
H3: 24px | Font-weight: 700
H4: 20px | Font-weight: 600
P: 16px | Font-weight: 400 | Line-height: 1.6
P Small: 14px | Font-weight: 400 | Line-height: 1.5
Button: 16px | Font-weight: 600 | Letter-spacing: 0.5px
```

### Spacing
```
XS: 4px
S: 8px
M: 16px
L: 24px
XL: 32px
2XL: 48px
3XL: 64px
```

### Border Radius
```
Small: 4px (cards, inputs)
Medium: 8px (most elements)
Large: 12px (sections)
```

---

## Interactive Elements

### Button States
- **Default:** Full color, no shadow
- **Hover:** Darker shade (blue-700)
- **Active:** Darker still
- **Disabled:** Gray, reduced opacity

### Accordion (FAQ)
- **Closed:** Chevron pointing down
- **Open:** Chevron pointing up
- **Animation:** 300ms ease-in-out

### Pricing Toggle
- **Active:** White background, shadow
- **Inactive:** Gray background, no shadow
- **Animation:** Smooth color transition

### Links
- **Default:** Underline on hover
- **Color:** Blue-600
- **Animation:** 200ms ease-in-out

---

## Responsive Breakpoints

```
Mobile: 320px - 640px
Tablet: 641px - 1024px
Desktop: 1025px+

Grid Adjustments:
- 3-column (Features): 1-col mobile, 2-col tablet, 3-col desktop
- 3-column (Pricing): 1-col mobile, 1-col tablet, 3-col desktop
- 2-column (Problem/Solution): 1-col mobile, 1-col tablet, 2-col desktop
```

---

## CTA Conversion Funnel

```
Hero → Free Trial Signup → Email Verification → Product Onboarding → First Dashboard
FAQ → Schedule Demo → Sales Call → Demo → Proposal → Contract

Primary Path: Hero CTA (Free Trial)
Secondary Path: "Watch Demo" → Sales Engagement
Tertiary Path: FAQ → "Schedule Demo" → Sales Engagement
```

---

## Analytics Events to Track

- [ ] Hero "Start Free Trial" click
- [ ] Hero "Watch Demo" click
- [ ] Problem/Solution "See How It Works" click
- [ ] Feature card views (which features drive engagement?)
- [ ] Pricing card views (which tier gets most focus?)
- [ ] Pricing toggle toggle (monthly vs annual)
- [ ] FAQ accordion opens (which questions matter most?)
- [ ] FAQ "Schedule Demo" click
- [ ] Final CTA "Start Free Trial" click
- [ ] Final CTA "Talk to Team" click
- [ ] All navigation link clicks
- [ ] Page scroll depth
- [ ] Form submissions
- [ ] Testimonial impressions

---

## Webflow-Specific Notes

1. **Use Webflow Symbols** for: Nav, CTA buttons, testimonial cards, feature cards, pricing cards
2. **Use Webflow Interactions** for: FAQ accordion, pricing toggle, hover states
3. **Use Webflow Forms** for: Email signup, demo request, contact form
4. **Use Webflow CMS** for: Testimonials, FAQs, integrations (if you want to update without coding)
5. **Use Webflow SEO** settings: Meta description, open graph images, schema markup

---

## Framer-Specific Notes

1. **Use Framer Components** for reusable sections
2. **Use Framer Variants** for button states, responsive designs
3. **Use Framer Animations** for scrolling effects, entrance animations
4. **Use Framer Interactions** for FAQ accordion, pricing toggle
5. **Export as:** React (if integrating) or HTML/CSS (if static)

---

## Pre-Launch Checklist

- [ ] All copy proofread by native English speaker
- [ ] All links tested (internal anchors, external links)
- [ ] All images optimized for web (compressed, appropriate size)
- [ ] Mobile responsiveness tested on real devices
- [ ] Form submissions working + email notifications set up
- [ ] Analytics pixel installed (Google Analytics, etc.)
- [ ] SEO setup: title, meta description, h1/h2 hierarchy
- [ ] Open Graph images added (for social sharing)
- [ ] Schema markup added (organization schema at minimum)
- [ ] Performance tested (PageSpeed Insights >90)
- [ ] Accessibility tested (WCAG AA minimum)
- [ ] Security: SSL certificate, no mixed content
- [ ] All CTAs route to correct signup/demo flow
- [ ] Backup of all content (in case of future edits)

---

## Post-Launch Monitoring

**Week 1:**
- Monitor for technical issues
- Check analytics tracking is working
- Gather early feedback

**Week 2-4:**
- Analyze hero section engagement
- Test headline variations
- Monitor form completion rate

**Month 2:**
- A/B test feature section ordering
- Test pricing presentation variations
- Optimize FAQ based on actual questions

**Month 3+:**
- Update testimonials with new logos
- Refresh customer count
- Test social proof positioning
- Optimize highest friction areas

---

**Ready to build? Use this checklist to implement systematically. Start with structure, then add styling, then interactions.**
