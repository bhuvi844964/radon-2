const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body


    let authorIdFInder =req.body.author;
    console.log(authorIdFInder)
    let publisheridfinder =req.body.publisher;
    let findAuthor=await authorModel.findOne({_id:authorIdFinder});
    console.log(findAuthor)
    let findpublish=await publishermodel.findOne({_id:publisheridfinder})
      if(findAuthor===null){
          res.send("author Id Details Is Required");

      }
      if(findpublisher===null){
      res.send("publish Id Details Is Required")
}

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate([("author"),("publisher")])
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
