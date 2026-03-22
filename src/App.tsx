import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.img
          src="https://via.placeholder.com/150"
          alt="profile"
          className="w-32 h-32 rounded-full mb-4 border-4 border-purple-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ravipati Varshith
        </motion.h1>

        <motion.p
          className="text-gray-400 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Key Accounts Manager @ Zomato
        </motion.p>

        <motion.a
          href="https://www.linkedin.com/in/varshith-ravipati"
          target="_blank"
          className="mt-4 px-6 py-2 bg-purple-600 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          Connect on LinkedIn
        </motion.a>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Managed 150+ restaurants with 50K+ monthly orders",
            "Top 2% KAM at Zomato",
            "Increased revenue & order value significantly",
            "Onboarded 40 restaurants in 15 days"
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-900 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Leadership",
            "P&L",
            "Data Analysis",
            "Problem Solving",
            "Communication"
          ].map((skill) => (
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

      {/* PROJECTS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Portfolio Website",
            "Restaurant Growth Strategy",
            "Excel Dashboard",
            "Market Expansion Case Study"
          ].map((project) => (
            <motion.div
              key={project}
              className="p-6 bg-gray-900 rounded-xl"
              whileHover={{ scale: 1.05 }}
            >
              {project}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400">+91-9154887217</p>
        <p className="text-gray-400">ravipativarshith@gmail.com</p>
      </section>

    </div>
  );
}