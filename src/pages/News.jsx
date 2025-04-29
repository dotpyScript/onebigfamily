import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {
  FaChevronRight,
  FaCalendarAlt,
  FaUser,
  FaSearch,
  FaArrowLeft,
  FaHome,
} from 'react-icons/fa';
import SEO from '../components/SEO';

const News = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Sample news data - replace with real data from API or CMS
  const newsArticles = [
    {
      id: 1,
      title: 'Annual Fundraising Event Raises Record Amount',
      excerpt:
        "This year's annual fundraising event for One Big Happy Family exceeded all expectations, raising over 500,000 Naira for community projects.",
      content:
        "This year's annual fundraising event for One Big Happy Family exceeded all expectations, raising over 500,000 Naira for community projects. The event, held at the main barracks hall, saw unprecedented participation from community members and external donors. The funds will be allocated to various community development projects including scholarships for children, healthcare initiatives, and infrastructure improvements. The organizing committee extends heartfelt thanks to all participants and sponsors who made this success possible.",
      date: 'June 15, 2023',
      author: 'Admin',
      image: '/news_img/news1.jpg',
      category: 'Events',
    },
    {
      id: 2,
      title: 'New Community Development Initiative Launched',
      excerpt:
        'One Big Happy Family has launched a new initiative aimed at improving infrastructure within the barracks community, starting with road repairs.',
      content:
        'One Big Happy Family has launched a new initiative aimed at improving infrastructure within the barracks community. The first phase of this program focuses on repairing the main access roads within the barracks, which have deteriorated over time. The project employs local workers, providing employment opportunities while enhancing community infrastructure. Future phases will include drainage system improvements, community center renovations, and playground installations for children. This initiative demonstrates our commitment to creating a better living environment for all community members.',
      date: 'May 28, 2023',
      author: 'Board Member',
      image: '/news_img/news2.jpg',
      category: 'Community',
    },
    {
      id: 3,
      title: 'Scholarship Program Helps 10 Children This Year',
      excerpt:
        'Through generous donations, our scholarship program has supported 10 children from military families with their education expenses this year.',
      content:
        "Through generous donations, our scholarship program has supported 10 children from military families with their education expenses this year. The scholarships cover school fees, textbooks, uniforms, and other educational materials. Recipients were selected based on academic performance and financial need. The program aims to ensure that all children in our community have access to quality education regardless of their family's financial situation. We extend our gratitude to all donors who made this possible and invite continued support to expand the program in coming years.",
      date: 'April 10, 2023',
      author: 'Education Committee',
      image: '/news_img/news3.jpg',
      category: 'Education',
    },
    {
      id: 4,
      title: 'Health Awareness Workshop Series Completed',
      excerpt:
        'The six-week health awareness workshop series focused on preventive healthcare has successfully concluded with over 200 participants.',
      content:
        'The six-week health awareness workshop series focused on preventive healthcare has successfully concluded with over 200 participants from the barracks community. The workshops covered topics such as nutrition, physical fitness, maternal health, and common illnesses prevention. Healthcare professionals from nearby military hospitals volunteered their time to conduct these workshops. Participants received educational materials and basic health screening services. Given the success of this series, similar health education programs are being planned for the upcoming quarter.',
      date: 'March 5, 2023',
      author: 'Health Committee',
      image: '/news_img/news4.jpg',
      category: 'Health',
    },
    {
      id: 5,
      title: 'Community Garden Project Shows First Harvest',
      excerpt:
        'The recently established community garden project has yielded its first harvest, providing fresh vegetables for participating families.',
      content:
        'The recently established community garden project has yielded its first harvest, providing fresh vegetables for participating families. Located on previously unused land within the barracks, the garden now has 20 plots managed by different families. The initiative promotes sustainable food production, healthier diets, and community bonding. Participants share gardening techniques and excess produce with elderly community members. The project has been so successful that there are plans to expand the garden area and include fruit trees in the next planting season.',
      date: 'February 20, 2023',
      author: 'Environmental Team',
      image: '/news_img/news5.jpg',
      category: 'Community',
    },
    {
      id: 6,
      title: 'Youth Sports Program Launches With Football Tournament',
      excerpt:
        'The new youth sports program kicked off with an inter-barracks football tournament featuring teams from five neighboring communities.',
      content:
        'The new youth sports program kicked off with an inter-barracks football tournament featuring teams from five neighboring communities. The tournament aims to promote physical fitness, teamwork, and positive youth development. Over 100 young people participated, with ages ranging from 10 to 18 years. The program will expand to include basketball, volleyball, and athletics in coming months. Sports equipment was donated by local businesses and military welfare departments. Coaches include off-duty military personnel with sports backgrounds who volunteer their time to mentor young people.',
      date: 'January 15, 2023',
      author: 'Youth Development Team',
      image: '/news_img/news6.jpg',
      category: 'Sports',
    },
  ];

  // Get unique categories for filter
  const categories = [
    'All',
    ...new Set(newsArticles.map((article) => article.category)),
  ];

  // Find current article if articleId is provided
  const currentArticle = articleId
    ? newsArticles.find((article) => article.id === parseInt(articleId))
    : null;

  // Initialize filteredArticles with all articles
  useEffect(() => {
    setFilteredArticles(newsArticles);
  }, []); // Run only once on component mount

  // Filter articles based on search query and category
  useEffect(() => {
    let result = newsArticles;

    if (searchQuery) {
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeCategory !== 'All') {
      result = result.filter((article) => article.category === activeCategory);
    }

    setFilteredArticles(result);
  }, [searchQuery, activeCategory]); // Only run when search or category changes

  // If viewing a single article
  if (currentArticle) {
    const articleStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: currentArticle.title,
      description: currentArticle.excerpt,
      image: currentArticle.image,
      datePublished: currentArticle.date,
      dateModified: currentArticle.date,
      author: {
        '@type': 'Person',
        name: currentArticle.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'One Big Family',
        logo: {
          '@type': 'ImageObject',
          url: 'https://onebigfamily.org/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://onebigfamily.org/news/${currentArticle.id}`,
      },
    };

    return (
      <>
        <SEO
          title={currentArticle.title}
          description={currentArticle.excerpt}
          keywords={`${currentArticle.category}, news, updates, One Big Family, community news`}
          image={currentArticle.image}
          url={`/news/${currentArticle.id}`}
          structuredData={articleStructuredData}
        />
        {/* Hero Section with Image Background */}
        <section className="relative h-[50vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${currentArticle.image}")`,
            }}
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="container mx-auto px-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {currentArticle.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {currentArticle.category} • {currentArticle.date}
              </p>
            </motion.div>
          </div>

          {/* Breadcrumbs */}
          <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center text-white/90 text-sm"
              >
                <Link
                  to="/"
                  className="hover:text-white flex items-center transition-colors"
                >
                  <FaHome className="mr-2" />
                  Home
                </Link>
                <FaChevronRight className="mx-2 text-white/50" />
                <Link to="/news" className="hover:text-white transition-colors">
                  News
                </Link>
                <FaChevronRight className="mx-2 text-white/50" />
                <span className="text-white">Article</span>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="py-20">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate('/news')}
              className="flex items-center mb-8 text-gray-600 hover:text-black transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to All News
            </button>

            <div className="max-w-4xl mx-auto">
              <div className="mb-8 bg-white rounded-xl overflow-hidden shadow-xl">
                <div className="h-64 sm:h-96 overflow-hidden">
                  <img
                    src={currentArticle.image}
                    alt={currentArticle.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder-image.jpg';
                    }}
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="inline-block bg-black text-white text-xs font-semibold py-1 px-3 rounded-full mb-4">
                    {currentArticle.category}
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    {currentArticle.title}
                  </h1>

                  <div className="flex items-center text-gray-500 text-sm mb-6 border-b border-gray-200 pb-6">
                    <span className="flex items-center mr-4">
                      <FaCalendarAlt className="mr-1" />
                      {currentArticle.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-1" />
                      {currentArticle.author}
                    </span>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-800 leading-relaxed">
                      {currentArticle.content}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {newsArticles
                    .filter(
                      (article) =>
                        article.id !== currentArticle.id &&
                        article.category === currentArticle.category
                    )
                    .slice(0, 2)
                    .map((article) => (
                      <div
                        key={article.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => navigate(`/news/${article.id}`)}
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/placeholder-image.jpg';
                            }}
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 line-clamp-2">
                            {article.excerpt}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // News listing page
  const newsListingStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    headline: 'News & Updates - One Big Family',
    description:
      'Stay informed about our community initiatives, events, and success stories. Read the latest news and updates from One Big Family.',
    url: 'https://onebigfamily.org/news',
    hasPart: newsArticles.map((article) => ({
      '@type': 'NewsArticle',
      headline: article.title,
      description: article.excerpt,
      image: article.image,
      datePublished: article.date,
      url: `https://onebigfamily.org/news/${article.id}`,
    })),
  };

  return (
    <>
      <SEO
        title="News & Updates"
        description="Stay informed about our community initiatives, events, and success stories. Read the latest news and updates from One Big Family."
        keywords="news, updates, community news, events, success stories, One Big Family news"
        url="/news"
        structuredData={newsListingStructuredData}
      />
      {/* Hero Section with Image Background */}
      <section className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/hero5.jpg")',
          }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Latest News & Updates
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay informed about our community initiatives, events, and success
              stories
            </p>
          </motion.div>
        </div>

        {/* Breadcrumbs */}
        <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center text-white/90 text-sm"
            >
              <Link
                to="/"
                className="hover:text-white flex items-center transition-colors"
              >
                <FaHome className="mr-2" />
                Home
              </Link>
              <FaChevronRight className="mx-2 text-white/50" />
              <span className="text-white">News</span>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search and filter */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-xl shadow-md p-4">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Articles grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="h-48 overflow-hidden relative cursor-pointer"
                    onClick={() => navigate(`/news/${article.id}`)}
                  >
                    <div className="absolute top-4 left-4 bg-black text-white text-xs font-semibold py-1 px-3 rounded-full z-10">
                      {article.category}
                    </div>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder-image.jpg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <span className="flex items-center mr-4">
                        <FaCalendarAlt className="mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <FaUser className="mr-1" />
                        {article.author}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-3 line-clamp-2 cursor-pointer hover:text-gray-700"
                      onClick={() => navigate(`/news/${article.id}`)}
                    >
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(`/news/${article.id}`)}
                      className="flex items-center font-medium text-black hover:text-gray-700 group"
                    >
                      Read More
                      <FaChevronRight className="ml-2 group-hover:ml-3 transition-all" />
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-20">
                <h3 className="text-2xl font-medium text-gray-600 mb-4">
                  No articles found
                </h3>
                <p className="text-gray-500">
                  Try changing your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default News;
