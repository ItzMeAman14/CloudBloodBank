
// Homepage: Call to action, intro about donating blood

import UserNavbar from "@/components/UserNavbar";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff6f7] to-[#ffe7ea]">
      <UserNavbar />
      <div className="container mx-auto max-w-2xl flex flex-col items-center justify-center py-24">
        <h1 className="font-extrabold text-4xl md:text-5xl mb-2 text-[#ea384c]">
          Give Blood, Save Lives
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
          Join Donor Bridge to connect donors with those in need. Become a blood donor or a registered blood bank. Together, we bridge the gap for a healthier tomorrow.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/register/donor" className="px-6 py-3 rounded-lg bg-[#ea384c] text-white font-semibold text-lg shadow-lg hover:bg-red-600 transition">
            Register as Donor
          </Link>
          <Link to="/register/bloodbank" className="px-6 py-3 rounded-lg bg-white text-[#ea384c] border-2 border-[#ea384c] font-semibold text-lg shadow-lg hover:bg-[#ea384c] hover:text-white transition">
            Register as Blood Bank
          </Link>
        </div>
      </div>
    </div>
  );
}
