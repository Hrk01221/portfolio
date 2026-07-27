import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin } from "lucide-react";
import { FaLocationArrow, FaPaperPlane } from "react-icons/fa";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaRegMessage,
  FaSquareXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { toast } from "sonner";
export const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-15 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Contact
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Get in touch
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Open to freelance projects, collaborations, and full-time SWE
            opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* left container */}
          <div className="glass rounded-2xl p-8 space-y-6 hover:-translate-y-2 shadow-xl hover:shadow-primary/10 border hover:border-primary/60 transition-al duration-500 ease-out animate-fade-in">
            <h1 className="text-2xl font-bold">Contact Info</h1>

            <div className="flex gap-4">
              <div className="w-fit p-4 glass-strong rounded-xl">
                <FaRegMessage className="w-3 h-3 lg:w-5 lg:h-5 text-green-500" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <span className="text-[10px] lg:text-sm text-muted-foreground">
                  Email
                </span>
                <span className="text-sm lg:text-lg font-medium tracking-wide">
                  hrkisdead01221@gmail.com
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-fit p-4 glass-strong rounded-xl">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-purple-500" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <span className="text-[10px] lg:text-sm text-muted-foreground">
                  Location
                </span>
                <span className="text-sm lg:text-lg font-medium tracking-wide">
                  Dhaka , Bangladesh
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-fit p-4 glass-strong rounded-xl">
                <FaGithub className="w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <span className="text-[10px] lg:text-sm text-muted-foreground">
                  Github
                </span>
                <span className="text-sm lg:text-lg font-medium tracking-wide">
                  @Hrk01221
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-muted-foreground via-muted-foreground/50 to-transparent" />

            <div className="flex flex-col gap-4">
              <span className="text-sm lg:text-base text-muted-foreground">
                Social
              </span>

              <div className="flex gap-1 lg:gap-6">
                <div className="glass hover:bg-gradient-to-br hover:from-muted-foreground/50 hover:via-muted-foreground/10 hover:to-transparent p-3 rounded-2xl hover:scale-110 cursor-pointer transition-all duration-400">
                  <FaGithub className="w-5 h-5" />
                </div>

                <div className="glass hover:bg-gradient-to-br hover:from-muted-foreground/50 hover:via-muted-foreground/10 hover:to-transparent p-3 rounded-2xl hover:scale-110 cursor-pointer transition-all duration-400">
                  <FaLinkedin className="w-5 h-5" />
                </div>

                <div className="glass hover:bg-gradient-to-br hover:from-muted-foreground/50 hover:via-muted-foreground/10 hover:to-transparent p-3 rounded-2xl hover:scale-110 cursor-pointer transition-all duration-400">
                  <FaWhatsapp className="w-5 h-5" />
                </div>

                <div className="glass hover:bg-gradient-to-br hover:from-muted-foreground/50 hover:via-muted-foreground/10 hover:to-transparent p-3 rounded-2xl hover:scale-110 cursor-pointer transition-all duration-400">
                  <FaFacebook className="w-5 h-5" />
                </div>

                <div className="glass hover:bg-gradient-to-br hover:from-muted-foreground/50 hover:via-muted-foreground/10 hover:to-transparent p-3 rounded-2xl hover:scale-110 cursor-pointer transition-all duration-400">
                  <FaSquareXTwitter className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* right container */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="glass rounded-2xl p-8 space-y-4 hover:-translate-y-2 shadow-xl hover:shadow-primary/10 border hover:border-primary/60 transition-all duration-500 ease-out animate-fade-in"
          >
            <h1 className="text-2xl font-bold mb-8">Send a Message</h1>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3 text-sm">
                <span className="px-1 text-foreground/70">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border-[1.8px] border-border rounded-lg px-3 py-2 focus:outline-none focus:border-primary/60 placeholder:text-muted-foreground/80 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-3 text-sm">
                <span className="px-1 text-foreground/70">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@gmail.com"
                  required
                  className="border-[1.8px] border-border rounded-lg px-3 py-2 focus:outline-none focus:border-primary/60 placeholder:text-muted-foreground/80 transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="px-1 text-foreground/70 text-sm">Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                className="border border-border rounded-lg px-3 py-2 focus:outline-none focus:border-primary/60 placeholder:text-muted-foreground/80 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="px-1 text-foreground/70 text-sm">Message</span>
              <textarea
                name="message"
                placeholder="Tell me about it...."
                required
                className="min-h-30 border border-border rounded-lg px-3 py-2 focus:outline-none focus:border-primary/60 placeholder:text-muted-foreground/80 transition-all duration-300 overflow-y-auto scrollbar-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex border glass-strong border-primary p-3 rounded-2xl justify-center items-center gap-4 text-foreground cursor-pointer hover:bg-premium-purple transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  <span className="text-sm lg:text-md tracking-widest">
                    Sending...
                  </span>
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="text-sm lg:text-md tracking-widest">
                    Send Message
                  </span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
