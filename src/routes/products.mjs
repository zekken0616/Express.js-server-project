import { Router } from "express";

const router = Router();

router.get("/api/products", (request, response) => {
  console.log("lol", request.headers.cookie);
  console.log("cookies", request.cookies);
  console.log("signed: ", request.signedCookies.Hello);
  if (request.signedCookies.Hello && request.signedCookies.Hello === "World") {
    return response.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
  }
  return response
    .status(403)
    .send({ msg: "Sorry. You need the correct cookie" });
});

export default router;
