import Layout from '../components/layout'
import Header from '../components/header'
import HeaderNav from '../components/headerNav'
import HeaderNavLink from '../components/headerNavLink'
import Hero from '../components/hero'

export async function getStaticProps () {
  const auth = false

  return {
    props: {
      auth: auth
    }
  }
}

export default function Home({auth}) {
  return (
    <Layout>
      {auth &&
        <Header>
          <HeaderNav>
            <HeaderNavLink caption="Budgets" link="/budget" />
            <HeaderNavLink caption="Goals" link="/goal" />
          </HeaderNav>
        </Header>
      }
      <Hero />
    </Layout>
  )
}