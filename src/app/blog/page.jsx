import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} className="md:hidden" decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" dateTime={article.date} className="mt-1 hidden md:block">
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Blog',
  description: 'Blog posts',
}

export default async function ArticlesIndex() {
  // TODO: update this to not be hardcoded.
  let articles = [
    {
      slug: 'a-beginners-guide-to-the-best-command-line-tools',
      author: 'Brad Parbs',
      date: '2015-06-25',
      title: 'A Beginner’s Guide to the Best Command Line Tools',
      description: 'Note: this post is more than 5 years old, information may be outdated.',
    },
    {
      slug: 'getting-started-vagrant-vvv-local-development',
      author: 'Brad Parbs',
      date: '2015-01-14',
      title: 'Getting started with Vagrant & VVV for local development',
      description: 'Note: this post is more than 5 years old, information may be outdated.',
    },
    {
      slug: 'setting-up-wordpress-nginx-hhvm-for-the-fastest-possible-load-timessetting-up-wordpress-nginx-hhvm-for-the-fastest-possible-load-times',
      author: 'Brad Parbs',
      date: '2014-07-17',
      title: 'Setting up WordPress + Nginx + HHVM For The Fastest Possible Load Times',
      description: 'Note: this post is more than 5 years old, information may be outdated.',
    },
  ]

  articles = articles.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <SimpleLayout
      title="Blog"
      intro=""
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
