import Layout from '../../components/layout'
import Header from '../../components/header'
import HeaderNav from '../../components/headerNav'
import HeaderNavLink from '../../components/headerNavLink'
import HeaderButton from '../../components/headerButton'
import ActionPane from '../../components/actionPane'
import FormCreateBudget from '../../components/formCreateBudget'


async function overlapGoals (from, to) {
  const [fromDate, toDate] = [new Date(from).toString('YYYY-MM-DD'),new Date(to).toString('YYYY-MM-DD')] 
  return await fetch (`/api/goal/overlap/${fromDate}..${toDate}`)
    .then (res => res.json ())
    .then (json => json.data)
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
  await fetch ('/api/budget/create', fetchOpts)
  window.location = '/budget'
}


export default function CreateBudget () { 
  return (
    <Layout>
      <Header>
        <HeaderNav>
          <HeaderNavLink caption="Back home" link="/budget" />
        </HeaderNav>
        <HeaderButton text="Cancel" href="/budget" />
      </Header>
      <ActionPane image="/images/undraw_Time_management_re_tk5w.svg">
        <FormCreateBudget onSubmitHandler={submitBudget}  />
      </ActionPane>
    </Layout>
  )
}