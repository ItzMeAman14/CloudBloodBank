import UserNavbar from "@/components/UserNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Phone, IdCard, User, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function FindBlood() {
  const [filterData,setFilterData] = useState({BloodType:"",HospitalType:""});
  const [filteredData,setFilteredData] = useState([])
  const [data, setData] = useState([]);


  const filterHospitals = () => {
      const newData = data.filter((hospital) => {
        const matchesType =
        filterData.HospitalType === "" || hospital.Type === filterData.HospitalType;
    
      const matchesBloodGroup =
        filterData.BloodType === "" ||
        hospital.availableBloodGroup.includes(filterData.BloodType);
      
      return matchesType && matchesBloodGroup;
    })
    setFilteredData(newData);
  }

  const getData = async () => {
    try{
      const res = await fetch(`http://localhost:6548/getAdminData`,{
        method:"GET"
      })

      const parsed = await res.json();
      setData(parsed);
      setFilteredData(parsed)
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    filterHospitals()
  },[filterData])

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff6f7] to-[#ffe7ea]">
      <UserNavbar />
      <div className="container mx-auto max-w-4xl py-8">
        <h1 className="text-3xl font-bold text-[#ea384c] mb-6">Find Blood</h1>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="p-2 border rounded" onChange={(e) => { setFilterData({...filterData,BloodType:e.target.value}) }}>
              <option value={""}>Select Blood Type</option>
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"B+"}>B+</option>
              <option value={"B-"}>B-</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
            </select>

            <select className="p-2 border rounded" onChange={(e) => { setFilterData({...filterData,HospitalType:e.target.value}) }}>
              <option value={""}>Select Hospital Type</option>
              <option value={"Government"}>Government</option>
              <option value={"Private"}>Private</option>
              <option value={"NGO"}>NGO</option>
            </select>
          </div>
        </div>
        

        <div className="grid grid-cols-1 gap-6">

        {filteredData.length === 0 &&
          <div className="text-red-500 text-sm mt-4 text-center">
            🚫 No hospitals found for the selected filters.
          </div>
        }
          
          { filteredData.map((card) => {
            return (
            <Card key={card._id} className="mt-2">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-[#ea384c]">{card.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <IdCard className="h-5 w-5 text-[#ea384c]" />
                  <span>License: {card.licenseNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-5 w-5 text-[#ea384c]" />
                  <span>Helpline: {card.HelplineNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="h-5 w-5 text-[#ea384c]" />
                  <span>Contact: {card.ContactPersonName}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Building className="h-5 w-5 text-[#ea384c]" />
                  <span>Type: {card.Type}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-[#ea384c]" />
                  <span>Address: {card.Address}</span>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700">Available Blood Types:</p>
                  <div className="flex gap-2 mt-1">
                    { card.availableBloodGroup.map((blood) => {
                      return (
                        <label key={blood} className="inline-flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="bloodGroup"
                          value={blood}
                          // checked={selectedGroup === blood}
                          // onChange={(e) => setSelectedGroup(e.target.value)}
                          className="accent-[#ea384c] cursor-pointer"
                        />
                        <span className="text-sm text-[#ea384c] ml-2">{blood}</span>
                      </label> 
                    )
                    }) }
                  </div>
                </div>
                <button className="mt-4 w-full bg-[#ea384c] text-white px-4 py-2 rounded hover:bg-red-600 transition">
                  Request Blood
                </button>
              </div>
            </CardContent>
          </Card>
            )
        }) }
          
        </div>
      </div>
    </div>
  );
}