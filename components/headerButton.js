import Link from 'next/link'


export default function HeaderButton({ text, href, onClickHandler }) {
    return (
        <Link href={href}>
            <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                onClick={onClickHandler}>{text}</a>
        </Link>
    )
}