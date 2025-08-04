import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//products list
const products = [
  { id: 1, name: "T-shirt", price: 20, img_url:"", },
  { id: 2, name: "Shoes", price: 50, img_url:"", },
  { id: 3, name: "Hat", price: 15, img_url:"", }
];

// GET all products
app.get('/', (req, res) => {
  res.json(products);
});

// GET a single product by ID
app.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.post("/", (req, res) => {
    const { name, price, img} = req.body;

    function isValidImageUrl(url) {
      try {
        const parsedUrl = new URL(url);
        // Basic check for image file extensions
        return /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(parsedUrl.pathname);
      } catch {
        return false;
      }
    }

    // Validate request
    if (!name || typeof name !== 'string' || name.trim()    === '') {
        return res.status(400).json({ error: "Valid product name is required" });
    }
    if (!price || typeof price !== 'number' || instructor.trim() === '') {
        return res.status(400).json({ error: "Valid price is required" });
    }
    if (!imageUrl || !isValidImageUrl(imageUrl)) {
    return res.status(400).json({ error: 'Invalid image URL' });
    }

    // Create new course object with unique ID
    const newCourse = {
    id: courses.length + 1,
    name,
    instructor,
    };

    // Add course to array
    courses.push(newCourse);

    res
    .status(201)
    .json({ message: "Course added successfully", course: newCourse });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
