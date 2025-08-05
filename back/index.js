import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//products list
const products = [
  { id: 1, name: "مینی اسکارف ابریشم", price:360000, img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/3a.jpeg", },
  { id: 2, name: "شال نخی منگوله دار", price: 175000, img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/file_0000000043e861fd834c876d4393c402.jpg", },
  { id: 3, name: "روسری حریر ابریشم", price: 398000, img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/IMG_20250521_151236_331.jpg", },
  { id: 4, name: "روسری ابریشم طرحدار", price:438000, img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/IMG_20250518_221849_614.jpg", },
  { id: 5, name: "شال دانتل مزونی", price:562000, img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/IMG_20250524_200347_623.jpg", },
  { id: 6, name: "شال ویسکوز گل برجسته", price:650000, img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/IMG_20250507_103521_210.jpg", }
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

// post for adding a new product
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
