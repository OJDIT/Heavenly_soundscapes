import Link from "next/link"
import { Instagram, Facebook, Youtube, Mail, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/20 bg-background py-8 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-4 md:w-1/3">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex items-center">
                <Music className="h-6 w-6 text-gold-500" />
                <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-md"></div>
              </div>
              <span className="font-playfair font-bold text-lg">
                Heavenly <span className="gold-text">Soundscapes</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Touching lives through sound. Professional faith-inspired music production based in Coventry, UK.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gold-500 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gold-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-gold-400 transition-colors">
                  Sound Store
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-gold-400 transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gold-500 mb-3">Connect</h4>
            <div className="flex gap-3">
              <Link href="#" className="hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gold-400 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="mailto:contact@heavenlysoundscapes.com" className="hover:text-gold-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-500/20 mt-8 pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Heavenly Soundscapes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
