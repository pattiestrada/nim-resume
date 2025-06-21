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
          Senior Software Engineer
        </TextEffect>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-[var(--light-text)] dark:text-[var(--dark-text)]"
          delay={1.0}
        >
          Based in Dover, NH
        </TextEffect>
      </div>
      <div className="flex items-center justify-center flex-shrink-0 h-[90px] w-[280px]">
        <img
          src="/profile/profile.jpg"
          alt="Profile Photo"
          className="h-[100px] w-[140px] rounded-lg border-3 border-[#D897A8] object-cover"
        />
      </div>
    </header>
  )
}
