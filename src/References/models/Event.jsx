import React from "react";

export default function EventModel() {
  return (
    <pre>
{`interface Event {
  id: string;
  date: Date;
  venue: string;
  speakers?: User[];
  bannerImage?: string;
  createdAt: Date;
  updatedAt: Date;
}`}
    </pre>
  );
}
