'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState } from 'react'


export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300"
        springOptions={{
          bounce: 0,
        }}
      />

      <main className="prose prose-gray mt-24 pb-20 prose-h4:prose-base prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        {children}
      </main>
    </>
  )
}
