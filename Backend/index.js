const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const corsOptions = {
  origin: ["http://localhost:3000", "https://nviri-qmbaebyi9-hemanth-pallapothus-projects.vercel.app"], // Allow both localhost and hosted frontend
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};
app.use(cors(corsOptions)); 

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

const headlines = [
  "Why Cake & Co Is Redefining Desserts in Mumbai, One Slice at a Time",
  "The Secret Behind Cake & Co: Mumbai’s Most Instagrammable Bakery",
  "How Cake & Co Became Mumbai’s Ultimate Cake Culture Hub",
  "Cake & Co: Where Mumbai’s Sweet Tooth Finds Its Soulmate",
  "Inside Cake & Co: The Hidden Gem Dessert Lovers Are Raving About",
  "Why Every Mumbaikar Needs a Bite of Cake & Co’s Signature Bliss",
  "Mumbai, Meet the Cake Brand That’s Breaking All the Rules",
  "How Cake & Co Turned Mumbai’s Sweet Cravings Into Art",
  "From Dadar to Bandra: Why Everyone’s Talking About Cake & Co",
  "Cake & Co Isn’t Just a Bakery—It’s Mumbai’s Happiness Factory",
  "The Rise of Cake & Co: Mumbai’s Trendiest Dessert Destination",
  "2025’s Sweetest Obsession? Mumbai’s Own Cake & Co",
  "Cake & Co: Where Every Bite Tells a Mumbai Love Story",
  "This Is What Happens When Cake Meets Culture at Cake & Co",
  "Cake & Co Is More Than Dessert—It’s a Movement in Mumbai",
  "Step Into Cake & Co: The Spot Redefining Celebrations in Mumbai",
  "Cake & Co’s Magic Recipe? Mumbai’s Heart + Layers of Joy",
  "Why Cake & Co Is the Go-To Spot for Every Birthday in Mumbai",
  "What Makes Cake & Co Mumbai’s #1 Cake Craze in 2025",
  "One Bakery. Endless Emotions. Welcome to Cake & Co, Mumbai.",
  "Cake & Co Is Proof That Mumbai Runs on Frosting & Love",
  "The Mumbai Phenomenon: How Cake & Co Created a Sweet Revolution",
  "Cake & Co: Sweet, Stylish, and 100% Made for Mumbai",
  "Mumbai’s Most Loved Dessert Brand? It’s Gotta Be Cake & Co",
  "From Local Secret to Citywide Obsession: The Cake & Co Story"
];

app.post("/business-data/", (request, response) => {
  const { name, location } = request.body;
  try {
    if (!name || !location) {
      return response.status(400).send({ error: "Missing name or location in query" });
    }
    const headLine = "Why Cake & Co is Mumbai's Sweetest Spot in 2025";
    response.json({
      rating: 4.3,
      reviews: 127,
      headline: headLine,
    });
  } catch (error) {
        response.status(500)
        response.send("Internal Server Error" );
  }
});

app.get("/regenerate-headline/", (request, response) => {
  const { name, location } = request.query;
  try {
    if (!name || !location) {
        return response.status(400).send({ error: "Missing name or location in query" });
    }

    const randomIndex = Math.floor(Math.random() * headlines.length);
    const rawHeadline = headlines[randomIndex];
    const dynamicHeadline = rawHeadline
        .replace(/Cake & Co/gi, name)
        .replace(/Mumbai/gi, location);

    response.send({ headline: dynamicHeadline });
  } catch (error) {
        response.status(500)
        response.send("Internal Server Error" );
  }
});