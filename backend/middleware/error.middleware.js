
exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack); 
  
    res.status(500).json({
      error: 'Something went wrong',
      message: err.message || 'Internal server error',
    });
  };
  
  exports.notFoundHandler = (req, res, next) => {
    res.status(404).json({
      error: 'Route not found',
      message: 'The requested endpoint does not exist.',
    });
  };