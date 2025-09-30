import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { Github, Linkedin,Phone, Mail,Award,Calendar, ExternalLink, Database, BarChart3, FileSpreadsheet, Code2 } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'SQL', icon: Database },
    { name: 'Power BI', icon: BarChart3 },
    { name: 'Excel', icon: FileSpreadsheet },
    { name: 'Python', icon: Code2 }
  ];

  const projects = [
    {
      title: 'Sales Analytics Dashboard',
      description: 'Analyzed Superstore sales data using SQL for KPI extraction, Python for EDA, and Power BI for building an executive dashboard with star schema, customer insights, and regional performance trends.',
      tech: ['Power BI', 'SQL', 'Python','Pandas', 'Matplotlib'],
      github: 'https://github.com/Abdur-Rahim-Tariq/Sales-Performance-Analysis'
     
    },
    {
      title: 'Telco Customer Churn Analysis',
      description: 'Developed an end-to-end churn analysis pipeline: cleaned and modeled telco data in SQL, performed exploratory analysis in Python, and built an interactive Power BI dashboard highlighting churn drivers, customer segments, and retention insights.',
      tech: ['Python', 'SQL', 'Pandas', 'Power BI'],
      github: 'https://github.com/Abdur-Rahim-Tariq/customer-churn-analysis',
      demo: '#'
    },
    {
      title: 'Food Calorie Estimation Web App',
      description: 'Built a web application that detects food items from images using YOLOv8, takes user inputs (servings & weight), and estimates calorie intake. Integrated MongoDB for secure user data storage and Power BI-style dashboards for tracking daily, weekly, and monthly calorie trends.',
      tech: ['React', 'YOLOv8', 'MongoDB'],
      // github: 'https://github.com/yourusername/project3',
      demo: '#'
    },
    
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-green-400">AR</span>
              <span className="text-gray-100">T</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'certificates','contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
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
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block p-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full">
              <div className="bg-gray-950 rounded-full px-6 py-2">
                <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-100">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Abdur Rahim Tariq
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 mb-8">Data Analyst</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Transforming raw data into actionable insights through advanced analytics, 
            visualization, and strategic thinking.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-gray-950 font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500/10 font-semibold rounded-lg transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I’m an aspiring Data Analyst with hands-on experience in SQL, Power BI, Excel, and Python, passionate about turning data into actionable insights. Through academic projects and personal initiatives, I’ve worked on sales performance dashboards, churn analysis, and computer vision applications.

            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
               I focus on combining technical skills with an analytical mindset to uncover patterns, communicate findings clearly, and support better decision-making. 
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not analyzing data, I'm constantly learning new tools and techniques to 
              stay at the forefront of the rapidly evolving field of data analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My <span className="text-green-400">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-4 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors">
                      <Icon className="w-12 h-12 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-100">{skill.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A collection of my data analysis projects showcasing various skills and techniques
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all transform hover:scale-105 group"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


                

       
{/* Certificates Section */}
<section id="certificates" className="min-h-screen flex items-center px-6 py-20">
  <div className="max-w-4xl mx-auto w-full">
    <h2 className="text-4xl font-bold mb-4 text-center">
      Certificates & <span className="text-green-400">Achievements</span>
    </h2>
    <p className="text-gray-400 text-center mb-12">
      Professional certifications and academic recognition
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Certificate 1 - Dean's Honor List */}
      <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/50 transition-all">
        <div className="w-full h-64 bg-gray-800 overflow-hidden flex items-center justify-center">
          <img
            src="/certificates/deans_honor_list.png"
            alt="Dean's Honor List Certificate"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-green-400 transition-colors">
              Dean's Honor List
            </h3>
            <Award className="w-6 h-6 text-green-400 flex-shrink-0" />
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
              University
            </span>
            <span className="flex items-center gap-1 text-gray-400 text-xs">
              <Calendar className="w-3 h-3" />
              2025
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Recognized for outstanding academic performance and achievement
          </p>
          <button
            onClick={() => window.open('/certificates/deans_honor_list.png', '_blank')}
            className="w-full px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 hover:border-green-500/50 rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-medium"
          >
            View Certificate
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Certificate 2 - HackerRank SQL */}
      <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/50 transition-all">
        <div className="w-full h-64 bg-gray-800 overflow-hidden flex items-center justify-center">
          <img
            src="/certificates/hacker_rank_sql_intermediate.png"
            alt="HackerRank SQL Certificate"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-green-400 transition-colors">
              SQL (Intermediate)
            </h3>
            <Award className="w-6 h-6 text-green-400 flex-shrink-0" />
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
              HackerRank
            </span>
            <span className="flex items-center gap-1 text-gray-400 text-xs">
              <Calendar className="w-3 h-3" />
              2025
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Demonstrated proficiency in SQL queries, joins, and database management
          </p>
          <button
            onClick={() => window.open('/certificates/hacker_rank_sql_intermediate.png', '_blank')}
            className="w-full px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 hover:border-green-500/50 rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-medium"
          >
            View Certificate
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

       







      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-12">
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:abdurrahimtariq.ds@gmail.com"
                className="flex items-center gap-3 text-xl text-gray-300 hover:text-green-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                abdurrahimtariq.ds@gmail.com
              </a>

<a
  href="tel:+923049237474"
  className="flex items-center gap-3 text-xl text-gray-300 hover:text-green-400 transition-colors"
>
  <Phone className="w-6 h-6" />
  (+92) 304 923 7474
</a>


              <div className="flex gap-6 mt-6">
                <a
                  href="https://github.com/Abdur-Rahim-Tariq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 hover:bg-green-500/20 border border-gray-700 hover:border-green-500 rounded-full transition-all transform hover:scale-110"
                >
                  <Github className="w-6 h-6 text-gray-300 hover:text-green-400 transition-colors" />
                </a>
                {/* <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 hover:bg-green-500/20 border border-gray-700 hover:border-green-500 rounded-full transition-all transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-gray-300 hover:text-green-400 transition-colors" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <p>© 2025 Abdur Rahim Tariq.</p>
        </div>
      </footer>
    </div>
  );
}