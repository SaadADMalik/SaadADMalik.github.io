export const person = {
  name: "Saad Waleed",
  short: "Saad Waleed",
  years: "3+ years",
  city: "Lahore",
  country: "Pakistan",
  photo: "/images/saad.webp",
  photoDotted: "/images/saad-dotted.webp",
  email: "saadadmalik04@gmail.com",
  phone: "+92 306 4009748",
  phoneHref: "tel:+923064009748",
  github: "https://github.com/SaadADMalik",
  linkedin: "https://www.linkedin.com/in/saadwaleedmalik",
  resume: "/resume/Saad-Waleed-Resume.pdf",
  resumeFile: "Saad-Waleed-Resume.pdf",
  summary:
    "I build AI-powered software across LLM applications, retrieval pipelines, backend APIs, analytics dashboards, and ML-driven decision tools. Recent proof points include Rift AI (WhatsApp chief of staff for SMBs) and Peak QA (agentic QA platform). Strong focus on turning business workflows and unstructured data into usable products: Python, FastAPI, Flask, Streamlit, Docker, and cloud-oriented deployment.",
};

export const skillGroups = [
  {
    name: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Node.js"],
  },
  {
    name: "AI / Agents",
    items: [
      "LangGraph",
      "OpenClaw",
      "MCP",
      "Claude / OpenAI APIs",
      "RAG",
      "Embeddings",
      "FAISS",
      "Pinecone",
      "Qdrant",
      "SentenceTransformers",
      "Playwright",
    ],
  },
  {
    name: "Backend",
    items: ["FastAPI", "Flask", ".NET", "REST APIs", "PostgreSQL", "SQLite", "Webhooks"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Streamlit", "Dash"],
  },
  {
    name: "Infrastructure",
    items: ["Docker", "Docker Compose", "GitHub Actions", "AWS", "ECS", "CI/CD"],
  },
];

export const stack = skillGroups.flatMap((group) => group.items);

export type Project = {
  slug: string;
  num: string;
  eyebrow: string;
  title: string;
  claim: string;
  lede: string;
  plate: string;
  demo?: string;
  href: string;
  live?: string;
  github?: string;
  stack: string[];
  sections: {
    heading: string;
    body: string;
  }[];
  steps: { num: string; title: string; body: string }[];
  notes?: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "rift",
    num: "01",
    eyebrow: "AI operations",
    title: "Rift AI",
    claim: "A chief of operational staff that lives in WhatsApp.",
    lede: "SMB and SME CEOs should not juggle five apps to run the week. They text one number. Rift triages mail, books the meeting, and pulls the number they were about to hunt for.",
    plate: "/images/work/rift.webp",
    demo: "/videos/rift-demo.mp4",
    href: "/work/rift",
    stack: [
      "WhatsApp",
      "OpenClaw",
      "Docker",
      "MCP",
      "Gmail",
      "Calendar",
      "Node.js",
    ],
    sections: [
      {
        heading: "The job is the calendar, not the chat.",
        body: "Owners already live in WhatsApp. Rift meets them there as chief of operational staff: read the inbox, propose the invite, draft the reply, pull store or sheet numbers, then wait for a yes before anything irreversible goes out.",
      },
      {
        heading: "One number. Isolated brains.",
        body: "Every tenant messages the same shared WhatsApp number. A router on that number identifies who is writing and sends the turn to that tenant's own OpenClaw instance, running in its own Docker container. Workspaces, vaults, and tool connections never sit in the same process.",
      },
      {
        heading: "Confirm, then act.",
        body: "Sending mail or creating a meeting is a two-step: Rift proposes on WhatsApp, the owner confirms, then the tool fires. A chief of staff that can send does not send on a guess.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "They text the shared number",
        body: "No new app. No QR for the customer. The owner messages the same business number they already saved.",
      },
      {
        num: "02",
        title: "The router finds their brain",
        body: "The gateway maps the inbound phone to a tenant and wakes that tenant's OpenClaw container. Idle ones stay stopped.",
      },
      {
        num: "03",
        title: "Tools run in their workspace",
        body: "Each company brings its own model subscription and connects Gmail, Calendar, and the rest through per-tenant MCP. Credentials never live in the shared router.",
      },
      {
        num: "04",
        title: "Side effects wait for a yes",
        body: "Drafts come back on WhatsApp. The owner confirms. Only then does the send or the invite go out.",
      },
    ],
    notes: [
      {
        title: "Who it's for",
        body: "SMB and SME CEOs who are the operations layer themselves. The product is fewer tabs, not another dashboard.",
      },
      {
        title: "Isolation",
        body: "Filesystem tenant model: one directory, one container, one allow-list. Compute stops after idle; memory stays on disk.",
      },
    ],
  },
  {
    slug: "peak-qa",
    num: "02",
    eyebrow: "QA engineering",
    title: "Peak QA",
    claim: "The boring bugs, found before a human walks the board.",
    lede: "Peak QA is an external agentic QA system. Give it a URL. It crawls, splits the site into modules, and returns screenshot-backed bug reports, so QA engineers spend their time on flows, judgment, and the cases that actually need a person.",
    plate: "/images/work/peak.webp",
    demo: "/videos/peak-demo.mp4",
    href: "/work/peak-qa",
    stack: [
      "LangGraph",
      "Playwright",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "Docker",
    ],
    sections: [
      {
        heading: "Normal bugs are a machine's job.",
        body: "Broken links, dead buttons, form failures, visual misses, login walls that don't open: the defects a pass over a large marketing or product site always turns up. Peak QA files those with screenshot and DOM evidence so a QA engineer is not burning a day on the obvious.",
      },
      {
        heading: "Actor, then critic.",
        body: "One agent plans the next UI action from page context and history. A separate validation step reviews each candidate against evidence before anything is filed. Engineering gets fewer false positives and clearer repro steps.",
      },
      {
        heading: "Built like a product, not a script.",
        body: "It runs as an external system teams can operate: org-scoped runs, job leases and heartbeat reclaim, live browser feed, a timeline while the agent works, and publishable summaries. Long crawls resume instead of starting over.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Submit a URL",
        body: "The run is queued for an org. Quotas and credentials stay scoped to that team.",
      },
      {
        num: "02",
        title: "Crawl, then split",
        body: "A BFS pass maps the public surface and groups it into modules (contact, pricing, blog, login), the way a QA board already would.",
      },
      {
        num: "03",
        title: "Modules run in parallel",
        body: "Workers claim modules under step, time, and cost caps. Stale work is reclaimed. Risky actions wait for an owner.",
      },
      {
        num: "04",
        title: "QA gets a file, not a novel",
        body: "Verified findings with screenshots land in the console. People spend the remaining time on flows, edge cases, and the product sense the agent should not fake.",
      },
    ],
    notes: [
      {
        title: "Where it runs",
        body: "External system: FastAPI backend, worker graph, Next.js console. The dashboard talks only to the API.",
      },
      {
        title: "What it does not replace",
        body: "Exploratory judgment, messy user journeys, and the bugs that only show up when someone cares. That's the point.",
      },
    ],
  },
  {
    slug: "casino-rag",
    num: "03",
    eyebrow: "Retrieval",
    title: "Casino Knowledge Base",
    claim: "Natural language over a private, growing archive.",
    lede: "An internal RAG system for a casino operator: HR, finance, and operations in one staff-facing knowledge base, with role-based access, so people ask in English instead of hunting a share drive.",
    plate: "/images/work/casino.webp",
    href: "/work/casino-rag",
    stack: ["RAG", "BM25", "Embeddings", "AWS EC2", "Python", "RBAC"],
    sections: [
      {
        heading: "The archive was the product.",
        body: "Departments were sitting on a continuously growing corpus (gigabytes, then more) that staff could not query without knowing which folder to open. The system turned that into a living knowledge base with roles, so finance does not see HR, and operations gets answers that cite the right document.",
      },
      {
        heading: "Privacy by architecture.",
        body: "A hybrid offline design: raw documents stay local. Only vector embeddings leave the building. Query rewriting, hybrid BM25 + vector search, and a cross-encoder re-rank sit in front of the generator so relevance is not a hope.",
      },
      {
        heading: "Cheap to keep warm.",
        body: "Deployed on AWS EC2 with metadata caching, tight chunking, and a small static prompt so latency and compute stay boring, which is what an internal tool should be.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Ingest on a schedule",
        body: "Continuous pipelines chunk and index new documents without rebuilding the world.",
      },
      {
        num: "02",
        title: "Retrieve with two keys",
        body: "BM25 for the words they used. Vectors for the meaning they meant. Then re-rank.",
      },
      {
        num: "03",
        title: "Answer inside the role",
        body: "Access control is not a UI hint. Retrieval is scoped to what that staff member is allowed to see.",
      },
    ],
  },
  {
    slug: "autoinsight",
    num: "04",
    eyebrow: "Digitizing workshops",
    title: "AutoInsight",
    claim: "The workshop, on the record, in the language the floor already speaks.",
    lede: "AutoInsight digitizes automotive workshops: customers, vehicles, jobs, SLAs, and labor time, including a voice-first path for mechanics who should not be filling forms.",
    plate: "/images/work/autoinsight.webp",
    href: "/work/autoinsight",
    stack: ["Flutter", ".NET", "OpenAI API", "JSON contracts", "CI/CD"],
    sections: [
      {
        heading: "Paper was the bottleneck.",
        body: "Customer intake, job cards, and labor time lived in notebooks and group chats. AutoInsight is the operational layer: who is in the bay, what the vehicle needs, whether the SLA is slipping.",
      },
      {
        heading: "Voice first, because the floor is busy.",
        body: "Interfaces were designed for multilingual mechanics (Urdu / Hinglish) with limited app literacy. Intent routing through iterative prompt design reached 84% accuracy, good enough that the floor would actually use it.",
      },
      {
        heading: "The model never holds the database.",
        body: "LLM calls sit behind intent-shaped JSON. Privileges stay in the application layer, so a new workshop feature does not mean expanding what the model is allowed to touch.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Capture the job",
        body: "Voice or a short form opens a work order against a vehicle and a customer.",
      },
      {
        num: "02",
        title: "Track the bay",
        body: "Scheduling, SLA clocks, and labor-time analytics run as the job moves.",
      },
      {
        num: "03",
        title: "Read the week",
        body: "Owners get operational analytics instead of reconstructing the week from chats.",
      },
    ],
    notes: [
      {
        title: "In the wild",
        body: "Serving 15+ active workshops and 200+ monthly service transactions.",
      },
    ],
  },
];

