"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function MembershipFormPage() {
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
    agreeCode: false,
    transactionId: '',
    paymentScreenshot: null
  });

  // Function to handle numeric input
  const handleNumericInput = (e) => {
    const { name, value } = e.target;
    // Only allow numbers and backspace/delete
    if (value === '' || /^\d+$/.test(value)) {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
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
    <div className="bg-[#FFF3E2] border border-gray-200 rounded-lg min-h-screen py-8 select-none mx-auto pd-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Become a Member</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join Holistic Yog Foundation and become part of a thriving community dedicated to wellness and personal growth.
              </p>
            </div>
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
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    max={new Date().toISOString().split('T')[0]} // Prevent future dates
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
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
                    Pin code (<span className="text-gray-500 ">numeric values only</span>)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleNumericInput}
                    placeholder="Enter pincode"
                    maxLength="6"
                    pattern="\d{6}"
                    title="Please enter a valid 6-digit pincode"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phoneNo" className="block text-gray-700 font-medium mb-1">
                    Phone No (<span className="text-gray-500">numeric values only</span>)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleNumericInput}
                    placeholder="Enter phone number"
                    maxLength="10"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">
                    Mobile (<span className="text-gray-500">numeric values only</span>)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleNumericInput}
                    placeholder="Enter your mobile number"
                    maxLength="10"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
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
                    onChange={handleNumericInput}
                    placeholder="Enter institution phone number"
                    maxLength="15"
                    pattern="[0-9]+"
                    title="Please enter a valid phone number"
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
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
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

              {/* Payment Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Payment Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Bank Transfer Option */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-full">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">
                      <div className="flex flex-wrap items-center">
                        <svg className="flex-shrink-0 w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <span className="whitespace-normal">Pay directly to the bank</span>
                      </div>
                    </h4>
                    <div className="space-y-3 text-gray-700">
                      <p className="font-medium">Holistic YOG Foundation</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-gray-500">Account No.:</span>
                          <span className="font-mono text-sm">120100000190911</span>
                          
                          <span className="text-gray-500">IFSC:</span>
                          <span className="font-mono">TJSB0000058</span>
                          
                          <span className="text-gray-500">MICR Code:</span>
                          <span className="font-mono">400109030</span>
                          
                          <span className="text-gray-500">Bank Name:</span>
                          <span className="font-mono">TJSB SAHAKARI BANK LTD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* UPI Payment Option */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Pay via UPI using QR Code
                    </h4>
                    <div className="flex flex-col items-center">
                      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4 flex justify-center w-full">
                        <div className="relative w-full max-w-[280px]">
                          <Image 
                            src="/images/QR Code.jpg" 
                            alt="UPI QR Code" 
                            width={280}
                            height={280}
                            className="rounded w-full h-auto"
                            priority
                          />
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 text-center">Scan the QR code using any UPI app to make payment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transaction ID and Payment Proof */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Payment Confirmation</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Transaction ID */}
                  <div className="md:pr-4">
                    <div className="flex items-center mb-1">
                      <label htmlFor="transactionId" className="text-gray-700 font-medium">
                        Transaction ID<span className="text-red-500">*</span>
                      </label>
                      <div className="group relative ml-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 text-gray-400 hover:text-gray-500 cursor-help" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                          />
                        </svg>
                        <div className="absolute z-10 hidden group-hover:block w-72 bg-white p-3 rounded-lg shadow-lg border border-gray-200 text-sm text-gray-600 mt-1">
                          A Transaction ID in India is a unique number assigned to each digital or bank transaction. It helps identify, track, and verify payments across systems like UPI, NEFT, or credit cards. This ID ensures secure and traceable financial operations.
                        </div>
                      </div>
                    </div>
                    <input
                      type="text"
                      id="transactionId"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleInputChange}
                      placeholder="Enter UPI Transaction ID / Bank Reference Number"
                      className="text-black w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1 ml-1">Please enter the transaction ID from your payment receipt</p>
                  </div>
                  
                  {/* Payment Screenshot Upload */}
                  <div className="md:pl-4">
                    <label className="block text-gray-700 font-medium mb-1">
                      Payment Screenshot<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center">
                      <label
                        htmlFor="payment-screenshot"
                        className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        <span>Upload Screenshot</span>
                        <input
                          id="payment-screenshot"
                          name="paymentScreenshot"
                          type="file"
                          accept="image/*,.pdf"
                          className="sr-only"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setPaymentScreenshot(e.target.files[0]);
                            }
                          }}
                          required
                        />
                      </label>
                      <span className="ml-4 text-sm text-gray-500">
                        {paymentScreenshot ? paymentScreenshot.name : 'No file chosen'}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Upload a clear screenshot of your payment confirmation (JPG, PNG, or PDF, max 5MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Membership Type and Agreements */}
              <div className="mb-8">
                <div className="flex items-center mb-4 text-lg">
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
                
                {/* <div className="flex items-center mb-4 text-lg">
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
                    I have read and agree to abide by the Holistic Yog Foundation and ethics.<span className="text-red-500">*</span>
                  </label>
                </div> */}
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
