// import { v4 as uuidv4 } from 'uuid';
import db from "../util/database.js";

// let productsArr = [];
// let updateArr = [];

export const userinfo = (req, res) => {
  res.send("User Info");
};

export const productlisting = (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });

  res.send(`Product retrieved successfully!`);
};

//post route
export const addproducts = (req, res) => {
  //  const user = req.body;
  //  const userId = uuidv4();
  //  const userWithId = {...user,id:userId}
  //  productsArr.push(userWithId)

  const { ProductName, LaunchDate, Price, Processor, Color } = req.body;

  const sql =
    "INSERT INTO products (ProductName,LaunchDate,Price,Processor,Color) VALUES (?,?,?,?,?)";

  db.query(
    sql,
    [ProductName, LaunchDate, Price, Processor, Color],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );

  res.send("Product added successfully!");
};

export const deleteproducts = (req, res) => {
  const { id } = req.params;
 //   productsArr = productsArr.filter((product) => product.id != id);
  const sql = "DELETE FROM products WHERE id=?";

  db.query(sql,[id],(err,result)=>{
         if(err)
         {
            console.log(err);
         }
         else
         {
            console.log(result);
         }
  })
   res.send(`Product removed! with the id:${id}`);
};

export const updateproducts = (req, res) => {
  const {id} = req.params;
  const { ProductName, LaunchDate, Price, Processor, Color } = req.body;

  if(ProductName && LaunchDate && Price && Processor && Color)
  {

      const sql =
        "UPDATE products SET ProductName=?,LaunchDate=?,Price=?,Processor=?,Color=? WHERE id=?";
    
      db.query(
        sql,
        [
          ProductName,
          LaunchDate,
          Price,
          Processor,
          Color,
          id
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        }
      );
      res.send(`Product has been updated with the id:${id}`);
  }

  else
  {
    res.send(`Please enter all the fields`);
  }
};
