import Link from 'next/link'


export default function GrayButton({ text, href, onClickHandler }) {
    return (
        <Link href={href}>
            <a className="ml-2 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={onClickHandler}>{text}</a>
        </Link>
    )
}