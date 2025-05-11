import React from "react";

export default function InstructorProfileModel() {
  return (
    <pre>
{`interface InstructorProfile {
  id: string;
  userId: string;
  experience?: string;
  languages?: string[];
  certifications?: string[];
  courses?: Course[];
}`}
    </pre>
  );
}
