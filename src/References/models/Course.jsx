import React from "react";

export default function CourseModel() {
  return (
    <pre>
{`interface Course {
  id: string;
  image?: string;
  instructorId: string;
  instructor?: InstructorProfile;
  createdAt: Date;
  updatedAt: Date;
}`}
    </pre>
  );
}
