const express = require("express");
const app = express();

app.use(express.json());

app.get("/orders", (req, res) => res.json([{ id: 1, item: "Widget" }]));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Order Service listening on port ${PORT}`));
