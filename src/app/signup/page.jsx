"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    membershipType: 'Life Member (Aarohan Sadasya)',
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
    pincode: '',
    phoneNo: '',
    mobile: '',
    permanentAddress: '',
    permanentCity: '',
    permanentState: '',
    permanentCountry: '',
    education: '',
    totalExperience: '',
    expertise: '',
    institutionName: '',
    institutionEmail: '',
    institutionPhone: '',
    institutionAddress: '',
    referenceBy: '',
    referenceByMember: '',
    profilePhoto: null,
    resume: null,
    about: '',
    comment: '',
    agreeToTerms: false,
    confirmAccuracy: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    const requiredFields = [
      'firstName', 'lastName', 'email', 'dob', 'gender', 
      'fathersName', 'address', 'city', 'state', 'pincode', 
      'phoneNo', 'mobile', 'agreeToTerms', 'confirmAccuracy'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            membershipType: 'Life Member (Aarohan Sadasya)',
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
            pincode: '',
            phoneNo: '',
            mobile: '',
            permanentAddress: '',
            permanentCity: '',
            permanentState: '',
            permanentCountry: '',
            education: '',
            totalExperience: '',
            expertise: '',
            institutionName: '',
            institutionEmail: '',
            institutionPhone: '',
            institutionAddress: '',
            referenceBy: '',
            referenceByMember: '',
            profilePhoto: null,
            resume: null,
            about: '',
            comment: '',
            agreeToTerms: false,
            confirmAccuracy: false
          });
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white min-h-screen select-none">
      {/* Header */}
      <div className="bg-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/membership" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Membership
          </Link>
          
          <h1 className="text-3xl font-bold text-black mt-4 mb-2">Life Membership Form</h1>
          <p className="text-gray-700 max-w-2xl">
            Make a One-Time Contribution and Enjoy Exclusive Wellness Benefits for Life
          </p>
          
          <div className="mt-4 flex justify-end">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full flex items-center">
              <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
              Download Form
            </button>
          </div>
        </div>
      </div>
      
      {/* Form Container */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-[#FFF8EE] rounded-lg p-8">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-700 mb-2">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">
                Your Email (required)<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Date of Birth (DD-MM-YYYY)<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.dob ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                />
                <CalendarIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Gender (required)<span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.gender ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Father's Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
                placeholder="Enter your father's name"
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.fathersName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.fathersName && <p className="text-red-500 text-sm mt-1">{errors.fathersName}</p>}
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Communication Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your city name"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city name"
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>
            
            <div>
              <label className="block text-black mb-2">
                State<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state name"
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.state ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
            </div>
          </div>
          
          {/* Contact & Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-black mb-2">
                Pin code<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter pincode"
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.pincode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Phone No<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="Enter phone no"
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.phoneNo ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.phoneNo && <p className="text-red-500 text-sm mt-1">{errors.phoneNo}</p>}
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Mobile<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile no"
                className={`text-black bg-white w-full px-4 py-2 rounded-full border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Permanent Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                placeholder="Enter permanent address"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Permanent City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="permanentCity"
                value={formData.permanentCity}
                onChange={handleChange}
                placeholder="Enter city name"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Permanent State<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="permanentState"
                value={formData.permanentState}
                onChange={handleChange}
                placeholder="Enter your state name"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Permanent Country<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="permanentCountry"
                value={formData.permanentCountry}
                onChange={handleChange}
                placeholder="Enter your country name"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Education<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Enter your educational qualification"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Total Experience<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="totalExperience"
                value={formData.totalExperience}
                onChange={handleChange}
                placeholder="Enter number of experience"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Expertise<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                placeholder="Enter your expertise"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          
          {/* Institution Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-black mb-2">
                Name of the Institution<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                placeholder="Enter name"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Email of the Institution
              </label>
              <input
                type="email"
                name="institutionEmail"
                value={formData.institutionEmail}
                onChange={handleChange}
                placeholder="Enter Email"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Phone No Of Institution
              </label>
              <input
                type="text"
                name="institutionPhone"
                value={formData.institutionPhone}
                onChange={handleChange}
                placeholder="Enter Phone no"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Address of the Institution
              </label>
              <input
                type="text"
                name="institutionAddress"
                value={formData.institutionAddress}
                onChange={handleChange}
                placeholder="Enter address"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Reference By<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="referenceBy"
                value={formData.referenceBy}
                onChange={handleChange}
                placeholder="Select Referred By"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Reference By<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="referenceByMember"
                value={formData.referenceByMember}
                onChange={handleChange}
                placeholder="Executive Council Member Name"
                className="text-black bg-white w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          
          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-black mb-2">
                Attached your Profile photo<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <label className="bg-white px-4 py-2 rounded-l-full border border-gray-300 cursor-pointer hover:bg-gray-50">
                  Choose File
                  <input
                    type="file"
                    name="profilePhoto"
                    onChange={handleChange}
                    className="hidden"
                    accept="image/*"
                  />
                </label>
                <span className="px-4 py-2 rounded-r-full border border-l-0 border-gray-300 bg-gray-50 flex-grow">
                  {formData.profilePhoto ? formData.profilePhoto.name : 'No file chosen'}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Please attached your passport photo</p>
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Attached your resume<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <label className="bg-white px-4 py-2 rounded-l-full border border-gray-300 cursor-pointer hover:bg-gray-50">
                  Choose File
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                </label>
                <span className="px-4 py-2 rounded-r-full border border-l-0 border-gray-300 bg-gray-50 flex-grow">
                  {formData.resume ? formData.resume.name : 'No file chosen'}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Please attached your resume</p>
            </div>
          </div>
          
          {/* Text Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-black mb-2">
                About You (100-Word Description)<span className="text-red-500">*</span>
              </label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="Enter your description"
                rows="5"
                className="text-black w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-black mb-2">
                Comment or Message
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                className="text-black w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
          </div>
          
          {/* Membership Type & Agreements */}
          <div className="mb-8">
            <label className="block text-black mb-2">
              Type of Membership (required)<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="lifeMember"
                name="membershipType"
                value="Life Member (Aarohan Sadasya)"
                onChange={handleChange}
                className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
              />
              <label htmlFor="lifeMember" className="ml-2 text-black">
                Life Member (Aarohan Sadasya)
              </label>
            </div>
            
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="confirmAccuracy"
                name="confirmAccuracy"
                checked={formData.confirmAccuracy}
                onChange={handleChange}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="confirmAccuracy" className="ml-2 text-black">
                I confirm that the information given in this form is true, complete and accurate.<span className="text-red-500">*</span>
              </label>
            </div>
            
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-black">
                I have read and agree to abide by the Holistic Yog Foundation <Link href="#" className="text-orange-500 underline">Code of conduct</Link> and ethics.<span className="text-red-500">*</span>
              </label>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-8 rounded-full transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
          
          {/* Success Message */}
          {submitSuccess && (
            <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
              Your membership application has been submitted successfully! We will contact you shortly.
            </div>
          )}
        </form>
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
