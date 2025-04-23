import { useEffect, useState } from "react";
import UserNavbar from "@/components/UserNavbar";

export default function DonateBlood() {
  const [BloodType, setBloodType] = useState('A+');
  const [Name, setName] = useState('');
  const [Number, setNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [needy,setNeedy] = useState([]);


  const getNeedyHospitals = async () => {
    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getNeededHospitals`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          BloodType
        })
      })

      const parsed = await res.json();
      setNeedy(parsed)
    }
    catch(err){
      console.error(err)
    }
    
  }

  const donateBlood = (e) => {
    e.preventDefault()
    setBloodType('');
    setName('');
    setNumber('');
    setAddress('');
  }

  useEffect(() => {
    getNeedyHospitals();
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff6f7] to-[#ffe7ea]">
      <UserNavbar />
      <div className="container mx-auto max-w-2xl py-8">
        <h1 className="text-3xl font-bold text-[#ea384c] mb-6">Donate Blood</h1>
        <form className="space-y-4 bg-white p-6 rounded-lg shadow" onSubmit={donateBlood}>
          <div>
            <label className="block text-gray-700 mb-2">Blood Type</label>
            <select className="w-full p-2 border rounded" onChange={(e) => { setBloodType(e.target.value); getNeedyHospitals() }}>
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
            <label className="block text-gray-700 mb-2">Needy Hospitals</label>
            <select className="w-full p-2 border rounded">
              <option>Random</option>
              { needy.map((hos) => {
                return (
                  <option key={hos._id}>{hos.name}</option>
                )
              }) }
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full p-2 border rounded" onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Contact Number</label>
            <input type="tel" className="w-full p-2 border rounded" onChange={(e) => { setNumber(e.target.value) }}/>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Address</label>
            <textarea className="w-full p-2 border rounded" rows={3} onChange={(e) => { setAddress(e.target.value) }}></textarea>
          </div>
          <button type="submit" className="w-full bg-[#ea384c] text-white py-2 rounded hover:bg-red-600">
            Submit Donation Request
          </button>
        </form>
      </div>
    </div>
  );
}