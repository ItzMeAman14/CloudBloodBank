
import Navbar from "@/components/Navbar";
import { Info } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff6f7] to-[#ffe7ea]">
      <Navbar />
      <div className="container mx-auto max-w-2xl flex flex-col items-center justify-center py-20 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center justify-center bg-[#ea384c]/10 rounded-full p-3">
            <Info className="text-[#ea384c]" size={32} />
          </span>
          <h1 className="font-extrabold text-3xl text-[#ea384c]">
            About Us
          </h1>
        </div>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Donor Bridge is dedicated to connecting generous blood donors with those in need and registered blood banks. Our mission is to make blood donation easy, trusted, and accessible. We believe that together, we can bridge the gap and save countless lives.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Secure and easy donor registration</li>
          <li>Connecting donors and blood banks quickly</li>
          <li>Raising awareness about the importance of blood donation</li>
          <li>Empowering communities toward a healthier tomorrow</li>
        </ul>
        <p className="text-gray-600 mt-6 text-center">
          Thank you for being a part of our mission!
        </p>
      </div>
    </div>
  );
}