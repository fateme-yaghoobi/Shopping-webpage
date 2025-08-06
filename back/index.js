import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//products list
const products = [
  {id: 1,
   name: "مینی اسکارف ابریشم",
   price:360000,
   img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/3a.jpeg",
   description: "با طرح گل‌های هنری و خطوط گرافیکی، جلوه‌ای مدرن و شیک به استایلتان می‌بخشد.ترکیب پارچه حریر و ابریشم نرمی و سبکی بی‌نظیری فراهم می‌کند.برای مجالس رسمی و مهمانی‌های خاص انتخابی بی‌نقص است."},

  {id: 2,
   name: "شال نخی منگوله دار",
   price: 175000,
   img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/file_0000000043e861fd834c876d4393c402.jpg",
   description: "رنگ‌بندی شاد و طرح ستاره‌ای، مناسب استایل روزمره و اسپرت.منگوله‌های رنگی در گوشه‌ها حس زندگی و نشاط را القا می‌کنند.نخی سبک، مناسب فصل‌های گرم و استفاده طولانی‌مدت.", 
  },

  {id: 3,
   name: "روسری حریر ابریشم",
   price: 398000,
   img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/IMG_20250521_151236_331.jpg",
   description: "با طرح الهام‌گرفته از مد روز و مجلات فشن، ظاهری خاص خواهید داشت.ابریشم نرم و براق، به‌خوبی دور گردن یا روی کیف قرار می‌گیرد.یک اکسسوری کوچک اما تأثیرگذار برای خانم‌های خوش‌سلیقه.", 
  },

  { id: 4,
   name: "روسری ابریشم طرحدار",
   price:438000,
   img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/IMG_20250518_221849_614.jpg",
   description: "ترکیب رنگ‌های گرم و طراحی هنری این روسری آن را خاص و چشم‌نواز کرده است.ابریشم لطیف، درخشش خیره‌کننده‌ای روی سر ایجاد می‌کند.مناسب خانم‌هایی که به استایل خاص و متفاوت علاقه دارند.", 
  },

  {id: 5,
   name: "شال دانتل مزونی",
   price:562000,
   img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/IMG_20250524_200347_623.jpg",
   description: "طراحی خاص و دوخت مزونی این شال آن را از سایر محصولات متمایز می‌کند.توری دانتل با گل‌دوزی‌های ظریف، شکوهی کلاسیک به شما می‌بخشد.مناسب عروسی‌ها، جشن‌ها و ست کردن با مانتوهای مجلسی.", 
  },

  {id: 6,
   name: "شال ویسکوز گل برجسته",
   price:650000,
   img_url:"https://roosaryshop.com/wp-content/uploads/2025/05/IMG_20250507_103521_210.jpg",
   description: "طرح گل‌های رمانتیک و رنگ‌های ملایم، حس لطافت را القا می‌کند.پارچه ویسکوز، تنفس‌پذیر و فوق‌العاده راحت روی سر قرار می‌گیرد.مناسب خانم‌هایی که به دنبال زیبایی مینیمال هستند.", 
  }

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
