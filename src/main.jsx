import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  Headphones,
  LineChart,
  Mail,
  MessageCircle,
  PackageCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const navItems = [
  ['About', 'about'],
  ['Services', 'services'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Contact', 'contact'],
];

const stats = [
  ['3+', 'Years Experience'],
  ['1000s', 'Customer Interactions Handled'],
  ['Multi', 'E-Commerce Brands Supported'],
  ['High', 'Customer Satisfaction Focus'],
];

const services = [
  {
    icon: Headphones,
    title: 'Customer Support',
    items: ['Email Support', 'Order Inquiries', 'Refund Management', 'Customer Retention', 'Subscription Management', 'Complaint Resolution'],
  },
  {
    icon: Store,
    title: 'Shopify & E-Commerce Operations',
    items: ['Product Listings', 'Order Processing', 'Order Tracking', 'Fulfillment Monitoring', 'Supplier Communication', 'Store Management'],
  },
  {
    icon: CalendarCheck,
    title: 'Executive & Administrative Support',
    items: ['Email Management', 'Calendar Coordination', 'Spreadsheet Tracking', 'Reporting', 'Data Entry', 'Documentation'],
  },
  {
    icon: Users,
    title: 'Social Media Management',
    items: ['Community Engagement', 'Inbox Management', 'Content Scheduling', 'Customer Communication'],
  },
];

const experiences = [
  {
    company: 'Vireva',
    role: 'General Virtual Assistant',
    tasks: ['Customer Support', 'Product Listings', 'Order Tracking', 'Tracking Number Verification', 'Supplier Communication', 'Social Media Management', 'Administrative Support'],
  },
  {
    company: 'Celestra',
    role: 'General Virtual Assistant',
    tasks: ['Shopify Store Operations', 'Customer Service', 'Order Processing', 'Fulfillment Tracking', 'Product Management', 'Social Media Management'],
  },
  {
    company: 'Short-Term Rental Operations',
    role: 'Virtual Assistant',
    tasks: ['Guest Communication', 'Reservation Management', 'Administrative Coordination', 'Operational Support'],
  },
];

const skills = [
  ['Customer Service', 96],
  ['Shopify', 92],
  ['Virtual Assistance', 95],
  ['Email Support', 94],
  ['E-Commerce Operations', 91],
  ['Order Processing', 93],
  ['Order Tracking', 92],
  ['Administrative Support', 95],
  ['Social Media Management', 86],
  ['Data Entry', 94],
  ['Google Workspace', 91],
  ['Microsoft Office', 90],
  ['ChatGPT & AI Tools', 88],
];

const tools = ['Shopify', 'Google Workspace', 'Excel', 'Word', 'Gmail', 'ChatGPT', 'Google Sheets', 'Canva', 'Zoom', 'Slack'];
const differentiators = [
  {
    trait: 'Proactive Communication',
    value: 'Keeps projects moving forward without constant check-ins or reminders.',
  },
  {
    trait: 'Fast Learner',
    value: 'Adapts quickly to new tools, processes, and workflows, reducing onboarding time.',
  },
  {
    trait: 'Detail-Oriented',
    value: 'Minimizes errors, maintains accuracy, and ensures tasks are completed correctly the first time.',
  },
  {
    trait: 'Strong Problem Solver',
    value: 'Identifies issues early and resolves them efficiently before they impact customers or operations.',
  },
  {
    trait: 'Customer-Focused',
    value: 'Delivers positive customer experiences that improve satisfaction, loyalty, and retention.',
  },
  {
    trait: 'Independent Worker',
    value: 'Manages responsibilities with minimal supervision, freeing up your time to focus on growth.',
  },
  {
    trait: 'Adaptable to New Systems',
    value: 'Integrates seamlessly into existing workflows and learns new platforms with ease.',
  },
  {
    trait: 'Reliable Long-Term Partner',
    value: 'Provides consistent support, accountability, and stability as your business scales.',
  },
];
const testimonials = [
  ['Operations Lead', 'Nick has been a reliable support partner across customer communication, fulfillment follow-ups, and day-to-day admin workflows.'],
  ['E-Commerce Founder', 'His attention to order details and customer issues helped keep our store moving smoothly during busy sales periods.'],
  ['Business Owner', 'Nick is responsive, organized, and easy to trust with recurring operational responsibilities.'],
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div className="section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </motion.div>
  );
}

