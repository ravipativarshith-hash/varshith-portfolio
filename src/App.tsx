import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          Varshith Ravipati
        </motion.h1>

        <p className="mt-4 text-xl text-gray-400">
          BTech Student | Web Developer
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://www.linkedin.com/in/varshith-ravipati"
            target="_blank"
            className="px-6 py-2 bg-purple-600 rounded-xl hover:bg-purple-700"
          >
            LinkedIn
          </a>

          <a
            href="#projects"
            className="px-6 py-2 border border-purple-500 rounded-xl hover:bg-purple-500"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About */}
      <section className="p-10 text-center">
        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I am a passionate BTech student focused on web development and building modern, responsive applications. I enjoy solving problems and continuously improving my skills.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 bg-gray-900">
        <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Portfolio Website",
            "Weather App",
            "College Project"
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-black rounded-2xl shadow-lg border border-gray-800"
            >
              <h3 className="text-xl font-bold">{project}</h3>
              <p className="text-gray-400 mt-2">
                Description about {project}.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="p-10 text-center">
        <h2 className="text-4xl font-semibold mb-6">Skills</h2>

        <div className="flex justify-center gap-4 flex-wrap">
          {["HTML", "CSS", "JavaScript", "React", "Python"].map((skill, i) => (
            <motion.span
              whileHover={{ scale: 1.2 }}
              key={i}
              className="px-4 py-2 bg-purple-600 rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="p-10 bg-gray-900 text-center">
        <h2 className="text-4xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400">your-email@example.com</p>
      </section>

    </div>
  );
}