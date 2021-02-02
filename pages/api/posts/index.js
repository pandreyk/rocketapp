export default async function handler(req, res) {
  const posts = await fetch(`${process.env.DATA_ADDRESS}/posts`).then(res => res.json())

  res.status(200).json(posts)
}
