import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'

import Link from 'next/link'

const productQuery = groq`
  *[_type == "product"] {
    title,
    slug,
    _id,
    "price": defaultProductVariant.price,
    "imageUrl": defaultProductVariant.images[0].asset->url,
    "blurb": blurb.en
  }
`

export default function Products ({data}) {
  return (
    <>
      { data.product.map((product, index) => (
        <div className="indent" key={index}>
            <div>
              <span> {product.title} </span> - <span> {product.price} </span>
            </div>
            <div>
              {product.blurb}
            </div>
            <Link href={`/products/${product.slug.current}`}>
              <img src={product?.imageUrl} style={{cursor: "pointer"}}/>
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