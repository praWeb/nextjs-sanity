import '../styles.css'

export default function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric) {
  switch(metric.name) {
    case 'FCP':
      console.log(metric)
      break;
    case 'LCP':
      break;
    case 'FID':
      break;
    case 'TTFB':
      break;
    case 'Next.js-hydration':
      break;
    case 'Next.js.route-change-to-render':
      break;
    case 'Next.js-render':
      break;
    default:
      break;
  }
}