export default function Footer() {
  return (
    <footer className="bg-[#1a0d08] text-white px-8 md:px-20 py-16 border-t border-white/5">

      <div className="grid md:grid-cols-5 gap-10">

       
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
            <h1 className="text-lg font-bold">
              <span className="text-[#ff4d00]">ELIGHT</span>GYM
            </h1>
          </div>

          <p className="text-gray-400 text-sm max-w-sm">
            Elevate your fitness journey with world-class trainers,
            state-of-the-art equipment, and a community built on strength
            and discipline.
          </p>

         
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 bg-[#2a140c] rounded-lg flex items-center justify-center hover:bg-[#ff4d00] transition cursor-pointer">
              🔵
            </div>
            <div className="w-10 h-10 bg-[#2a140c] rounded-lg flex items-center justify-center hover:bg-[#ff4d00] transition cursor-pointer">
              ▶️
            </div>
            <div className="w-10 h-10 bg-[#2a140c] rounded-lg flex items-center justify-center hover:bg-[#ff4d00] transition cursor-pointer">
              📷
            </div>
            <div className="w-10 h-10 bg-[#2a140c] rounded-lg flex items-center justify-center hover:bg-[#ff4d00] transition cursor-pointer">
              🔗
            </div>
          </div>
        </div>

       
        <div>
          <h3 className="font-semibold mb-4">PROGRAMS</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Personal Training</li>
            <li className="hover:text-white cursor-pointer">Group Classes</li>
            <li className="hover:text-white cursor-pointer">Strength & Conditioning</li>
            <li className="hover:text-white cursor-pointer">Yoga & Recovery</li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-4">GYM</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Our Trainers</li>
            <li className="hover:text-white cursor-pointer">Memberships</li>
            <li className="hover:text-white cursor-pointer">Facilities</li>
            <li className="hover:text-white cursor-pointer">Success Stories</li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-4">SUPPORT</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Booking</li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-4">LEGAL</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
          </ul>
        </div>

      </div>

     
      <div className="border-t border-white/5 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2026 ELIGHTGYM. All rights reserved.
      </div>

    </footer>
  );
}