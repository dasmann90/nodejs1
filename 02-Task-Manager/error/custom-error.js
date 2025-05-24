class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, status) => {
  return new CustomApiError(msg, status);
};

module.exports = { CustomApiError, createCustomError };
