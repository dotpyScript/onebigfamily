import React from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const DonationPage = () => {
  const [copiedAccount, setCopiedAccount] = useState(null);

  const accounts = [
    {
      bankName: 'First Bank',
      accountNumber: '3456789012',
      accountName: 'One Big Family Foundation',
      description: 'For general donations and community support',
    },
    {
      bankName: 'GTBank',
      accountNumber: '0123456789',
      accountName: 'One Big Family Projects',
      description: 'For specific project funding and initiatives',
    },
  ];

  const handleCopyClick = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gray-50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-70" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-50 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4 opacity-70" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Support Our Cause
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your generous donation helps us continue our mission of supporting
            and uplifting our community. Choose any of our secure banking
            channels below to make your contribution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {accounts.map((account, index) => (
            <motion.div
              key={account.accountNumber}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-gray-200 transition-all"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {account.bankName}
                </h3>
                <p className="text-gray-600">{account.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500">Account Name</label>
                  <p className="text-lg font-medium text-black">
                    {account.accountName}
                  </p>
                </div>

                <div>
                  <label className="text-sm text-gray-500">
                    Account Number
                  </label>
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="font-mono text-lg font-medium text-black">
                      {account.accountNumber}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCopyClick(account.accountNumber)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Copy account number"
                    >
                      {copiedAccount === account.accountNumber ? (
                        <FaCheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <FaCopy className="w-5 h-5 text-gray-600" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            For any questions about donations, please{' '}
            <a
              href="#contact"
              className="text-black font-medium hover:underline"
            >
              contact us
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationPage;
