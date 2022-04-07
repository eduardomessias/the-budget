import ActiveBudgetCard from './activeBudgetCard'
import InactiveBudgetCard from './InactiveBudgetCard'


export default function BudgetCard({ category, title, text, linkText, link, active }) {
    return (active ?
        <ActiveBudgetCard
            category={category}
            title={title}
            text={text}
            linkText={linkText}
            link={link} />
        :
        <InactiveBudgetCard
            category={category}
            title={title}
            text={text}
            linkText={linkText}
            link={link} />
    )
}