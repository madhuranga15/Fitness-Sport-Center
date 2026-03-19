import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="transition-colors duration-300">


      <section className="min-h-screen flex items-center relative overflow-hidden">

       
        <div className="hidden md:block md:w-1/2 h-screen relative">
          <img
            src="/hero.png"
            className="w-full h-full object-cover object-top"
          />

          
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 px-8 md:px-20 relative z-10"
        >
          <p className="text-[#d4a017] text-xs tracking-widest mb-3">
            PREMIUM FITNESS CLUB
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            BUILD YOUR <br />
            <span className="text-[#d4a017]">DREAM BODY</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-md">
            Train with elite coaches using world-class equipment.
            Push beyond your limits and transform your lifestyle.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button className="bg-[#d4a017] text-black px-8 py-3 rounded-md font-semibold hover:scale-105 transition shadow-xl shadow-yellow-500/30">
              JOIN NOW
            </button>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              STARTING FROM <br />
              <span className="font-bold text-black dark:text-white">
                $29/mo
              </span>
            </span>
          </div>
        </motion.div>
      </section>

     
      <section className="py-20 bg-gray-50 dark:bg-[#0b0b0b]">

        <div className="max-w-7xl mx-auto px-6 md:px-20">

          <p className="text-[#d4a017] text-xs tracking-widest mb-2">
            ● LIVE METRICS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            GYM <span className="text-[#d4a017]">PERFORMANCE</span>
          </h2>

          
          <div className="grid md:grid-cols-4 gap-6">

            {[
              { title: "ACTIVE MEMBERS", value: "12,840", sub: "+12.5%" },
              { title: "EXPERT TRAINERS", value: "150+", sub: "Certified" },
              { title: "PREMIUM UNITS", value: "582", sub: "98% rate" },
              { title: "SATISFACTION", value: "99.2%", sub: "Top Rated" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-black/10 dark:border-white/10 shadow-md dark:shadow-none"
              >
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.title}
                </p>
                <h3 className="text-2xl font-bold mt-2">{item.value}</h3>
                <p className="text-[#d4a017] text-xs mt-2">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          
          <div className="grid md:grid-cols-2 gap-10 mt-12">

           
            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-black/10 dark:border-white/10 shadow-md">

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                WEEKLY TRAFFIC
              </p>

              <div className="flex items-end gap-4 h-56">

                {[
                  { day: "MON", value: 40 },
                  { day: "TUE", value: 70 },
                  { day: "WED", value: 80 },
                  { day: "THU", value: 60 },
                  { day: "FRI", value: 75 },
                  { day: "SAT", value: 30 },
                  { day: "SUN", value: 20 },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center w-full">

                    <div className="w-full h-44 flex flex-col justify-end rounded overflow-hidden">

                      <div
                        className="bg-gray-200 dark:bg-[#333]"
                        style={{ height: `${100 - item.value}%` }}
                      ></div>

                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${item.value}%` }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#d4a017]"
                      ></motion.div>

                    </div>

                    <p className="text-xs text-gray-500 mt-2">{item.day}</p>
                  </div>
                ))}
              </div>
            </div>

           
            <div className="space-y-6">

              <div className="bg-[#d4a017] p-8 rounded-xl text-black shadow-lg">
                <p className="text-sm">PRIME TIME</p>
                <h3 className="text-3xl font-bold mt-1">
                  17:00 - 20:00
                </h3>
                <p className="text-sm">Peak performance hours</p>
              </div>

              <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-black/10 dark:border-white/10 shadow-md">

                <p className="text-sm mb-4">Recent Updates</p>

                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                  <li>New Machines Installed</li>
                  <li>HIIT Zone Upgraded</li>
                  <li>Sauna Maintenance Done</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

    
      <footer className="bg-gray-100 dark:bg-black py-16 transition">

        <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold text-[#d4a017] mb-4">
              FITNESS SPORT CENTER
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Premium fitness experience with world-class facilities and expert trainers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 text-sm">
              <li>Weight Training</li>
              <li>Cardio</li>
              <li>Yoga</li>
              <li>Coaching</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 text-sm">
              <li>info@fitnesssportcenter.com</li>
              <li>+94 77 123 4567</li>
              <li>Colombo</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-black/10 dark:border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Fitness Club. All rights reserved.
        </div>
      </footer>

    </div>
  );
}