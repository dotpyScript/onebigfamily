import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const News = ({ id }) => {
  const navigate = useNavigate();

  // Sample news data - replace with real data from API or CMS
  const newsArticles = [
    {
      id: 1,
      title: 'Annual Fundraising Event Raises Record Amount',
      excerpt:
        "This year's annual fundraising event for One Big Happy Family exceeded all expectations, raising over 500,000 Naira for community projects.",
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
      date: 'April 10, 2023',
      author: 'Education Committee',
      image: '/news_img/news3.jpg',
      category: 'Education',
    },
  ];

  const handleReadMore = (articleId) => {
    navigate(`/news/${articleId}`);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id={id} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with the latest news, events, and stories from our
            community.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-semibold py-1 px-3 rounded-full z-10">
                  {article.category}
                </div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/news_img/news2.jpg';
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
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleReadMore(article.id)}
                  className="flex items-center font-medium text-black hover:text-gray-700 group"
                >
                  Read More
                  <FaChevronRight className="ml-2 group-hover:ml-3 transition-all" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/news')}
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            View All News
            <FaChevronRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
