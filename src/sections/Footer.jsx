import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <section id="footer" className="py-15 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="flex justify-between border-t border-surface flex-wrap gap-1">
          <div className="text-[10px] md:text-sm text-foreground/80 tracking-wide flex items-center mt-5">
            © HRK 2026. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
