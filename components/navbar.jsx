'use client'
import { useState, useEffect, useRef } from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'Contact', to: 'contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
          Dr<span className="text-slate-800">SkinCare</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm lg:text-base font-heading">
          {navItems.map(({ label, to }) => (
            <ScrollLink
              key={label}
              to={to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="text-blue-600"
              className="cursor-pointer text-slate-700 relative group font-medium transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-blue-600"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`md:hidden bg-white px-6 py-3 space-y-3 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {navItems.map(({ label, to }) => (
          <ScrollLink
            key={label}
            to={to}
            smooth={true}
            duration={600}
            offset={-80}
            onClick={() => setMenuOpen(false)}
            className="block text-slate-700 text-base py-2 hover:text-blue-600 transition cursor-pointer"
          >
            {label}
          </ScrollLink>
        ))}
      </div>
    </header>
  )
}

export default Navbar
