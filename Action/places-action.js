const HttpError = require("../Error-Model/Http-Error");

const DUMMY_PLACES = [
  {
    id: "p1",
    placeName: "eilat",
    description: "eilat nice place",
    location: {
      latitude: 29.557054,
      longitude: 34.939626,
    },
    creator: "u1",
  },
  {
    id: "p2",
    placeName: "eilat",
    description: "eilat nice place",
    location: {
      latitude: 29.557054,
      longitude: 34.939626,
    },
    creator: "u2",
  },
];

exports.getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    res.status(404).json({ message: "Place not find please try again." });
  }

  res.status(200).json({ place: place });
};

exports.getUserById = (req, res, next) => {
  //etract
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((u) => {
    return u.creator === userId;
  });
  if (!place) {
    res.status(404).json({ message: "User is not found!!" });
  }
  res.status(200).json({ place: place });
};

exports.signUp = (req, res, next) => {
  const signUp = req.parms.signup;
};
