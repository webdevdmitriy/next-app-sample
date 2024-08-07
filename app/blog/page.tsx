import { Metadata } from 'next'
import Link from 'next/link'

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts33333333333333333', {
    next: {
      revalidate: 60, //Кэширование, раз в минуту
    },
  })

  if (!response.ok) throw new Error('Невозможно загрузить посты')

  return response.json()
}

export const metada: Metadata = {
  title: 'Блог',
}

export default async function Blog() {
  const posts = await getData()

  return (
    <>
      <h1>Это блог</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}> {post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
