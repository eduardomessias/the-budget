import Layout from '../../components/layout'
import Header from '../../components/header'
import HeaderNav from '../../components/headerNav'
// import HeaderNavLink from '../../components/headerNavLink'
import HeaderButton from '../../components/headerButton'
import ActionPane from '../../components/actionPane'
import FormCreateGoal from '../../components/formCreateGoal'
import SimpleListContainer from '../../components/simpleListContainer'
import SimpleListItem from '../../components/simpleListItem'


import { useState } from 'react'


export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/goals')
  const resObj = await res.json()
  const goals = resObj.data
  return {
    props: {
      goals      
    }
  }
}


export default function Goals({goals}) {
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
        {goals.map(goal => <SimpleListItem key={goal._id} caption={goal.label} content={`To be completed by ${new Date(goal.to).toLocaleDateString('pt-BR')}`} />)}
      </SimpleListContainer>
    </Layout>
  )
}