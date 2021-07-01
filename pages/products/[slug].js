import ErrorPage from 'next/error'
import {useRouter} from 'next/router'
import {groq} from 'next-sanity'
import {usePreviewSubscription, urlFor, PortableText} from '../../lib/sanity'
import {getClient} from '../../lib/sanity.server'

const productQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    body,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current
  }
`

export default function Product({data, preview}) {
  const router = useRouter()

  const {data: product} = usePreviewSubscription(productQuery, {
    params: {slug: data.product?.slug},
    initialData: data.product,
    enabled: preview && data.product?.slug,
  })

  if (!router.isFallback && !data.product?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const {title} = product
  return (
    <article>
      <h2>{title}</h2>
    </article>
  )
}

export async function getStaticProps({params, preview = false}) {
  const product = await getClient(preview).fetch(productQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {product},
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "product" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}