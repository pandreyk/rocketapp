export default async function handler(req, res) {
  const users = await fetch(`${process.env.DATA_ADDRESS}/users`).then(res => res.json())

  res.status(200).json(users)
}