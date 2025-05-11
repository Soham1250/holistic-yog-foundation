import React from "react";

export default function UserModel() {
  return (
    <pre>
{`type UserRole = 'MEMBER' | 'INSTRUCTOR' | 'ADMIN';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  gender: string;
  fathersName: string;
  address: string;
  country: string;
  city: string;
  state: string;
  pinCode: string;
  phoneNo: string;
  mobile: string;
  permanentAddress: string;
  permanentCity: string;
  permanentState: string;
  permanentCountry: string;
  education: string;
  experience: string;
  expertise: string;
  institutionName: string;
  institutionEmail: string;
  institutionPhone: string;
  institutionAddress: string;
  referenceBy: string;
  referenceByCouncil: string;
  aboutYou: string;
  comments: string;
  membershipType: string;
  confirmInfo: boolean;
  agreeCode: boolean;
  profilePhoto?: string; // file upload (URL or path)
  resume?: string; // file upload (URL or path)
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}`}
    </pre>
  );
}
