export default function HeaderNav({ children }) {
  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {children}
    </nav>
  )
}