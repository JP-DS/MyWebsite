'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Jiaran
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-indigo-300 ${
                    activeSection === section ? 'text-indigo-300' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m Jiaran 👋
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-slate-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Master&apos;s graduate in Data Science from NYU with expertise in credit risk modeling, 
            customer segmentation, and automated workflows from data to dashboard.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-white/20 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-lg text-slate-300 mb-6">
                I&apos;m a Master&apos;s graduate in Data Science from NYU with a passion for turning data into 
                strategic insights. My experience spans credit risk modeling, customer segmentation, 
                stock price prediction, and building automated workflows from data to dashboard.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Beyond the classroom, I founded a university weightlifting club and completed a 
                4,000-mile solo road trip—showcasing leadership, grit, and curiosity that drives 
                my approach to data science and problem-solving.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-sm text-slate-300">Data Science</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-sm text-slate-300">Machine Learning</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-sm text-slate-300">Financial Modeling</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h4 className="font-medium">New York University</h4>
                  <p className="text-sm">MS in Data Science | GPA: 3.9/4.0</p>
                  <p className="text-sm text-slate-400">2023 - 2025</p>
                </div>
                <div>
                  <h4 className="font-medium">Southern University of Science and Technology</h4>
                  <p className="text-sm">BE in Computer Science | GPA: 3.8/4.0</p>
                  <p className="text-sm text-slate-400">2019 - 2023</p>
                </div>
                <div>
                  <h4 className="font-medium">University of Pennsylvania</h4>
                  <p className="text-sm">Exchange Student | GPA: 3.7/4.0</p>
                  <p className="text-sm text-slate-400">2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <motion.div
            className="bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">Programming</h3>
              <p className="text-slate-300">Python (NumPy, Pandas, Scikit-learn, LightGBM), SQL, R</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">Statistics</h3>
              <p className="text-slate-300">Regression Analysis, Hypothesis Testing, Time Series Forecasting, A/B Testing</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">Machine Learning</h3>
              <p className="text-slate-300">Classification, Regression, Clustering, PCA, Ensemble Methods, CNN, RNN</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">Other Tools</h3>
              <p className="text-slate-300">Hadoop, Spark, AWS, Tableau, Power BI, JIRA, Git</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Data Strategist Intern */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300">Data Strategist Intern</h3>
                  <p className="text-slate-300">Guotai Junan Securities</p>
                </div>
                <p className="text-slate-400 text-sm">June 2024 - August 2024</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Created a dynamic repo rate dashboard in Excel with real-time data updates, helping monitor rate changes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Built a bond yield prediction pipeline using decision tree models, achieving 0.73 F1-score
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Developed a stepwise regression model to estimate fund duration, reducing volatility by 25%
                </li>
              </ul>
            </div>

            {/* Quantitative Research Intern */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300">Quantitative Research Intern</h3>
                  <p className="text-slate-300">ZADS Fund</p>
                </div>
                <p className="text-slate-400 text-sm">February 2023 - April 2023</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Developed 16 high-frequency stock alpha factors based on academic and industry research
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Designed an end-to-end system to fetch market data, compute weighted alpha scores, and train ML models
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Used market microstructure data (level-2, order book) for evaluating trading signals
                </li>
              </ul>
            </div>

            {/* Data Analyst Intern */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300">Data Analyst Intern</h3>
                  <p className="text-slate-300">China Everbright Bank</p>
                </div>
                <p className="text-slate-400 text-sm">June 2021 - August 2021</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Processed 200K+ customer records from 8 relational tables; used WOE and IV to reduce 700+ features to 50
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Built binary classification models (logistic regression, decision tree, random forest) to predict asset change
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Delivered insights via dashboards that boosted conversion by 20% and cut acquisition costs by 12%
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Card 1 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Probability of Default Modeling</h3>
              <p className="text-slate-300 mb-4">
                Built a probability of default prediction pipeline on 1M+ loan records—cleaned data, 
                engineered 14 financial ratios as features and applied machine learning to model credit risk.
              </p>
              <div className="mb-4">
                <span className="text-indigo-300 font-medium">Achievement: 0.875 AUC (6% above baseline)</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">LightGBM</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Ensemble Models</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Financial Ratios</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
              <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bond Yield Prediction</h3>
              <p className="text-slate-300 mb-4">
                Built a bond yield prediction pipeline using decision tree models for Guotai Junan Securities, 
                achieving 0.73 F1-score and developing stepwise regression models for fund duration estimation.
              </p>
              <div className="mb-4">
                <span className="text-indigo-300 font-medium">Achievement: 25% volatility reduction</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Decision Trees</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Stepwise Regression</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Excel Dashboard</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
              <div className="w-full h-48 bg-gradient-to-br from-yellow-500/20 to-red-500/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Asset Prediction</h3>
              <p className="text-slate-300 mb-4">
                Processed 200K+ customer records from 8 relational tables; used WOE and IV to reduce 700+ 
                features to 50, building binary classification models to predict asset change.
              </p>
              <div className="mb-4">
                <span className="text-indigo-300 font-medium">Achievement: 20% conversion boost, 12% cost reduction</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Logistic Regression</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Random Forest</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Feature Engineering</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Let&apos;s Connect</h3>
              <p className="text-slate-300 mb-8">
                I&apos;m always interested in new opportunities in data science, quantitative research, 
                and roles where data drives strategic decision-making.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-300">jp7238@nyu.edu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📱</span>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-slate-300">+1(201)-423-0970</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-lg">💼</span>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-slate-300">linkedin.com/in/jaylen-peng-92530527a</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-indigo-400 transition-colors duration-200 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Jiaran. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}