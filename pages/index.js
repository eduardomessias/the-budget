import Layout from '../components/layout'
import Header from '../components/header'
import HeaderNav from '../components/headerNav'
import HeaderNavLink from '../components/headerNavLink'
import SimpleList from '../components/simpleList'
import SimpleListItem from '../components/simpleListItem'


export async function getStaticProps() {
  // const response = await fetch(process.env.API_ENDPOINT + "/api/budgets")
  // const jsonResponse = await response.json()
  // const data = jsonResponse.data
  const data = []
  return {
    props: {
      data
    }
  }
}


export default function Home({data}) {
  return (
    <Layout>
      <Header>
        <HeaderNav>
          <HeaderNavLink caption="Setup budget" link="/budgets/create" />
          <HeaderNavLink caption="Goals" link="/goals" />
        </HeaderNav>
      </Header>
      <SimpleList title="Budget list" subTitle="All your budgets organized by period">
        {data.map (budget => 
          <SimpleListItem key={budget._id} caption={`From ${new Date(budget.from).toLocaleDateString('pt-BR')} to ${new Date(budget.to).toLocaleDateString('pt-BR')}`} />
        )}
      </SimpleList>
    </Layout>
  )
}