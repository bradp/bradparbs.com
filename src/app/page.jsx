import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons'

import portraitImage from '@/images/brad-parbs-portrait.jpg'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default async function Home() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="hidden lg:block lg:pl-20">
          <Image
            src={portraitImage}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
        <div className="order-first lg:row-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Brad Parbs - Software Engineer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I&apos;m Brad Parbs. I&apos;m a Milwaukee-based Software Engineer with a passion for WordPress,
            JavaScript, and open-source software. I focus on building high-quality, performant, and accessible web
            experiences.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://github.com/bradp" aria-label="Brad Parbs on GitHub" icon={GitHubIcon} />
            <SocialLink
              href="https://linkedin.com/in/bradparbs"
              aria-label="Brad Parbs on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink href="mailto:brad@bradparbs.com" aria-label="Email Brad Parbs" icon={MailIcon} />
          </div>
        </div>
      </div>
    </Container>
  )
}
