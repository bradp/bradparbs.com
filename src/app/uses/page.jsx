import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import uses from './uses.json'

export const metadata = {
  title: 'Uses',
  description: 'Software, tools, and things Brad Parbs uses and recommends.',
}

export default function Uses() {
  return (
    <SimpleLayout title="Uses" intro="Software, tools, and things I use and recommend.">
      <div className="space-y-20">
        {uses.map((section) => (
          <Section key={section.title} {...section}>
            <ul role="list" className="space-y-16">
              {section.items.map((tool) => (
                <Card as="li" key={tool.title}>
                  <Card.Title as="h3" href={tool.href || '#'}>
                    {tool.title}
                  </Card.Title>
                  <Card.Description>{tool.description}</Card.Description>
                </Card>
              ))}
            </ul>
          </Section>
        ))}
      </div>
    </SimpleLayout>
  )
}
