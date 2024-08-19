// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();
// const secret = process.env.SECRET_KEY;
// const jwtverify = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }
//   jwt.verify(token, secret, (err, user) => {
//     if (err) {
//       return res.status(403).json({ error: "Forbidden" });
//     }
//     req.userID = user.id;
//     next();
//   });
// };
// export default jwtverify;
