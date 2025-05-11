import React from "react";

export default function MembershipModel() {
  return (
    <pre>
{`interface Membership {
  id: string;
  userId: string;
  plan: string;
  startDate: Date;
  endDate?: Date;
  user?: User;
}`}
    </pre>
  );
}
