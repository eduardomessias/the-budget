import Image from 'next/image'


export default function Hero({ image, title, text, children }) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={image} width={640} height={480} />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}</h1>
                    <p className="mb-8 leading-relaxed">{text}</p>
                    <div className="flex justify-center">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}