import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

// 啟用 CORS，允許所有來源
app.use(cors());

// 或者，只允許 GitHub Pages 的來源
// app.use(cors({
//   origin: "https://channing-ux.github.io"
// }));

const API_KEY = process.env.OPENWEATHER_API_KEY;

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
