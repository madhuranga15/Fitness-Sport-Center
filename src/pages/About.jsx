import { motion } from "framer-motion";
import { FaDumbbell, FaCogs, FaUsers, FaClock } from "react-icons/fa";

export default function About() {
  return (
    <div className="pt-28 transition-colors duration-300">

   
      <section className="px-8 md:px-20 grid md:grid-cols-2 gap-12 items-center">

     
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#d4a017] text-xs tracking-widest mb-3">
            ABOUT US
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            YOUR FITNESS <br />
            <span className="text-[#d4a017]">JOURNEY</span> <br />
            STARTS HERE
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-md">
            We provide a premium fitness experience with world-class
            equipment and expert coaching designed to transform your life.
          </p>

          <button className="mt-6 bg-[#d4a017] text-black px-6 py-3 rounded-md font-semibold hover:scale-105 transition shadow-lg shadow-yellow-500/30">
            Join Now
          </button>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/about1.jpg"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

      </section>

   
      <section className="px-8 md:px-20 mt-20 grid md:grid-cols-4 gap-6">

        {[
          { title: "Years Experience", value: "10+" },
          { title: "Total Members", value: "25K+" },
          { title: "Expert Trainers", value: "50+" },
          { title: "Weekly Classes", value: "100+" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-black/10 dark:border-white/10 shadow-md text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {item.title}
            </p>
            <h3 className="text-2xl font-bold mt-2 text-[#d4a017]">
              {item.value}
            </h3>
          </motion.div>
        ))}

      </section>

   
      <section className="px-8 md:px-20 mt-20 grid md:grid-cols-2 gap-12 items-center">

        
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/about2.jpg"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our mission is to redefine fitness by combining luxury,
            technology, and elite coaching into one powerful experience.
          </p>

          <div className="space-y-4">

            <div>
              <h4 className="text-[#d4a017] font-semibold">Mission</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Empower individuals through elite coaching and innovation.
              </p>
            </div>

            <div>
              <h4 className="text-[#d4a017] font-semibold">Vision</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Become the world’s leading premium fitness brand.
              </p>
            </div>

          </div>
        </motion.div>

      </section>


      <section className="px-8 md:px-20 mt-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Why Choose FITNESS CLUB?
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          We deliver more than workouts — we deliver transformation.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              icon: <FaUsers />,
              title: "Expert Trainers",
              desc: "Professional certified coaches.",
            },
            {
              icon: <FaDumbbell />,
              title: "Modern Equipment",
              desc: "Latest gym technology.",
            },
            {
              icon: <FaCogs />,
              title: "Flexible Plans",
              desc: "Plans tailored to you.",
            },
            {
              icon: <FaClock />,
              title: "24/7 Access",
              desc: "Train anytime.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-black/10 dark:border-white/10 shadow-md"
            >

              <div className="w-14 h-14 bg-[#d4a017] rounded-lg flex items-center justify-center mx-auto mb-4 text-black text-xl shadow-lg shadow-yellow-500/30">
                {item.icon}
              </div>

              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </section>


      <section className="px-8 md:px-20 mt-20 pb-20">

        <div className="bg-gradient-to-r from-[#d4a017]/20 to-transparent dark:from-[#d4a017]/10 p-10 rounded-2xl text-center border border-black/10 dark:border-white/10 backdrop-blur">

          <h2 className="text-3xl md:text-4xl font-bold">
            READY TO START YOUR <br /> FITNESS JOURNEY?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Join today and transform your body and lifestyle.
          </p>

          <button className="mt-6 bg-[#d4a017] text-black px-6 py-3 rounded-md font-semibold hover:scale-105 transition shadow-lg shadow-yellow-500/30">
            Join Now →
          </button>

        </div>

      </section>

    </div>
  );
}