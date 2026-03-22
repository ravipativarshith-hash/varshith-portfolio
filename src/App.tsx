import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function App() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const particlesOptions = {
    fpsLimit: 60,
    background: { color: "#000000" },
    particles: {
      number: { value: 70, density: { enable: true, area: 800 } },
      color: { value: "#a855f7" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 4 } },
      move: { enable: true, speed: 1, outModes: "out" },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
    },
  } as any;

  const experienceData = [
    {
      title: "Zomato - Key Accounts Manager",
      period: "July 2025 - Present",
      details: [
        "Owned a 150+ partner restaurant portfolio with end-to-end P&L responsibility, managing 50,000+ monthly orders.",
        "Delivered consistent growth by achieving 95%+ of monthly ad revenue targets.",
        "Enhanced core business metrics with +2.8% ASV and +3.4% CV growth; ranked among the top 2% KAMs nationally.",
        "Optimized profitability by renegotiating commission terms with legacy partners.",
        "Accelerated market expansion in fringe clusters by onboarding 40 high-potential restaurants within 15 days.",
        "Captured strategic competitive share by converting a competitor-exclusive restaurant generating ~5,000 monthly orders.",
      ],
      kpis: [
        { name: "Order Value", value: 7.8 },
        { name: "Ads Revenue", value: 7.6 },
        { name: "Menu Quality", value: 12.1 },
        { name: "ASV Growth", value: 2.8 },
        { name: "CV Growth", value: 3.4 },
      ],
    },
    {
      title: "Hindustan Unilever Limited - Finance Intern",
      period: "June 2024 - August 2024",
      details: [
        "Monitored capital expenditure budgets and ensured alignment with financial plans.",
        "Coordinated with cross-functional teams to facilitate timely clearance of Nil Claim Certificates.",
        "Organized and categorized truck order compliance data, improving tracking efficiency by 25%.",
        "Conducted material management and expenditure analysis to support cost control initiatives.",
      ],
      kpis: [],
    },
    {
      title: "Ramadas Paper Mill Pvt Ltd - Finance Intern",
      period: "June 2023 - August 2023",
      details: [
        "Prepared monthly financial reports and budgets, aiding in 15% faster decision-making.",
        "Optimized invoice processing, cutting turnaround time by 20%.",
        "Reconciled bank statements and ledgers, supporting audit readiness.",
        "Analyzed expense trends to identify cost-saving opportunities, contributing to a 10% reduction in overheads.",
      ],
      kpis: [],
    },
  ];

  const educationData = [
    "BBA, ICFAI Business School, Hyderabad (2022-2025), CGPA: 8.5",
    "Higher Secondary School (ICSE), The Future Kids School, Rajahmundry (2021-2022), 93%",
    "Secondary School (ICSE), The Future Kids School, Rajahmundry (2020-2021), 89%",
  ];

  const skillsData = [
    "Leadership",
    "P&L Management",
    "Data Handling",
    "Problem Solving",
    "Communication",
    "Creativity",
  ];

  const extracurricularData = [
    {
      title: "President, Arena Sports Club (2024-25)",
      details: [
        "Organized Aarambh, first intercollege sports fest with 700+ attendees, generating ₹3L+ in revenue.",
        "Initiated and executed the college’s first E-sports league twice with 500+ participation.",
        "Directed Olympia, the annual intra-college sports fest, engaging 1500+ students.",
      ],
    },
    {
      title: "POC, Thrithi (Annual fest of ICFAI University) 2024-25",
      details: [
        "Spearheaded external coordination, managing participation from 5 schools.",
        "Liaised with external stakeholders, securing partnerships and boosting visibility.",
        "Led outreach initiatives, increasing inter-school participation by 40%.",
      ],
    },
    {
      title: "State Level Volleyball Player (U19)",
      details: [
        "Caption, District volleyball team, Under 19 Andhra Pradesh district meet runner-up 2022.",
      ],
    },
  ];

  const metricsData = [
    { name: "Portfolio Order Value", value: 7.8 },
    { name: "Ads Revenue", value: 7.6 },
    { name: "Menu Quality Score", value: 12.1 },
    { name: "ASV Growth", value: 2.8 },
    { name: "CV Growth", value: 3.4 },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-full p-1 ring-4 ring-purple-500 ring-offset-4 animate-pulse"
        >
          <img
            src="/profile.jpg"
            alt="Ravipati Venkatasai Varshith"
            className="w-36 h-36 rounded-full border-2 border-white/20"
          />
        </motion.div>

        <motion.h1
          className="text-5xl font-bold mt-6 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          Ravipati Venkatasai Varshith
        </motion.h1>

        <motion.p
          className="text-gray-400 mt-2 text-lg"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          Key Accounts Manager @ Zomato | Business, Analytics & Strategy Enthusiast
        </motion.p>

        <motion.a
          href="https://www.linkedin.com/in/varshith-ravipati"
          target="_blank"
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-2xl"
          whileHover={{ scale: 1.1 }}
        >
          Connect on LinkedIn
        </motion.a>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
          Professional Experience
        </h2>
        {experienceData.map((exp, i) => (
          <motion.div
            key={i}
            className={`mb-12 flex flex-col md:flex-row items-start ${
              i % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="md:w-1/2 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc ml-5 space-y-2 text-gray-300">
                {exp.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
              {exp.kpis && exp.kpis.length > 0 && (
                <div className="mt-4 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={exp.kpis}
                      layout="vertical"
                      margin={{ top: 5, right: 5, left: 10, bottom: 5 }}
                    >
                      <XAxis
                        type="number"
                        stroke="#fff"
                        tick={{ fill: "#fff", fontSize: 12 }}
                      />
                      <YAxis
                        type="category"
                        dataKey="name"
                        stroke="#fff"
                        tick={{ fill: "#fff", fontSize: 12 }}
                        width={100}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#111",
                          border: "none",
                          color: "#fff",
                        }}
                      />
                      <Bar dataKey="value" fill="url(#gradKPI)" radius={[5, 5, 5, 5]}>
                        <defs>
                          <linearGradient id="gradKPI" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity={1} />
                            <stop offset="100%" stopColor="#f472b6" stopOpacity={1} />
                          </linearGradient>
                        </defs>
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* EDUCATION */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
          Education
        </h2>
        <ul className="space-y-4 text-gray-300">
          {educationData.map((edu, i) => (
            <li key={i}>{edu}</li>
          ))}
        </ul>
      </section>

      {/* SKILLS */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill) => (
            <motion.div
              key={skill}
              className="px-5 py-2 bg-gray-800 rounded-full"
              whileHover={{ scale: 1.2 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXTRACURRICULAR */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
          Extracurricular
        </h2>
        {extracurricularData.map((item, i) => (
          <motion.div
            key={i}
            className="mb-8 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-300">
              {item.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
          Contact
        </h2>
        <p className="text-gray-400">+91-9154887217</p>
        <p className="text-gray-400">ravipativarshith@gmail.com</p>
      </section>
    </div>
  );
}