import { motion } from "framer-motion";
import { FaDumbbell, FaBolt, FaSpa, FaUser } from "react-icons/fa";

export default function Services() {
  return (
    <div className="pt-28 px-8 md:px-20 transition-colors duration-300">


      <section className="mb-16">

        <p className="text-[#d4a017] text-xs tracking-widest mb-3">
          OUR EXPERTISE
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Elevate Your{" "}
              <span className="text-[#d4a017]">Performance</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl">
              Discover premium fitness solutions designed to push your
              limits and unlock your full potential.
            </p>
          </div>

          <button className="text-[#d4a017] font-semibold hover:underline">
            View All Services →
          </button>

        </div>

      </section>


      <section className="grid md:grid-cols-4 gap-6">

        {[
          {
            icon: <FaDumbbell />,
            title: "Strength Training",
            desc: "Advanced weight training systems for muscle growth.",
          },
          {
            icon: <FaBolt />,
            title: "Cardio & HIIT",
            desc: "Burn fat fast with high intensity workouts.",
          },
          {
            icon: <FaSpa />,
            title: "Yoga & Pilates",
            desc: "Improve flexibility and mental balance.",
          },
          {
            icon: <FaUser />,
            title: "Personal Training",
            desc: "Customized coaching tailored to your goals.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06, y: -5 }}
            className="group bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-black/10 dark:border-white/10 shadow-md hover:shadow-xl transition"
          >

     
            <div className="w-14 h-14 bg-[#d4a017] rounded-lg flex items-center justify-center text-black text-lg mb-4 shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition">
              {item.icon}
            </div>

        
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

        
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
              {item.desc}
            </p>

           
            <p className="text-[#d4a017] text-xs mt-6 hover:underline cursor-pointer">
              EXPLORE PROGRAM →
            </p>

          </motion.div>
        ))}

      </section>

  
      <section className="mt-20 mb-20">

        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">

       
          <div className="bg-white dark:bg-[#1a1a1a] p-10 flex flex-col justify-center">

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Start your 7-day free trial and experience elite-level fitness.
            </p>

            <h2 className="text-3xl font-bold mt-4">
              Ready to transform?
            </h2>

          </div>

     
          <div className="bg-[#d4a017] p-10 flex items-center gap-4 justify-center">

            <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition">
              Start Free Trial
            </button>

            <button className="border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition">
              Schedule Tour
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}