import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blog() {
    useEffect(() => {
        document.title = 'IT Blog & Insights - YugAntar Technologies Ahmedabad';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Latest insights on web development, mobile apps, AI, and IT trends in Ahmedabad. Expert articles from YugAntar Technologies.');
        }
    }, []);

    const articles = [
        {
            title: "Top 10 Web Development Trends in Ahmedabad 2024",
            excerpt: "Discover the latest web development trends shaping the Ahmedabad tech scene. From AI-powered websites to progressive web apps.",
            date: "January 15, 2024",
            readTime: "5 min read",
            category: "Web Development",
            slug: "web-development-trends-ahmedabad-2024"
        },
        {
            title: "How Mobile Apps Are Transforming Businesses in Gujarat",
            excerpt: "Explore how mobile applications are revolutionizing business operations across Gujarat's industrial landscape.",
            date: "January 10, 2024",
            readTime: "7 min read",
            category: "Mobile Development",
            slug: "mobile-apps-transforming-businesses-gujarat"
        },
        {
            title: "AI & Machine Learning Solutions for Ahmedabad Startups",
            excerpt: "Learn how AI and ML technologies can give your Ahmedabad startup a competitive edge in the market.",
            date: "January 5, 2024",
            readTime: "6 min read",
            category: "AI & ML",
            slug: "ai-ml-solutions-ahmedabad-startups"
        },
        {
            title: "The Complete Guide to Digital Marketing in Gujarat",
            excerpt: "Master digital marketing strategies specifically tailored for businesses operating in Gujarat's unique market.",
            date: "December 28, 2023",
            readTime: "8 min read",
            category: "Digital Marketing",
            slug: "digital-marketing-guide-gujarat"
        },
        {
            title: "Cloud Computing: Benefits for SMEs in Ahmedabad",
            excerpt: "Understand how cloud solutions can help small and medium enterprises in Ahmedabad scale efficiently.",
            date: "December 20, 2023",
            readTime: "4 min read",
            category: "Cloud Solutions",
            slug: "cloud-computing-benefits-smes-ahmedabad"
        },
        {
            title: "Cybersecurity Best Practices for Gujarat Businesses",
            excerpt: "Essential cybersecurity measures every business in Gujarat should implement to protect against digital threats.",
            date: "December 15, 2023",
            readTime: "6 min read",
            category: "Cybersecurity",
            slug: "cybersecurity-best-practices-gujarat"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <PageHeader
                title="IT Blog & Insights"
                subtitle="Stay updated with the latest trends and insights in technology"
                backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=1200&h=400&fit=crop"
            />

            <main className="flex-grow py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Latest Articles & Insights
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Expert insights on web development, mobile apps, AI, and digital transformation
                            from our team at YugAntar Technologies Ahmedabad.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-secondary-100 text-secondary-600 text-xs font-semibold rounded-full">
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-gray-500">{article.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-secondary-600 transition-colors">
                                        <Link to={`/blog/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h3>

                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{article.date}</span>

                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Newsletter Signup */}
                    
                </div>
            </main>

            <Footer />
        </div>
    );
}