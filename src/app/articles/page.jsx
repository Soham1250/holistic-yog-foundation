'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ArticlesPage() {
    // Articles data using the available PDFs
    const articles = [
        {
            id: 1,
            title: 'Yoga in Managing Sciatica',
            readTime: '10 min read',
            pdfUrl: '/pdfs/Articles/Yoga in Managing Sciatica.pdf',
            excerpt: 'Explore how yoga can effectively help in managing and relieving sciatica pain through targeted postures and breathing techniques.'
        },
        {
            id: 2,
            title: 'Yoga for Cervical Health',
            readTime: '8 min read',
            pdfUrl: '/pdfs/Articles/cervical.pdf',
            excerpt: 'Discover gentle yoga practices specifically designed to improve cervical spine health and reduce neck pain.'
        },
        {
            id: 3,
            title: 'Holistic Approach to Yoga - Dr. Balwant Singh',
            readTime: '12 min read',
            pdfUrl: '/pdfs/Articles/Dr. Balwant Singh HYF.pdf',
            excerpt: 'Insights from Dr. Balwant Singh on integrating traditional yoga practices with modern therapeutic approaches for holistic well-being.'
        },
        {
            id: 4,
            title: 'Therapeutic Yoga Insights - Dr. Nilesh Bansode',
            readTime: '15 min read',
            pdfUrl: '/pdfs/Articles/Dr. Nilesh Bansode HYF.pdf',
            excerpt: 'Dr. Nilesh Bansode shares expert knowledge on therapeutic applications of yoga for various health conditions.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Articles</h1>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto">
                        Explore our latest articles on yoga, wellness, and healthy living.
                    </p>
                </div>
            </header>   

            {/* Main Content */}
            <main className="bg-[#FFF3E2] container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article) => (
                        <Link
                            href={`/articles/${article.id}`}
                            key={article.id}
                            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-blue-50 transform hover:-translate-y-1 bg-white"
                        >
                            <div className="p-6 flex flex-col justify-between h-full">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-4">
                                        {article.readTime}
                                    </p>
                                    <p className="text-gray-600">
                                        {article.excerpt}
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center text-blue-600 text-sm font-medium">
                                    Read Article
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </main>
        </div>
    );
}