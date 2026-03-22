import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans">
      
      {/* HERO */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">
          Ravipati Venkatasai Varshith
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          Key Accounts Manager @ Zomato
        </p>
        <div className="mt-4 space-x-4">
          <a href="mailto:ravipativarshith@gmail.com" className="underline">
            Email
          </a>
          <a href="https://www.linkedin.com/in/varshith-ravipati" target="_blank" className="underline">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-10 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          Results-driven professional with strong expertise in portfolio management,
          revenue growth, and business expansion. Proven ability to manage large-scale
          operations, optimize profitability, and drive measurable growth in competitive markets.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Experience</h2>

        <div className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-gray-900 rounded-xl">
            <h3 className="font-bold">Zomato – Key Accounts Manager</h3>
            <p className="text-gray-400 text-sm">July 2025 – Present</p>
            <ul className="list-disc ml-5 mt-2 text-gray-300 text-sm">
              <li>Managed 150+ restaurant partners with 50,000+ monthly orders</li>
              <li>Achieved 95%+ ad revenue targets consistently</li>
              <li>Increased order value by 7.8% and ads revenue by 7.6%</li>
              <li>Ranked in top 2% KAMs nationally</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-gray-900 rounded-xl">
            <h3 className="font-bold">HUL – Finance Intern</h3>
            <p className="text-gray-400 text-sm">Jun 2024 – Aug 2024</p>
            <ul className="list-disc ml-5 mt-2 text-gray-300 text-sm">
              <li>Tracked capex budgets and financial plans</li>
              <li>Improved compliance tracking efficiency by 25%</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-gray-900 rounded-xl">
            <h3 className="font-bold">Ramadas Paper Mill – Finance Intern</h3>
            <p className="text-gray-400 text-sm">Jun 2023 – Aug 2023</p>
            <ul className="list-disc ml-5 mt-2 text-gray-300 text-sm">
              <li>Improved invoice processing time by 20%</li>
              <li>Reduced overheads by 10%</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Leadership",
            "P&L Management",
            "Problem Solving",
            "Data Handling",
            "Communication",
            "Creativity"
          ].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="text-gray-400">
          BBA – ICFAI Business School, Hyderabad (CGPA: 8.5)
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400">📞 +91-9154887217</p>
        <p className="text-gray-400">📧 ravipativarshith@gmail.com</p>
      </section>

    </div>
  );
}