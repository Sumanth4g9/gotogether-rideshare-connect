
import React, { useState } from "react";
import Layout from "@/components/Layout";
import RideCard from "@/components/RideCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

// Sample ride data
const sampleRides = [
  {
    id: 1,
    name: "P. Nikhil",
    contact: "7337488212",
    pickup: "Himayathnagar",
    drop: "Ramnagar, Padmaraonagar",
    dateTime: "Daily",
    vehicle: "Bike",
    preferredGender: "",
    message: "Let's share fuel and ride daily!",
  },
  {
    id: 2,
    name: "R. Swathi",
    contact: "9876543210",
    pickup: "Uppal",
    drop: "Habsiguda",
    dateTime: "Weekdays, 8 AM",
    vehicle: "Car",
    preferredGender: "Female",
    message: "Need a female partner for safety and good convo",
  },
  {
    id: 3,
    name: "K. Arjun",
    contact: "8765432109",
    pickup: "Secunderabad",
    drop: "Gachibowli",
    dateTime: "Morning 9 AM, Weekdays",
    vehicle: "Bike",
    message: "Cost-sharing preferred",
  },
  {
    id: 4,
    name: "S. Rekha",
    contact: "9440123456",
    pickup: "Kukatpally",
    drop: "Madhapur",
    dateTime: "Daily 8:30 AM",
    vehicle: "Car",
    preferredGender: "Female",
    message: "Looking for a quiet daily commute",
  },
  {
    id: 5,
    name: "V. Ramesh",
    contact: "9012345678",
    pickup: "LB Nagar",
    drop: "Banjara Hills",
    dateTime: "Weekdays at 9 AM",
    vehicle: "Bike",
    message: "Let's save on fuel and ride together",
  },
];

const RideSearch = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [travelType, setTravelType] = useState("");
  const [gender, setGender] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [filteredRides, setFilteredRides] = useState(sampleRides);
  const { toast } = useToast();

  const handleSearch = () => {
    // Simple filtering logic - can be expanded based on needs
    let results = sampleRides;
    
    if (pickup) {
      results = results.filter(ride => 
        ride.pickup.toLowerCase().includes(pickup.toLowerCase())
      );
    }
    
    if (drop) {
      results = results.filter(ride => 
        ride.drop.toLowerCase().includes(drop.toLowerCase())
      );
    }
    
    if (vehicle) {
      results = results.filter(ride => 
        ride.vehicle.toLowerCase() === vehicle.toLowerCase()
      );
    }
    
    if (gender) {
      results = results.filter(ride => 
        !ride.preferredGender || ride.preferredGender === gender
      );
    }
    
    setFilteredRides(results);
    
    toast({
      title: "Search Results",
      description: `Found ${results.length} rides matching your criteria`,
    });
  };

  const handleClear = () => {
    setPickup("");
    setDrop("");
    setTravelType("");
    setGender("");
    setVehicle("");
    setFilteredRides(sampleRides);
  };

  return (
    <Layout>
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-2">Find Your Perfect Ride Partner</h1>
          <p className="text-gray-600 mb-8">Use the filters below to find riders matching your travel needs</p>
          
          {/* Search Filters */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input 
                  id="pickup"
                  placeholder="Enter area or landmark"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="drop">Drop Location</Label>
                <Input 
                  id="drop"
                  placeholder="Enter area or landmark"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="travelType">Travel Type</Label>
                <Select value={travelType} onValueChange={setTravelType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select travel type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily Commute</SelectItem>
                    <SelectItem value="occasional">Occasional Commute</SelectItem>
                    <SelectItem value="longTrip">Long Trip / Intercity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="gender">Gender Preference</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vehicle">Vehicle Type</Label>
                <Select value={vehicle} onValueChange={setVehicle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="Car">Car</SelectItem>
                    <SelectItem value="Bike">Bike</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-end">
              <Button variant="outline" onClick={handleClear}>Clear Filters</Button>
              <Button onClick={handleSearch}>Search Rides</Button>
            </div>
          </div>
          
          {/* Results */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Available Rides ({filteredRides.length})</h2>
            
            {filteredRides.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No rides found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRides.map((ride) => (
                  <RideCard
                    key={ride.id}
                    name={ride.name}
                    contact={ride.contact}
                    pickup={ride.pickup}
                    drop={ride.drop}
                    dateTime={ride.dateTime}
                    vehicle={ride.vehicle}
                    preferredGender={ride.preferredGender}
                    message={ride.message}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Create Your Own Post CTA */}
          <div className="bg-accent p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Looking to offer a ride instead?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Create your own post and let others find you. Share your daily commute and split the costs!
            </p>
            <Button>Create Your Ride Post</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RideSearch;
