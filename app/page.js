'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -96; // Adjust this value to match your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'life'];
      const scrollPosition = window.scrollY + window.innerHeight / 3; // More accurate offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ref for diving video
  const divingVideoRef = useRef(null);

  useEffect(() => {
    const video = divingVideoRef.current;
    if (!video) return;
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.muted = true;
              video.loop = true;
              video.play();
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(video);
    }
    return () => {
      if (observer && video) observer.unobserve(video);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-8">
          <motion.div
            className="text-2xl font-bold text-indigo-300 tracking-tight cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Jiaran
          </motion.div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            {['home', 'about', 'skills', 'experience', 'projects', 'life'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-lg font-semibold px-3 py-2 rounded transition-colors duration-200 hover:text-indigo-300 ${
                  activeSection === section ? 'text-indigo-300 underline underline-offset-8' : 'text-gray-100'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 focus:outline-none"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-indigo-200">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-black/90 z-50 flex flex-col items-center py-4 md:hidden animate-fade-in">
              {['home', 'about', 'skills', 'experience', 'projects', 'life'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToSection(section);
                  }}
                  className={`capitalize text-lg font-semibold px-4 py-3 w-full text-center transition-colors duration-200 hover:text-indigo-300 ${
                    activeSection === section ? 'text-indigo-300 underline underline-offset-8' : 'text-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-7xl mx-auto text-center">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-12">
            <motion.div
              className="flex-shrink-0 lg:order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/me.png"
                alt="Jiaran (Jay) Peng"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-indigo-500/20 shadow-2xl"
              />
            </motion.div>
            <div className="flex-1 lg:order-2 lg:text-center">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
                Hi, I&apos;m <span className="text-indigo-400">Jiaran (Jay)</span> 👋
        </motion.h1>
        <motion.p
                className="text-xl sm:text-2xl text-slate-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
                Data-Driven Decision Making
              </motion.p>
              <motion.p
                className="text-lg text-slate-400 mb-8 max-w-xl mx-auto"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a href="mailto:jp7238@nyu.edu" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200">
                jp7238@nyu.edu
              </a>
              <span className="text-slate-400">|</span>
              <span className="text-slate-300">+1(201)-423-0970</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <div className="flex gap-4 justify-center w-full max-w-md mx-auto">
                <a
                  href="https://www.linkedin.com/in/jaylen-peng-92530527a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 max-w-xs px-6 py-2 border border-white/20 hover:bg-white/10 rounded-lg transition-colors duration-200 text-center"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/JP-DS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 max-w-xs px-6 py-2 border border-white/20 hover:bg-white/10 rounded-lg transition-colors duration-200 text-center"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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
                src="/moreMe/headshot.png"
                alt="Jiaran headshot"
                className="max-w-[180px] h-auto rounded-full border-4 border-indigo-500 shadow-lg mb-6"
              />
              <p className="text-lg text-slate-300 mb-6">
                Hi, I&apos;m Jiaran — a data scientist with a Master&apos;s in Data Science from NYU. I&apos;m passionate about uncovering patterns, telling stories with code, and building tools that connect data to real-world decisions. Whether I&apos;m designing predictive models, analyzing user behavior, or crafting clean, intuitive interfaces, I love solving meaningful problems at the intersection of statistics, technology, and human experience.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Outside of work, you&apos;ll find me exploring new cities, planning my next solo adventure — or getting unreasonably excited about lifting a heavy weight.
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
                <a href="https://www.nyu.edu/" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/10 hover:bg-indigo-500/20 transition-colors duration-200 rounded-xl p-4 border border-white/10 shadow cursor-pointer text-center">
                  <img src="/School/nyu.png" alt="NYU Logo" className="w-12 h-12 mb-2 mx-auto object-contain" />
                  <h4 className="font-medium text-lg mb-1">New York University</h4>
                  <p className="text-sm">MS in Data Science | GPA: 3.9/4.0</p>
                  <p className="text-sm text-slate-400">2023 - 2025</p>
                </a>
                <a href="https://www.sustech.edu.cn/en/" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/10 hover:bg-indigo-500/20 transition-colors duration-200 rounded-xl p-4 border border-white/10 shadow cursor-pointer text-center">
                  <img src="/School/SUSTech.png" alt="SUSTech Logo" className="w-12 h-12 mb-2 mx-auto object-contain" />
                  <h4 className="font-medium text-lg mb-1">Southern University of Science and Technology</h4>
                  <p className="text-sm">BE in Computer Science | GPA: 3.8/4.0</p>
                  <p className="text-sm text-slate-400">2019 - 2023</p>
                </a>
                <a href="https://www.upenn.edu/" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/10 hover:bg-indigo-500/20 transition-colors duration-200 rounded-xl p-4 border border-white/10 shadow cursor-pointer text-center">
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
          <div className="mb-8 text-center">
            <span className="inline-block bg-indigo-700/20 text-indigo-200 px-4 py-2 rounded-lg text-base">
              💡 Many of the projects below have detailed code and results —
              <button
                onClick={() => scrollToSection('projects')}
                className="ml-1 underline text-indigo-300 hover:text-indigo-200 transition-colors duration-200"
              >
                see the Project section for code
              </button>
              !
            </span>
          </div>
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
            {/* Project Experience: Group Leader */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300">Group Leader</h3>
                  <p className="text-slate-300">Probability of Default Modeling – Applied ML in Finance Project</p>
                  <p className="text-slate-400 text-sm">New York, NY</p>
                </div>
                <p className="text-slate-400 text-sm">October 2024 – December 2024</p>
              </div>
              <ul className="space-y-2 text-slate-300 list-disc list-inside">
                <li>
                  Built an end-to-end probability of default prediction system using a 1M-row SME loan dataset: engineered 14 financial ratios, applied rule-based balance sheet imputation, quantile binning, and one-hot encoding.
                </li>
                <li>
                  Developed a grouped ensemble of 9 LightGBM models, trained in a walk-forward fashion with false negative penalties and weighted predictions to account for class imbalance and credit risk.
                </li>
                <li>
                  Validated model performance on time-ordered out-of-sample test sets; used SHAP plots to interpret key features; achieved 0.875 AUC, outperforming the unsegmented logistic regression baseline (0.78 AUC).
                </li>
              </ul>
            </div>

            {/* Data Strategist Intern */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300">Data Scientist Intern</h3>
                  <p className="text-slate-300">Guotai Junan Securities</p>
                  <p className="text-slate-400 text-sm">Shanghai</p>
                </div>
                <p className="text-slate-400 text-sm">June 2024 – August 2024</p>
              </div>
              <ul className="space-y-2 text-slate-300 list-disc list-inside">
                <li>
                  Built a bond yield prediction pipeline using decision tree models, achieving a 0.73 F1-score on test pricing data.
                </li>
                <li>
                  Developed a stepwise regression model to estimate fund duration, reducing duration volatility by 25%.
                </li>
                <li>
                  Created a real-time repo rate monitoring tool by integrating external data into Excel, enabling downstream modeling and improving fixed income strategy responsiveness.
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
                <p className="text-slate-400 text-sm">June 2023 - August 2023</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Engineered 16 high-frequency alpha factors using market microstructure data (Level-2/order book), inspired by academic literature and proprietary research.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  For each factor, calculated signal values, evaluated predictive power, and backtested performance using historical intraday data.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Built a machine learning pipeline integrating 10 low-correlation factors to predict T+1 stock returns, achieving an AUC of 0.62 on out-of-sample data.
                </li>
              </ul>
            </div>

            {/* Data Scientist Intern: China Everbright Bank */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300">Data Scientist Intern</h3>
                  <p className="text-slate-300">China Everbright Bank</p>
                  <p className="text-slate-400 text-sm">Beijing</p>
                </div>
                <p className="text-slate-400 text-sm">June 2022 – August 2022</p>
              </div>
              <ul className="space-y-2 text-slate-300 list-disc list-inside">
                <li>
                  Processed 200K+ customer records from 8 relational tables and reduced dimensionality from 700+ to 50 features using WOE encoding and Information Value (IV) selection.
                </li>
                <li>
                  Built and compared binary classification models (logistic regression, decision tree, random forest) to predict customer asset change; selected logistic regression for its interpretability and high AUC (0.85).
                </li>
                <li>
                  Delivered model insights through dashboards, contributing to a 20% lift in conversion and 12% reduction in acquisition cost.
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

      {/* Life Section */}
      <section id="life" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Beyond the Code
          </motion.h2>
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Weightlifting */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">🏋️ Weightlifting</h3>
                <p className="text-lg text-slate-300 mb-4">
                  Passionate about strength training and pushing physical limits. Love the discipline and progress 
                  that comes with consistent training. Whether it&apos;s powerlifting, progressive overload, or just 
                  getting unreasonably excited about lifting heavy weights.
                </p>
                <p className="text-lg text-slate-300 mb-4">
                  During my undergraduate years, I competed in a 15-event all-around fitness competition — 
                  including powerlifting&apos;s big three (squat, bench press, deadlift), sprints, standing long jump, 
                  endurance runs, and more. I won 9 individual events and took home the overall championship title.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-500/20 text-sm rounded">Powerlifting</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-sm rounded">Progressive Overload</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-sm rounded">Fitness Competition</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-sm rounded">Championship Winner</span>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="/moreMe/medal.png"
                  alt="Fitness Competition Medal"
                  className="w-80 h-80 object-cover rounded-2xl border border-white/10 shadow-2xl"
                />
              </div>
            </div>

            {/* Solo Travel */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">🚗 Solo Road Trip</h3>
                <p className="text-lg text-slate-300 mb-4">
                  Cross-country adventure, covering 4000 miles across 14 states, from New York City to San Diego, California. Learned to deal with the unexpected alone and to be ready to react and change plans as needed.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-500/20 text-sm rounded">Cross-Country</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-sm rounded">4000 Miles</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-sm rounded">14 States</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-sm rounded">Solo Adventure</span>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="/moreMe/roadtrip.png"
                  alt="Road Trip"
                  className="w-80 h-80 object-cover rounded-2xl border border-white/10 shadow-2xl"
                />
              </div>
            </div>

            {/* Snowboarding & Surfing */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full">
                <h3 className="text-2xl font-semibold mb-6 text-center">🎯 So Many Things Else</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex flex-col gap-2">
                    <img
                      src="/moreMe/surf.JPG"
                      alt="Surfing"
                      className="h-80 w-auto mx-auto object-contain rounded-xl border border-white/10 shadow-lg"
                    />
                    <img
                      src="/moreMe/motor.JPG"
                      alt="Motorcycle"
                      className="h-96 w-auto mx-auto object-contain rounded-xl border border-white/10 shadow-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <img
                      src="/moreMe/snowboard.png"
                      alt="Snowboarding"
                      className="h-80 w-auto mx-auto object-contain rounded-xl border border-white/10 shadow-lg"
                    />
                    <video
                      ref={divingVideoRef}
                      src="/moreMe/diving.mov"
                      controls
                      className="h-96 w-auto mx-auto object-contain rounded-xl border border-white/10 shadow-lg bg-black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Jiaran. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}