export const experience = [
  {
    role: "AI Engineer & Acting Project Manager",
    org: "Evaa Pvt Ltd",
    dates: "May 2026 to Present",
    points: [
      "Led the AI engineering team while handling project management: planning, requirements, technical decisions, and release coordination with stakeholders.",
      "Built Rift AI, a WhatsApp chief of operational staff for SMB/SME CEOs on a shared number, routed into isolated per-tenant OpenClaw agents.",
      "Built Peak QA, an agentic QA platform that crawls a site, runs tests, and files screenshot-backed bugs into Slack and Linear.",
    ],
  },
  {
    role: "AI Engineer",
    org: "Autosmart Tech",
    dates: "July 2025 to Present",
    points: [
      "Full-stack mobile and backend for automotive workshop automation: customers, vehicles, jobs, SLAs, and operational analytics.",
      "Voice-first interfaces for Urdu/Hinglish mechanics with limited app literacy; 84% intent accuracy through iterative prompt design.",
      "Flutter, .NET, and OpenAI APIs in production across 15+ workshops and 200+ monthly service transactions.",
    ],
  },
  {
    role: "AI / ML Engineer",
    org: "Optivex Solutions",
    dates: "February 2024 to July 2025",
    points: [
      "Built a casino knowledge-base RAG system with role-based access over a growing internal corpus.",
      "Hybrid offline architecture: documents stay local, only embeddings leave, deployed on AWS EC2 with caching and precise chunking.",
      "Staff-facing natural-language querying across departments without expanding what the model is allowed to touch.",
    ],
  },
];

export const certifications = [
  {
    title: "Large Language Models on AWS",
    file: "/certs/llms-on-aws.pdf",
    kind: "pdf" as const,
  },
  {
    title: "MLOps Essentials: Model Deployment and Monitoring",
    file: "/certs/mlops-deployment-monitoring.pdf",
    kind: "pdf" as const,
  },
  {
    title: "MLOps Essentials: Model Development and Integration",
    file: "/certs/mlops-development-integration.pdf",
    kind: "pdf" as const,
  },
  {
    title: "Complete Guide to AWS Software Deployment",
    file: "/certs/aws-software-deployment.pdf",
    kind: "pdf" as const,
  },
  {
    title: "MLOps Tools: MLflow and Hugging Face",
    file: "/certs/mlops-mlflow-huggingface.pdf",
    kind: "pdf" as const,
  },
  {
    title: "Micro1 Certified",
    file: "/certs/micro1.webp",
    kind: "image" as const,
  },
];

export const education = {
  title: "ADP in Artificial Intelligence",
  org: "Superior University",
};
