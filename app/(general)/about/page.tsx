import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About page',
  description: 'seo description',
  keywords: ['About page, Tomás Martinez']
}

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
        <span className="text-7xl">About page</span>
    </main>
  )
}
