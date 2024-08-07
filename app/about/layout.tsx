import Link from 'next/link'

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="">
      <h1 className="title">О нас</h1>
      <h3>Меню</h3>
      <ul>
        <li>
          <Link href="/about/contacts">Контакты</Link>
        </li>
        <li>
          <Link href="/about/team">Команда</Link>
        </li>
      </ul>
      <div className="content">{children}</div>
    </div>
  )
}
