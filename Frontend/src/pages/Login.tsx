
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Login() {
  const [userType, setUserType] = useState<"donor" | "bloodbank">("donor");
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Login as ${userType === "donor" ? "Donor" : "Blood Bank"}: Email - ${form.email}, Password - [hidden]`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff6f7] to-[#ffe7ea]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full px-8 py-10 mt-12">
          <h2 className="text-2xl font-bold mb-6 text-[#ea384c]">Login</h2>
          <div className="flex justify-center gap-4 mb-7">
            <button
              className={`px-4 py-2 rounded-full font-semibold border  ${userType==="donor"
                ? "bg-[#ea384c] text-white border-[#ea384c]"
                : "bg-white text-[#ea384c] border-[#ea384c]"}`}
              onClick={() => setUserType("donor")}
            >
              Donor
            </button>
            <button
              className={`px-4 py-2 rounded-full font-semibold border ${userType==="bloodbank"
                ? "bg-[#ea384c] text-white border-[#ea384c]"
                : "bg-white text-[#ea384c] border-[#ea384c]"}`}
              onClick={() => setUserType("bloodbank")}
            >
              Blood Bank
            </button>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.email}
                onChange={handleChange}
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 bg-[#ea384c] text-white font-semibold rounded-lg hover:bg-red-600 transition"
            >
              Login as {userType === "donor" ? "Donor" : "Blood Bank"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
