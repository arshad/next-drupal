import Head from "next/head"
import { getPathsFromContext, getResourceFromContext } from "next-drupal"

import { Layout } from "@/components/layout"

export default function BasicPage({ page }) {
  if (!page) return null

  return (
    <Layout>
      <Head>
        <title>{page.title}</title>
      </Head>
      <div variant="container.sm" py="10|12">
        <h1 variant="heading.h1">{page.title}</h1>
        {page.body && (
          <div
            dangerouslySetInnerHTML={{ __html: page.body.processed }}
            sx={{
              p: {
                variant: "text.paragraph",
              },
            }}
          />
        )}
      </div>
    </Layout>
  )
}

export async function getStaticPaths(context) {
  return {
    paths: await getPathsFromContext("node--page", context),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const page = await getResourceFromContext("node--page", context)

  if (!page?.status) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page,
    },
    revalidate: 1,
  }
}
