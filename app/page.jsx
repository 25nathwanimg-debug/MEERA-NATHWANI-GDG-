'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
  Moon,
  Sun,
  Sparkles,
  X,
  Send,
  Ticket,
  Calendar,
  Clock,
  Menu
} from 'lucide-react';

// FAQ Data
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
      'Students of Ramdeobaba University can join through our annual recruitment drive! Fill out the domain application, complete the domain challenge (like this frontend task!), and join our orientation to get started.',
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
      'You can email us directly at gdsc@rknec.edu or reach out via our official Instagram, LinkedIn, or Twitter handles. You can also visit our tech lab at Ramdeobaba University!',
  },
];

// Searchable directory items
const SEARCHABLE_ITEMS = [
  { title: 'GDG Orientation 2026', type: 'Event', link: '#events' },
  { title: 'Frontend Developer Recruitment', type: 'Recruitment', link: '#team' },
  { title: 'Web Development Domain', type: 'Domain', link: '#team' },
  { title: 'AI & Machine Learning Track', type: 'Domain', link: '#events' },
  { title: 'Cloud & DevOps Workshop', type: 'Workshop', link: '#events' },
  { title: 'Saptanshu Wanjari (Organizer)', type: 'Team', link: '#team' },
  { title: 'Campus Location & Contact', type: 'Contact', link: '#contact' },
  { title: 'Frequently Asked Questions', type: 'Help', link: '#faqs' },
];

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [activeFaq, setActiveFaq] = useState(1); // Item 1 open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isEventDetailOpen, setIsEventDetailOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Registration Form State
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regBranch, setRegBranch] = useState('Computer Science & Engineering');
  const [regRegistered, setRegRegistered] = useState(false);

  // AI Chat State
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi there! 👋 I am the GDG RBU AI Assistant. How can I help you today? Ask about recruitment, upcoming events, or Google tech domains!',
    },
  ]);
  const [inputMsg, setInputMsg] = useState('');

  // Handle Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('gdg-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('gdg-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Filtered search items
  const filteredSearch = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return SEARCHABLE_ITEMS.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Confetti on Registration
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

  // AI Bot responses
  const handleSendMessage = () => {
    if (!inputMsg.trim()) return;
    const userText = inputMsg.trim();
    const newMsgs = [...messages, { sender: 'user', text: userText }];
    setMessages(newMsgs);
    setInputMsg('');

    setTimeout(() => {
      let botReply = "That's a fantastic question! GDG RBU brings students together through coding bootcamps, Google Cloud study jams, and hackathons. Connect with us on social media or attend our orientation!";
      const lower = userText.toLowerCase();

      if (lower.includes('event') || lower.includes('orientation')) {
        botReply = "Our next flagship event is the 'GDG ORIENTATION' on Oct 7, 2026 at 3:00 PM! You can click 'Register Now' on the ticket card to grab your pass!";
      } else if (lower.includes('recruit') || lower.includes('frontend') || lower.includes('join')) {
        botReply = "The Recruitment Drive 2026-27 is actively underway for positions in Frontend, Backend, AI/ML, Cloud, and Design. Build your solution, upload to GitHub, and deploy on Vercel!";
      } else if (lower.includes('google') || lower.includes('benefit')) {
        botReply = "GDG on Campus provides direct access to Google technologies, mentorship from Google Developer Experts (GDEs), Google Cloud credits, and networking with global student leaders.";
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) {
        botReply = "You can write to us anytime at gdsc@rknec.edu or find us at Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013.";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* ======================================================== */}
      {/* 1. TOP NAVBAR & HEADER */}
      {/* ======================================================== */}
      <header
        style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '24px 20px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Left: GDG Logo (Four Google-colored angled brackets) */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <svg width="48" height="28" viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left Brackets: Blue & Red */}
            <path
              d="M18.8 3.5C20.4 5.1 20.4 7.7 18.8 9.3L10.6 17.5L18.8 25.7C20.4 27.3 20.4 29.9 18.8 31.5C17.2 33.1 14.6 33.1 13 31.5L2.4 20.9C0.8 19.3 0.8 16.7 2.4 15.1L13 4.5C14.6 2.9 17.2 2.9 18.8 3.5Z"
              fill="#4285F4"
            />
            <path
              d="M18.8 3.5C20.4 5.1 20.4 7.7 18.8 9.3L13.8 14.3C12.2 12.7 12.2 10.1 13.8 8.5L14.7 7.6C15.9 6.4 17.2 4.9 18.8 3.5Z"
              fill="#EA4335"
            />
            {/* Right Brackets: Green & Yellow */}
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

        {/* Center: Neo-Brutalist Navigation Buttons */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <a
            href="#home"
            className="brutal-pill"
            style={{
              backgroundColor: '#3b82f6',
              color: '#000000',
              padding: '8px 20px',
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            Home
          </a>
          <a
            href="#team"
            className="brutal-pill"
            style={{
              backgroundColor: '#f87171',
              color: '#000000',
              padding: '8px 20px',
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            Team
          </a>
          <a
            href="#events"
            className="brutal-pill"
            style={{
              backgroundColor: '#fbbf24',
              color: '#000000',
              padding: '8px 20px',
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            Events
          </a>
          <a
            href="#gallery"
            className="brutal-pill"
            style={{
              backgroundColor: '#34d399',
              color: '#000000',
              padding: '8px 20px',
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            Gallery
          </a>
          <a
            href="#portfolio"
            className="brutal-pill"
            style={{
              backgroundColor: '#818cf8',
              color: '#000000',
              padding: '8px 20px',
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            Portfolio
          </a>
          <a
            href="#faqs"
            className="brutal-pill"
            style={{
              backgroundColor: '#60a5fa',
              color: '#000000',
              padding: '8px 20px',
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            More
          </a>
        </nav>

        {/* Right: User Profile & Utility Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* AI Helper Trigger Button */}
          <button
            onClick={() => setIsAiOpen(true)}
            className="brutal-pill"
            title="Ask GDG AI"
            style={{
              background: '#fef08a',
              color: '#000',
              padding: '6px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            <Sparkles size={16} color="#d97706" />
            <span style={{ fontWeight: 800 }}>Ask AI</span>
          </button>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="brutal-pill"
            title="Toggle Dark / Light Mode"
            style={{
              background: theme === 'dark' ? '#334155' : '#ffffff',
              color: theme === 'dark' ? '#f8fafc' : '#000000',
              padding: '7px 11px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {theme === 'dark' ? <Sun size={17} color="#fbbf24" /> : <Moon size={17} color="#475569" />}
          </button>

          {/* User Profile Pill */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
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
                  backgroundColor: '#e2e8f0',
                }}
              >
                <Image
                  src="/avatar.png"
                  alt="Saptanshu Wanjari"
                  width={32}
                  height={32}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Saptanshu Wanjari
                <ChevronDown size={14} />
              </span>
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div
                className="brutal-box"
                style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  width: '240px',
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: '12px',
                  padding: '16px',
                  zIndex: 100,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid #000',
                    }}
                  >
                    <Image src="/avatar.png" alt="Avatar" width={40} height={40} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: '14px', color: 'var(--text-main)' }}>Saptanshu Wanjari</p>
                    <p style={{ fontSize: '12px', color: '#64748b' }}>GDG Organizer • RBU</p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: '#e0f2fe',
                    border: '1.5px solid #000',
                    borderRadius: '8px',
                    padding: '8px',
                    fontSize: '12px',
                    color: '#0369a1',
                    marginBottom: '10px',
                    fontWeight: 600,
                  }}
                >
                  Status: Active Lead
                </div>
                <button
                  onClick={() => setIsProfileOpen(false)}
                  style={{
                    width: '100%',
                    padding: '6px',
                    background: '#000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: '#fff',
              border: '2px solid #000',
              padding: '6px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            padding: '16px',
            backgroundColor: 'var(--card-bg)',
            borderBottom: '2.5px solid #000',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {['Home', 'Team', 'Events', 'Gallery', 'Portfolio', 'FAQs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontWeight: 700,
                fontSize: '16px',
                padding: '8px 0',
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. PAGE 1: HERO SECTION */}
      {/* ======================================================== */}
      <section
        id="home"
        style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '60px 24px 80px',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          alignItems: 'center',
          gap: '40px',
        }}
        className="hero-grid"
      >
        {/* Left Hero Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1
            className="font-pixel"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
              lineHeight: 1.15,
              color: 'var(--text-main)',
              textTransform: 'uppercase',
            }}
          >
            GOOGLE DEVELOPER
            <br />
            GROUPS, RBU
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '560px',
            }}
          >
            Empowering students with cutting-edge tech skills, community, and resources for a future in technology
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="brutal-box"
              style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-main)',
                padding: '14px 28px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                borderRadius: '8px',
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              LEARN MORE
            </a>

            <button
              onClick={() => setIsProfileOpen(true)}
              className="brutal-box"
              style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-main)',
                padding: '14px 28px',
                fontWeight: 800,
                fontSize: '15px',
                letterSpacing: '0.05em',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              PROFILE
            </button>
          </div>

          {/* Neo Badge: GDG • RBU */}
          <div>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--tag-bg)',
                color: 'var(--tag-text)',
                padding: '6px 14px',
                fontSize: '13px',
                fontFamily: 'Silkscreen, monospace',
                fontWeight: 700,
                borderRadius: '4px',
                letterSpacing: '0.05em',
                boxShadow: '3px 3px 0px rgba(0,0,0,0.2)',
              }}
            >
              GDG • RBU
            </span>
          </div>
        </div>

        {/* Right Hero Column: Retro Black Stepped Folder with Search Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              minHeight: '320px',
            }}
          >
            {/* Custom Stepped Folder SVG Shape */}
            <svg
              viewBox="0 0 500 340"
              style={{
                width: '100%',
                height: 'auto',
                filter: 'drop-shadow(6px 6px 0px rgba(0,0,0,0.25))',
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
                fill="var(--folder-bg)"
              />
            </svg>

            {/* Centered Search Pill inside Folder */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '46%',
                transform: 'translate(-50%, -50%)',
                width: '74%',
                maxWidth: '320px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: 'var(--folder-input-bg)',
                    borderRadius: '999px',
                    padding: '10px 18px',
                    border: '1.5px solid rgba(0,0,0,0.15)',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  <Search size={18} color="#94a3b8" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                    placeholder="gdgr"
                    style={{
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'transparent',
                      width: '100%',
                      fontSize: '16px',
                      color: 'var(--folder-input-text)',
                      fontFamily: 'monospace',
                    }}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      <X size={16} color="#64748b" />
                    </button>
                  )}
                </div>

                {/* Search Results Dropdown */}
                {searchFocused && filteredSearch.length > 0 && (
                  <div
                    className="brutal-box"
                    style={{
                      position: 'absolute',
                      top: '115%',
                      left: 0,
                      width: '100%',
                      backgroundColor: 'var(--card-bg)',
                      borderRadius: '12px',
                      padding: '8px',
                      zIndex: 50,
                      maxHeight: '220px',
                      overflowY: 'auto',
                    }}
                  >
                    {filteredSearch.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          textDecoration: 'none',
                          borderRadius: '6px',
                          color: 'var(--text-main)',
                          fontSize: '13px',
                          fontWeight: 600,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <span>{item.title}</span>
                        <span
                          style={{
                            fontSize: '10px',
                            background: '#e2e8f0',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            color: '#475569',
                          }}
                        >
                          {item.type}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. PAGE 2: UPCOMING EVENT */}
      {/* ======================================================== */}
      <section
        id="events"
        style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '60px 24px 80px',
        }}
      >
        <h2
          className="font-pixel"
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            textAlign: 'center',
            marginBottom: '48px',
            color: 'var(--text-main)',
          }}
        >
          Upcoming Event
        </h2>

        {/* Two-part Perforated Ticket Card Container */}
        <div
          className="ticket-container"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '0px',
            position: 'relative',
          }}
        >
          {/* Left Card: Event Details */}
          <div
            className="brutal-box-static"
            style={{
              background: `linear-gradient(180deg, var(--ticket-left-top) 0%, var(--ticket-left-bottom) 100%)`,
              borderRadius: '24px',
              padding: '36px 36px 32px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px',
              borderRight: 'none',
            }}
          >
            <div>
              {/* Top Subtitle & Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
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
                    padding: '4px 12px',
                    borderRadius: '999px',
                    border: '1.5px solid #000',
                  }}
                >
                  UPCOMING
                </span>
              </div>

              {/* Main Event Title */}
              <h3
                style={{
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                GDG ORIENTATION
              </h3>

              {/* Event Description */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.65,
                  color: '#cbd5e1',
                  maxWidth: '440px',
                }}
              >
                Google Developer Groups (GDG) – Student Chapter is a community of students passionate about technology,
                innovation, and learning. We bring students together to learn, build, and grow through technical workshops,
                hands-on sessions, hackathons, projects, and networking..
              </p>
            </div>

            {/* Bottom Left Circular Button */}
            <div style={{ marginTop: '24px' }}>
              <button
                onClick={() => setIsEventDetailOpen(true)}
                title="View Orientation Details"
                className="brutal-box"
                style={{
                  width: '46px',
                  height: '46px',
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
                <ArrowUpRight size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Right Card: Perforated Yellow Stub */}
          <div
            className="brutal-box-static"
            style={{
              backgroundColor: 'var(--ticket-right-bg)',
              borderRadius: '24px',
              padding: '36px 32px 32px',
              color: '#000000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px',
              position: 'relative',
            }}
          >
            {/* Notch cutout on left border matching design */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '-14px',
                transform: 'translateY(-50%)',
                width: '24px',
                height: '24px',
                backgroundColor: 'var(--bg-page)',
                borderRadius: '50%',
                border: '2.5px solid #000',
                zIndex: 2,
              }}
            />

            {/* Dashed line extending horizontally from notch */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                right: '24px',
                borderTop: '2px dashed rgba(0,0,0,0.25)',
              }}
            />

            <div>
              {/* Retro Pixel Event Header */}
              <h3
                className="font-pixel"
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                  lineHeight: 1.1,
                  marginBottom: '28px',
                }}
              >
                New
                <br />
                Event
              </h3>

              {/* Date & Time block */}
              <div>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#451a03',
                    marginBottom: '4px',
                  }}
                >
                  DATE & TIME
                </p>
                <p
                  style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    lineHeight: 1.3,
                  }}
                >
                  Oct 7, 2026
                </p>
                <p
                  style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    lineHeight: 1.3,
                  }}
                >
                  3:00 PM
                </p>
              </div>
            </div>

            {/* Register Now Pill Button */}
            <div style={{ marginTop: '24px' }}>
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
      </section>

      {/* ======================================================== */}
      {/* 4. PAGE 3: MEET THE GOOGLE DEVELOPER GROUP TEAM */}
      {/* ======================================================== */}
      <section
        id="team"
        style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '60px 24px 80px',
        }}
      >
        <div
          className="brutal-box-static"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            backgroundColor: 'var(--card-bg)',
            borderRadius: '4px',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            overflow: 'hidden',
          }}
        >
          {/* Left Column: Team Description & Highlights */}
          <div
            style={{
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            <h2
              className="font-pixel"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.7rem)',
                lineHeight: 1.18,
                color: 'var(--text-main)',
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
                color: 'var(--text-muted)',
              }}
            >
              Google Developer Groups (GDG) are open and volunteer-run communities for developers interested in Google
              technologies. Our team focuses on learning, networking, and collaboration through events and hands-on
              sessions.
            </p>

            {/* Feature 1 */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={22} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    marginBottom: '4px',
                  }}
                >
                  Passionate Community Leaders
                </h4>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)' }}>
                  Our organizers build an inclusive environment where developers can connect, share knowledge, and grow
                  together.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={22} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    marginBottom: '4px',
                  }}
                >
                  Empowering Developers
                </h4>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)' }}>
                  We host meetups and codelabs to help developers stay current with modern tools and best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Team Photo */}
          <div
            style={{
              position: 'relative',
              minHeight: '440px',
              borderLeft: '2.5px solid var(--card-border)',
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
      {/* 4B. GALLERY SECTION (TAB CONTENT) */}
      {/* ======================================================== */}
      <section
        id="gallery"
        style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '60px 24px 80px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            className="font-pixel"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: 'var(--text-main)',
              marginBottom: '12px',
            }}
          >
            Campus Gallery
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
            Memorable moments from GDG RBU workshops, hackathons, and speaker summits.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {/* Gallery Item 1 */}
          <div
            className="brutal-box"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative', height: '230px', width: '100%' }}>
              <Image
                src="/gallery-1.jpg"
                alt="Cloud Study Jam"
                fill
                style={{ objectFit: 'cover' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: '#3b82f6',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '999px',
                  border: '1.5px solid #000',
                }}
              >
                Cloud Study Jam
              </span>
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                Google Cloud Workshop 2026
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)' }}>
                120+ students earned official Google Cloud skill badges during our hands-on cloud architecture bootcamp at RBU computer labs.
              </p>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div
            className="brutal-box"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative', height: '230px', width: '100%' }}>
              <Image
                src="/gallery-2.jpg"
                alt="Hackathon Team Sprint"
                fill
                style={{ objectFit: 'cover' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: '#f87171',
                  color: '#000',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '999px',
                  border: '1.5px solid #000',
                }}
              >
                CodeWave 36H Hackathon
              </span>
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                Overnight Innovation Sprint
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)' }}>
                Intensive 36-hour sprint where student developer teams built cutting-edge prototypes tackling sustainability and education tech.
              </p>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div
            className="brutal-box"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative', height: '230px', width: '100%' }}>
              <Image
                src="/gallery-3.jpg"
                alt="GDG Annual Conference"
                fill
                style={{ objectFit: 'cover' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: '#fbbf24',
                  color: '#000',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '999px',
                  border: '1.5px solid #000',
                }}
              >
                Tech Conference Keynote
              </span>
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                Annual Tech Summit 2026
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)' }}>
                Industry keynote speakers and Google Developer Experts inspiring full-house university auditorium on emerging AI paradigms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4C. PORTFOLIO SECTION (TAB CONTENT) */}
      {/* ======================================================== */}
      <section
        id="portfolio"
        style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '60px 24px 80px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            className="font-pixel"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: 'var(--text-main)',
              marginBottom: '12px',
            }}
          >
            Student Portfolio
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
            Flagship web apps and open-source systems engineered by GDG RBU members.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {/* Portfolio Card 1 */}
          <div
            className="brutal-box"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative', height: '220px', width: '100%' }}>
              <Image
                src="/portfolio-1.jpg"
                alt="EcoFlow Showcase"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '4px', border: '1px solid #16a34a' }}>React</span>
                <span style={{ fontSize: '11px', fontWeight: 700, background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '4px', border: '1px solid #0284c7' }}>Next.js</span>
                <span style={{ fontSize: '11px', fontWeight: 700, background: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '4px', border: '1px solid #d97706' }}>IoT Sensor</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
                EcoFlow: Campus Resource Manager
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)', flex: 1 }}>
                Real-time dashboard for tracking university energy grids and water management, reducing campus waste by 18%.
              </p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <a
                  href="https://github.com/25nathwanimg-debug/MEERA-NATHWANI-GDG-"
                  target="_blank"
                  rel="noreferrer"
                  className="brutal-box"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '8px 12px',
                    backgroundColor: '#000',
                    color: '#fff',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  GitHub Code ↗
                </a>
                <button
                  onClick={() => {
                    setIsEventDetailOpen(true);
                  }}
                  className="brutal-box"
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    backgroundColor: '#fbbf24',
                    color: '#000',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Portfolio Card 2 */}
          <div
            className="brutal-box"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, background: '#ede9fe', color: '#6d28d9', padding: '2px 8px', borderRadius: '4px', border: '1px solid #7c3aed' }}>Firebase</span>
              <span style={{ fontSize: '11px', fontWeight: 700, background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '4px', border: '1px solid #0284c7' }}>Next.js</span>
              <span style={{ fontSize: '11px', fontWeight: 700, background: '#fee2e2', color: '#b91c1c', padding: '2px 8px', borderRadius: '4px', border: '1px solid #dc2626' }}>Cloud Functions</span>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
              GDG RBU Community Portal
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)', flex: 1 }}>
              Official member directory and automated ticket dispatch system managing 1,200+ event registrations across Nagpur college chapters.
            </p>
            <div
              style={{
                backgroundColor: 'rgba(0,0,0,0.03)',
                padding: '14px',
                borderRadius: '8px',
                border: '1px dashed #cbd5e1',
                fontSize: '12px',
                color: 'var(--text-muted)',
              }}
            >
              Key feature: Instant pass verification with QR & confetti animation on enrollment.
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="#events"
                className="brutal-box"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  padding: '9px 12px',
                  backgroundColor: '#3b82f6',
                  color: '#fff',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Check Live Events ↗
              </a>
            </div>
          </div>

          {/* Portfolio Card 3 */}
          <div
            className="brutal-box"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, background: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '4px', border: '1px solid #d97706' }}>Google Maps API</span>
              <span style={{ fontSize: '11px', fontWeight: 700, background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '4px', border: '1px solid #16a34a' }}>FastAPI</span>
              <span style={{ fontSize: '11px', fontWeight: 700, background: '#ede9fe', color: '#6d28d9', padding: '2px 8px', borderRadius: '4px', border: '1px solid #7c3aed' }}>AI Assistant</span>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
              Campus Wayfinder & Schedule AI
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)', flex: 1 }}>
              Interactive campus navigation bot guiding freshers across Ramdeobaba University lecture halls, tech labs, and department offices.
            </p>
            <div
              style={{
                backgroundColor: 'rgba(0,0,0,0.03)',
                padding: '14px',
                borderRadius: '8px',
                border: '1px dashed #cbd5e1',
                fontSize: '12px',
                color: 'var(--text-muted)',
              }}
            >
              Includes conversational NLP model integrated with real-time class schedules.
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setIsAiOpen(true)}
                className="brutal-box"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  padding: '9px 12px',
                  backgroundColor: '#818cf8',
                  color: '#fff',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Try In AI Assistant ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. PAGE 4: FAQs SECTION */}
      {/* ======================================================== */}
      <section
        id="faqs"
        style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '60px 24px 80px',
        }}
      >
        <h2
          className="font-pixel"
          style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
            textAlign: 'center',
            marginBottom: '48px',
            color: 'var(--text-main)',
          }}
        >
          FAQs
        </h2>

        {/* FAQs Accordion List */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {FAQ_ITEMS.map((item) => {
            const isOpen = activeFaq === item.id;
            return (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Accordion Header Box */}
                <button
                  onClick={() => setActiveFaq(isOpen ? null : item.id)}
                  className="brutal-box"
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--faq-bg)',
                    borderRadius: '10px',
                    padding: '18px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--text-main)',
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 800 }}>{item.question}</span>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* Accordion Expanded Content Box */}
                {isOpen && (
                  <div
                    className="brutal-box"
                    style={{
                      backgroundColor: 'var(--faq-expanded-bg)',
                      borderRadius: '10px',
                      padding: '20px 24px',
                      color: 'var(--text-main)',
                      fontSize: '14.5px',
                      lineHeight: 1.6,
                      animation: 'fadeIn 0.2s ease',
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. PAGE 5: FOOTER & CONTACT */}
      {/* ======================================================== */}
      <footer
        id="contact"
        style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '40px 24px 0',
          marginTop: 'auto',
        }}
      >
        <div
          className="brutal-box-static"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            backgroundColor: 'var(--card-bg)',
            borderRadius: '4px',
            padding: '48px 44px 44px',
            position: 'relative',
          }}
        >
          {/* Center Brand Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            {/* GDG Brackets Logo */}
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
                color: 'var(--text-main)',
                marginBottom: '8px',
              }}
            >
              Google Developer Groups
            </h3>
            <p
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: 'var(--text-muted)',
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
                  backgroundColor: 'var(--footer-blue-bg)',
                  borderRadius: '10px',
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
                  backgroundColor: 'var(--footer-yellow-bg)',
                  borderRadius: '10px',
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
                backgroundColor: 'var(--footer-purple-bg)',
                borderRadius: '10px',
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
                    borderRadius: '8px',
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
                    borderRadius: '8px',
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
                    borderRadius: '8px',
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

        {/* Bottom Decorative Colorful Geometric Shapes Pattern */}
        <div style={{ width: '100%', overflow: 'hidden', marginTop: '20px', display: 'flex' }}>
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
      </footer>

      {/* ======================================================== */}
      {/* MODAL 1: REGISTRATION MODAL WITH CONFETTI & PASS */}
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
              backgroundColor: 'var(--card-bg)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
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
                  <h3 className="font-pixel" style={{ fontSize: '20px', color: 'var(--text-main)' }}>
                    Event Registration
                  </h3>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
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
                        backgroundColor: 'var(--card-bg)',
                        color: 'var(--text-main)',
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
                        backgroundColor: 'var(--card-bg)',
                        color: 'var(--text-main)',
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
                        backgroundColor: 'var(--card-bg)',
                        color: 'var(--text-main)',
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
              /* Success Pass View */
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#dcfce7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px',
                  }}
                >
                  <CheckCircle2 size={36} color="#16a34a" />
                </div>
                <h3 className="font-pixel" style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--text-main)' }}>
                  You are In!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Awesome! We have emailed your orientation pass to <strong>{regEmail}</strong>.
                </p>

                {/* Digital Ticket Pass Card */}
                <div
                  className="brutal-box"
                  style={{
                    backgroundColor: '#fbbf24',
                    padding: '20px',
                    borderRadius: '12px',
                    color: '#000',
                    textAlign: 'left',
                    marginBottom: '20px',
                  }}
                >
                  <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#78350f' }}>
                    TICKET PASS #GDG-2026-RBU
                  </p>
                  <h4 style={{ fontSize: '18px', fontWeight: 900, marginTop: '4px' }}>{regName}</h4>
                  <p style={{ fontSize: '13px', color: '#451a03', marginTop: '4px' }}>{regBranch}</p>
                  <div
                    style={{
                      borderTop: '1.5px dashed #000',
                      marginTop: '12px',
                      paddingTop: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  >
                    <span>Oct 7, 2026 • 3:00 PM</span>
                    <span>Auditorium, RBU</span>
                  </div>
                </div>

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

      {/* ======================================================== */}
      {/* MODAL 2: EVENT DETAILS MODAL */}
      {/* ======================================================== */}
      {isEventDetailOpen && (
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
              maxWidth: '540px',
              backgroundColor: 'var(--card-bg)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
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

            <span
              style={{
                backgroundColor: '#3b82f6',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 800,
                padding: '4px 10px',
                borderRadius: '6px',
                letterSpacing: '0.05em',
              }}
            >
              EVENT DETAILS
            </span>

            <h3 className="font-pixel" style={{ fontSize: '22px', margin: '14px 0 12px', color: 'var(--text-main)' }}>
              GDG ORIENTATION 2026
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#f1f5f9',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1.5px solid #000',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569', fontSize: '12px' }}>
                  <Calendar size={14} /> Date
                </div>
                <p style={{ fontWeight: 800, fontSize: '14px', marginTop: '4px', color: '#0f172a' }}>Oct 7, 2026</p>
              </div>

              <div
                style={{
                  backgroundColor: '#f1f5f9',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1.5px solid #000',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569', fontSize: '12px' }}>
                  <Clock size={14} /> Time
                </div>
                <p style={{ fontWeight: 800, fontSize: '14px', marginTop: '4px', color: '#0f172a' }}>3:00 PM IST</p>
              </div>
            </div>

            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '20px' }}>
              Join us for the most awaited campus technical orientation! Discover upcoming hands-on workshops in Web
              Development, Android, AI/ML, and Google Cloud. Network with mentors, participate in quick quizzes, and win
              exclusive Google Developer swag!
            </p>

            <button
              onClick={() => {
                setIsEventDetailOpen(false);
                setIsRegisterOpen(true);
              }}
              className="brutal-box"
              style={{
                width: '100%',
                backgroundColor: '#f59e0b',
                color: '#000',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              Proceed to Register
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: AI ASSISTANT MODAL (BONUS FEATURE) */}
      {/* ======================================================== */}
      {isAiOpen && (
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
              maxWidth: '520px',
              backgroundColor: 'var(--card-bg)',
              borderRadius: '16px',
              padding: '24px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              height: '560px',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '2px solid #e2e8f0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={20} color="#f59e0b" />
                <h3 className="font-pixel" style={{ fontSize: '17px', color: 'var(--text-main)' }}>
                  GDG RBU AI Assistant
                </h3>
              </div>
              <button
                onClick={() => setIsAiOpen(false)}
                style={{
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Messages */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    backgroundColor: m.sender === 'user' ? '#3b82f6' : '#f1f5f9',
                    color: m.sender === 'user' ? '#ffffff' : '#0f172a',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontSize: '13.5px',
                    lineHeight: 1.5,
                    border: '1.5px solid #000',
                    boxShadow: '2px 2px 0px #000',
                  }}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Suggested quick questions */}
            <div
              style={{
                display: 'flex',
                gap: '6px',
                overflowX: 'auto',
                paddingBottom: '10px',
                marginBottom: '4px',
              }}
            >
              {[
                'Tell me about upcoming events',
                'How to submit frontend task?',
                'Who can join GDG?',
              ].map((query, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInputMsg(query);
                  }}
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '4px 10px',
                    fontSize: '11px',
                    fontWeight: 600,
                    borderRadius: '999px',
                    border: '1px solid #cbd5e1',
                    background: 'var(--card-bg)',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                  }}
                >
                  {query}
                </button>
              ))}
            </div>

            {/* Input field */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask anything about GDG RBU..."
                className="brutal-box"
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '8px',
                  outline: 'none',
                  fontSize: '13.5px',
                  backgroundColor: 'var(--card-bg)',
                  color: 'var(--text-main)',
                }}
              />
              <button
                onClick={handleSendMessage}
                className="brutal-box"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '0 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Breakpoint CSS */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
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
            border-right: 2.5px solid var(--card-border) !important;
            border-bottom: none !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
