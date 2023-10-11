// import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import ContactPage from 'components/ContactPage'

interface PageProps extends SharedPageProps {
//   posts: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { settings, draftMode } = props;

  if (draftMode) {
    // Assume posts is an empty array if in draft mode
    const posts: Post[] = [];
    return (
      <>
        
        <PreviewIndexPage posts={posts} settings={settings} />
      </>
    );
  }

  return (
    <>
      
      <ContactPage settings={settings} />
    </>
  );
}


export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ])

  return {
    props: {
    //   posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
