import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About pricing',
  description: 'seo description',
  keywords: ['Pricing page, Tomás Martinez']
}

export default function PricingPage() {
    return (
      <>
          <span className="text-7xl">Pricing page</span>
      </>
    )
  }
  