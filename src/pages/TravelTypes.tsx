
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const TravelTypes = () => {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleTypeSelection = (type: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please login or sign up to continue",
      });
      navigate("/login");
      return;
    }

    // Simulate selection and navigate to ride creation page
    toast({
      title: `${type} selected`,
      description: "You can now set up your ride details",
    });
    navigate("/search");
  };

  const travelTypes = [
    {
      title: "Occasional Commute",
      description: "One-time trips to events, airports, or special occasions",
      icon: "🌆",
      benefits: ["Flexible scheduling", "One-time arrangement", "Perfect for events"],
    },
    {
      title: "Daily Commute",
      description: "Regular rides to work or college on weekdays",
      icon: "🏢",
      benefits: ["Regular schedule", "Consistent savings", "Build routine relationships"],
    },
    {
      title: "Long Trips / Intercity Travel",
      description: "Travel between cities or states for longer distances",
      icon: "🧳",
      benefits: ["Share long-distance costs", "Company for the journey", "Explore new places"],
    },
  ];

  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">What type of travel are you looking for?</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the type of journey you want to share with others. Each option offers different benefits for different needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {travelTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
                <CardHeader className="bg-accent pb-2">
                  <div className="text-4xl text-center mb-2">{type.icon}</div>
                  <CardTitle className="text-center">{type.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription className="text-center mb-4">{type.description}</CardDescription>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2 border-t">
                  <Button 
                    className="w-full" 
                    onClick={() => handleTypeSelection(type.title)}
                  >
                    Select {type.title}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-accent rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Not sure which type to choose?</h3>
            <p className="text-muted-foreground mb-4">
              You can always browse through all available rides without selecting a specific travel type.
            </p>
            <Button variant="outline" onClick={() => navigate("/search")}>
              Browse All Rides
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TravelTypes;
