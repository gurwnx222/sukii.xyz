// components/EventCard.js
import React from "react";
import { Eye, Edit, Trash2, MapPin, Users, Video, Globe } from "lucide-react";
import Image from "next/image";
const EventCard = ({ event, onEdit, onDelete, onViewAttendees }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700">
      {event.thumbnail && (
        <div className="h-48 overflow-hidden">
          <Image
            src={event.thumbnail}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
            <p className="text-gray-300 font-medium mb-2">{event.name}</p>
            <p className="text-gray-400 text-sm line-clamp-2">
              {event.description}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-300">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-300">
            {event.medium === "virtual" ? (
              <Video className="w-4 h-4 mr-2 flex-shrink-0" />
            ) : (
              <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
            )}
            <span className="text-sm capitalize">{event.medium} Event</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Users className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm">
              {event.joinedPeople.length} / {event.totalSlots} attendees
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  (event.joinedPeople.length / event.totalSlots) * 100
                }%`,
                backgroundColor: "oklch(0.21 0.034 264.665)",
              }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {event.totalSlots - event.joinedPeople.length} slots remaining
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onViewAttendees(event)}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View Attendees
          </button>
          <button
            onClick={() => onEdit(event)}
            className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-xl transition-colors"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(event.id)}
            className="px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-xl transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
