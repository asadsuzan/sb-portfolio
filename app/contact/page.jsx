'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import UiWrapper from '../ui/UiWrapper';

export default function ContactPage() {
      const bannerContent = (
    <>
     Get in Touch
        <p className=" text-lg">
            Whether you have a question, a project, or just want to say hello, I’d love to hear from you.
        </p>
    </>
  );
  const bannerProps = {
    title: "contact me",
    content: bannerContent,
    bgpath: "./banner1.jpg",
    pageName: "contact",
  };
  const style = {
    marginTop: "-50px",
  };
  return (
<UiWrapper 
  bannerProps={bannerProps} layoutStyles={style}>
        <section className="">
 

        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 bg-[#00283a] p-8 rounded-2xl shadow-xl"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle submission
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm mb-1 block">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-[#011c2b] border border-[#334155] text-white p-3 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-sm mb-1 block">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-[#011c2b] border border-[#334155] text-white p-3 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm mb-1 block">Subject</label>
            <input
              type="text"
              required
              placeholder="Subject"
              className="w-full bg-[#011c2b] border border-[#334155] text-white p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">Message</label>
            <textarea
              rows={6}
              required
              placeholder="Write your message..."
              className="w-full bg-[#011c2b] border border-[#334155] text-white p-3 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#004e75] hover:bg-blue-600 transition text-white font-medium py-3 rounded-lg"
          >
            Send Message
          </button>
        </motion.form>

    </section>
</UiWrapper>
  );
}
