class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          $or: [
            { name: { $regex: `${this.queryStr.keyword}`, $options: "i" } },
            { office: { $regex: `${this.queryStr.keyword}`, $options: "i" } },
            { position: { $regex: `${this.queryStr.keyword}`, $options: "i" } },
          ],
        }
      : {};

    console.log(keyword);

    this.query = this.query.find({ ...keyword });
    return this;
  }
}

module.exports = ApiFeatures;
