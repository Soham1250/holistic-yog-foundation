"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    fathersName: '',
    address: '',
    country: '',
    city: '',
    state: '',
    pinCode: '',
    phoneNo: '',
    mobile: '',
    permanentAddress: '',
    permanentCity: '',
    permanentState: '',
    permanentCountry: '',
    education: '',
    experience: '',
    expertise: '',
    institutionName: '',
    institutionEmail: '',
    institutionPhone: '',
    institutionAddress: '',
    referenceBy: '',
    referenceByCouncil: '',
    aboutYou: '',
    comments: '',
    membershipType: 'Life Member (Ajeevan Sadassya)',
    confirmInfo: false,
    agreeCode: false
  });
  
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e, type) => {
    if (e.target.files && e.target.files[0]) {
      if (type === 'profile') {
        setProfilePhoto(e.target.files[0]);
      } else if (type === 'resume') {
        setResume(e.target.files[0]);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/login');
    }, 2000);
  };

  return (
    <div className="bg-[#FDF8F3] border border-gray-200 rounded-lg min-h-screen py-8 select-none mx-auto pd-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Life Membership Form</h1>
          <p className="text-gray-700 mb-8">Make a One-Time Contribution and Enjoy Exclusive Wellness Benefits for Life</p>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Your Email (required)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="dob" className="block text-gray-700 font-medium mb-1">
                    Date of Birth (DD-MM-YYYY)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    placeholder="dd-mm-yyyy"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-gray-700 font-medium mb-1">
                    Gender (required)<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-gray-700 w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="fathersName" className="block text-gray-700 font-medium mb-1">
                    Fathers Name:<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fathersName"
                    name="fathersName"
                    value={formData.fathersName}
                    onChange={handleInputChange}
                    placeholder="Enter your father's name"
                    className="text-black   w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                    Communication Address :<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-gray-700 font-medium mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Enter your city name"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Second row of fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="city" className="block text-gray-700 font-medium mb-1">
                    City<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter city name"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-gray-700 font-medium mb-1">
                    State<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Enter state name"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="pinCode" className="block text-gray-700 font-medium mb-1">
                    Pin code<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    placeholder="Enter pincode"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phoneNo" className="block text-gray-700 font-medium mb-1">
                    Phone No<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    placeholder="Enter phone.no"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">
                    Mobile<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile.no"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="permanentAddress" className="block text-gray-700 font-medium mb-1">
                    Permanent Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="permanentAddress"
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleInputChange}
                    placeholder="Enter permanent address"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              {/* Third row of fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="permanentCity" className="block text-gray-700 font-medium mb-1">
                    Permanent City<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="permanentCity"
                    name="permanentCity"
                    value={formData.permanentCity}
                    onChange={handleInputChange}
                    placeholder="Enter city name"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="permanentState" className="block text-gray-700 font-medium mb-1">
                    Permanent State<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="permanentState"
                    name="permanentState"
                    value={formData.permanentState}
                    onChange={handleInputChange}
                    placeholder="Enter your state name"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="permanentCountry" className="block text-gray-700 font-medium mb-1">
                    Permanent Country<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="permanentCountry"
                    name="permanentCountry"
                    value={formData.permanentCountry}
                    onChange={handleInputChange}
                    placeholder="Enter your country name"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="education" className="block text-gray-700 font-medium mb-1">
                    Education<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    placeholder="Enter your educational qualification"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="experience" className="block text-gray-700 font-medium mb-1">
                    Total Experience<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Enter number of experience"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="expertise" className="block text-gray-700 font-medium mb-1">
                    Expertise<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="expertise"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleInputChange}
                    placeholder="Enter your expertise"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="institutionName" className="block text-gray-700 font-medium mb-1">
                    Name of the Institution<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="institutionName"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="institutionEmail" className="block text-gray-700 font-medium mb-1">
                    Email of the Institution
                  </label>
                  <input
                    type="email"
                    id="institutionEmail"
                    name="institutionEmail"
                    value={formData.institutionEmail}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Institution and Reference Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="institutionPhone" className="block text-gray-700 font-medium mb-1">
                    Phone No Of Institution
                  </label>
                  <input
                    type="tel"
                    id="institutionPhone"
                    name="institutionPhone"
                    value={formData.institutionPhone}
                    onChange={handleInputChange}
                    placeholder="Enter Phone.no"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="institutionAddress" className="block text-gray-700 font-medium mb-1">
                    Address of the Institution
                  </label>
                  <input
                    type="text"
                    id="institutionAddress"
                    name="institutionAddress"
                    value={formData.institutionAddress}
                    onChange={handleInputChange}
                    placeholder="Enter address"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="referenceBy" className="block text-gray-700 font-medium mb-1">
                    Reference By<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="referenceBy"
                    name="referenceBy"
                    value={formData.referenceBy}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
                    required
                  >
                    <option value="">Select Referred By</option>
                    <option value="friend">Friend</option>
                    <option value="colleague">Colleague</option>
                    <option value="website">Website</option>
                    <option value="social">Social Media</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="referenceByCouncil" className="block text-gray-700 font-medium mb-1">
                    Reference By<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="referenceByCouncil"
                    name="referenceByCouncil"
                    value={formData.referenceByCouncil}
                    onChange={handleInputChange}
                    placeholder="Executive Council Member Name"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              {/* File Uploads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Attached your Profile photo<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="profilePhoto"
                    onChange={(e) => handleFileChange(e, 'profile')}
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">Please attached your passport photos</p>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Attached your resume<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    onChange={(e) => handleFileChange(e, 'resume')}
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">Please attached your resume</p>
                </div>
              </div>

              {/* About You and Comments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="aboutYou" className="block text-gray-700 font-medium mb-1">
                    About You (100-Word Description)<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="aboutYou"
                    name="aboutYou"
                    value={formData.aboutYou}
                    onChange={handleInputChange}
                    placeholder="Enter your description"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="comments" className="block text-gray-700 font-medium mb-1">
                    Comment or Message
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
                  ></textarea>
                </div>
              </div>

              {/* Membership Type and Agreements */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-3">
                  Type of Membership (required)<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="lifeMember"
                    name="membershipType"
                    value="Life Member (Ajeevan Sadassya)"
                    onChange={handleInputChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="lifeMember" className="text-gray-700">
                    Life Member (Ajeevan Sadassya)
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="confirmInfo"
                    name="confirmInfo"
                    checked={formData.confirmInfo}
                    onChange={handleInputChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="confirmInfo" className="text-gray-700">
                    I confirm that the information given in this form is true, complete and accurate.<span className="text-red-500">*</span>
                  </label>
                </div>
                
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="agreeCode"
                    name="agreeCode"
                    checked={formData.agreeCode}
                    onChange={handleInputChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="agreeCode" className="text-gray-700">
                    I have read and agree to abide by the Holistic Yog Foundation <Link href="#" className="text-orange-500 hover:underline">Code of conduct</Link> and ethics.<span className="text-red-500">*</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account? <Link href="/login" className="text-orange-500 hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
      
      {/* Add global styles to prevent text selection */}
      <style jsx global>{`
        .select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
}
