
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Users, Gift, Zap, Shield, Clock } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirementType: "",
    description: "",
    budget: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Show scratch card popup or success message
  };

  const requirementTypes = [
    "Tutoring Services",
    "Home Services",
    "Business Services",
    "Technology Solutions", 
    "Event Planning",
    "Health & Wellness",
    "Transportation",
    "Other"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Post Your Requirement – Get Fast, Verified Responses
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Trusted by 2,000+ users on Instagram. Now available on web.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-goto-purple hover:bg-gray-100 text-lg px-8 py-4"
            onClick={() => document.getElementById('requirement-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Post Your Requirement
          </Button>
        </div>
      </section>

      {/* Scratch & Win Banner */}
      <section className="py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Gift className="w-6 h-6" />
            <h2 className="text-xl md:text-2xl font-bold">Exciting Rewards – Scratch & Win!</h2>
            <Gift className="w-6 h-6" />
          </div>
          <p className="mb-4">Get discounts or free services after posting your requirement!</p>
          <Button variant="outline" className="bg-white text-orange-500 hover:bg-gray-100">
            Try Your Luck
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-goto-purple w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fill Your Requirement</h3>
              <p className="text-gray-600">Tell us what you need in just a few simple steps</p>
            </div>
            <div className="text-center">
              <div className="bg-goto-purple w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">We Match the Best Providers</h3>
              <p className="text-gray-600">Our verified network finds the perfect match for you</p>
            </div>
            <div className="text-center">
              <div className="bg-goto-purple w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Connected in 24-48 Hours</h3>
              <p className="text-gray-600">Fast responses from quality service providers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirement Form */}
      <section id="requirement-form" className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl mb-2">Post Your Requirement Now</CardTitle>
              <p className="text-gray-600">Get connected with the best service providers in your area</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="requirementType">Type of Requirement *</Label>
                  <Select value={formData.requirementType} onValueChange={(value) => setFormData({...formData, requirementType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select requirement type" />
                    </SelectTrigger>
                    <SelectContent>
                      {requirementTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Describe Your Requirement *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Please provide details about what you need..."
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Budget (Optional)</Label>
                    <Input
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      placeholder="Your budget range"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location (Optional)</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="City or area"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  <Shield className="w-4 h-4" />
                  <span>We never share your data. 100% Privacy Guaranteed.</span>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-goto-purple hover:bg-goto-purple/90 text-lg py-6"
                >
                  Post My Requirement Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Live Counter & Testimonials */}
      <section className="py-16 bg-goto-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold">
              <Users className="w-8 h-8" />
              <span>3,421+ happy users and counting...</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-3">"Found the perfect tutor for my daughter within 2 days. Excellent service!"</p>
                <p className="text-sm opacity-80">- Priya M., Mumbai</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-3">"Quick response and quality providers. Highly recommended!"</p>
                <p className="text-sm opacity-80">- Rahul K., Delhi</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-3">"Got multiple options to choose from. Great platform!"</p>
                <p className="text-sm opacity-80">- Anjali S., Bangalore</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a requirement? Don't wait. Post it now!</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found exactly what they were looking for.
          </p>
          <Button 
            size="lg" 
            className="bg-goto-purple hover:bg-goto-purple/90 text-lg px-8 py-4"
            onClick={() => document.getElementById('requirement-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Post Your Requirement Now
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
