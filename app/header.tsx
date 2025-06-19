'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Patricia Estrada
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-[var(--light-text)] dark:text-[var(--dark-text)]"
          delay={0.5}
        >
          Data and Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
