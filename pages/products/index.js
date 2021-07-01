import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'

import Link from 'next/link'

const productQuery = groq`
  *[_type == "product"] {
    title,
    slug
  }
`

export default function Products ({data}) {
  return (
    <>
      { data.product.map((product, index) => (
        <div className="indent" key={index}>
            {product.title} - 
            <Link href={`/products/${product.slug.current}`}>
              <a> See Details </a>
            </Link>
        </div>
      )) }
    </>
  ) 
}


export async function getStaticProps({params, preview = false}) {
  const product = await getClient(preview).fetch(productQuery)
  return {
    props: {
      preview,
      data: {product},
    },
  }
}