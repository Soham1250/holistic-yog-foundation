'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// This would normally come from an API or data fetch
const articles = [
  {
    id: 1,
    title: 'Yoga in Managing Sciatica',
    date: 'Friday, May 15, 2024',
    readTime: '10 min read',
    pdfUrl: '/pdfs/Articles/Yoga in Managing Sciatica.pdf',
    excerpt: 'Explore how yoga can effectively help in managing and relieving sciatica pain through targeted postures and breathing techniques.',
  },
  {
    id: 2,
    title: 'Yoga for Cervical Health',
    date: 'Wednesday, April 30, 2024',
    readTime: '8 min read',
    pdfUrl: '/pdfs/Articles/cervical.pdf',
    excerpt: 'Discover gentle yoga practices specifically designed to improve cervical spine health and reduce neck pain.',
  },
  {
    id: 3,
    title: 'Holistic Approach to Yoga - Dr. Balwant Singh',
    date: 'Monday, June 3, 2024',
    readTime: '12 min read',
    pdfUrl: '/pdfs/Articles/Dr. Balwant Singh HYF.pdf',
    excerpt: 'Insights from Dr. Balwant Singh on integrating traditional yoga practices with modern therapeutic approaches for holistic well-being.'
  },
  {
    id: 4,
    title: 'Therapeutic Yoga Insights - Dr. Nilesh Bansode',
    date: 'Friday, May 24, 2024',
    readTime: '15 min read',
    pdfUrl: '/pdfs/Articles/Dr. Nilesh Bansode HYF.pdf',
    excerpt: 'Dr. Nilesh Bansode shares expert knowledge on therapeutic applications of yoga for various health conditions.'
  }
];

export default function ArticlePage({ params }) {
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the article data here based on params.id
    const foundArticle = articles.find(article => article.id === parseInt(params.id));
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      // Redirect to 404 or articles list if article not found
      router.push('/articles');
    }
    setLoading(false);
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!article) {
    return null; // Redirect will happen in useEffect
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back button and title */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link
              href="/articles"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Articles
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 ml-4">{article.title}</h1>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {article.date} • {article.readTime}
            </p>
          </div>

          <div className="w-full h-[calc(100vh-200px)]">
            <iframe
              src={`${article.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              className="w-full h-full"
              title={article.title}
            >
              <p>Your browser does not support iframes. You can <a href={article.pdfUrl} className="text-blue-600 hover:underline">download the PDF</a> instead.</p>
            </iframe>
          </div>

          <div className="p-4 border-t border-gray-200 text-right">
            <a
              href={article.pdfUrl}
              download
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
