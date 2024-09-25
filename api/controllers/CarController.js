const db = require("../db");

const createCar = async (req, res) => {
  const {
    user_id,
    brand,
    model,
    year,
    km,
    hp,
    color,
    transmission,
    fuel,
    price,
    description,
    firstOwner,
  } = req.body;

  const images = req.files.map((file) => file.filename).join(","); // Dosya adlarını virgülle ayırarak birleştiriyoruz

  const query =
    "insert into car (user_id,brand,model,year,fuel,km,hp,color,transmission,firstOwner,price,description,image) values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
  try {
    db.query(
      query,
      [
        user_id,
        brand,
        model,
        year,
        fuel,
        km,
        hp,
        color,
        transmission,
        firstOwner,
        price,
        description,
        images,
      ],
      (err, result) => {
        if (err) {
          console.error("SQL Error:", err);
          return res.status(500).json({ error: "Database error occurred" });
        }
        return res.status(200).json({ message: "car added successfully" });
      }
    );
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getCars = async (req, res) => {
  const {
    minPrice,
    maxPrice,
    brand,
    transmission,
    minKm,
    maxKm,
    color,
    firstOwner,
    page = 1, 
    limit = 5,
  } = req.query;

  const offset = (page - 1) * limit;

  let query = "SELECT * FROM car WHERE 1=1";
  let queryParams = [];

  if (minPrice) {
    query += " AND price >= ?";
    queryParams.push(minPrice);
  }
  if (maxPrice) {
    query += " AND price <= ?";
    queryParams.push(maxPrice);
  }
  if (brand) {
    query += " AND brand LIKE ?";
    queryParams.push(`%${brand}%`);
  }
  if (transmission) {
    query += " AND transmission = ?";
    queryParams.push(transmission);
  }
  if (minKm) {
    query += " AND km >= ?";
    queryParams.push(minKm);
  }
  if (maxKm) {
    query += " AND km <= ?";
    queryParams.push(maxKm);
  }
  if (color) {
    query += " AND color = ?";
    queryParams.push(color);
  }
  if (firstOwner) {
    query += " AND firstOwner = ?";
    queryParams.push(firstOwner);
  }

  query += " LIMIT ? OFFSET ?";
  queryParams.push(parseInt(limit), parseInt(offset)); 

  try {
    db.query(query, queryParams, (err, result) => {
      if (err) {
        console.error("SQL Error:", err);
        return res.status(500).json({ error: "Database error occurred" });
      }

      const carsWithFirstImage = result.map((item) => {
        const firstImage = item.image.split(",")[0];
        return { ...item, image: firstImage };
      });

      return res.status(200).json(carsWithFirstImage);
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getSpecificCar = async (req, res) => {
  const { id } = req.params;

  const query = "select * from car where id=?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ error: "Database error occurred" });
    }

    return res.status(200).json(result);
  });
};

const getRecently = async (req, res) => {
  const query = "SELECT * FROM car ORDER BY created_at DESC LIMIT 3";

  db.query(query, (err, result) => {
    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ error: "Database error occurred" });
    }
    return res.status(200).json(result);
  });
};

module.exports = {
  createCar,
  getCars,
  getSpecificCar,
  getRecently,
};
