import Layout from '../../components/layout'
import Header from '../../components/header'
import HeaderNav from '../../components/headerNav'
// import HeaderNavLink from '../../components/headerNavLink'
import HeaderButton from '../../components/headerButton'
import SimpleListContainer from '../../components/simpleListContainer'
import SimpleListItem from '../../components/simpleListItem'


import { useState } from 'react'


export async function getStaticProps() {
  const response = await fetch('/api/goals')
  const jsonResponse = await response.json()
  const data = jsonResponse.data
  return {
    props: {
      data      
    }
  }
}


export default function Goals({data}) {
  function createGoal() {
    window.location = '/goals/create'
  }
  return (
    <Layout>
      <Header>
        <HeaderNav>
          {/* <HeaderNavLink caption="First link" /> */}
        </HeaderNav>
        <HeaderButton onClickHandler={createGoal} text="Set new goal"/>
      </Header>
      <SimpleListContainer title="Budget goals" subTitle="FROM 1st JAN TO 31st DEV, 2022">
        {data.map(goal => <SimpleListItem key={goal._id} caption={goal.label} content={`To be completed by ${new Date(goal.to).toLocaleDateString('pt-BR')}`} />)}
      </SimpleListContainer>
    </Layout>
  )
}