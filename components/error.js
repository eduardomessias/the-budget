import Layout from './layout'
import Hero from './hero'


export default function Error({ image, title, message }) {
  return (
    <Layout>
      <Hero image={image} title={title} text={message} />
    </Layout>
  )
}