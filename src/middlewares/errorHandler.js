module.exports = (err, req, res, next) => {
  // YOUR CODE HERE.
  try {
    switch(err.message)
    {
      case "This is Handled Rejection.":
        res.status(400).send({"error": "Handled Rejection."});
      break;
      case "Internal Server Error":
        res.status(500).send({"error": "Internal Server Error"});
      break;
    }
  }
  catch (e) { res.status(400).send({"error": "Handled Rejection."});} 
}