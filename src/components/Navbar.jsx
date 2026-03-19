import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);


  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, []);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Trainers", path: "/trainers" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300
      ${
        scrolled
          ? "bg-white/90 dark:bg-[#0b0b0b]/90 shadow-lg"
          : "bg-white/70 dark:bg-[#0b0b0b]/70"
      }
      border-black/10 dark:border-white/10`}
    >
      
      <div className="relative w-full px-6 md:px-16 py-4 flex items-center justify-between">

        
        <Link to="/" className="flex items-center gap-3 z-10">
          <img src="/logo.png" className="w-10 h-10 rounded-md" />
          <h1 className="font-bold text-lg tracking-wide whitespace-nowrap">
            <span className="text-[#d4a017]">FITNESS</span>{" "}
            <span className="text-black dark:text-white">SPORT CENTER</span>
          </h1>
        </Link>

        
        <ul className="hidden md:flex gap-10 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative transition ${
                  location.pathname === item.path
                    ? "text-[#d4a017]"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.name}

               
                {location.pathname === item.path && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#d4a017]"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

 
        <div className="flex items-center gap-3 z-10">

          
          <div className="hidden md:flex items-center bg-black/5 dark:bg-white/10 px-3 py-1 rounded-md">
            <Search size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-black dark:text-white placeholder-gray-400 w-24 focus:w-40 transition-all"
            />
          </div>

          
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md bg-black/5 dark:bg-white/10 hover:scale-110 transition"
          >
            {dark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-700" />
            )}
          </button>

        
          <button className="hidden md:block bg-[#d4a017] text-black px-5 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500 transition shadow-lg shadow-yellow-500/20">
            JOIN NOW
          </button>

       
          <div
            className="md:hidden text-xl cursor-pointer text-black dark:text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </div>

        </div>
      </div>

  
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-6 space-y-4 bg-white dark:bg-[#0b0b0b]"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block ${
                location.pathname === item.path
                  ? "text-[#d4a017]"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center bg-black/5 dark:bg-white/10 px-3 py-2 rounded-md">
            <Search size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full text-black dark:text-white"
            />
          </div>

          <button className="w-full bg-[#d4a017] text-black py-2 rounded-md mt-4">
            JOIN NOW
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}