'use client';

import { useState } from 'react';
import styles from '../styles/landing.module.scss';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    { name: 'React', color: 'primary' },
    { name: 'React Native', color: 'primary' },
    { name: 'Node.js', color: 'primary' },
    { name: 'Next.js', color: 'secondary' },
    { name: 'Redux', color: 'secondary' },
    { name: 'Context API', color: 'secondary' },
    { name: 'React Hooks', color: 'secondary' },
    { name: 'React Query', color: 'secondary' },
    { name: 'TypeScript', color: 'tertiary' },
    { name: 'JavaScript', color: 'tertiary' },
    { name: 'HTML', color: 'tertiary' },
    { name: 'SASS', color: 'orange' },
    { name: 'SCSS', color: 'orange' },
    { name: 'StyledComponents', color: 'orange' },
    { name: 'Git', color: 'dark' },
    { name: 'CI/CD', color: 'dark' },
    { name: 'AWS', color: 'dark' },
    { name: 'SEO', color: 'dark' },
    { name: 'Docker', color: 'dark' },
    { name: 'Kubernetes', color: 'dark' },
    { name: 'New Relic', color: 'dark' },
  ];

  const aboutBullets = [
    '6+ years of mobile development',
    'Focused on quality & scalability',
    '8+ years of web development',
    'Native Android experience',
    'Testing driven development',
    'Agile methodologies',
    'Continuous learning',
    'Adaptable team player',
    '2+ years of back-end development',
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Basic portfolio website using React & Next.js',
      tags: ['React', 'Next.js', 'SCSS'],
      codeUrl: 'https://github.com/erickSuh/202-portfolio',
    },
    {
      title: 'Fantasy Challenge',
      description:
        'A challenge project using React and Redux to manage a fantasy football team.',
      tags: [
        'React',
        'Redux',
        'Styled Components',
        '@testing-library',
        'netlify',
      ],
      codeUrl: 'https://github.com/erickSuh/401-venturus-challenge',
    },
    {
      title: 'Landing Login Page',
      description:
        'A simple login page using React and Firebase Authentication.',
      tags: ['Firebase', 'React', 'SASS', 'Netlify'],
      codeUrl: 'https://github.com/erickSuh/405-login-firebase',
      demoUrl: 'https://405-login-example.netlify.app/',
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>Erick Sugahara</div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="/blog">Blog</a>
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className={styles.mobileNav}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Hi, I&apos;m Erick Sugahara</h1>
          <p className={styles.subtitle}>Front-End Developer</p>
          <p className={styles.description}>
            Building mobile and web applications with React Native and React.
          </p>
          <div className={styles.heroButtons}>
            <a
              href="#projects"
              className={`${styles.button} ${styles.primary}`}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={`${styles.button} ${styles.secondary}`}
            >
              Contact Me
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/erickSuh"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ericksuh"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:eks.contactme@gmail.com">Email</a>
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.aboutCard}>
          <p className={styles.aboutText}>
            I am a front-end developer with over eight years of experience,
            having worked as a Senior Mobile Developer at RecargaPay. I have
            strong expertise in React Native, being responsible for the
            end-to-end delivery of features from technical prototyping to
            continuous application monitoring.
          </p>
          <p className={styles.aboutText}>
            I have worked across multiple squads, including merchants,
            sub-acquirers, verticals, and payments, always focusing on
            delivering high-quality and functional solutions. My expertise
            includes automated testing with Jest and Appium, development with
            React Native and ReactJS, as well as strong skills in application
            monitoring and continuous versioning. I am committed to contributing
            to the success of digital products and continually growing as a
            mobile, web, and backend developer while adding value to the
            solutions I help build.
          </p>
          <ul className={styles.aboutList}>
            {aboutBullets.map((bullet) => (
              <li key={bullet}>
                <span className={styles.bullet}>•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <div className={styles.skillsContainer}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`${styles.skill} ${styles[skill.color]}`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {/* <div className={styles.projectImage}>
                <p>Project Image</p>
              </div> */}
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectButtons}
                >
                  <button className={styles.buttonSmall}>Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Erick Sugahara</p>
        <div className={styles.footerSocial}>
          <a href="https://github.com/erickSuh">GitHub</a>
          <a href="https://linkedin.com/in/ericksuh">LinkedIn</a>
          <a href="mailto:eks.contactme@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}
