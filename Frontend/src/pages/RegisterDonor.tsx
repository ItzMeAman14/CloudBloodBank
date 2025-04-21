
import Navbar from "@/components/Navbar";
import { useState } from "react";

const initial = {
  fullName: "",
  email: "",
  password: "",
  bloodType: "",
  age: "",
  phone: "",
  address: "",
  city: "",
  gender: "",
};

const bloodTypes = [
  "A+",
  "A-",
  "B+",
  "B-",
  "O+",
  "O-",
  "AB+",
  "AB-"
];

export default function RegisterDonor() {
  const [form, setForm] = useState(initial);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Donor Registered!\n" +
      JSON.stringify(form, null, 2)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff6f7] to-[#ffe7ea]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <form
          className="bg-white rounded-xl shadow-xl max-w-lg w-full px-8 py-10 mt-12"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-[#ea384c]">
            Donor Registration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.email}
                onChange={handleChange}
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Phone
              </label>
              <input
                name="phone"
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.phone}
                onChange={handleChange}
                maxLength={12}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Blood Type
              </label>
              <select
                name="bloodType"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.bloodType}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                {bloodTypes.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Age
              </label>
              <input
                name="age"
                type="number"
                min={18}
                max={70}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.age}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                City
              </label>
              <input
                name="city"
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-gray-700">
                Address
              </label>
              <input
                name="address"
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-[#ea384c] focus:border-[#ea384c]"
                value={form.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-[#ea384c] text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition"
          >
            Register as Donor
          </button>
        </form>
      </div>
    </div>
  );
}
