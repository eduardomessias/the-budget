export default function SimpleList({ title, subTitle, children }) {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{title}</h1>
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{subTitle}</h2>
            </div>
            <div className="container px-5 py-8 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    {children}
                </div>
            </div>
        </section>
    )
}