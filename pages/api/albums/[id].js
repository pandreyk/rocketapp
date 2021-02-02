export default async function handler(req, res) {
  const { query: { id } } = req
  const album = await fetch(`${process.env.DATA_ADDRESS}/albums/${id}`).then(res => res.json())
  const photos = await fetch(`${process.env.DATA_ADDRESS}/albums/${id}/photos`).then(res => res.json())

  res.status(200).json({album, photos})
}