function DashboardMockup() {
  return (
    <motion.div className="dashboard" initial={{ opacity: 0, y: 26, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.2 }}>
      <div className="dash-top">
        <div>
          <span>Operations Command</span>
          <strong>Nicole Abella</strong>
        </div>
        <div className="dash-status"><span></span> Live</div>
      </div>
      <div className="dash-grid">
        <div className="metric navy">
          <Headphones size={20} />
          <span>Support Queue</span>
          <strong>24</strong>
          <small>resolved today</small>
        </div>
        <div className="metric">
          <PackageCheck size={20} />
          <span>Orders Tracked</span>
          <strong>186</strong>
          <small>this week</small>
        </div>
        <div className="metric">
          <Clock3 size={20} />
          <span>Response Priority</span>
          <strong>Fast</strong>
          <small>customer-first</small>
        </div>
      </div>
      <div className="workflow-card">
        <div className="workflow-head">
          <span>Daily Workflow</span>
          <LineChart size={18} />
        </div>
        {['Inbox triage', 'Shopify checks', 'Supplier follow-ups', 'Customer updates'].map((item, index) => (
          <div className="workflow-row" key={item}>
            <span>{index + 1}</span>
            <p>{item}</p>
            <Check size={16} />
          </div>
        ))}
      </div>
      <div className="dash-footer">
        <div><BarChart3 size={18} /> Satisfaction focused</div>
        <div><ShieldCheck size={18} /> Process reliable</div>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Nicole Abella home">
          <span>NA</span>
          <div><strong>Nicole Abella</strong><small>Virtual Assistant</small></div>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="#contact">Schedule a Call</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg"></div>
          <motion.div className="hero-content" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="hero-copy" variants={fadeUp}>
              <p className="hero-pill"><Sparkles size={16} /> Customer Support · Operations · Executive Assistance</p>
              <h1>Helping Businesses Run Smoother Through Customer Support, Operations, and Executive Assistance</h1>
              <p>I help growing businesses stay organized, support their customers, manage operations, and streamline daily workflows so owners can focus on growth.</p>
              <div className="hero-actions">
                <a className="primary-btn" href="https://calendly.com/YOUR-USERNAME/discovery-call" target="_blank" rel="noreferrer"> Schedule a Call <ArrowRight size={18} /></a>
                <a className="secondary-btn" href="#experience">View Experience <ChevronRight size={18} />  </a>
              </div>
            </motion.div>
            <DashboardMockup />
          </motion.div>
        </section>

        <section className="section about" id="about">
          <SectionHeader eyebrow="About Nicole" title="Executive-level support for growing teams." text="A highly organized Virtual Assistant and Customer Support Specialist with over 3 years of experience supporting e-commerce brands and business owners. Experienced in customer support, Shopify operations, order fulfillment, supplier coordination, administrative assistance, social media management, and process improvement." />
          <div className="stat-grid">
            {stats.map(([number, label]) => (
              <motion.div className="stat-card" key={label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <strong>{number}</strong>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section dark-band" id="services">
          <SectionHeader eyebrow="Services" title="High-trust support across the workflows that keep your business moving." />
          <div className="service-grid">
            {services.map(({ icon: Icon, title, items }) => (
              <motion.article className="service-card" key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="card-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <ul>{items.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeader eyebrow="Experience" title="Hands-on operations experience with real business workflows." />
          <div className="timeline">
            {experiences.map((job) => (
              <motion.article className="timeline-item" key={job.company} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="timeline-marker"></div>
                <div>
                  <p>{job.company}</p>
                  <h3>{job.role}</h3>
                  <div className="task-list">{job.tasks.map((task) => <span key={task}>{task}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeader eyebrow="Skills" title="A practical skill set for customer experience, store operations, and admin systems." />
          <div className="skills-grid">
            {skills.map(([skill, level]) => (
              <motion.div className="skill-card" key={skill} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.45 }}>
                <div><span>{skill}</span><strong>{level}%</strong></div>
                <div className="skill-track"><span style={{ width: `${level}%` }}></span></div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="tools-strip" aria-label="Tools Nicole works with">
          {tools.map((tool) => <div className="tool-logo" key={tool}>{tool}</div>)}
        </section>

        <section className="section comparison">
          <SectionHeader eyebrow="Why Work With Me" title="The operating style clients want in a long-term support partner." />
          <div className="comparison-table">
            <div className="comparison-head"><span>Nicole Abella</span><span>Client Value</span></div>
            {differentiators.map((row) => (
              <div className="comparison-row" key={row.trait}>
                <span><Check size={18} /> {row.trait}</span>
                <p>{row.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <SectionHeader eyebrow="Testimonials" title="Placeholder client notes ready for real feedback." />
          <div className="testimonial-grid">
            {testimonials.map(([person, quote]) => (
              <motion.article className="testimonial-card" key={person} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="stars" aria-label="Five star placeholder rating">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div>
                <p>{quote}</p>
                <strong>{person}</strong>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Let's Work Together</h2>
            <p>Available for Customer Support, Executive Assistance, and E-Commerce Operations Roles.</p>
            <div className="contact-links">
              <a href="mailto:nicksupport04@gmail.com"><Mail size={18} /> nicksupport04@gmail.com</a>
              <a href="https://wa.me/+639660754082"><MessageCircle size={18} /> WhatsApp</a>
              <a href="https://www.linkedin.com/in/nicole-abella-74b245408/"><BriefcaseBusiness size={18} /> LinkedIn</a>
            </div>
          </div>
       <form className="contact-form" aria-label="Contact form" action="https://formspree.io/f/xxxxxxx" method="POST">

            <label>Name<input type="text" name="name" autoComplete="name" placeholder="Your name" /></label>
            <label>Email<input type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label>
            <label>Role Needed<select name="role"><option>Customer Support</option><option>Executive Assistance</option><option>E-Commerce Operations</option><option>Administrative Support</option></select></label>
            <label>Message<textarea name="message" rows="4" placeholder="Tell me what support you need."></textarea></label>
            <button type="submit">Send Message <Send size={18} /></button>
          </form>
        </section>
      </main>

      <footer>
        <span>Nicole Abella</span>
        <p>Available for Customer Support, Executive Assistance, and E-Commerce Operations Roles.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
