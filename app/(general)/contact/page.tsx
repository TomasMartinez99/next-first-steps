import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About contact',
  description: 'seo description',
  keywords: ['Contact page, Tomás Martinez']
}

export default function ContactPage() {
    return (
      <>
          <span className="text-7xl">Contact page</span>
      </>
    )
  }
  