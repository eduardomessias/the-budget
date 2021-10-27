import Layout from '../../components/layout'
import Header from '../../components/header'
import HeaderNav from '../../components/headerNav'
import HeaderNavLink from '../../components/headerNavLink'
import HeaderButton from '../../components/headerButton'
import ActionPane from '../../components/actionPane'
import FormCreateGoal from '../../components/formCreateGoal'


function cancelCreation () {
  window.location = '/goals'
}


function submitGoal (event) {
  event.preventDefault ()
  const fetchOpts = {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify ({
      label: event.target.label.value,
      from: event.target.from.value,
      to: event.target.to.value,
      weight: event.target.weight.value
    })
  }
  fetch ('/api/goals/create', fetchOpts)
  window.location = '/goals'
}


export default function CreateGoal () { 
  return (
    <Layout>
      <Header>
        <HeaderNav>
          <HeaderNavLink caption="Back home" link="/" />
        </HeaderNav>
        <HeaderButton onClickHandler={cancelCreation} text="Cancel"/>
      </Header>
      <ActionPane>
        <FormCreateGoal onSubmitHandler={submitGoal}  />
      </ActionPane>
    </Layout>
  )
}