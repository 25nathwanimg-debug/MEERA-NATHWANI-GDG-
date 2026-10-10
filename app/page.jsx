'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import {
  Search,
  ChevronDown,
  ChevronUp,
  MapPin,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  X,
  Ticket,
  Moon,
  Sun,
} from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'What is GDG RBU?',
    answer:
      'GDG RBU is focused on empowering students through hands-on workshops, tech talks, hackathons, and real-world project collaboration.',
  },
  {
    id: 2,
    question: 'How to join GDG?',
    answer:
      'Students of Ramdeobaba University can join through our annual recruitment drive! Fill out the domain application form, complete the challenge, and attend our orientation.',
  },
  {
    id: 3,
    question: 'What does a GDG Lead do?',
    answer:
      'A GDG Lead coordinates campus tech initiatives, organizes workshops with Google Developers, mentors juniors, liaises with Google representatives, and builds an active community of student builders.',
  },
  {
    id: 4,
    question: 'How is GDG related to Google?',
    answer:
      'GDG On Campus is an official student program supported by Google Developers. We receive technical resources, workshop materials, speaker opportunities, and Google cloud credits.',
  },
  {
    id: 5,
    question: 'How to reach us?',
    answer:
      'You can email us directly at gdsc@rknec.edu or connect via our official Instagram, LinkedIn, or X handles. You can also visit our campus in Nagpur!',
  },
];

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [activeFaq, setActiveFaq] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isEventDetailOpen, setIsEventDetailOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gdg-theme') : null;
    const initial = saved || 'light';
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    if (typeof window !== 'undefined') localStorage.setItem('gdg-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  // Registration Form State
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regBranch, setRegBranch] = useState('Computer Science & Engineering');
  const [regRegistered, setRegRegistered] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4285f4', '#ea4335', '#fbbc05', '#34a853'],
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regName || !regEmail) return;
    setRegRegistered(true);
    triggerConfetti();
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      {/* ======================================================== */}
      {/* SLIDE 1: TOP NAVBAR & HERO (IMAGE 1) */}
      {/* ======================================================== */}
      <section
        id="home"
        className="slide-section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '24px 32px 60px',
        }}
      >
        {/* Top Navbar */}
        <header
          style={{
            width: '100%',
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {/* Left: GDG Official Bracket Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <svg width="54" height="32" viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.8 3.5C20.4 5.1 20.4 7.7 18.8 9.3L10.6 17.5L18.8 25.7C20.4 27.3 20.4 29.9 18.8 31.5C17.2 33.1 14.6 33.1 13 31.5L2.4 20.9C0.8 19.3 0.8 16.7 2.4 15.1L13 4.5C14.6 2.9 17.2 2.9 18.8 3.5Z"
                fill="#4285F4"
              />
              <path
                d="M18.8 3.5C20.4 5.1 20.4 7.7 18.8 9.3L13.8 14.3C12.2 12.7 12.2 10.1 13.8 8.5L14.7 7.6C15.9 6.4 17.2 4.9 18.8 3.5Z"
                fill="#EA4335"
              />
              <path
                d="M45.2 32.5C43.6 30.9 43.6 28.3 45.2 26.7L53.4 18.5L45.2 10.3C43.6 8.7 43.6 6.1 45.2 4.5C46.8 2.9 49.4 2.9 51 4.5L61.6 15.1C63.2 16.7 63.2 19.3 61.6 20.9L51 31.5C49.4 33.1 46.8 33.1 45.2 32.5Z"
                fill="#FBBC04"
              />
              <path
                d="M45.2 32.5C43.6 30.9 43.6 28.3 45.2 26.7L50.2 21.7C51.8 23.3 51.8 25.9 50.2 27.5L49.3 28.4C48.1 29.6 46.8 31.1 45.2 32.5Z"
                fill="#34A853"
              />
            </svg>
          </a>

          {/* Center: The 6 Neo-Brutalist Colored Buttons */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <a
              href="#home"
              className="brutal-pill"
              style={{
                backgroundColor: '#4285F4',
                color: '#000000',
                padding: '7px 22px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 800,
              }}
            >
              Home
            </a>
            <a
              href="#team"
              className="brutal-pill"
              style={{
                backgroundColor: '#F87171',
                color: '#000000',
                padding: '7px 22px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 800,
              }}
            >
              Team
            </a>
            <a
              href="#events"
              className="brutal-pill"
              style={{
                backgroundColor: '#FBBF24',
                color: '#000000',
                padding: '7px 22px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 800,
              }}
            >
              Events
            </a>
            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="brutal-pill"
              style={{
                backgroundColor: '#34D399',
                color: '#000000',
                padding: '7px 22px',
                fontSize: '14px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Gallery
            </button>
            <button
              type="button"
              onClick={() => setIsPortfolioOpen(true)}
              className="brutal-pill"
              style={{
                backgroundColor: '#818CF8',
                color: '#000000',
                padding: '7px 22px',
                fontSize: '14px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Portfolio
            </button>
            <a
              href="#faqs"
              className="brutal-pill"
              style={{
                backgroundColor: '#60A5FA',
                color: '#000000',
                padding: '7px 22px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 800,
              }}
            >
              More
            </a>
          </nav>

          {/* Right: Theme Toggle & Saptanshu Wanjari Profile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Light / Dark Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="brutal-pill"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-label="Toggle Dark / Light Mode"
              style={{
                backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                color: theme === 'dark' ? '#fbbf24' : '#000000',
                padding: '7px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {theme === 'dark' ? <Sun size={17} color="#fbbf24" /> : <Moon size={17} color="#000000" />}
            </button>

            <button
              onClick={() => setIsProfileOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1.5px solid #000',
                  position: 'relative',
                }}
              >
                <Image src="/avatar.png" alt="Saptanshu Wanjari" width={32} height={32} />
              </div>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-main, #000000)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Saptanshu Wanjari
                <ChevronDown size={14} color={theme === 'dark' ? '#cbd5e1' : '#666'} />
              </span>
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div
          style={{
            width: '100%',
            maxWidth: '1240px',
            margin: 'auto',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            alignItems: 'center',
            gap: '40px',
          }}
          className="hero-grid"
        >
          {/* Left Hero Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
            <h1
              className="font-pixel"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                lineHeight: 1.15,
                color: 'var(--text-main, #000000)',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
              }}
            >
              GOOGLE DEVELOPER
              <br />
              GROUPS, RBU
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                lineHeight: 1.7,
                color: 'var(--text-muted, #4b5563)',
                maxWidth: '540px',
                fontWeight: 400,
              }}
            >
              Empowering students with cutting-edge tech skills, community, and resources for a future in technology
            </p>

            {/* Action Buttons: LEARN MORE & PROFILE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="brutal-box"
                style={{
                  backgroundColor: 'var(--card-bg, #ffffff)',
                  color: 'var(--text-main, #000000)',
                  padding: '14px 30px',
                  fontWeight: 800,
                  fontSize: '15px',
                  textDecoration: 'none',
                  borderRadius: '0px',
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              >
                LEARN MORE
              </a>

              <button
                type="button"
                onClick={() => setIsProfileOpen(true)}
                className="brutal-box"
                style={{
                  backgroundColor: 'var(--card-bg, #ffffff)',
                  color: 'var(--text-main, #000000)',
                  padding: '14px 30px',
                  fontWeight: 800,
                  fontSize: '15px',
                  borderRadius: '0px',
                  cursor: 'pointer',
                }}
              >
                PROFILE
              </button>
            </div>

            {/* Badge: GDG • RBU with slight rotation */}
            <div>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  transform: 'rotate(-3deg)',
                  boxShadow: '3px 3px 0px rgba(0,0,0,0.2)',
                }}
              >
                GDG • RBU
              </span>
            </div>
          </div>

          {/* Right Hero Column: Stepped Black Folder with Search Pill */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '490px',
                minHeight: '340px',
              }}
            >
              <svg
                viewBox="0 0 500 340"
                style={{
                  width: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(6px 6px 0px rgba(0,0,0,0.18))',
                }}
              >
                <path
                  d="M 50 110 
                     C 22 110 0 132 0 160 
                     L 0 280 
                     C 0 313 27 340 60 340 
                     L 370 340 
                     C 403 340 430 313 430 280 
                     L 430 220 
                     C 430 205 442 193 457 193 
                     L 460 193 
                     C 482 193 500 175 500 153 
                     L 500 40 
                     C 500 18 482 0 460 0 
                     L 310 0 
                     C 288 0 270 18 270 40 
                     L 270 70 
                     C 270 92 252 110 230 110 
                     Z"
                  fill="#000000"
                />
              </svg>

              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '46%',
                  transform: 'translate(-50%, -50%)',
                  width: '74%',
                  maxWidth: '310px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: '#ffffff',
                    borderRadius: '999px',
                    padding: '9px 18px',
                    border: '1px solid rgba(0,0,0,0.15)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                >
                  <Search size={16} color="#94a3b8" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="gdgr"
                    style={{
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'transparent',
                      width: '100%',
                      fontSize: '15px',
                      color: '#000000',
                      fontFamily: 'monospace',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: '20px' }}></div>
      </section>

      {/* ======================================================== */}
      {/* SLIDE 2: UPCOMING EVENT (IMAGE 2) */}
      {/* ======================================================== */}
      <section id="events" className="slide-section" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1000px', margin: 'auto' }}>
          <h2
            className="font-pixel"
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
              textAlign: 'center',
              marginBottom: '48px',
              color: 'var(--text-main, #000000)',
            }}
          >
            Upcoming Event
          </h2>

          {/* Two-part Connected Ticket Cards */}
          <div
            className="ticket-container"
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: '0px',
              position: 'relative',
            }}
          >
            {/* Left Card: Metallic Silver-to-Black Gradient */}
            <div
              className="brutal-box-static"
              style={{
                background: `linear-gradient(180deg, var(--ticket-left-top, #cfd3dc) 0%, var(--ticket-left-bottom, #111827) 100%)`,
                borderRadius: '24px',
                padding: '40px 38px 36px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '380px',
                borderRight: 'none',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      color: '#e2e8f0',
                      fontFamily: 'monospace',
                    }}
                  >
                    GDG ORIENTATION
                  </span>
                  <span
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '4px 14px',
                      borderRadius: '999px',
                      border: '1.5px solid #000',
                    }}
                  >
                    UPCOMING
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  GDG ORIENTATION
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.65,
                    color: '#cbd5e1',
                    maxWidth: '480px',
                  }}
                >
                  Google Developer Groups (GDG) – Student Chapter is a community of students passionate about technology,
                  innovation, and learning. We bring students together to learn, build, and grow through technical workshops,
                  hands-on sessions, hackathons, projects, and networking..
                </p>
              </div>

              {/* Circular Yellow Button with Diagonal Arrow */}
              <div style={{ marginTop: '28px' }}>
                <button
                  onClick={() => setIsEventDetailOpen(true)}
                  title="View Orientation Details"
                  className="brutal-box"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#f59e0b',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: '2.5px solid #000',
                  }}
                >
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Right Card: Golden Yellow Stub with Notch */}
            <div
              className="brutal-box-static"
              style={{
                backgroundColor: '#fbbf24',
                borderRadius: '24px',
                padding: '40px 36px 36px',
                color: '#000000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '380px',
                position: 'relative',
              }}
            >
              {/* Cutout Notch */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-14px',
                  transform: 'translateY(-50%)',
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'var(--bg-page, #ffffff)',
                  borderRadius: '50%',
                  border: '2.5px solid #000',
                  zIndex: 2,
                }}
              />

              {/* Dashed line */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  right: '28px',
                  borderTop: '2px dashed rgba(0,0,0,0.25)',
                }}
              />

              <div>
                <h3
                  className="font-pixel"
                  style={{
                    fontSize: 'clamp(2.2rem, 3.4vw, 2.8rem)',
                    lineHeight: 1.1,
                    marginBottom: '28px',
                  }}
                >
                  New
                  <br />
                  Event
                </h3>

                <div>
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: '#451a03',
                      marginBottom: '4px',
                    }}
                  >
                    DATE & TIME
                  </p>
                  <p style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1.3 }}>Oct 7, 2026</p>
                  <p style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1.3 }}>3:00 PM</p>
                </div>
              </div>

              <div style={{ marginTop: '28px' }}>
                <button
                  onClick={() => {
                    setIsRegisterOpen(true);
                    triggerConfetti();
                  }}
                  className="brutal-box"
                  style={{
                    width: '100%',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    padding: '14px 20px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontSize: '15px',
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SLIDE 3: MEET THE TEAM (IMAGE 3) */}
      {/* ======================================================== */}
      <section id="team" className="slide-section" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <div
          className="brutal-box-static"
          style={{
            width: '100%',
            maxWidth: '1040px',
            backgroundColor: 'var(--card-bg, #ffffff)',
            borderRadius: '0px',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            overflow: 'hidden',
          }}
        >
          {/* Left Column: Team Description & Highlights */}
          <div
            style={{
              padding: '52px 44px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '26px',
            }}
          >
            <h2
              className="font-pixel"
              style={{
                fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)',
                lineHeight: 1.18,
                color: 'var(--text-main, #000000)',
              }}
            >
              Meet the
              <br />
              Google
              <br />
              Developer
              <br />
              Group Team
            </h2>

            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.6,
                color: 'var(--text-muted, #4b5563)',
              }}
            >
              Google Developer Groups (GDG) are open and volunteer-run communities for developers interested in Google
              technologies. Our team focuses on learning, networking, and collaboration through events and hands-on
              sessions.
            </p>

            {/* Feature 1 */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={22} color="var(--text-main, #000000)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--text-main, #000000)',
                    marginBottom: '4px',
                  }}
                >
                  Passionate Community Leaders
                </h4>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted, #4b5563)' }}>
                  Our organizers build an inclusive environment where developers can connect, share knowledge, and grow
                  together.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={22} color="var(--text-main, #000000)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--text-main, #000000)',
                    marginBottom: '4px',
                  }}
                >
                  Empowering Developers
                </h4>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted, #4b5563)' }}>
                  We host meetups and codelabs to help developers stay current with modern tools and best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Team Photo */}
          <div
            style={{
              position: 'relative',
              minHeight: '460px',
              borderLeft: '2.5px solid #000000',
              backgroundColor: '#f1f5f9',
            }}
          >
            <Image
              src="/team.png"
              alt="GDG RBU Team"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SLIDE 4: FAQs (IMAGE 4) */}
      {/* ======================================================== */}
      <section id="faqs" className="slide-section" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '840px', margin: 'auto' }}>
          <h2
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              textAlign: 'center',
              marginBottom: '48px',
              color: 'var(--text-main, #000000)',
              letterSpacing: '0.02em',
            }}
          >
            FAQs
          </h2>

          {/* FAQs Accordion List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {FAQ_ITEMS.map((item) => {
              const isOpen = activeFaq === item.id;
              return (
                <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : item.id)}
                    className="brutal-box"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--faq-bg, #ffffff)',
                      borderRadius: '8px',
                      padding: '18px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: 'var(--text-main, #000000)',
                    }}
                  >
                    <span style={{ fontSize: '15px', fontWeight: 800 }}>{item.question}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  {isOpen && (
                    <div
                      className="brutal-box"
                      style={{
                        backgroundColor: 'var(--faq-expanded-bg, #f8fafc)',
                        borderRadius: '8px',
                        padding: '20px 24px',
                        color: 'var(--text-main, #000000)',
                        fontSize: '14px',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SLIDE 5: FOOTER & CONTACT (IMAGE 5) */}
      {/* ======================================================== */}
      <section
        id="contact"
        className="slide-section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 24px 0',
        }}
      >
        <div style={{ width: '100%', maxWidth: '980px', margin: 'auto' }}>
          <div
            className="brutal-box-static"
            style={{
              backgroundColor: 'var(--card-bg, #ffffff)',
              borderRadius: '0px',
              padding: '52px 48px 48px',
              position: 'relative',
            }}
          >
            {/* Center Brand Header */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
                <svg width="60" height="34" viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.8 3.5C20.4 5.1 20.4 7.7 18.8 9.3L10.6 17.5L18.8 25.7C20.4 27.3 20.4 29.9 18.8 31.5C17.2 33.1 14.6 33.1 13 31.5L2.4 20.9C0.8 19.3 0.8 16.7 2.4 15.1L13 4.5C14.6 2.9 17.2 2.9 18.8 3.5Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M18.8 3.5C20.4 5.1 20.4 7.7 18.8 9.3L13.8 14.3C12.2 12.7 12.2 10.1 13.8 8.5L14.7 7.6C15.9 6.4 17.2 4.9 18.8 3.5Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M45.2 32.5C43.6 30.9 43.6 28.3 45.2 26.7L53.4 18.5L45.2 10.3C43.6 8.7 43.6 6.1 45.2 4.5C46.8 2.9 49.4 2.9 51 4.5L61.6 15.1C63.2 16.7 63.2 19.3 61.6 20.9L51 31.5C49.4 33.1 46.8 33.1 45.2 32.5Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M45.2 32.5C43.6 30.9 43.6 28.3 45.2 26.7L50.2 21.7C51.8 23.3 51.8 25.9 50.2 27.5L49.3 28.4C48.1 29.6 46.8 31.1 45.2 32.5Z"
                    fill="#34A853"
                  />
                </svg>
              </div>

              <h3
                className="font-pixel"
                style={{
                  fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)',
                  color: 'var(--text-main, #000000)',
                  marginBottom: '8px',
                }}
              >
                Google Developer Groups
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--text-muted, #52525b)',
                }}
              >
                On Campus • Ramdeobaba University
              </p>
            </div>

            {/* Dashed Horizontal Divider */}
            <div
              style={{
                width: '100%',
                borderTop: '2.5px dashed #000000',
                marginBottom: '36px',
              }}
            />

            {/* Two-column Contact Info Layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr',
                gap: '24px',
              }}
              className="footer-grid"
            >
              {/* Left Column: Address Card & Email Card */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Blue Address Card */}
                <div
                  className="brutal-box"
                  style={{
                    backgroundColor: '#4285F4',
                    borderRadius: '0px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    color: '#ffffff',
                  }}
                >
                  <div style={{ padding: '8px', background: 'rgba(0,0,0,0.15)', borderRadius: '50%' }}>
                    <MapPin size={24} color="#ffffff" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginBottom: '2px' }}>
                      Ramdeobaba University
                    </h4>
                    <p style={{ fontSize: '13px', color: '#e0f2fe', lineHeight: 1.4 }}>
                      Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013
                    </p>
                  </div>
                </div>

                {/* Yellow Email Card */}
                <a
                  href="mailto:gdsc@rknec.edu"
                  className="brutal-box"
                  style={{
                    backgroundColor: '#FBBC04',
                    borderRadius: '0px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    color: '#000000',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ padding: '8px', background: 'rgba(0,0,0,0.15)', borderRadius: '50%' }}>
                    <Mail size={22} color="#000000" />
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#000000' }}>gdsc@rknec.edu</span>
                </a>
              </div>

              {/* Right Column: Purple Follow Us Card with 3 Social Buttons */}
              <div
                className="brutal-box"
                style={{
                  backgroundColor: '#7C4DFF',
                  borderRadius: '0px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff' }}>Follow Us:</h4>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  {/* Instagram button */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Follow GDG RBU on Instagram"
                    className="brutal-box"
                    style={{
                      width: '46px',
                      height: '46px',
                      backgroundColor: '#fb7185',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>

                  {/* LinkedIn button */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Connect on LinkedIn"
                    className="brutal-box"
                    style={{
                      width: '46px',
                      height: '46px',
                      backgroundColor: '#38bdf8',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>

                  {/* Twitter / X button */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Follow on X"
                    className="brutal-box"
                    style={{
                      width: '46px',
                      height: '46px',
                      backgroundColor: '#4ade80',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                      fontWeight: 900,
                      fontSize: '20px',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    𝕏
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Colorful Geometric Shapes Pattern (Matches Image 5 Exactly) */}
        <div style={{ width: '100%', overflow: 'hidden', marginTop: '30px', display: 'flex' }}>
          <svg
            viewBox="0 0 1200 120"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="70" width="140" height="70" rx="10" transform="rotate(-25 0 70)" fill="#10b981" />
            <polygon points="120,120 180,30 240,120" fill="#3b82f6" />
            <rect x="220" y="60" width="70" height="70" rx="12" transform="rotate(45 220 60)" fill="#fbbf24" />
            <rect x="330" y="40" width="60" height="100" rx="12" transform="rotate(15 330 40)" fill="#ef4444" />
            <circle cx="460" cy="80" r="65" fill="#f59e0b" />
            <rect x="580" y="60" width="90" height="90" rx="14" transform="rotate(35 580 60)" fill="#059669" />
            <path d="M 720 120 A 55 55 0 0 1 830 120 Z" fill="#dc2626" />
            <circle cx="880" cy="70" r="50" fill="#facc15" />
            <circle cx="980" cy="90" r="35" fill="#ea4335" />
            <polygon points="1030,120 1100,50 1160,120" fill="#2563eb" />
            <rect x="1100" y="40" width="60" height="120" rx="16" transform="rotate(30 1100 40)" fill="#16a34a" />
          </svg>
        </div>
      </section>

      {/* ======================================================== */}
      {/* MODAL 1: PROFILE MODAL (FIXED & FULLY FUNCTIONAL) */}
      {/* ======================================================== */}
      {isProfileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
        >
          <div
            className="brutal-box"
            style={{
              width: '100%',
              maxWidth: '460px',
              backgroundColor: 'var(--card-bg, #ffffff)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
              boxShadow: '8px 8px 0px #000000',
            }}
          >
            <button
              onClick={() => setIsProfileOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid #000',
                  boxShadow: '4px 4px 0px #000',
                }}
              >
                <Image src="/avatar.png" alt="Saptanshu Wanjari" width={80} height={80} />
              </div>

              <div>
                <h3 className="font-pixel" style={{ fontSize: '20px', color: 'var(--text-main, #000000)', marginBottom: '4px' }}>
                  Saptanshu Wanjari
                </h3>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#fbbf24',
                    color: '#000',
                    fontSize: '12px',
                    fontWeight: 800,
                    padding: '3px 12px',
                    borderRadius: '999px',
                    border: '1.5px solid #000',
                  }}
                >
                  GDG Organizer • RBU
                </span>
              </div>

              <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#4b5563', margin: '8px 0 16px' }}>
                Computer Science & Engineering student at Ramdeobaba University. Leading GDG On Campus initiatives, mentoring student developers, and organizing technical workshops.
              </p>

              <div
                style={{
                  width: '100%',
                  backgroundColor: '#f1f5f9',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1.5px solid #000',
                  fontSize: '12px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div><strong>University:</strong> Ramdeobaba University, Nagpur</div>
                <div><strong>Contact:</strong> gdsc@rknec.edu</div>
                <div><strong>Status:</strong> Active Chapter Lead 2026-27</div>
              </div>

              <button
                onClick={() => setIsProfileOpen(false)}
                className="brutal-box"
                style={{
                  width: '100%',
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '12px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '14px',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: GALLERY MODAL (NEW) */}
      {/* ======================================================== */}
      {isGalleryOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
        >
          <div
            className="brutal-box"
            style={{
              width: '100%',
              maxWidth: '560px',
              backgroundColor: 'var(--card-bg, #ffffff)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
              boxShadow: '8px 8px 0px #000000',
            }}
          >
            <button
              onClick={() => setIsGalleryOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <span
              style={{
                backgroundColor: '#34d399',
                color: '#000',
                fontSize: '11px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '999px',
                border: '1.5px solid #000',
              }}
            >
              COMMUNITY HIGHLIGHTS
            </span>

            <h3 className="font-pixel" style={{ fontSize: '22px', margin: '14px 0 10px', color: 'var(--text-main, #000000)' }}>
              GDG RBU Gallery
            </h3>
            <p style={{ fontSize: '13.5px', color: '#4b5563', marginBottom: '20px' }}>
              Snapshots of student workshops, annual hackathons, and Google Cloud study jams conducted at Ramdeobaba University.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', borderRadius: '8px', border: '1.5px solid #000', backgroundColor: '#e0f2fe' }}>
                <h4 style={{ fontWeight: 800, fontSize: '14px' }}>⚡ Google Cloud Study Jam 2026</h4>
                <p style={{ fontSize: '12px', color: '#334155' }}>Over 120 students earned certification badges in hands-on cloud labs.</p>
              </div>
              <div style={{ padding: '12px', borderRadius: '8px', border: '1.5px solid #000', backgroundColor: '#fef3c7' }}>
                <h4 style={{ fontWeight: 800, fontSize: '14px' }}>🚀 CodeWave 36-Hour Hackathon</h4>
                <p style={{ fontSize: '12px', color: '#334155' }}>Intensive product sprint solving real campus sustainability problems.</p>
              </div>
              <div style={{ padding: '12px', borderRadius: '8px', border: '1.5px solid #000', backgroundColor: '#f1f5f9' }}>
                <h4 style={{ fontWeight: 800, fontSize: '14px' }}>🎤 Google Developer Experts Keynote</h4>
                <p style={{ fontSize: '12px', color: '#334155' }}>Annual summit hosted at the university main auditorium.</p>
              </div>
            </div>

            <button
              onClick={() => setIsGalleryOpen(false)}
              className="brutal-box"
              style={{
                width: '100%',
                backgroundColor: '#000',
                color: '#fff',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Back to Page
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: PORTFOLIO MODAL (NEW) */}
      {/* ======================================================== */}
      {isPortfolioOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
        >
          <div
            className="brutal-box"
            style={{
              width: '100%',
              maxWidth: '560px',
              backgroundColor: 'var(--card-bg, #ffffff)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
              boxShadow: '8px 8px 0px #000000',
            }}
          >
            <button
              onClick={() => setIsPortfolioOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <span
              style={{
                backgroundColor: '#818cf8',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '999px',
                border: '1.5px solid #000',
              }}
            >
              STUDENT SHOWCASE
            </span>

            <h3 className="font-pixel" style={{ fontSize: '22px', margin: '14px 0 10px', color: 'var(--text-main, #000000)' }}>
              GDG Student Portfolio
            </h3>
            <p style={{ fontSize: '13.5px', color: '#4b5563', marginBottom: '20px' }}>
              Explore featured projects built by student developers at Ramdeobaba University.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '14px', borderRadius: '8px', border: '1.5px solid #000', backgroundColor: '#f8fafc' }}>
                <h4 style={{ fontWeight: 800, fontSize: '15px' }}>EcoFlow — Smart Campus Grid</h4>
                <p style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>Tech: React, Next.js, IoT Sensors, Cloud Firestore</p>
                <p style={{ fontSize: '12px', color: '#334155', marginTop: '4px' }}>Real-time water & energy conservation dashboard reducing campus waste by 18%.</p>
              </div>
              <div style={{ padding: '14px', borderRadius: '8px', border: '1.5px solid #000', backgroundColor: '#f8fafc' }}>
                <h4 style={{ fontWeight: 800, fontSize: '15px' }}>Campus Wayfinder AI</h4>
                <p style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>Tech: Google Maps API, FastAPI, TensorFlow</p>
                <p style={{ fontSize: '12px', color: '#334155', marginTop: '4px' }}>Indoor campus navigation assistant guiding freshers to labs and lecture halls.</p>
              </div>
            </div>

            <button
              onClick={() => setIsPortfolioOpen(false)}
              className="brutal-box"
              style={{
                width: '100%',
                backgroundColor: '#000',
                color: '#fff',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Back to Page
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 4: EVENT DETAILS */}
      {/* ======================================================== */}
      {isEventDetailOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
        >
          <div
            className="brutal-box"
            style={{
              width: '100%',
              maxWidth: '500px',
              backgroundColor: 'var(--card-bg, #ffffff)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
              boxShadow: '8px 8px 0px #000000',
            }}
          >
            <button
              onClick={() => setIsEventDetailOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <span
              style={{
                backgroundColor: '#3b82f6',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '999px',
                border: '1.5px solid #000',
              }}
            >
              EVENT DETAILS
            </span>

            <h3 className="font-pixel" style={{ fontSize: '22px', margin: '14px 0 10px', color: 'var(--text-main, #000000)' }}>
              GDG ORIENTATION 2026
            </h3>

            <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#4b5563', marginBottom: '20px' }}>
              Join us for the most awaited campus technical orientation! Discover upcoming hands-on workshops in Web Development, Android, AI/ML, and Google Cloud. Network with mentors and win exclusive Google Developer swag!
            </p>

            <button
              onClick={() => {
                setIsEventDetailOpen(false);
                setIsRegisterOpen(true);
              }}
              className="brutal-box"
              style={{
                width: '100%',
                backgroundColor: '#fbbf24',
                color: '#000',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Proceed to Register
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 5: EVENT REGISTRATION */}
      {/* ======================================================== */}
      {isRegisterOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
        >
          <div
            className="brutal-box"
            style={{
              width: '100%',
              maxWidth: '480px',
              backgroundColor: 'var(--card-bg, #ffffff)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
              boxShadow: '8px 8px 0px #000000',
            }}
          >
            <button
              onClick={() => {
                setIsRegisterOpen(false);
                setRegRegistered(false);
              }}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            {!regRegistered ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Ticket size={24} color="#f59e0b" />
                  <h3 className="font-pixel" style={{ fontSize: '20px', color: 'var(--text-main, #000000)' }}>
                    Event Registration
                  </h3>
                </div>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
                  Reserve your seat for the GDG Orientation on Oct 7, 2026.
                </p>

                <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="e.g. Meera Nathwani"
                      className="brutal-box"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        outline: 'none',
                        fontSize: '14px',
                        backgroundColor: '#fff',
                        color: '#000',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="your.email@rknec.edu"
                      className="brutal-box"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        outline: 'none',
                        fontSize: '14px',
                        backgroundColor: '#fff',
                        color: '#000',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                      Branch / Department
                    </label>
                    <select
                      value={regBranch}
                      onChange={(e) => setRegBranch(e.target.value)}
                      className="brutal-box"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        outline: 'none',
                        fontSize: '14px',
                        backgroundColor: '#fff',
                        color: '#000',
                      }}
                    >
                      <option>Computer Science & Engineering</option>
                      <option>Information Technology</option>
                      <option>Electronics & Communication</option>
                      <option>Data Science & AI</option>
                      <option>Mechanical / Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="brutal-box"
                    style={{
                      marginTop: '8px',
                      backgroundColor: '#f59e0b',
                      color: '#000',
                      padding: '12px',
                      borderRadius: '8px',
                      fontWeight: 800,
                      fontSize: '15px',
                      cursor: 'pointer',
                    }}
                  >
                    Confirm My Seat 🎉
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <h3 className="font-pixel" style={{ fontSize: '20px', marginBottom: '8px', color: '#000' }}>
                  You are In!
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
                  Your orientation pass has been reserved for <strong>{regName}</strong> ({regEmail}).
                </p>
                <button
                  onClick={() => setIsRegisterOpen(false)}
                  className="brutal-box"
                  style={{
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Responsive Styles + Press Start 2P font for FAQs */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            align-items: center;
          }
          .ticket-container {
            grid-template-columns: 1fr !important;
          }
          .ticket-container > div:first-child {
            border-right: 2.5px solid #000000 !important;
            border-bottom: none !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
