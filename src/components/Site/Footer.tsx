import React from "react";
import { Link } from "react-router-dom";
import { Mail, PhoneIcon } from "lucide-react";
import Logo from "../Others/Logo";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const links = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Reward & Loyalty Program", link: "/loyalty" },
  { name: "Contact", link: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D8A42] text-white overflow-hidden relative font-satoshi">
      <div className="section-padding pt-16 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Social Media */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <Logo color="white" className="w-[120px] h-[40px]" />
            </div>
            <p className="text-white/90 text-lg font-medium">
              Smarter Food Logistics
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <FaFacebookF className="text-white text-lg" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <FaInstagram className="text-white text-lg" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <FaXTwitter className="text-white text-lg" />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <nav className="space-y-3">
              {links.map((link, index) => (
                <Link
                  to={link.link}
                  key={index}
                  className="block text-white hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <PhoneIcon className="text-white text-lg mt-1 flex-shrink-0" />
                <span className="text-white/90 text-sm leading-relaxed">
                  1800-121-3637, +91-7052-101-786
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-white/90 text-lg mt-1 flex-shrink-0" />
                <span className="text-white/90 text-sm">info@tafiki.co.uk</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">
              Join the Tafiki Movement
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Ready to become a virtual distributor or retail partner?
            </p>
            <button className="bg-white text-[#1E4109] rounded-full w-full px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mt-8 sm:mt-12 relative">
        <div className="section-padding pb-4 sm:pb-5 order-2 sm:order-1">
          <p className="text-white text-sm text-center sm:text-left">
            Copyright © 2024 Tafiki Ltd. All Rights Reserved 
          </p>
        </div>
        <div className="order-1 sm:order-2 flex-shrink-0">
          <img
            src="/box.png"
            alt=""
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
