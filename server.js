const http = require('http');

const server = http.createServer((req, res) => {
  // هذا هو الرد الذي سيرسله السيرفر لأي تطبيق يكلمه
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('أهلاً بك يا مدير المشروع! السيرفر يعمل بنجاح من ريندر 🚀');
});

// هنا نخبر السيرفر أن يفتح البوابة للإنترنت
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running...`);
});
