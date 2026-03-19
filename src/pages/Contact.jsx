import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.first || !form.email || !form.message) {
      alert("Please fill required fields!");
      return;
    }

    setSuccess("Message sent successfully! 🔥");

    setForm({
      first: "",
      last: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-20 transition-colors duration-300">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">


        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Elevate Your{" "}
            <span className="text-[#d4a017]">Pulse</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-md">
            Our elite trainers and premium environment are ready to help
            you transform your body and mindset.
          </p>

     
          <div className="space-y-6 mt-10">

            {[
              {
                icon: <MapPin size={20} />,
                title: "Our Location",
                text: "Negombo Beach",
              },
              {
                icon: <Phone size={20} />,
                title: "Direct Line",
                text: "+94 11 123 45 67",
              },
              {
                icon: <Mail size={20} />,
                title: "Email Support",
                text: "contact@fitnesssportcenter.com",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">

                <div className="bg-[#d4a017] p-3 rounded-lg text-black shadow-md">
                  {item.icon}
                </div>

                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>

       
          <div className="mt-10 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-md">
            <img
              src="/map.jpg"
              alt="map"
              className="w-full h-48 object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </motion.div>

 
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/70 dark:bg-white/5 p-8 rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl"
        >

          <h2 className="text-2xl font-bold mb-6">
            Send Us a Message
          </h2>

      
          <div className="grid grid-cols-2 gap-4">

            <input
              name="first"
              value={form.first}
              onChange={handleChange}
              placeholder="First Name"
              className="p-3 bg-transparent border border-black/10 dark:border-white/10 rounded-md focus:border-[#d4a017] focus:ring-2 focus:ring-[#d4a017]/40 outline-none transition"
            />

            <input
              name="last"
              value={form.last}
              onChange={handleChange}
              placeholder="Last Name"
              className="p-3 bg-transparent border border-black/10 dark:border-white/10 rounded-md focus:border-[#d4a017] focus:ring-2 focus:ring-[#d4a017]/40 outline-none transition"
            />

          </div>

   
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full mt-4 p-3 bg-transparent border border-black/10 dark:border-white/10 rounded-md focus:border-[#d4a017] focus:ring-2 focus:ring-[#d4a017]/40 outline-none transition"
          />

       
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message..."
            rows="5"
            className="w-full mt-4 p-3 bg-transparent border border-black/10 dark:border-white/10 rounded-md focus:border-[#d4a017] focus:ring-2 focus:ring-[#d4a017]/40 outline-none transition"
          />

        
          <button className="w-full mt-6 bg-[#d4a017] text-black py-3 rounded-md font-semibold hover:bg-yellow-500 hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30">
            SEND MESSAGE →
          </button>

    
          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 mt-4 text-sm"
            >
              {success}
            </motion.p>
          )}

        </motion.form>

      </div>

    </div>
  );
}