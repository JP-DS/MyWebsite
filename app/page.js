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
              Jiaran (Jay)
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects'].map((section) => (
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/me.png"
                alt="Jiaran (Jay) Peng"
                className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500/20 shadow-2xl"
              />
            </motion.div>
            <div className="flex-1">
              <motion.h1
                className="text-4xl sm:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi, I&apos;m <span className="text-indigo-400">Jiaran (Jay)</span>
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Data Scientist & Quantitative Researcher
              </motion.p>
              <motion.p
                className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Passionate about leveraging data to drive strategic decisions and uncover insights 
                that transform business outcomes.
              </motion.p>
            </div>
          </div>

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
          </motion.div>
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="text-slate-300 mb-2">Get in touch:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:jp7238@nyu.edu" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200">
                jp7238@nyu.edu
              </a>
              <span className="text-slate-400">|</span>
              <span className="text-slate-300">+1(201)-423-0970</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a
                href="https://www.linkedin.com/in/jaylen-peng-92530527a/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-white/20 hover:bg-white/10 rounded-lg transition-colors duration-200 text-center"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/JP-DS"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-white/20 hover:bg-white/10 rounded-lg transition-colors duration-200 text-center"
              >
                View on GitHub
              </a>
            </div>
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
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/me.png"
                alt="Jiaran"
                className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg mb-6 object-cover"
              />
              <p className="text-lg text-slate-300 mb-6">
                Hi, I&apos;m Jiaran — a data scientist with a Master&apos;s in Data Science from NYU. I&apos;m passionate about uncovering patterns, telling stories with code, and building tools that connect data to real-world decisions. Whether I&apos;m designing predictive models, analyzing user behavior, or crafting clean, intuitive interfaces, I love solving meaningful problems at the intersection of statistics, technology, and human experience.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Outside of work, you&apos;ll find me exploring new cities, debugging side projects, planning my next solo adventure — or getting unreasonably excited about lifting a heavy weight.
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
              <div className="flex flex-col gap-4 text-slate-300">
                <a href="https://www.nyu.edu/" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/10 hover:bg-indigo-500/20 transition-colors duration-200 rounded-xl p-4 border border-white/10 shadow cursor-pointer">
                  <img src="/School/nyu.png" alt="NYU Logo" className="w-12 h-12 mb-2 mx-auto object-contain" />
                  <h4 className="font-medium text-lg mb-1">New York University</h4>
                  <p className="text-sm">MS in Data Science | GPA: 3.9/4.0</p>
                  <p className="text-sm text-slate-400">2023 - 2025</p>
                </a>
                <a href="https://www.sustech.edu.cn/en/" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/10 hover:bg-indigo-500/20 transition-colors duration-200 rounded-xl p-4 border border-white/10 shadow cursor-pointer">
                  <img src="/School/SUSTech.png" alt="SUSTech Logo" className="w-12 h-12 mb-2 mx-auto object-contain" />
                  <h4 className="font-medium text-lg mb-1">Southern University of Science and Technology</h4>
                  <p className="text-sm">BE in Computer Science | GPA: 3.8/4.0</p>
                  <p className="text-sm text-slate-400">2019 - 2023</p>
                </a>
                <a href="https://www.upenn.edu/" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/10 hover:bg-indigo-500/20 transition-colors duration-200 rounded-xl p-4 border border-white/10 shadow cursor-pointer">
                  <img src="/School/UPenn.png" alt="UPenn Logo" className="w-12 h-12 mb-2 mx-auto object-contain" />
                  <h4 className="font-medium text-lg mb-1">University of Pennsylvania</h4>
                  <p className="text-sm">Exchange Student | GPA: 3.7/4.0</p>
                  <p className="text-sm text-slate-400">2022</p>
                </a>
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
              <div className="w-full h-48 mb-4 flex items-center justify-center">
                <img src="/covers/risk.png" alt="Probability of Default Modeling Cover" className="object-cover w-full h-full rounded-lg" />
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
              <a
                href="https://github.com/JP-DS/Risk_Modeling"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm transition-colors duration-200 inline-block mt-2"
              >
                View Code
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
              <div className="w-full h-48 mb-4 flex items-center justify-center">
                <img src="/covers/bond.png" alt="Bond Yield Prediction Cover" className="object-cover w-full h-full rounded-lg" />
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
              <a
                href="https://github.com/JP-DS/Quant_Strategy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm transition-colors duration-200 inline-block mt-2"
              >
                View Code
              </a>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
              <div className="w-full h-48 mb-4 flex items-center justify-center">
                <img src="/covers/customer.png" alt="Customer Asset Prediction Cover" className="object-cover w-full h-full rounded-lg" />
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
              <button
                className="px-4 py-2 bg-gray-600 rounded text-sm transition-colors duration-200 inline-block mt-2 cursor-not-allowed"
                disabled
              >
                Coming Soon
              </button>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
              <div className="w-full h-48 mb-4 flex items-center justify-center">
                <img src="/covers/quant.png" alt="Quantitative Research Intern Cover" className="object-cover w-full h-full rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quantitative Research Intern</h3>
              <p className="text-slate-300 mb-4">
                Engineered 16 high-frequency alpha factors using market microstructure data (Level-2/order book), 
                inspired by academic literature and proprietary research. Built a machine learning pipeline 
                integrating 10 low-correlation factors to predict T+1 stock returns.
              </p>
              <div className="mb-4">
                <span className="text-indigo-300 font-medium">Achievement: 0.62 AUC on out-of-sample data</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Alpha Factors</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Machine Learning</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-xs rounded">Backtesting</span>
              </div>
              <a
                href="https://github.com/JP-DS/Stock_alpha/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm transition-colors duration-200 inline-block mt-2"
              >
                View Code
              </a>
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