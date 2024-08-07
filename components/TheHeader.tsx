import Link from 'next/link'

const TheHeader = () => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/blog">Блог</Link>
      <Link href="/about">О компании</Link>
    </header>
  )
}

export { TheHeader }
