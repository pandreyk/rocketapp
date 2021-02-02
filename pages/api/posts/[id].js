export default async function handler(req, res) {
  const { query: { id } } = req
  const post = await fetch(`${process.env.DATA_ADDRESS}/posts/${id}`).then(res => res.json())
  const comments = await fetch(`${process.env.DATA_ADDRESS}/post/${id}/comments`).then(res => res.json())

  res.status(200).json({post, comments})
}