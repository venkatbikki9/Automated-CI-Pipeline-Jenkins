const http = require('http');

const requestHandler = (req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from sample CI app');
};

// Only start server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const server = http.createServer(requestHandler);
  server.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
}

module.exports = { requestHandler };
