'use client'
import { motion } from 'motion/react'
import { motion as fmotion, AnimatePresence } from 'framer-motion'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import React, { useState } from 'react'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  TECHNOLOGIES,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  EDUCATION,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-[#C8CEC2] hover:bg-[#636A5E]"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [expandedJobs, setExpandedJobs] = useState<string[]>([])

  const toggleJob = (jobId: string) => {
    setExpandedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    )
  }

  return (
    <motion.main
      className="space-y-10"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p>
            Focused on creating performant and innovative data pipelines and web applications.
            Bridging the gap between design and development.
          </p>
          <img
            src="/img/castle.png"
            alt="Castle"
            className="mx-auto my-6 h-35 w-auto rounded-lg object-contain"
          />
        </div>
      </motion.section>


      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Skills</h3>
        <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] ">
        <Spotlight
          className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl"
          size={64}
        />
        <div className="relative h-full w-full rounded-[15px] bg-[#F4E1E6] p-4 ">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {TECHNOLOGIES.map((tech) => (
              <a
              key={tech.id}
              href={tech.link} // External link to the technology's URL
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practices for external links
              className="flex items-center space-x-2"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} Logo`}
                className="h-10 w-10 object-contain transition-transform duration-300 hover:scale-120 hover:translate-y-[-4px]" // Add hover animation
              />
            </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>

    
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <div key={job.id}>
              <a
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] cursor-pointer block"
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  toggleJob(job.id)
                }}
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-[#F4E1E6] hover:bg-[#e2bfc9] transition-colors duration-200 p-4 ">
                  <div className="relative flex w-full flex-row justify-between">
                    <div>
                      <h4 className="font-normal">
                        {job.title}
                      </h4>
                      <p className="text-[#A3813E]">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-[#A3813E]">
                      {job.start} - {job.end}
                    </p>
                  </div>
                  <AnimatePresence>
                    {expandedJobs.includes(job.id) && (
                      <fmotion.div
                        key="details"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 text-zinc-700"
                      >
                        <ul className="job-detail-list list-disc pl-6 space-y-1">
                          {Array.isArray(job.detail)
                            ? job.detail.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))
                            : <li>{job.detail}</li>}
                        </ul>
                      </fmotion.div>
                    )}
                  </AnimatePresence>
                </div>
              </a>
            </div>
          ))}
        </div>
      </motion.section>




      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((school) => (
            <a
              className="relative overflow-hidden rounded-2xl p-[1px]"
              href={school.link}
              target="_blank"
              rel="noopener noreferrer"
              key={school.id}
            >
              <Spotlight
                className="blur-2xl"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-[#F4E1E6] hover:bg-[#e2bfc9] transition-colors duration-200 p-4 ">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal">
                      {school.degree} in {school.fieldOfStudy}
                    </h4>
                    <p className="text-[#A3813E]">
                      {school.institution}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-2">
          {BLOG_POSTS.map((post) => (
            <a
              className="relative overflow-hidden rounded-2xl p-[1px]"
              key={post.uid}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Spotlight
                className="blur-2xl"
                size={64}
              />
              <div className="relative h-full w-full rounded-full bg-[#F4E1E6] hover:bg-[#e2bfc9] transition-colors duration-200 p-4">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal">
                      {post.title}
                    </h4>
                    <p className="text-[#A3813E]">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Contact Me</h3>
        <form
          className="max-w-md mx-auto bg-[#F4E1E6] rounded-2xl p-6 flex flex-col gap-4 shadow"
          action="https://formspree.io/f/meokwnle"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="rounded px-3 py-2 border border-zinc-300 bg-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="rounded px-3 py-2 border border-zinc-300 bg-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="rounded px-3 py-2 border border-zinc-300 bg-white focus:outline-none"
            rows={4}
          />
          <button
            type="submit"
            className="bg-[#A3813E] text-white rounded px-4 py-2 hover:bg-[#803146] transition-colors"
          >
            Send
          </button>
        </form>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Socials</h3>

        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
