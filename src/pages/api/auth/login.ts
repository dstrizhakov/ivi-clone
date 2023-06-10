export default async function handler(req, res) {
  console.log('LOGIN', req);
  const username = req.body.username;
  const password = req.body.password;

  const isJSON = req.headers['content-type'] == 'application/json';
  const isPOST = req.method === 'POST';

  const fieldsExisting = password && username;

  if (isPOST && isJSON && fieldsExisting) {
    const results = [{ username: 'asd' }]; //get from db
    if (!results) {
      res.status(404).json({ error: 'Not found' });
    } else {
      res.status(200).json({ username: results[0].username, status: 'passed' });
    }
  } else {
    res.status(500).json({ error: 'Invalid request type' });
  }
}
