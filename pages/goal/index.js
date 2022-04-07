import { Layout, Header, HeaderNav, HeaderNavLink, HeaderButton, SimpleList, SimpleListItem } from '../../components/ux'


export async function getStaticProps() {
  const GET_ENDPOINT = `${process.env.API_ENDPOINT}/api/goal`
  return fetch(GET_ENDPOINT)
    .then(response => response.json())
    .then(json => {
      return {
        props: {
          data: json.data
        }
      }
    })
}


export default function Goal({ data }) {
  return (
    <Layout>
      <Header>
        <HeaderNav>
          <HeaderNavLink caption="Back home" link="/home" />
        </HeaderNav>
        <HeaderButton href="/goal/submit" text="Set new goal" />
      </Header>
      <SimpleList title="Budget goals" subTitle="FROM 1st JAN TO 31st DEV, 2022">
        {data.map(goal =>
          <SimpleListItem key={goal._id} caption={goal.label}>
            <p>{`To be completed by ${new Date(goal.deadline).toLocaleDateString('pt-BR')}`}</p>
            <p>{`${goal.weight}`}</p>
          </SimpleListItem>
        )}
      </SimpleList>
    </Layout>
  )
}