import Layout from '../../components/layout'
import Header from '../../components/header'
import HeaderNav from '../../components/headerNav'
import HeaderNavLink from '../../components/headerNavLink'
import HeaderButton from '../../components/headerButton'
import SimpleList from '../../components/simpleList'
import SimpleListItem from '../../components/simpleListItem'


const GET_ENDPOINT = `${process.env.API_ENDPOINT}/api/goal`


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


function createGoal () {
  window.location = '/goal/submit'
}


export default function Goal ({data}) {
  return (
    <Layout>
      <Header>
        <HeaderNav>
          <HeaderNavLink caption="Back home" link="/" />
        </HeaderNav>
        <HeaderButton onClickHandler={createGoal} text="Set new goal"/>
      </Header>
      <SimpleList title="Budget goals" subTitle="FROM 1st JAN TO 31st DEV, 2022">
        {data.map (goal => 
          <SimpleListItem key={goal._id} caption={goal.label}>
            <p>{`To be completed by ${new Date(goal.deadline).toLocaleDateString('pt-BR')}`}</p>
            <p>{`${goal.weight}`}</p>
          </SimpleListItem>
        )}
      </SimpleList>
    </Layout>
  )
}