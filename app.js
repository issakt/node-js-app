// ייבוא לאקספרס בשביל להשתמש בפיצ'רים ובפונקציונליות שלהס
const express = require("express");

// מאפשר לשלוח נותנים לשרת בפורמט json
const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({ extended: true})) הפורמט הזה בשביל לשלוח טפסים לשרת
app.use(bodyParser.json());

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({
    message: error.message || "somthing went wrong Please Try again later.",
  });
});

const placesRoutes = require("./routes/places-routes");

// רק מה שעובר דרך /api/places יכול להגיע לנתונים
app.use("/api/places", placesRoutes);

app.listen(3000);
