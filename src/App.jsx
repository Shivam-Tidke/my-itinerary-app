// App.jsx
import React, { useState } from "react";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableCard from "./components/SortableCard";
import itineraryData from "./data/itinerary.json";
import "./index.css";

export default function App() {
  const [activities, setActivities] = useState(itineraryData);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      const oldIndex = activities.findIndex(a => a.id === active.id);
      const newIndex = activities.findIndex(a => a.id === over.id);
      setActivities(arrayMove(activities, oldIndex, newIndex));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-xl font-bold mb-4 text-center text-gray-500">Day Itinerary</h1>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={activities} strategy={verticalListSortingStrategy}>
            {activities.map(activity => (
              <SortableCard key={activity.id} activity={activity} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
