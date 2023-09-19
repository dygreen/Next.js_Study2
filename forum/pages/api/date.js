export default function handler(req, res) {
  const date = new Date();

  if (req.method == 'GET') {
    res.status(200).json(date);
  }
}