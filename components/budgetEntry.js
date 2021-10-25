export default function BudgetEntry ({ label, description, category, deadline, linkToDetails }) {
    return (
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">{category || "Others"}</span>
                <span className="mt-1 text-gray-500 text-sm">{new Date(deadline).toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{label}</h2>
                <p className="leading-relaxed">{description || `${label} <i>[undescribed]<i>`}</p>
                if(linkToDetails) {
                    <a className="text-indigo-500 inline-flex items-center mt-4">View details
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                }
            </div>
        </div>
    )
}