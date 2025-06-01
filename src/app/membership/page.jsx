"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowDownIcon, CheckIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function MembershipPage() {
  // Testimonial data
  const testimonials = [
    {
      name: "Reena Singh",
      role: "Life Member",
      rating: 5,
      text: "Joining the Evening Relaxation course has been life-changing. My sleep has improved, and I feel more calm every evening. The instructors are so warm and knowledgeable!"
    },
    {
      name: "Reena Singh",
      role: "Life Member",
      rating: 5,
      text: "Joining the Evening Relaxation course has been life-changing. My sleep has improved, and I feel more calm every evening. The instructors are so warm and knowledgeable!"
    },
    {
      name: "Reena Singh",
      role: "Life Member",
      rating: 5,
      text: "Joining the Evening Relaxation course has been life-changing. My sleep has improved, and I feel more calm every evening. The instructors are so warm and knowledgeable!"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What does the annual membership include?",
      answer: "Our annual membership includes unlimited access to all yoga classes, workshops, online resources, and special events. Members also receive discounts on retreats and merchandise."
    },
    {
      question: "Is there a trial period before purchasing a membership?",
      answer: "Yes, we offer a 7-day trial period for new members to experience our classes and facilities before committing to a full membership."
    },
    {
      question: "Can I cancel my membership anytime?",
      answer: "Yes, you can cancel your membership at any time. We require a 30-day notice for cancellations."
    },
    {
      question: "Is the membership fee refundable?",
      answer: "Membership fees are non-refundable, but we do offer the option to freeze your membership for up to 3 months per year if needed."
    },
    {
      question: "Do I need to renew my membership manually?",
      answer: "No, memberships automatically renew unless you notify us that you wish to cancel. You'll receive a reminder email 14 days before renewal."
    }
  ];

  return (
    <div className="bg-white min-h-screen select-none">
      {/* Header Section */}
      <div className="bg-white py-12 text-center">
        <h1 className="text-3xl font-bold text-black mb-2">Become a Member</h1>
        <p className="text-black max-w-2xl mx-auto">
          Unlimited yoga, mindfulness & more — starting at just ₹799/month.
        </p>
      </div>

      {/* Membership Plans */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Life Membership */}
          <div className="relative">
            {/* Semicircle with exact dimensions and gradient */}
            <div
              className="w-[350px] h-[365px] rounded-tl-[200px] rounded-tr-[200px] overflow-hidden mx-auto"
              style={{
                background: 'linear-gradient(to bottom, hsla(208, 100%, 69%, 0.53), hsla(0, 0%, 100%, 1))'
              }}
            >
              <div className="pt-16 pb-8 px-6 text-center">
                <h3 className="text-xl font-bold text-black mb-4">Life Membership</h3>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black pointer-events-none">Receive blessings of Yoga Gurus and Acharyas at HYF events.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black pointer-events-none">A LM would be provided a Unique ID and a Certificate of Membership.</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/membershipform">
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full text-sm transition-colors">
                Join Now
              </button>
            </Link>
          </div>

          {/* Annual Membership */}
          <div className="relative">
            <div
              className="w-[350px] h-[365px] rounded-tl-[200px] rounded-tr-[200px] overflow-hidden mx-auto"
              style={{
                background: 'linear-gradient(to bottom, hsla(208, 100%, 69%, 0.53), hsla(0, 0%, 100%, 1))'
              }}
            >
              <div className="pt-16 pb-8 px-6 text-center">
                <h3 className="text-xl font-bold text-black mb-4">Annual Membership</h3>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black pointer-events-none">Unlimited access to all yoga classes and workshops.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black pointer-events-none">Priority registration for special events and retreats.</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/membershipform">
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full text-sm transition-colors">
                Join Now
              </button>
            </Link>
          </div>

          {/* Monthly Membership */}
          <div className="relative">
            <div
              className="w-[350px] h-[365px] rounded-tl-[200px] rounded-tr-[200px] overflow-hidden mx-auto"
              style={{
                background: 'linear-gradient(to bottom, hsla(208, 100%, 69%, 0.53), hsla(0, 0%, 100%, 1))'
              }}
            >
              <div className="pt-16 pb-8 px-6 text-center">
                <h3 className="text-xl font-bold text-black mb-4">Monthly Membership</h3>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black pointer-events-none">Access to all regular yoga classes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black pointer-events-none">Discounts on workshops and merchandise.</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/membershipform">
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full text-sm transition-colors">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#FFF3E2] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What Our Clients Are Saying?</h2>
          <p className="text-center text-gray-600 mb-8">Voices of Transformation and Wellness</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 mb-4 pointer-events-none">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src="/images/People/reena_singh.png"
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
