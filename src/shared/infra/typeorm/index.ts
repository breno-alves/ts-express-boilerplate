import 'dotenv/config';

import { createConnection } from 'typeorm';

if (process.env.NODE_ENV !== 'test') {
  createConnection();
}
