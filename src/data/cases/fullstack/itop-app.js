import { title } from "framer-motion/client";

const itopApp = {
  id: "itop-app",
  category: "fullstack",
  title: "IT on Point — User History Web App",
  company: "Eli Lilly and Company",
  projectType: "Enterprise internal tool",
  roles: ["Full-Stack Developer", "UI/UX Designer", "DevOps Engineer"],
  heroMedia: {
    // Confidential app → use brand image or abstract hero
    fallbackImg: "/lilly logo.jpg",
  },

  overview:
    "During my time at Eli Lilly and Company, I worked closely with Software Engineers, DevOps Engineers, Technicians, and UI/UX designers to create a centralized product aimed at improving ITOP technicians’ workflows. The goal was to build a user history hub that combined ServiceNow and Nexthink integrations, allowing technicians to quickly access a Lilly worker’s device and software history in one location. I was tasked with designing and implementing a searchable dashboard where technicians could look up assigned devices by user ID or narrow down results using an asset ID. I began by wireframing the product in Figma, aligning the interface to the Lilly Design System and leveraging existing React components for consistency and brand alignment. The backend pulled from existing databases to provide real-time device and user history, while the full application was built with React Vite, React, and Django. Once complete, I containerized the app with Docker and set up automated deployments using GitHub Actions, Kubernetes, and Argo CD, enabling the product to be tested in production. This project, delivered in just eight weeks, provided technicians a streamlined way to troubleshoot issues and gave managers real-time visibility into device signals and support workflows.", 


 highlights: [
  "Global Pharma Environment",
  "Cross-functional Collaboration",
  "ServiceNow & Nexthink Integration",
  "React • Django Stack",
  "CI/CD with GitHub Actions, Kubernetes & Argo CD",
  "Delivered in 8 Weeks",
],
stakeholders: [
  { title: "Lilly Employees", desc: "Beneficiaries of faster troubleshooting; expected seamless IT support for devices and software." },
  { title: "IT On Point Technicians", desc: "Primary users of the app; needed quick, reliable access to user and device history." },
  { title: "Digital Core Business Unit", desc: "Required visibility into workloads and trends to manage team efficiency." },
  { title: "Security & Compliance Teams", desc: "Ensured the app met all regulatory and internal security standards." },
],
stakeholderChallenges: [
  {
    icon: "gauge",
    challenge: "Selecting a tech stack that balanced performance, velocity, and team skills.",
    stakeholders: "Software Engineers, DevOps, UI/UX",
    resolution:
      "Prototyped key flows (search, history fetch) across candidates and benchmarked. Chose React + Vite, Django, and Docker/Kubernetes to meet latency targets while keeping the team productive."
  },
  {
    icon: "dashboard",
    challenge: "Manager requested a single-page, all-in-one dashboard; risk of excessive scrolling for technicians.",
    stakeholders: "ITOP Managers, ITOP Technicians, UI/UX",
    resolution:
      "Mapped journeys and click-depth; split into focused views (Search, User Devices, Device Detail) with pagination and cross-links. Kept an at-a-glance overview on the landing page."
  },
  {
    icon: "shield",
    challenge: "Ensuring data accuracy/permissions across ServiceNow and Nexthink while keeping response times low.",
    stakeholders: "Software Engineers, Security/Compliance, ITOP Technicians",
    resolution:
      "Added server-side caching for non-sensitive metadata, strict RBAC on sensitive fields, and clear loading/error states—improving perceived performance without compromising governance."
  }
],

  objectives: [
    { title: "Reduce Resolution Time", desc: "Surface past context at first touch to avoid tool-switching." },
    { title: "Increase Visibility", desc: "Managers can see workload, recurring issues, and trends." },
    { title: "Enterprise Ready", desc: "Auth, logging, auditability, containerized deploy." },
  ],

  approach: [
    { title: "Discovery", desc: "Shadowed technicians; mapped journeys; identified bottlenecks." },
    { title: "Full-Stack Build", desc: "React + Django + Postgres; typed endpoints; pagination & search." },
    { title: "Iterate & Deploy", desc: "Internal pilot via CATS; feedback cycles; performance tuning." },
  ],

  impact: [
    { title: "10% faster resolution", desc: "Less context hunting; clearer next actions." },
    { title: "Higher satisfaction", desc: "Technicians reported smoother workflows." },
  ],

 kpis: [
  { kpi: "10%",   label: "Time saved per interaction" },
  { kpi: "23 mins", label: "Avg. interaction time with app" },
  { kpi: "1.8 years", label: "Technician time saved annually" },
  { kpi: "63k+",  label: "Interactions supported per year" },
],

  reflection: [
    "Working inside a regulated enterprise sharpened scope discipline and uplifted reliability—logs, access, and performance budgets guided every decision. A big part of my growth came from the DevOps side: I had never created YAML files for GitHub workflows or managed Kubernetes deployments before. Learning to set up CI/CD pipelines with GitHub Actions, ArgoCD, and Docker containers was a steep but rewarding curve, and I leaned heavily on documentation and personal research to get there. I came to appreciate how powerful good workflows are for automating updates from dev to prod and keeping builds reliable. Beyond DevOps, I gained hands-on exposure to ServiceNow and Nexthink integrations, which gave me a stronger sense of how enterprise IT ecosystems connect. This project pushed me to grow across multiple technical areas—full-stack, DevOps, and enterprise tools—while always keeping technician and user experience at the center."
  ], 
  takeaways: [
  "Cross-functional collaboration is essential—aligning engineers, technicians, and managers surfaced challenges early.",
  "Hands-on DevOps experience with GitHub Actions, Kubernetes, and ArgoCD showed the value of automation in enterprise delivery.",
  "Mapping technician workflows clarified what information mattered most and shaped the app’s navigation structure.",
  "Working in a regulated environment taught me to balance speed with reliability, compliance, and data integrity.",
  "User feedback validated that even small time savings at scale can translate into massive business impact.",
],

};

export default itopApp;
