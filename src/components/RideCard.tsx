
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface RideCardProps {
  name: string;
  contact: string;
  pickup: string;
  drop: string;
  dateTime: string;
  vehicle: string;
  preferredGender?: string;
  message?: string;
}

const RideCard: React.FC<RideCardProps> = ({
  name,
  contact,
  pickup,
  drop,
  dateTime,
  vehicle,
  preferredGender,
  message,
}) => {
  const { isAuthenticated } = useAuth();
  const [requestMessage, setRequestMessage] = useState("");
  const [enquiryMessage, setEnquiryMessage] = useState("");

  const handleRequest = () => {
    toast({
      title: "Request sent!",
      description: `Your ride request was sent to ${name}. They will contact you soon.`,
    });
  };

  const handleEnquiry = () => {
    toast({
      title: "Enquiry sent!",
      description: `Your enquiry was sent to ${name}. They will respond soon.`,
    });
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader className="bg-sky-50 rounded-t-lg">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold">{name}</CardTitle>
            <CardDescription>Contact: {contact}</CardDescription>
          </div>
          <div className="px-3 py-1 bg-sky-400 text-white text-xs rounded-full">
            {vehicle}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-xs text-muted-foreground">Pickup Location</p>
              <p className="font-medium">{pickup}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Drop Location</p>
              <p className="font-medium">{drop}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <p className="text-xs text-muted-foreground">Date & Time</p>
              <p className="font-medium">{dateTime}</p>
            </div>
            {preferredGender && (
              <div>
                <p className="text-xs text-muted-foreground">Preferred Gender</p>
                <p className="font-medium">{preferredGender}</p>
              </div>
            )}
          </div>
          {message && (
            <div className="mt-2">
              <p className="text-xs text-muted-foreground">Message</p>
              <p className="text-sm italic">"{message}"</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t pt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-1/2 text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-white">
              Request
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send a Ride Request</DialogTitle>
              <DialogDescription>
                Send a request to {name} for sharing the ride from {pickup} to {drop}.
              </DialogDescription>
            </DialogHeader>
            {!isAuthenticated ? (
              <p className="text-center py-4">Please login to send a request</p>
            ) : (
              <>
                <Textarea 
                  placeholder="Add a message with your request (optional)" 
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                  className="min-h-[100px]"
                />
                <DialogFooter>
                  <Button onClick={handleRequest}>Send Request</Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-1/2">
              Enquire
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send an Enquiry</DialogTitle>
              <DialogDescription>
                Ask {name} for more details about this ride.
              </DialogDescription>
            </DialogHeader>
            {!isAuthenticated ? (
              <p className="text-center py-4">Please login to send an enquiry</p>
            ) : (
              <>
                <Textarea 
                  placeholder="Type your questions here..." 
                  value={enquiryMessage}
                  onChange={(e) => setEnquiryMessage(e.target.value)}
                  className="min-h-[100px]"
                />
                <DialogFooter>
                  <Button onClick={handleEnquiry}>Send Enquiry</Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default RideCard;
