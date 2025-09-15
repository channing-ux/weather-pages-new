import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3000;

// 允許跨來源請求 (讓前端能呼叫)
app.use(cors());

const API_KEY = "eee92af78eb3bc83e5c1cd39e2942893";

// 後端 API (接收前端的城市請求，去抓天氣)
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=zh_tw`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "無法取得天氣資料" });
  }
});

app.listen(PORT, () => {
  console.log(`後端伺服器已啟動：http://localhost:${PORT}`);
});
