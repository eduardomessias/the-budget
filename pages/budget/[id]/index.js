import { Layout, Header, HeaderNav, HeaderNavLink, HeaderButton } from '../../../components/ux'


const GET_ENDPOINT = `${process.env.API_ENDPOINT}/api/budget/`


export async function getServerSideProps(context) {
    const { id } = context.params
    return fetch(GET_ENDPOINT + id)
        .then(response => response.json())
        .then(json => json.sucess ? ({ props: { error: false, data: json.data } }) : ({ props: { error: json.reason, data: null } }))
        .catch(reason => ({ props: { error: reason, data: [] } }))
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

export function UpIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
    )
}

export function DownIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
    )
}

export function BudgetEntries({ budget }) {
    return (
        <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
                <tr>
                    {/* <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Type</th> */}
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Description</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Date</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Amount</th>
                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-green-800'>
                    {/* <td className="px-4 py-3">Income</td> */}
                    <td className="px-4 py-3">SmartBox salary</td>
                    <td className="px-4 py-3">28/02/2022</td>
                    <td className="px-4 py-3">6860.00</td>
                    <td className="w-4 text-center">
                        {/* <input name="plan" type="radio" /> */}
                        <UpIcon />
                    </td>
                </tr>
                <tr className='text-green-800'>
                    {/* <td className="px-4 py-3">Income</td> */}
                    <td className="px-4 py-3">GameStop salary</td>
                    <td className="px-4 py-3">20/02/2022</td>
                    <td className="px-4 py-3">2400.00</td>
                    <td className="w-4 text-center">
                        {/* <input name="plan" type="radio" /> */}
                        <UpIcon />
                    </td>
                </tr>
                <tr className='text-red-800'>
                    {/* <td className="px-4 py-3">Expense</td> */}
                    <td className="px-4 py-3">IRES Reit apartment rent</td>
                    <td className="px-4 py-3">01/02/2022</td>
                    <td className="px-4 py-3">1378.00</td>
                    <td className="w-4 text-center">
                        {/* <input name="plan" type="radio" /> */}
                        <DownIcon />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}


export function BudgetDetails({ budget }) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">{resolvedBudgetTitle(budget)}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
                </div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <BudgetEntries budget={budget} />
                </div>
                <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                </div>
            </div>
        </section>
    )
}


export default function Budget({ error, data }) {
    return (
        <Layout>
            <Header>
                <HeaderNav>
                    <HeaderNavLink caption="Back to budgets" link="/budget" />
                    <HeaderNavLink caption="Goals" link="/goals" />
                </HeaderNav>
                <HeaderButton text="Setup a new goal" href="/goal/create" />
            </Header>
            <BudgetDetails budget={data} />
        </Layout>
    )
}