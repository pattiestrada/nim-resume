'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <AnimatedBackground
        className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
        enableHover={false}
      >
        <div className="flex items-center justify-between w-full">
          <a href="https://github.com/ibelick/nim" target="_blank" rel="noopener noreferrer">
            <TextLoop className="text-xs text-zinc-500">
              <span>© 2024 Nim.</span>
              <span>Built with Motion-Primitives.</span>
            </TextLoop>
          </a>
        </div>
      </AnimatedBackground>
    </footer>
  )
}
