import { Layout, Header, HeaderNav, HeaderNavLink, HeaderButton, ActionPane, FormCreateGoal } from '../../components/ux'


export async function getStaticProps() {
  try {
    console.log(`Request query: ${JSON.stringify(req.query)}`)
    const { id } = req.query
    const collection = await Goal.find({ _id: id })
    res.status(200).json({ sucess: true, data: collection })
  }
  catch (e) {
    res.status(400).json({ success: false })
  }
}


async function overlapBudgets(deadline) {
  const overlapBudgets = await fetch(`/api/budget/overlap/${new Date(deadline).toString('YYYY-MM-DD')}`)
  const overlapBudgetsJson = await overlapBudgets.json()
  return overlapBudgetsJson.data
}


async function createGoal(label, deadline, weight, budget) {
  const fetchOpts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      label: label,
      deadline: deadline,
      weight: weight,
      budget: budget
    })
  }
  const response = await fetch('/api/goal/submit', fetchOpts)
  const responseJson = await response.json()
  const goal = responseJson.data
  return goal
}


async function syncBudget(budgets, goal) {
  const fetchOpts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      budgets: budgets,
      goal: goal
    })
  }
  await fetch('/api/budget/sync', fetchOpts)
}


async function submitGoal(event) {
  event.preventDefault()
  const budgets = await overlapBudgets(event.target.deadline.value)
  const goal = await createGoal(event.target.label.value, event.target.deadline.value, event.target.weight.value, budgets)
  await syncBudget(budgets, goal)
  window.location = '/goal'
}


export default function CreateGoal() {
  return (
    <Layout>
      <Header>
        <HeaderNav>
          <HeaderNavLink caption="Back home" link="/" />
        </HeaderNav>
        <HeaderButton href="/goal" text="Cancel" />
      </Header>
      <ActionPane image="/images/undraw_Goals_re_lu76.svg">
        <FormCreateGoal onSubmitHandler={submitGoal} />
      </ActionPane>
    </Layout>
  )
}