export default function SimpleListItem ({ caption, children }) {
    return (
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{caption}</h2>
                {children}
            </div>
        </div>
    )
}