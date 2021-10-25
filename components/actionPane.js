import Image from 'next/image'


import styles from './actionPane.module.css'


export default function ActionPane ({ children }) {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 hidden sm:block rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
                    <Image width={1280} height={798} src='/images/undraw_Goals_re_lu76.svg' />
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    {children}
                </div>
            </div>
        </section>
    )
}