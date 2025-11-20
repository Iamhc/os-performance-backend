const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

let history = [];

// Default route (IMPORTANT!)
app.get("/", (req, res) => {
  res.send("OS Monitoring Backend is running");
});

// Capture stats every second
setInterval(() => {
  const entry = {
    time: Date.now(),
    cpu: os.loadavg()[0],
    freeMem: os.freemem(),
    totalMem: os.totalmem(),
    uptime: os.uptime(),
  };

  history.push(entry);
  if (history.length > 200) history.shift();
}, 1000);

// Live stats
app.get("/api/stats", (req, res) => {
  const stats = {
    cpu: os.loadavg(),
    freeMem: os.freemem(),
    totalMem: os.totalmem(),
    uptime: os.uptime(),
    platform: os.platform(),
  };
  res.json(stats);
});

// Stats history
app.get("/api/stats/history", (req, res) => {
  res.json(history);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
