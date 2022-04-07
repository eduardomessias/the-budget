import Link from 'next/link'


export function GrayButton ({text, href, onClickHandler}) {
    return (
        <Link href={href}>
          <a className="ml-2 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={onClickHandler}>{text}</a>
        </Link>
    )
}


export function BlueButton ({text, href, onClickHandler}) {
    return (
        <Link href={href}>
          <a className="ml-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={onClickHandler}>{text}</a>
        </Link>
    )
}