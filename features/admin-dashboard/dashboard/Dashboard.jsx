"use client";

// EventDashboard.js
import React, { useState } from "react";
import { Plus, Calendar, Users, MapPin } from "lucide-react";
import StatsCard from "./components/StatsCard";
import EventCard from "./components/EventCard";
import CreateEventModal from "./components/CreateEventModal";
import EditEventModal from "./components/EditEventModal";
import AttendeesModal from "./components/AttendeesModal";

const EventDashboard = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Conference 2025",
      name: "Annual Technology Summit",
      description:
        "Join us for the biggest tech conference of the year featuring industry leaders and innovative startups.",
      location: "San Francisco Convention Center",
      medium: "physical",
      thumbnail: null,
      totalSlots: 500,
      joinedPeople: [
        { email: "john.doe@example.com", joinedAt: "2025-09-10T10:30:00Z" },
        {
          email: "sarah.wilson@techcorp.com",
          joinedAt: "2025-09-11T14:20:00Z",
        },
        { email: "mike.johnson@startup.io", joinedAt: "2025-09-12T09:15:00Z" },
      ],
      createdAt: "2025-09-01T12:00:00Z",
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAttendeesModal, setShowAttendeesModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentEvent, setCurrentEvent] = useState({
    title: "",
    name: "",
    description: "",
    location: "",
    medium: "physical",
    thumbnail: null,
    totalSlots: 100,
  });

  const resetForm = () => {
    setCurrentEvent({
      title: "",
      name: "",
      description: "",
      location: "",
      medium: "physical",
      thumbnail: null,
      totalSlots: 100,
    });
  };

  const handleCreateEvent = () => {
    if (!currentEvent.title || !currentEvent.name || !currentEvent.description)
      return;

    const newEvent = {
      id: Date.now(),
      ...currentEvent,
      joinedPeople: [],
      createdAt: new Date().toISOString(),
    };

    setEvents([...events, newEvent]);
    setShowCreateModal(false);
    resetForm();
  };

  const handleEditEvent = () => {
    if (!currentEvent.title || !currentEvent.name || !currentEvent.description)
      return;

    setEvents(
      events.map((event) =>
        event.id === selectedEvent.id ? { ...event, ...currentEvent } : event
      )
    );
    setShowEditModal(false);
    setSelectedEvent(null);
    resetForm();
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setCurrentEvent({
      title: event.title,
      name: event.name,
      description: event.description,
      location: event.location,
      medium: event.medium,
      thumbnail: event.thumbnail,
      totalSlots: event.totalSlots,
    });
    setShowEditModal(true);
  };

  const openAttendeesModal = (event) => {
    setSelectedEvent(event);
    setShowAttendeesModal(true);
  };

  const totalEvents = events.length;
  const totalAttendees = events.reduce(
    (total, event) => total + event.joinedPeople.length,
    0
  );
  const availableSlots = events.reduce(
    (total, event) => total + (event.totalSlots - event.joinedPeople.length),
    0
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Event Dashboard</h1>
              <p className="text-gray-300 mt-1">
                Manage your events and track attendees
              </p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg"
              style={{ backgroundColor: "oklch(0.21 0.034 264.665)" }}
            >
              <Plus className="w-5 h-5" />
              Create Event
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Events"
            value={totalEvents}
            icon={Calendar}
            iconColor="text-blue-400"
          />
          <StatsCard
            title="Total Attendees"
            value={totalAttendees}
            icon={Users}
            iconColor="text-green-400"
          />
          <StatsCard
            title="Available Slots"
            value={availableSlots}
            icon={MapPin}
            iconColor="text-purple-400"
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={openEditModal}
              onDelete={handleDeleteEvent}
              onViewAttendees={openAttendeesModal}
            />
          ))}

          {events.length === 0 && (
            <div className="col-span-full text-center py-12">
              <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                No events yet
              </h3>
              <p className="text-gray-400 mb-6">
                Create your first event to get started
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-6 py-3 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "oklch(0.21 0.034 264.665)" }}
              >
                Create Event
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <CreateEventModal
        isOpen={showCreateModal}
        onClose={() => {
          setShowCreateModal(false);
          resetForm();
        }}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
        onSave={handleCreateEvent}
      />

      <EditEventModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedEvent(null);
          resetForm();
        }}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
        onSave={handleEditEvent}
      />

      <AttendeesModal
        isOpen={showAttendeesModal}
        onClose={() => {
          setShowAttendeesModal(false);
          setSelectedEvent(null);
        }}
        event={selectedEvent}
      />
    </div>
  );
};

export default EventDashboard;
