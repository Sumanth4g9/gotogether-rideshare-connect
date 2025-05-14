
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const popularStates = [
    { name: "Delhi", count: "1,245", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&auto=format&fit=crop&q=60" },
    { name: "Gujarat", count: "983", image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=400&auto=format&fit=crop&q=60" },
    { name: "Maharashtra", count: "1,762", image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&auto=format&fit=crop&q=60" },
    { name: "Telangana", count: "854", image: "https://images.unsplash.com/photo-1568659585069-facb248756e9?w=400&auto=format&fit=crop&q=60" },
    { name: "Karnataka", count: "1,105", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&auto=format&fit=crop&q=60" },
  ];

  return (
    <Layout>
      {/* Hero Section with Blue Theme */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Find Riders & Partners for Your Next Ride
          </h1>
          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
            Daily commutes, weekend trips, or state travel – connect with like-minded travelers
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/rides">
              <Button size="lg" className="w-full md:w-auto bg-white text-blue-700 hover:bg-gray-100">
                Find a Ride Partner
              </Button>
            </Link>
            <Link to="/travel-types">
              <Button size="lg" variant="outline" className="w-full md:w-auto border-white text-white hover:bg-white hover:text-blue-700">
                Offer a Ride
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">How GoTogethrRides Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold mb-2">Select Your Travel Type</h3>
              <p className="text-gray-600">Choose between daily commutes, occasional rides, or long trips</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold mb-2">Find Compatible Partners</h3>
              <p className="text-gray-600">Browse profiles and find travel partners with similar routes</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold mb-2">Connect and Ride</h3>
              <p className="text-gray-600">Message, plan, and start sharing rides to save costs together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular States */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">Popular States with High Travel Activity</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the most active regions where riders are connecting and sharing journeys every day
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {popularStates.map((state) => (
              <Card key={state.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-36 relative">
                  <img src={state.image} alt={state.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold">{state.name}</h3>
                    <p className="text-white text-sm">{state.count} active posts</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ride Benefits - Changed to blue */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Share Your Ride?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p>Split fuel costs and tolls to reduce your daily transportation expenses</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p>Reduce carbon emissions by sharing vehicles instead of driving separately</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Make Connections</h3>
              <p>Meet new people and build valuable connections on your daily routes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Ready to Share Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of commuters who are saving money, reducing emissions, and making connections every day.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">Get Started Now</Button>
            </Link>
            <Link to="/travel-types">
              <Button size="lg" variant="outline" className="w-full md:w-auto border-blue-600 text-blue-600 hover:bg-blue-50">
                Explore Travel Types
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
