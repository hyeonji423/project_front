const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1/search",
    createProxyMiddleware({
      target: "https://openapi.naver.com",
      changeOrigin: true,
      secure: false,
      headers: {
        "X-Naver-Client-Id": Pn41ty2TZMse8pqazHPe,
        "X-Naver-Client-Secret": yU6BfqbmNL,
      },
      onError: (err, req, res) => {
        console.error("Proxy error:", err);
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Something went wrong with the proxy.");
      },
    })
  );
};
