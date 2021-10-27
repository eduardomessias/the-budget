import Layout from '../../components/layout'
import Header from '../../components/header'
import HeaderNav from '../../components/headerNav'
import HeaderNavLink from '../../components/headerNavLink'
import HeaderButton from '../../components/headerButton'
import ActionPane from '../../components/actionPane'
import FormCreateBudget from '../../components/formCreateBudget'


function cancelCreation () {
  window.location = '/'
}


function submitBudget (event) {
  event.preventDefault ()
  const fetchOpts = {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify ({
      from: event.target.from.value,
      to: event.target.to.value
    })
  }
  fetch ('/api/budgets/create', fetchOpts)
  window.location = '/'
}


export default function CreateBudget () { 
  return (
    <Layout>
      <Header>
        <HeaderNav>
          <HeaderNavLink caption="Back home" link="/" />
        </HeaderNav>
        <HeaderButton onClickHandler={cancelCreation} text="Cancel"/>
      </Header>
      <ActionPane>
        <FormCreateBudget onSubmitHandler={submitBudget}  />
      </ActionPane>
    </Layout>
  )
}