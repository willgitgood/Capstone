const { Router } = require("express");
const Comments = require("../models/Comments");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newComment = new Comment(request.body);
  newComment.save((error, record) => {
    if (error.name && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Comments.find({}, (error, record) => {
    if (error) return response.status(500).json(error.errors);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Comments.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Comments.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Comments.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't
        name: body.name,
        affirmation: body.affirmation
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error.name && error.name === "ValidationError")
        return response.status(400).json(error.errors);
      if (error) return response.status(500).json(error.errors);
      response.json(record);
    }
  );
});

module.exports = router;
