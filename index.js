const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const data = {
    email: "bayq80@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Rydddeal/HNGAPII.git",
  };
  res.status(200).json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
