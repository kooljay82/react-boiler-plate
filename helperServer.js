const PARAMS = ['coverage', 'docs'];

const args = process.argv.slice(2);
const target = args[0] === PARAMS[0] ? PARAMS[0] : PARAMS[1];

const express = require('express');
const app = express();
const PORT = 3000;

const fs = require('fs');
const dir = `./${target}`;

if (!fs.existsSync(dir)) {
  const strArr = target === PARAMS[0] ? ['테스트 커버리지', 'npm run test:unit을'] : ['문서', 'npm run docs를'];
  const msg = `${strArr[0]} 확인 전에, 반드시 ${strArr[1]} 실행하세요.`;
  throw new Error(msg);
}

const path = target === PARAMS[0] ? `${PARAMS[0]}/lcov-report` : PARAMS[1];
app.use(express.static(path));

app.get('/', (req, res) => {
  res.send('index page');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});