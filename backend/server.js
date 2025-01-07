const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true }); // Creates the 'uploads' directory if it doesn't exist
}


const express=require("express");
const cors=require("cors");
const mysql=require("mysql");
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const salt=10;

const app=express();

const multer = require('multer');


// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // This is the folder where the files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Creating a unique filename for each file
  }
});

const upload = multer({ storage: storage });  // Create an upload instance using the storage configuration


app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"bookflow"
})

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get("/",(req,res)=>{
    const sql="SELECT * FROM books";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    });
})

app.get("/select/:id", (req, res) => {
    const sql = "SELECT * FROM books where id = ?";
    const id = req.params.id;
    db.query(sql, id, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.post('/create', upload.single('book_cover'), (req, res) => {
    const bookCover = req.file ? req.file.filename : null; // Store the uploaded filename
    
    const sql = "INSERT INTO books (`isbn`,`title`,`description`,`cover`,`author`,`category`,`edition`,`language`,`publisher`,`publication_date`,`price`,`book_cover`) VALUES (?)";
    const values = [
        req.body.isbn,
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.author,
        req.body.category,
        req.body.edition,
        req.body.language,
        req.body.publisher,
        req.body.publication_date,
        req.body.price,
        bookCover // Store the filename of the uploaded cover
    ];

    db.query(sql, [values], (err, data) => {
        if (err) return res.json({Error: "Error inserting book data"});
        return res.json({Status: "Book added successfully", data});
    });
});


// app.post('/create', (req, res) => {
//     const sql = "INSERT INTO books (...) VALUES (?)";
//     const values = [req.body.isbm, ...];
//     db.query(sql, [values], (err, data) => {
//         if (err) return res.json("Error");
//         return res.json(data);
//     });
// }); 


app.put('/update/:id',(req,res)=>{
    const sql="update books set `isbn`=? , `title`=?,  `description`=? , `cover`=? , `author`=? , `category`=? , `edition`=? , `language`=? , `publisher`=? , `publication_date`=? , `price`=?, `book_cover`=? where id=?";
    const values=[
        req.body.isbn,
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.author,
        req.body.category,
        req.body.edition,
        req.body.language,
        req.body.publisher,
        req.body.publication_date,
        req.body.price,
        req.body.book_cover
    ]
    const id=req.params.id;

    db.query(sql,[...values,id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);

    })
})

app.delete('/books/:id',(req,res)=>{
    const sql="DELETE FROM books WHERE ID=?";
    const id=req.params.id;

    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);

    })
})

app.listen(8082, () => {
    console.log('Server is running on port 8082');
  });


  app.post('/login',(req,res)=>{
    const sql='SELECT * FROM signinup WHERE email = ?';
   
        db.query(sql,[req.body.email],(err,data)=>{
            if(err) return res.json({Error:"Login error in server"});
            if(data.length>0)
            {
                bcrypt.compare(req.body.password.toString(),data[0].password,(err,response)=>{
                    if(err) return res.json({Error:"Password compare error"});
                    if(response)
                    {
                        return res.json({Status:"Success"});
                    }
                    else
                    {
                        return res.json({Error:"Password not matched"})
                    }
                })
            }
            else
            {
                return res.json({Error:"No email existed"});
            }
        })
    } )
   
    app.post('/register',(req,res)=>{
        const sql="INSERT INTO signinup (`name`,`email`,`password`) VALUES (?)";
        bcrypt.hash(req.body.password.toString(),salt, (err,hash)=>{
            if(err) return res.json({Error: "Error for hassing password"});
    
            const values=[
                req.body.name,
                req.body.email,
                hash
            ]
            db.query(sql,[values],(err,result)=>{
                if(err) return res.json({Error:"Inserting data error in server"});
                return res.json({Status:"Success"});
            })
        } )
       
    })