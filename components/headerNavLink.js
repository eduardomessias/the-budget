import Link from 'next/link'


export default function HeaderNavLink({ caption, link }) {
    return (
        <Link href={link}><a className="mr-5 hover:text-gray-900">{caption}</a></Link>
    )
}