import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/brad-parbs-portrait.jpg'
import { WorkList } from '@/components/WorkList'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-500 dark:text-zinc-200 dark:hover:text-pink-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata = {
  title: 'About',
  description: 'About Brad Parbs',
}

export default function About() {
  return (
    <Container className="mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-md px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="portrait of Brad Parbs"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">About</h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Brad Parbs is a passionate software engineer who has dedicated over a decade to the world of web
              development. Known for his deep involvement in the WordPress community, Brad has made significant
              contributions to various high-profile projects and open-source initiatives. He loves sharing his knowledge
              and has spoken at numerous conferences, inspiring many with his insights and expertise. Brad’s enthusiasm
              for technology drives him to constantly explore new tools and techniques, always exploring ways to make
              the web a better place.
            </p>
            <p>
              Brad is currently a Senior Software Engineer at <a href="https://newfold.com">Newfold Digital</a>, where
              he is building the next generation of web hosting products, services, and experiences.
            </p>
            <p>
              Brad is passionate about building high-quality, performant, and accessible web experiences. He&apos;s
              interested in WordPress, JavaScript, and open-source software. He&apos;s excited about the future of AI,
              machine learning, and the possibilities they bring to the web while also being mindful of the ethical
              implications of these.
            </p>
            <p>
              Brad lives in Milwaukee, Wisconsin where he enjoys spending time collecting weird and interesting objects,
              building silly side projects, and wearing colorful shirts.
            </p>
          </div>
          <ul role="list" className="mt-6 space-y-4">
            <SocialLink icon={GitHubIcon} href="https://github.com/bradp">
              Brad Parbs on GitHub
            </SocialLink>
            <SocialLink icon={LinkedInIcon} href="https://linkedin.com/in/bradparbs">
              Brad Parbs on LinkedIn
            </SocialLink>
            <SocialLink icon={MailIcon} href="mailto:brad@bradparbs.com">
              brad@bradparbs.com
            </SocialLink>
          </ul>
        </div>
        <div className="lg:pl-20">
          <WorkList />
        </div>
      </div>
    </Container>
  )
}
