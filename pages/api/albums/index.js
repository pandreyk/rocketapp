export default async function handler(req, res) {
  const albums = await fetch(`${process.env.DATA_ADDRESS}/albums`).then(res => res.json())

  res.status(200).json(albums)
}