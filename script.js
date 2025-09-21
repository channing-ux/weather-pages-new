async function getWeather(city) {
  try {
    const response = await fetch(`http://localhost:3000/weather?city=${city}`);
    const data = await response.json();

    const weatherDiv = document.getElementById("weather");
    weatherDiv.innerHTML = `
      <h2>${data.name} 的天氣</h2>
      <p>氣溫：${data.main.temp}°C</p>
      <p>天氣：${data.weather[0].description}</p>
    `;
  } catch (error) {
    alert("無法取得天氣資料");
  }
}
