
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff6f7] to-[#ffe7ea]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full px-8 py-10 mt-12">
          <h2 className="text-2xl font-bold mb-8 text-[#ea384c]">
            Signup
          </h2>
          <div className="space-y-2">
            <button
              className="w-full py-3 bg-[#ea384c] text-white font-semibold rounded-lg hover:bg-red-600 transition"
              onClick={() => navigate("/register/donor")}
            >
              Register as Donor
            </button>
            <button
              className="w-full py-3 bg-white border border-[#ea384c] text-[#ea384c] font-semibold rounded-lg hover:bg-[#ea384c] hover:text-white transition"
              onClick={() => navigate("/register/bloodbank")}
            >
              Register as Blood Bank
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
