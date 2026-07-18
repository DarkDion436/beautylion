import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

import {
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-24">
      <div className="container-x py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-2xl mb-3">LION OF JUDAH BEAUTY</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Considered beauty essentials for skin, hair, and self — crafted
            with intention, delivered across Kenya.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-white/50 mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/shop" className="hover:text-white">All Products</Link></li>
            <li><Link href="/new-arrivals" className="hover:text-white">New Arrivals</Link></li>
            <li><Link href="/best-sellers" className="hover:text-white">Best Sellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-white/50 mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contacts" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-white/50 mb-4">Get in Touch</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <FaPhone size={15} /> +254 793 692 936
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope size={15} /> hello@noirebeaute.co.ke
            </li>
          </ul>
          <div className="flex gap-4 mt-5">
            <FaInstagram size={18} className="text-white/70 hover:text-white cursor-pointer" />
            <FaFacebook size={18} className="text-white/70 hover:text-white cursor-pointer" />
            <FaTwitter size={18} className="text-white/70 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} LION OF JUDAH BEAUTY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
