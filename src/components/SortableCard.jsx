// File: components/SortableCard.jsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableCard({ activity }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: activity.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 border rounded shadow mb-3"
    >
      <div className="text-sm text-gray-600">{activity.time}</div>
      <div className="font-medium text-gray-800">{activity.title}</div>
    </div>
  );
}
