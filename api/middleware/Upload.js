const multer = require('multer');
const path = require('path');

// Multer storage ayarlarını tanımlıyoruz
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');  // Yüklemelerin yapılacağı dizin
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Dosya adı
  }
});

// Sadece belirli dosya türlerini kabul etmek için filter
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png/;
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedFileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed!'));
  }
};

// Multer middleware'i oluşturuyoruz
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB limit
  fileFilter: fileFilter // Dosya türü filtresi ekleniyor
});

// Export ediyoruz
module.exports = upload;
