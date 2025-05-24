'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
export const dynamic = 'force-dynamic'; // optional
export const revalidate = 0;
export default function BlogDetails() {
  return (
    <section className="bg-[#011c2b] text-white px-6 md:px-10 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Title and Meta */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            The Future of Web Development with Next.js
          </h1>
          <p className="text-[#b2becd] text-sm">
            Published on May 24, 2025 · By Asaduzzaman Suzan
          </p>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg mb-12"
        >
          <Image
            src="/blog-cover.jpg" // Replace with your blog image
            alt="Blog Cover"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Blog Content */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="prose prose-invert prose-lg max-w-none text-[#cbd5e1]"
        >
          <p>
            Next.js continues to dominate the frontend ecosystem with its powerful hybrid rendering model, robust routing system, and seamless developer experience.
          </p>

          <h2>Why Developers Love It</h2>
          <p>
            Developers enjoy using Next.js because it handles the hard parts of performance, SEO, and scalability out of the box.
          </p>

          <blockquote>
            “Next.js gives you everything you need to build a production-grade React app.”
          </blockquote>

          <h3>Key Features</h3>
          <ul>
            <li>File-based routing</li>
            <li>Static and server-side rendering</li>
            <li>Built-in API routes</li>
            <li>Image optimization</li>
          </ul>

          <p>
            As the ecosystem grows, features like App Router and Server Components push the boundaries of what's possible with React.
          </p>

          <h3>Conclusion</h3>
          <p>
            If you're looking to build fast, scalable, and modern web apps, Next.js is a framework you can rely on.
          </p>
        </motion.article>
      </div>
    </section>
  );
}
