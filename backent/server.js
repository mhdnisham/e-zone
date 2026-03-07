import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./module/Product.js"; // ✅ FIX 1: Add `.js` and correct model name


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// 🔗 Connect MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Backend running for E-ZONE!");
});

// ✅ FIX 2: Move routes **above app.listen()**
app.post("/add-product", async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    const newProduct = new Product({ name, price, description, image });
    await newProduct.save();
    res.json({ message: "✅ Product added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ Error adding product" });
  }
});

// ✅ Optional: Add GET route to view products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "❌ Error fetching products" });
  }
});


// 📅 Get Timetable
app.get("/timetable", async (req, res) => {
  try {
    const data = await Timetable.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "❌ Error fetching timetable" });
  }
});


// ➕ Add Timetable
app.post("/timetable", async (req, res) => {
  try {
    const { subject, teacher, day, time } = req.body;

    const timetable = new Timetable({
      subject,
      teacher,
      day,
      time
    });

    await timetable.save();

    res.json({ message: "✅ Timetable added successfully" });
  } catch (err) {
    res.status(500).json({ message: "❌ Error adding timetable" });
  }
});


// 💰 Get Fees
app.get("/fees", async (req, res) => {
  try {
    const data = await Fees.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "❌ Error fetching fees" });
  }
});

// ➕ Add Fees
app.post("/fees", async (req, res) => {
  try {
    const { student, amount, status } = req.body;

    const fees = new Fees({
      student,
      amount,
      status
    });

    await fees.save();

    res.json({ message: "✅ Fees added successfully" });
  } catch (err) {
    res.status(500).json({ message: "❌ Error adding fees" });
  }
});




const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 E-ZONE backend running on port ${PORT}`));
