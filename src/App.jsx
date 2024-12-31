import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainDashboard from "./components/MainDashboard";
import NetworkConfiguration from "./components/NetworkConfiguration";
import ArpTable from "./components/ArpTable";
import AddStaticArp from "./components/AddStaticArp";
import DeleteArp from "./components/DeleteArp";
import RoutesTable from "./components/RoutesTable";
function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        
        <div className="flex-grow">
          <h1 className=" font-bold text-3xl h-14 bg-gray-300 w-full p-2 flex items-center">
            <img
              src="https://chiefnet.io/wp-content/uploads/2022/08/Chiefnet-logo-5.svg"
              alt="ChiefNET"
              className="h-10 mr-2" 
            />
            OT Shield
          </h1>
          <Routes>
           
            <Route path="/" element={<MainDashboard />} />
         
            <Route path="/home" element={<MainDashboard />} />

            <Route path="/network-configuration" element={<NetworkConfiguration />} />

            <Route path="/arp" element={<ArpTable />} />

            <Route path="/add-arp" element={<AddStaticArp />} />

            <Route path="/delete-arp" element={<DeleteArp />} />
            
            <Route path="/routes" element={<RoutesTable />} /> 	     
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
