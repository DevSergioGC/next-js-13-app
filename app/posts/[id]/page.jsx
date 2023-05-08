export default function SinglePost({ params }) {
    const { id } = params
  return (
    <h1>Esto es un post {id}</h1>
  )
}