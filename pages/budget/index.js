import Layout from '../../components/layout'
import Header from '../../components/header'
import HeaderNav from '../../components/headerNav'
import HeaderNavLink from '../../components/headerNavLink'
import HeaderButton from '../../components/headerButton'
import SimpleList from '../../components/simpleList'
import SimpleListItem from '../../components/simpleListItem'
import Goal from '../goal'


const GET_ENDPOINT = `${process.env.API_ENDPOINT}/api/budget`


export async function getStaticProps() {
  return fetch (GET_ENDPOINT)
    .then (response => response.json ())
    .then (json => {
      return {
        props: {
          data: json.data
        }
      }   
    })
}


function setupBudget () {
  window.location = "/budget/create"
}


export default function Home({ data }) {
  return (
    <Layout>
      <Header>
        <HeaderNav>
          <HeaderNavLink caption="Back home" link="/" />
        </HeaderNav>
        <HeaderButton onClickHandler={setupBudget} text="Setup a new budget" />
      </Header>
      <SimpleList title="Budget list" subTitle="All your budgets organized by period">
        {data.map(budget =>
          <SimpleListItem key={budget._id} caption={`From ${new Date(budget.from).toLocaleDateString('pt-BR')} to ${new Date(budget.to).toLocaleDateString('pt-BR')}`}>
            {budget.goals.map(goal => 
              <p key={goal._id}>{goal.label} (deadline: {new Date(goal.deadline).toLocaleDateString()})</p>
            )}
          </SimpleListItem>          
        )}
      </SimpleList>
    </Layout>
  )
}