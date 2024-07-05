import Image from 'next/image'

import logoAlley from '@/images/logos/alley.png'
import logoAwesomeMotive from '@/images/logos/awesome-motive.png'
import logoHumanMade from '@/images/logos/human-made.png'
import logoNewfoldDigital from '@/images/logos/newfold-digital.png'
import logoNexcess from '@/images/logos/nexcess.png'
import logoWebDevStudios from '@/images/logos/webdevstudios.png'

export function WorkList() {
  let resume = [
    {
      company: 'Newfold Digital',
      title: 'Senior Software Engineer',
      logo: logoNewfoldDigital,
      label: 'Current',
    },
    {
      company: 'Alley',
      title: 'Senior Software Developer',
      logo: logoAlley,
      label: '2023',
    },
    {
      company: 'Nexcess',
      title: 'Senior Software Engineer',
      logo: logoNexcess,
      label: '2021-2022',
    },
    {
      company: 'Awesome Motive, Inc.',
      title: 'WPForms Developer',
      logo: logoAwesomeMotive,
      label: '2020',
    },
    {
      company: 'Human Made',
      title: 'Senior WordPress Engineer',
      logo: logoHumanMade,
      label: '2017-2019',
    },
    {
      company: 'WebDevStudios',
      title: 'Developer Lead',
      logo: logoWebDevStudios,
      label: '2013-2017',
    },
  ]

  return (
    <div className="mt-12 border-zinc-100  dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          />
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          />
        </svg>
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li className="flex gap-4" key={roleIndex}>
            <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full  shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-10 w-10 rounded-full" width={28} height={28} />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-1">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
              {role.label && <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">{role.label}</dd>}
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}
