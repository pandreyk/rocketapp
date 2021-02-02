export default async function handler(req, res) {
  const { query: { id } } = req
  const user = await fetch(`${process.env.DATA_ADDRESS}/users/${id}`).then(res => res.json())
  const albums = await fetch(`${process.env.DATA_ADDRESS}/users/${id}/albums`).then(res => res.json())
  const posts = await fetch(`${process.env.DATA_ADDRESS}/users/${id}/posts`).then(res => res.json())

  res.status(200).json({user, albums, posts})
}