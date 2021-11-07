import Layout from '../../components/layout'
import Header from '../../components/header'
import HeaderNav from '../../components/headerNav'
import HeaderNavLink from '../../components/headerNavLink'
import HeaderButton from '../../components/headerButton'
import ActionPane from '../../components/actionPane'
import FormCreateGoal from '../../components/formCreateGoal'


function cancelCreation () {
  window.location = '/goal'
}


async function overlapBudgets (deadline) {
  const overlapBudgets = await fetch(`/api/budget/overlap/${new Date(deadline).toString('YYYY-MM-DD')}`)
  const overlapBudgetsJson = await overlapBudgets.json ()
  return overlapBudgetsJson.data
}


async function createGoal (label, deadline, weight, budgets) {
  const fetchOpts = {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify ({
      label: label,
      deadline: deadline,
      weight: weight,
      budgets: budgets
    })
  }
  const response = await fetch ('/api/goal/submit', fetchOpts)
  const responseJson = await response.json ()
  if (responseJson.status === '200') {
    const goal = responseJson.data
  }
}

async function syncBudget (budgets, goal) {
  const fetchOpts = {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify ({
      budget: budgets,
      goal: goal
    })
  }
  await fetch ('/api/budget/sync', fetchOpts)
}


async function submitGoal (event) {
  event.preventDefault ()
  const budgets = await overlapBudgets (event.target.deadline.value)
  const goal = await createGoal (event.target.label.value, event.target.deadline.value, event.target.weight.value, budgets)
  await syncBudget (budgets, goal)
  window.location = '/goal'
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
      <ActionPane image="/images/undraw_Goals_re_lu76.svg">
        <FormCreateGoal onSubmitHandler={submitGoal}  />
      </ActionPane>
    </Layout>
  )
}