import { Layout, Header, HeaderNav, HeaderNavLink, HeaderButton, Error, CardList, BudgetCard } from '../../components/ux'


const GET_ENDPOINT = `${process.env.API_ENDPOINT}/api/budget`


export async function getStaticProps() {
  return fetch(GET_ENDPOINT)
    .then(response => response.json())
    .then(json => json.sucess ? ({ props: { error: false, data: json.data } }) : ({ props: { error: json.reason, data: null } }))
    .catch(reason => ({ props: { error: reason, data: [] } }))
}


export function getRandomImage() {
  let randomImages = []
  randomImages[0] = '/images/random/0.svg'
  randomImages[1] = '/images/random/1.svg'
  randomImages[2] = '/images/random/2.svg'
  randomImages[3] = '/images/random/3.svg'
  randomImages[4] = '/images/random/4.svg'
  randomImages[5] = '/images/random/5.svg'
  randomImages[6] = '/images/random/6.svg'
  randomImages[7] = '/images/random/7.svg'
  randomImages[8] = '/images/random/8.svg'
  randomImages[9] = '/images/random/9.svg'
  let randomIndex = Math.floor(Math.random() * randomImages.length)
  return randomImages[randomIndex]
}


export function isBudgetActive(budget) {
  let currentYear = new Date().getFullYear()
  let fromYear = new Date(budget.from).getFullYear()
  let toYear = new Date(budget.to).getFullYear()
  return toYear === currentYear || (fromYear <= currentYear && toYear >= currentYear)
}


export function resolvedBudgetTitle(budget) {
  let currentYear = new Date().getFullYear()
  let fromYear = new Date(budget.from).getFullYear()
  let toYear = new Date(budget.to).getFullYear()
  if (!isBudgetActive(budget)) {
    if (fromYear === toYear) {
      return `BUDGET ${toYear}`
    }
    return `BUDGET ${fromYear} to ${toYear}`
  }
  return `BUDGET ${currentYear}`
}


export function resolvedBudgetText(budget) {
  return `Budgeting period: ${new Date(budget.from).toLocaleDateString()} - ${new Date(budget.to).toLocaleDateString()}`
}


export function BudgetLayoutHeader() {
  return (
    <Header>
      <HeaderNav>
        <HeaderNavLink caption="Back home" link="/home" />
      </HeaderNav>
      <HeaderButton text="Setup a new budget" href="/budget/create" />
    </Header>
  )
}


export function BudgetLayoutCardList({ data }) {
  return (
    <CardList>
      {data && data.map(budget =>
        <BudgetCard key={budget._id}
          //img='/images/undraw_year_2022_uci7.svg'
          //img={getRandomImage()}
          //category='ACTIVE BUDGET'
          title={resolvedBudgetTitle(budget)}
          text={resolvedBudgetText(budget)}
          linkText="Open it"
          link={`/budget/${budget._id}`}
          active={isBudgetActive(budget)} />
      )}
    </CardList>
  )
}


export function BudgetLayout({ data }) {
  return (
    <Layout>
      <BudgetLayoutHeader />
      <BudgetLayoutCardList data={data} />
    </Layout>
  )
}


export function BudgetErrorLayout({ error }) {
  return (<Error image="/images/undraw_fixing_bugs_w7gi.svg" title="Application error" message={error} />)
}


export default function Budget({ error, data }) {
  return (error ? <BudgetErrorLayout error={error} /> : <BudgetLayout data={data} />)
}