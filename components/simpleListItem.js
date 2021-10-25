export default function ({ caption, content }) {
    return (
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{caption}</h2>
                <p className="leading-relaxed">{content}</p>
            </div>
        </div>
    )
}