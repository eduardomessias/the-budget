import InactiveBudgetCardContent from './inactiveBudgetCardContent'


export default function InactiveBudgetCard({ category, title, text, linkText, link }) {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 p-2 border-gray-100 bg-gray-100 border-opacity-60 rounded-lg overflow-hidden">
                <InactiveBudgetCardContent category={category} title={title} text={text} linkText={linkText} link={link} />
            </div>
        </div >
    )
}