'use client'
// страница ошибки
export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>Опаньки. Ошибочка {error.message}</h1>
}
