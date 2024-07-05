import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import appearances from './speaking.json'

export const metadata = {
  title: 'Speaking',
  description:
    'Brad Parbs has spoken at WordCamps and events across the country, sharing his knowledge and experience with WordPress and web development.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Speaking"
      intro="I've spoken at WordCamps and events across the country, sharing mu knowledge and experience with WordPress and web development."
    >
      <div className="space-y-20">
        {appearances.map((section) => (
          <Section key={section.title} {...section}>
            <ul role="list" className="space-y-16">
              {section.items.map((appearance) => (
                <Card as="article" key={appearance.title}>
                  <Card.Title as="h3" href={appearance.href}>
                    {appearance.title}
                  </Card.Title>
                  <Card.Eyebrow>{appearance.event}</Card.Eyebrow>
                  <Card.Description>{appearance.description}</Card.Description>
                  <Card.Cta>{appearance.cta}</Card.Cta>
                </Card>
              ))}
            </ul>
          </Section>
        ))}
      </div>
    </SimpleLayout>
  )
}
