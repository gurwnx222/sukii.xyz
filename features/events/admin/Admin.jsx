"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trash2,
  Plus,
  Upload,
  Globe,
  Building,
} from "lucide-react";

export default function EventAdminDashboard() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Conference 2024",
      description:
        "Annual technology conference featuring industry leaders and innovative solutions.",
      date: "2024-03-15",
      time: "09:00",
      isVirtual: false,
      signedUp: 245,
      thumbnail: "/tech-conference.png",
    },
    {
      id: 2,
      title: "Virtual Marketing Summit",
      description:
        "Online summit covering the latest trends in digital marketing and customer engagement.",
      date: "2024-03-22",
      time: "14:00",
      isVirtual: true,
      signedUp: 189,
      thumbnail: "/marketing-summit.png",
    },
    {
      id: 3,
      title: "Design Workshop",
      description:
        "Hands-on workshop for UI/UX designers to learn advanced prototyping techniques.",
      date: "2024-03-28",
      time: "10:30",
      isVirtual: false,
      signedUp: 67,
      thumbnail: "/collaborative-design-workshop.png",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    isVirtual: false,
    thumbnail: null,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateEvent = () => {
    if (
      formData.title &&
      formData.description &&
      formData.date &&
      formData.time
    ) {
      const newEvent = {
        id: events.length + 1,
        ...formData,
        signedUp: 0,
        thumbnail: formData.thumbnail || "/new-event.jpg",
      };
      setEvents((prev) => [...prev, newEvent]);
      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        isVirtual: false,
        thumbnail: null,
      });
      setIsModalOpen(false);
    }
  };

  const handleDeleteEvent = (eventId) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
  };

  const totalSignups = events.reduce((sum, event) => sum + event.signedUp, 0);
  const virtualEvents = events.filter((event) => event.isVirtual).length;
  const inPersonEvents = events.filter((event) => !event.isVirtual).length;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Event Management
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your events with precision and style
            </p>
          </div>

          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Event
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-card border-border">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-card-foreground">
                  Create New Event
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 py-4">
                {/* Virtual/In-Person Toggle */}
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    {formData.isVirtual ? (
                      <Globe className="w-5 h-5 text-primary" />
                    ) : (
                      <Building className="w-5 h-5 text-primary" />
                    )}
                    <div>
                      <Label className="text-base font-medium text-card-foreground">
                        {formData.isVirtual
                          ? "Virtual Event"
                          : "In-Person Event"}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {formData.isVirtual
                          ? "Online event accessible from anywhere"
                          : "Physical location required"}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={formData.isVirtual}
                    onCheckedChange={(checked) =>
                      handleInputChange("isVirtual", checked)
                    }
                  />
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="title"
                      className="text-card-foreground font-medium"
                    >
                      Event Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="Enter event title"
                      value={formData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      className="bg-input border-border text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="thumbnail"
                      className="text-card-foreground font-medium"
                    >
                      Thumbnail
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="thumbnail"
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleInputChange("thumbnail", e.target.files[0])
                        }
                        className="bg-input border-border text-foreground"
                      />
                      <Upload className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-card-foreground font-medium"
                  >
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your event"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    className="bg-input border-border text-foreground min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="date"
                      className="text-card-foreground font-medium"
                    >
                      Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                      className="bg-input border-border text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="time"
                      className="text-card-foreground font-medium"
                    >
                      Time
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) =>
                        handleInputChange("time", e.target.value)
                      }
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                    className="border-border text-card-foreground hover:bg-muted"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleCreateEvent}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Create Event
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-card-foreground">
                {events.length}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Signups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-card-foreground">
                {totalSignups}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Virtual Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {virtualEvents}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                In-Person Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">
                {inPersonEvents}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Your Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={event.thumbnail || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={event.isVirtual ? "default" : "secondary"}
                      className="bg-primary/90 text-primary-foreground"
                    >
                      {event.isVirtual ? (
                        <>
                          <Globe className="w-3 h-3 mr-1" /> Virtual
                        </>
                      ) : (
                        <>
                          <MapPin className="w-3 h-3 mr-1" /> In-Person
                        </>
                      )}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center text-primary">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-semibold">
                          {event.signedUp} signed up
                        </span>
                      </div>

                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteEvent(event.id)}
                        className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
