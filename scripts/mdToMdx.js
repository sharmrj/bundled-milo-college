import * as fs from 'fs';

fs.readfile('./example.md', 'utf-8', (err, data) => {
  console.log(data);
})
