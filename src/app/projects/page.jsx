import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import projects from './projects.json'

export const metadata = {
  title: 'Projects',
  description: 'Some of the projects Brad Parbs is working on.',
}

export default function Projects() {
  return (
    <SimpleLayout title="Projects" intro="Some of my projects.">
      <div className="space-y-20">
        {projects.map((section) => (
          <Section key={section.id} {...section}>
            <ul role="list" className="space-y-10">
              {section.items.map((project) => (
                <Card as="article" key={project.title}>
                  <Card.Title as="h3" href={project.href}>
                    {project.emoji && <span className="mr-2">{project.emoji}</span>}
                    {project.title}
                  </Card.Title>
                  {project.misc && <Card.Eyebrow>{project.misc}</Card.Eyebrow>}
                  <Card.Description>{project.description}</Card.Description>
                  <Card.Cta>{project.href.replace('https://', '')}</Card.Cta>
                </Card>
              ))}
            </ul>
          </Section>
        ))}
      </div>
    </SimpleLayout>
  )
}
