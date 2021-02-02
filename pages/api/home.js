export default async function handler(req, res) {
  const posts = await fetch(`${process.env.DATA_ADDRESS}/posts`).then(res => res.json())
  const photos = await fetch(`${process.env.DATA_ADDRESS}/albums/${Math.floor(Math.random() * 100) + 1}/photos`).then(res => res.json())

  res.status(200).json({posts, photos})
}