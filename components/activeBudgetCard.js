import ActiveBudgetCardContent from './activeBudgetCardContent'


export default function ActiveBudgetCard({ category, title, text, linkText, link }) {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 p-2 border-indigo-500 border-opacity-60 rounded-lg overflow-hidden">
                <ActiveBudgetCardContent category={category} title={title} text={text} linkText={linkText} link={link} />
            </div>
        </div >
    )
}