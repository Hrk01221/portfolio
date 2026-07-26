import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
export const Footer = () => {
  return (
    <section id="footer" className="py-15 lg:mb-10 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 border-t border-surface gap-1">
          <div className="text-[10px] lg:text-sm text-foreground/80 tracking-wide flex items-center place-self-center lg:place-self-start mt-5">
            © HRK 2026. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-4 mt-5 place-self-center lg:place-self-end">
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
              <FaXTwitter />
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
