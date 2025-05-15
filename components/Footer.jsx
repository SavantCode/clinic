import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-heading">
            DermaCare Clinic
          </h3>
          <p className="text-sm text-gray-300 font-body">
            Leading skin & hair care clinic providing advanced treatments with a personal touch.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 font-heading">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300 font-body">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 font-heading">Contact</h4>
          <p className="text-sm text-gray-300 font-body">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-300 font-body">Email: info@dermacareclinic.in</p>
          <p className="text-sm text-gray-300 font-body">Location: Mumbai, India</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 font-heading">Follow Us</h4>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 font-body">
        © {new Date().getFullYear()} DermaCare Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
