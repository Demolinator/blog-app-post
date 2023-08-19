
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {

    return res.status(200).json({ blogs: [] });
  } else if (req.method === 'POST') {
;
    return res.status(201).json({ message: 'Blog saved successfully' });
  }

  return res.status(405).end();
}
