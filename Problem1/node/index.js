const express = require('express')
const app = express()

app.use(
   express.urlencoded({
      extended: true
   })
)

app.use(express.json())

app.post('/', (req, res) => {
   res.set({ 'Access-Control-Allow-Origin': '*' });
   const pattern = JSON.parse(req.body.pattern);
   console.log(pattern);

   if (pattern.obj === undefined) {
      console.log("undefined obj");
      res.writeHead(400, {
         'Content-Type': 'text/html',
         'Access-Control-Allow-Origin': '*'
      });
      res.write("invalid input");
      res.end();
      return;
   }

   // ここに処理を記述してください。
   const map = pattern.obj.reduce((acc, cur) => {
      const nextEntry = acc[cur.num] ?? [];
      nextEntry.push(cur.text);
      return {
         ...acc,
         [cur.num]: nextEntry
      };
   }, {})
   console.log(map);

   const ans = [];
   for (let i = 1; i <= 30; i++) {
      const texts = [];
      for (const [key, value] of Object.entries(map)) {
         if (i % key === 0) {
            texts.push(...value);
         }
      }
      ans.push(texts.length === 0 ? i : texts.join(" "));
   }

   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.write(ans.join(", "));
   res.end();
})
app.listen(8080);
