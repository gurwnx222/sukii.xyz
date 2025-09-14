// components/AttendeesModal.js
import React from "react";
import { Users } from "lucide-react";
import Modal from "./Modal";

const AttendeesModal = ({ isOpen, onClose, event }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={event ? `${event.title} - Attendees` : "Attendees"}
    >
      {event && (
        <div>
          <div className="flex items-center gap-2 mb-4 text-gray-600">
            <Users size={20} />
            <span>{event.attendees?.length || 0} attendees</span>
          </div>

          {event.attendees && event.attendees.length > 0 ? (
            <div className="space-y-3">
              {event.attendees.map((attendee, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {attendee.name
                      ? attendee.name.charAt(0).toUpperCase()
                      : "U"}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {attendee.name || "Unknown User"}
                    </div>
                    {attendee.email && (
                      <div className="text-sm text-gray-500">
                        {attendee.email}
                      </div>
                    )}
                    {attendee.role && (
                      <div className="text-xs text-blue-600 font-medium">
                        {attendee.role}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Users size={48} className="mx-auto mb-4 text-gray-300" />
              <p>No attendees registered for this event yet.</p>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default AttendeesModal;
