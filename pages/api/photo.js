export default async function handler(req, res) {
  const { query: { id } } = req
  const photo = await fetch(`${process.env.DATA_ADDRESS}/photos/${id}`).then(res => res.json())

  res.status(200).json(photo)
}