// components/CreateEventModal.js
import React, { useRef } from "react";
import { Upload } from "lucide-react";
import Modal from "./Modal";
import FormInput from "./FormInput";
import Image from "next/image";

const CreateEventModal = ({
  isOpen,
  onClose,
  currentEvent,
  setCurrentEvent,
  onSave,
}) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCurrentEvent({ ...currentEvent, thumbnail: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Event">
      <div className="space-y-6">
        <FormInput
          label="Event Title"
          value={currentEvent.title}
          onChange={(e) =>
            setCurrentEvent({ ...currentEvent, title: e.target.value })
          }
          placeholder="Enter event title"
          required
        />

        <FormInput
          label="Event Name"
          value={currentEvent.name}
          onChange={(e) =>
            setCurrentEvent({ ...currentEvent, name: e.target.value })
          }
          placeholder="Enter event name"
          required
        />

        <FormInput
          label="Description"
          type="textarea"
          value={currentEvent.description}
          onChange={(e) =>
            setCurrentEvent({ ...currentEvent, description: e.target.value })
          }
          placeholder="Describe your event"
          rows={4}
          required
        />

        <FormInput
          label="Location"
          value={currentEvent.location}
          onChange={(e) =>
            setCurrentEvent({ ...currentEvent, location: e.target.value })
          }
          placeholder="Enter event location"
        />

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Event Medium
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="physical"
                checked={currentEvent.medium === "physical"}
                onChange={(e) =>
                  setCurrentEvent({ ...currentEvent, medium: e.target.value })
                }
                className="mr-2 text-blue-500"
              />
              <span className="text-gray-300">Physical</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="virtual"
                checked={currentEvent.medium === "virtual"}
                onChange={(e) =>
                  setCurrentEvent({ ...currentEvent, medium: e.target.value })
                }
                className="mr-2 text-blue-500"
              />
              <span className="text-gray-300">Virtual</span>
            </label>
          </div>
        </div>

        <FormInput
          label="Total Slots"
          type="number"
          value={currentEvent.totalSlots}
          onChange={(e) =>
            setCurrentEvent({
              ...currentEvent,
              totalSlots: parseInt(e.target.value) || 0,
            })
          }
          placeholder="Enter total slots"
        />

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Event Thumbnail
          </label>
          <div className="flex items-center gap-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 bg-gray-700 text-gray-300 rounded-xl hover:bg-gray-600 transition-colors"
            >
              <Upload className="w-4 h-4" />
              Upload Image
            </button>
            {currentEvent.thumbnail && (
              <div className="relative">
                <Image
                  src={currentEvent.thumbnail}
                  alt="Thumbnail"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <button
                  onClick={() =>
                    setCurrentEvent({ ...currentEvent, thumbnail: null })
                  }
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-600 bg-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="flex-1 px-6 py-3 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "oklch(0.21 0.034 264.665)" }}
          >
            Create Event
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateEventModal;
