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

async function overlapGoals (from, to) {
  const fromDate = new Date(from).toString('YYYY-MM-DD')
  const toDate = new Date(to).toString('YYYY-MM-DD')
  const overlapGoals = await fetch (`/api/goal/overlap/${fromDate}..${toDate}`)
  const overlapGoalsJson = await overlapGoals.json ()
  return overlapGoalsJson.data
} 


async function submitBudget (event) {
  event.preventDefault ()
  const goals = await overlapGoals (event.target.from.value,event.target.to.value)
  const fetchOpts = {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify ({
      from: event.target.from.value,
      to: event.target.to.value,
      goals: goals
    })
  }
  fetch ('/api/budget/create', fetchOpts)
  window.location = '/budget'
}


export default function CreateBudget () { 
  return (
    <Layout>
      <Header>
        <HeaderNav>
          <HeaderNavLink caption="Back home" link="/budget" />
        </HeaderNav>
        <HeaderButton onClickHandler={cancelCreation} text="Cancel"/>
      </Header>
      <ActionPane image="/images/undraw_Time_management_re_tk5w.svg">
        <FormCreateBudget onSubmitHandler={submitBudget}  />
      </ActionPane>
    </Layout>
  )
}