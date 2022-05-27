import styles from './hero.module.css';


import Image from 'next/image'


export default function Hero({ image, title, text, children }) {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={image} width={480} height={360} />

                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-4 font-medium text-gray-900">{title}</h1>
                    <p className="mb-8 leading-relaxed">{text}</p>
                    <div className="flex justify-center">
                        {children}
                    </div>
                </div>

            </div>
        </section>
    )
}