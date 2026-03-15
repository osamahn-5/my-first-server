const http = require('http');

const server = http.createServer((req, res) => {
  // أخبرنا التطبيقات أننا سنرسل بيانات منظمة (JSON) وليس نصاً عادياً
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  
  // قسم المستخدمين: إذا طلب التطبيق رابط /users
  if (req.url === '/users') {
    const users = [
      { id: 1, name: "أحمد", role: "مبرمج فلاتر" },
      { id: 2, name: "سارة", role: "مصممة واجهات" },
      { id: 3, name: "مدير المشروع", role: "أنت!" }
    ];
    // تحويل البيانات إلى لغة التطبيقات وإرسالها
    res.end(JSON.stringify(users));
  } 
  
  // قسم حالة السيرفر: إذا طلب التطبيق رابط /status
  else if (req.url === '/status') {
    const status = { status: "السيرفر يعمل بقوة ممتاز 🚀", uptime: "100%" };
    res.end(JSON.stringify(status));
  } 
  
  // الواجهة الرئيسية
  else {
    const welcome = { message: "أهلاً بك في الـ API الاحترافي الخاص بتطبيقي!" };
    res.end(JSON.stringify(welcome));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running...`);
});
