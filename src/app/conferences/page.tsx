'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

// Conference data
const conferenceData = {
  title: "Conferences",
  subtitle: "Join Enlightening Sessions Led by Renowned Wellness Experts",
  description: "Join us for inspiring conferences that bring together yoga experts, wellness enthusiasts, and spiritual guides from around the world. These immersive events offer a chance to deepen your practice, gain new insights, and connect with a like-minded community committed to holistic living and personal growth.",
  mainEvent: {
    title: "Flow & Focus International Meetup",
    date: "July 03/2025",
    location: "JW Lotus Mahalaxmi New mumbai",
    description: "Flow & Focus International Meetup brings together global yoga enthusiasts and wellness experts for a powerful experience of mindfulness and movement. Through guided sessions and inspiring talks, this event helps you reconnect with your body and mind while building a supportive, global community."
  },
  speakers: [
    {
      name: "Vinay Savla",
      title: "Certified Yoga Therapist & Wellness Coach",
      image: "/images/People/pexels-stefanstefancik-91227.jpg",
      bio: "With over 15 years of experience, Vinay Savla has guided thousands toward holistic well-being through his innovative approach to yoga. Specializing in holistic and restorative yoga, blending traditional practices with modern techniques, Vinay has been a keynote speaker at international wellness summits and continues to inspire through his teachings that emphasize the deep understanding of mind-body balance."
    }
  ],
  schedules: [
    {
      day: "Day 1",
      events: [
        {
          date: "July 03/2025",
          title: "Flow & Focus International Meetup",
          description: "Flow & Focus International Meetup brings together global yoga enthusiasts and wellness experts for a powerful experience of mindfulness and movement. Through guided sessions and inspiring talks, this event helps you reconnect with your body and mind while building a supportive, global community.",
          speaker: "Vinay Savla",
          speakerTitle: "Certified Yoga Therapist & Wellness Coach"
        }
      ]
    },
    {
      day: "Day 2",
      events: [
        {
          date: "July 04/2025",
          title: "Flow & Focus International Meetup",
          description: "Flow & Focus International Meetup brings together global yoga enthusiasts and wellness experts for a powerful experience of mindfulness and movement. Through guided sessions and inspiring talks, this event helps you reconnect with your body and mind while building a supportive, global community.",
          speaker: "Vinay Savla",
          speakerTitle: "Certified Yoga Therapist & Wellness Coach"
        }
      ]
    },
    {
      day: "Day 3",
      events: [
        {
          date: "July 05/2025",
          title: "Flow & Focus International Meetup",
          description: "Flow & Focus International Meetup brings together global yoga enthusiasts and wellness experts for a powerful experience of mindfulness and movement. Through guided sessions and inspiring talks, this event helps you reconnect with your body and mind while building a supportive, global community.",
          speaker: "Vinay Savla",
          speakerTitle: "Certified Yoga Therapist & Wellness Coach"
        }
      ]
    }
  ],
  faqs: [
    {
      question: "what is the conference about",
      answer: "The conference focuses on holistic wellness, yoga practices, and mindfulness techniques. It brings together experts from around the world to share their knowledge and experience."
    },
    {
      question: "when and where will the conference take place",
      answer: "The conference will take place on July 3-5, 2025 at JW Lotus Mahalaxmi in New Mumbai, India."
    },
    {
      question: "How can I register for the conference",
      answer: "You can register for the conference by clicking the 'Join Now' button on this page and filling out the registration form."
    }
  ]
};

export default function ConferencesPage() {
  const [activeTab, setActiveTab] = useState('Day 1');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (question: string) => {
    if (expandedFaq === question) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(question);
    }
  };

  return (
    <div className="bg-[#FDF8F3] min-h-screen select-none">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">{conferenceData.title}</h1>
            <h2 className="text-xl text-black mb-6">{conferenceData.subtitle}</h2>
            <p className="text-black mb-8">{conferenceData.description}</p>
            <Link href="/signup" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors">
              Join Now
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Semi-circle image container with rounded top corners */}
            <div className="relative w-[475px] h-[537px] overflow-hidden">
              <div className="absolute w-full h-full" style={{ 
                borderTopLeftRadius: '239px', 
                borderTopRightRadius: '239px',
                overflow: 'hidden'
              }}>
                <Image
                  src="/images/People/pexels-olly-774095.jpg"
                  alt="Conference participant"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Event Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 md:mb-0">{conferenceData.mainEvent.title}</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="flex items-center mr-8 mb-2 sm:mb-0">
                <CalendarIcon className="h-5 w-5 text-orange-500 mr-2" />
                <span className="text-gray-600">{conferenceData.mainEvent.date}</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-orange-500 mr-2" />
                <span className="text-gray-600">{conferenceData.mainEvent.location}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto text-center">
            {conferenceData.mainEvent.description}
          </p>
        </div>
      </section>

      {/* Conference Speakers Section */}
      <section className="py-16 bg-[#FDF8F3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Conference Speakers</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              {/* Semi-circle image container */}
              <div className="relative w-[230px] h-[230px] mx-auto overflow-hidden rounded-full">
                <Image
                  src={conferenceData.speakers[0].image}
                  alt={conferenceData.speakers[0].name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">Meet The Inspiring Voices Leading Our Transformational Journey</h3>
              <h4 className="text-xl font-medium text-gray-800 mb-2">{conferenceData.speakers[0].name}</h4>
              <p className="text-gray-600 mb-4">{conferenceData.speakers[0].title}</p>
              <p className="text-gray-600">{conferenceData.speakers[0].bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Schedules Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Conference Schedules</h2>
          
          {/* Day Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              {conferenceData.schedules.map((schedule) => (
                <button
                  key={schedule.day}
                  className={`px-8 py-3 rounded-full transition-colors ${
                    activeTab === schedule.day
                      ? 'bg-white text-black shadow-md border-2 border-orange-500'
                      : 'bg-transparent hover:bg-gray-100 border-2 border-gray-300 text-gray-500'
                  }`}
                  onClick={() => setActiveTab(schedule.day)}
                >
                  {schedule.day}
                </button>
              ))}
            </div>
          </div>
          
          {/* Schedule Content */}
          <div className="max-w-4xl mx-auto">
            {conferenceData.schedules.map((schedule) => (
              <div key={schedule.day} className={activeTab === schedule.day ? 'block' : 'hidden'}>
                {schedule.events.map((event, index) => (
                  <div key={index} className="mb-10 pb-10 border-b border-gray-200 last:border-0">
                    <div className="mb-4">
                      <span className="text-gray-600">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center">
                      <span className="text-gray-800 font-medium">{event.speaker}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600">{event.speakerTitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#FDF8F3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {conferenceData.faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 bg-white rounded-full overflow-hidden shadow-sm"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(faq.question)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedFaq === faq.question ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === faq.question && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Join Our Conference?</h2>
          <p className="text-black max-w-2xl mx-auto mb-8">
            Register now to secure your spot at this transformative event. Connect with experts, learn new techniques, and become part of our growing community.
          </p>
          <Link href="/signup" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}
