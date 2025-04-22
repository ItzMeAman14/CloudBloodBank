
import UserNavbar from "@/components/UserNavbar";

export default function DonateBlood() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff6f7] to-[#ffe7ea]">
      <UserNavbar />
      <div className="container mx-auto max-w-2xl py-8">
        <h1 className="text-3xl font-bold text-[#ea384c] mb-6">Donate Blood</h1>
        <form className="space-y-4 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block text-gray-700 mb-2">Blood Type</label>
            <select className="w-full p-2 border rounded">
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Contact Number</label>
            <input type="tel" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Address</label>
            <textarea className="w-full p-2 border rounded" rows={3}></textarea>
          </div>
          <button type="submit" className="w-full bg-[#ea384c] text-white py-2 rounded hover:bg-red-600">
            Submit Donation Request
          </button>
        </form>
      </div>
    </div>
  );
}