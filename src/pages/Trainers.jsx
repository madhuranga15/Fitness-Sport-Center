import { useState } from "react";
import { motion } from "framer-motion";

export default function Trainers() {

  const [filter, setFilter] = useState("all");

  const trainers = [
    {
      img: "/trainer1.jpg",
      role: "IFBB PRO",
      name: "MARCUS THORNE",
      type: "body",
      label: "ELITE BODYBUILDING",
    },
    {
      img: "/trainer2.jpg",
      role: "OLYMPIC COACH",
      name: "ELENA RODRIGUEZ",
      type: "hiit",
      label: "HIIT & CONDITIONING",
    },
    {
      img: "/trainer3.jpg",
      role: "POWERLIFTING CHAMP",
      name: 'DAVID "THE BEAST" WU',
      type: "strength",
      label: "STRENGTH & POWER",
    },
    {
      img: "/trainer4.jpg",
      role: "FLEXIBILITY EXPERT",
      name: "SARAH JENKINS",
      type: "yoga",
      label: "YOGA & MOBILITY",
    },
  ];

  const filtered =
    filter === "all"
      ? trainers
      : trainers.filter((t) => t.type === filter);

  return (
    <div className="min-h-screen px-6 md:px-20 py-20 transition-colors duration-300">


      <div className="mb-16">
        <p className="text-[#d4a017] text-xs tracking-widest mb-3 border-l-4 border-[#d4a017] pl-3">
          WORLD CLASS PERFORMANCE
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          OUR ELITE <br />
          <span className="text-[#d4a017]">MASTER</span> <br />
          TRAINERS
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl">
          Train with world-class professionals who shape champions.
        </p>
      </div>


      <div className="flex flex-wrap gap-3 mb-12">

        {[
          { name: "ALL", value: "all" },
          { name: "BODY", value: "body" },
          { name: "HIIT", value: "hiit" },
          { name: "STRENGTH", value: "strength" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`px-5 py-2 text-sm rounded-md transition ${
              filter === btn.value
                ? "bg-[#d4a017] text-black font-semibold"
                : "bg-gray-100 dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 hover:bg-[#d4a017]/20"
            }`}
          >
            {btn.name}
          </button>
        ))}

      </div>


      <div className="grid md:grid-cols-4 gap-6">

        {filtered.map((trainer, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative overflow-hidden rounded-xl group shadow-md dark:shadow-none"
          >

            <img
              src={trainer.img}
              className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

            {/* content */}
            <div className="absolute bottom-0 p-5">
              <p className="text-[#d4a017] text-xs">{trainer.role}</p>
              <h3 className="text-xl font-bold leading-tight text-white">
                {trainer.name}
              </h3>
              <p className="text-gray-300 text-sm">{trainer.label}</p>
            </div>

          </motion.div>
        ))}

      </div>


      <div className="mt-20 bg-white dark:bg-[#1a1a1a] rounded-xl p-10 grid md:grid-cols-2 gap-10 items-center border border-black/10 dark:border-white/10 shadow-md">

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            ATHLETE OF <br />
            THE{" "}
            <span className="text-[#d4a017] border-b-2 border-[#d4a017]">
              MONTH
            </span>
          </h2>

          <div className="bg-gray-100 dark:bg-[#222] p-6 rounded-lg mb-6 border-l-4 border-[#d4a017]">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              "The difference between impossible and possible lies in determination."
            </p>
          </div>

          <button className="bg-[#d4a017] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
            VIEW TRAINING →
          </button>
        </div>

        <div className="relative">
          <img
            src="/athlete.jpg"
            className="rounded-xl w-full h-[420px] object-cover"
          />

          <span className="absolute bottom-4 right-4 bg-[#d4a017] text-black px-4 py-2 text-sm font-semibold rounded">
            NO EXCUSES
          </span>
        </div>

      </div>

      <div className="grid md:grid-cols-4 gap-10 mt-20 text-center">

        {[
          { num: "50+", text: "MASTER COACHES" },
          { num: "12K+", text: "SUCCESS STORIES" },
          { num: "15", text: "GLOBAL FACILITIES" },
          { num: "24/7", text: "ELITE SUPPORT" },
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ scale: 1.1 }}>
            <h3 className="text-[#d4a017] text-3xl font-bold">{item.num}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs tracking-widest mt-2">
              {item.text}
            </p>
          </motion.div>
        ))}

      </div>

    </div>
  );
}