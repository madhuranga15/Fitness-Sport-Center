import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div className="min-h-screen px-6 md:px-20 py-20 transition-colors duration-300">

  
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          CHOOSE YOUR <br /> MEMBERSHIP
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Select a plan that matches your ambition and unlock your full potential.
        </p>
      </div>


      <div className="grid md:grid-cols-3 gap-8 mb-20">

      
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl border border-black/10 dark:border-white/10 shadow-md"
        >
          <h3 className="text-lg mb-2">BASIC</h3>

          <h2 className="text-4xl font-bold mb-6">
            $29<span className="text-lg text-gray-500">/mo</span>
          </h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
            <li>✔ 24/7 Gym Access</li>
            <li>✔ Locker Room</li>
            <li>✔ Fitness Assessment</li>
            <li className="text-gray-400">✖ Group Classes</li>
          </ul>

          <button className="mt-8 w-full border border-[#d4a017] py-3 rounded-md hover:bg-[#d4a017] hover:text-black transition">
            GET STARTED
          </button>
        </motion.div>

      
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="relative bg-white dark:bg-[#1a1a1a] p-8 rounded-xl border border-[#d4a017] shadow-xl shadow-yellow-500/20"
        >

          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4a017] text-black text-xs px-4 py-1 rounded-full font-semibold">
            MOST POPULAR
          </span>

          <h3 className="text-lg mb-2">PRO</h3>

          <h2 className="text-4xl font-bold text-[#d4a017] mb-6">
            $59<span className="text-lg text-gray-500">/mo</span>
          </h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
            <li>✔ Everything in Basic</li>
            <li>✔ Unlimited Classes</li>
            <li>✔ Workout Plan</li>
            <li>✔ 1 PT Session</li>
            <li>✔ Towel Service</li>
          </ul>

          <button className="mt-8 w-full bg-[#d4a017] text-black py-3 rounded-md font-semibold hover:scale-105 transition shadow-lg shadow-yellow-500/30">
            SELECT PRO
          </button>
        </motion.div>

  
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl border border-black/10 dark:border-white/10 shadow-md"
        >
          <h3 className="text-lg mb-2">ELITE</h3>

          <h2 className="text-4xl font-bold mb-6">
            $99<span className="text-lg text-gray-500">/mo</span>
          </h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
            <li>✔ Everything in Pro</li>
            <li>✔ 1-on-1 Coaching</li>
            <li>✔ Nutrition Plan</li>
            <li>✔ Spa Access</li>
            <li>✔ Guest Pass</li>
          </ul>

          <button className="mt-8 w-full border border-[#d4a017] py-3 rounded-md hover:bg-[#d4a017] hover:text-black transition">
            GO ELITE
          </button>
        </motion.div>

      </div>

      <div>
        <h2 className="text-center text-xl font-semibold mb-8">
          Compare All Plan Features
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-black/10 dark:border-white/10 rounded-xl overflow-hidden">

            <thead className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400">
              <tr>
                <th className="p-4 text-left">FEATURES</th>
                <th className="p-4 text-center">BASIC</th>
                <th className="p-4 text-center">PRO</th>
                <th className="p-4 text-center">ELITE</th>
              </tr>
            </thead>

            <tbody className="text-gray-600 dark:text-gray-400">

              {[
                ["24/7 Access", "✔", "✔", "✔"],
                ["Group Classes", "—", "Unlimited", "Unlimited"],
                ["Personal Training", "—", "1 Session", "Unlimited"],
                ["Spa & Sauna", "—", "—", "✔"],
              ].map((row, i) => (
                <tr key={i} className="border-t border-black/10 dark:border-white/10">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`p-4 ${j !== 0 ? "text-center" : ""} ${
                        cell === "✔" && j === 3 ? "text-[#d4a017] font-semibold" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}

            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}