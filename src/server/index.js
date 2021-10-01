const express = require("express");

// const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

server.listen(3000, '0.0.0.0');


// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 443),
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET'),
//     },
//   },
// });
