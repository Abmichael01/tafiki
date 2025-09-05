import React from "react";
import { Link } from "react-router-dom";
import { Mail, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../Others/Logo";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, zoomIn } from "@/lib/animations";

const links = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Reward & Loyalty Program", link: "/loyalty" },
  { name: "Contact", link: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D8A42] text-white overflow-hidden relative font-satoshi">
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="section-padding pt-16 pb-0"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Social Media */}
          <motion.div variants={slideInLeft} className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <Logo color="white" className="w-[120px] h-[40px]" />
            </div>
            <p className="text-white/90 text-lg font-medium">
              Smarter Food Logistics
            </p>
            <motion.div 
              variants={staggerContainer}
              className="flex gap-4"
            >
              <motion.div 
                variants={fadeInUp}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <FaFacebookF className="text-white text-lg" />
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <FaInstagram className="text-white text-lg" />
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <FaXTwitter className="text-white text-lg" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <nav className="space-y-3">
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Link
                    to={link.link}
                    className="block text-white hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="space-y-3">
              <motion.div 
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <PhoneIcon className="text-white text-lg mt-1 flex-shrink-0" />
                <span className="text-white/90 text-sm leading-relaxed">
                  1800-121-3637, +91-7052-101-786
                </span>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <Mail className="text-white/90 text-lg mt-1 flex-shrink-0" />
                <span className="text-white/90 text-sm">info@tafiki.co.uk</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={slideInRight} className="space-y-4">
            <motion.h3 
              variants={fadeInUp}
              className="text-white font-bold text-xl"
            >
              Join the Tafiki Movement
            </motion.h3>
            <motion.p 
              variants={fadeInUp}
              className="text-white/80 text-sm leading-relaxed"
            >
              Ready to become a virtual distributor or retail partner?
            </motion.p>
            <motion.button 
              variants={zoomIn}
              className="bg-white text-[#1E4109] rounded-full w-full px-6 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Get started
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="flex flex-col sm:flex-row justify-between items-center sm:items-end mt-8 sm:mt-12 relative"
      >
        <motion.div 
          variants={fadeInUp}
          className="section-padding pb-4 sm:pb-5 order-2 sm:order-1"
        >
          <p className="text-white text-sm text-center sm:text-left">
            Copyright © 2024 Tafiki Ltd. All Rights Reserved 
          </p>
        </motion.div>
        <motion.div 
          variants={zoomIn}
          className="order-1 sm:order-2 flex-shrink-0"
        >
          <img
            src="/box.png"
            alt=""
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] object-contain"
          />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
