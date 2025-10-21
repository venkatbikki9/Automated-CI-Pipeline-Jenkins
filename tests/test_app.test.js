const http = require('http');
const { requestHandler } = require('../src/app');

const makeReq = (path) => {
  const req = new http.IncomingMessage();
  req.url = path;
  const res = new http.ServerResponse(req);

  // capture data written to res
  let body = '';
  res.write = (chunk) => { body += chunk; };
  res.end = (chunk) => { if (chunk) body += chunk; res.__body = body; res.emit('finish'); };
  return { req, res };
};

test('health endpoint returns JSON ok', (done) => {
  const { req, res } = makeReq('/health');
  res.on('finish', () => {
    expect(res.__body).toMatch(/"status":"ok"/);
    done();
  });
  requestHandler(req, res);
});

test('root returns greeting', (done) => {
  const { req, res } = makeReq('/');
  res.on('finish', () => {
    expect(res.__body).toMatch(/Hello from sample CI app/);
    done();
  });
  requestHandler(req, res);
});
