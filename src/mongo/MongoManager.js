const mongoose = require("mongoose");

class MongoManager {
  constructor(config) {
    this._config = config;
  }
  getMongoUrl() {
    return this._config.MONGODB_URI;
  }
  connect() {
    return mongoose.connect(
      this.getMongoUrl(),
      { useCreateIndex: true, useNewUrlParser: true }
    );
  }
}

module.exports = { MongoManager };
