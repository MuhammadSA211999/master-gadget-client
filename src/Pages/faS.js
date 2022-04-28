const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const validateId = (req, res, next) => {
    const id = req.params.id;
    const objectIdRegex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
    const validId = objectIdRegex.test(id);

    if (!id || !validId) {
        return res.send({ success: false, error: 'Invalid id' });
    }

    req.id = id;

    next();
}

const uri =
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ykse1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const run = async () => {
    try {
        await client.connect();
        const productCollection = client.db("cs").collection("products");

        app.post("/products", async (req, res) => {
            const product = req.body;

            if (!product.name || !product.price || !product.image) {
                return res.send({ success: false, error: "Please provide all information" });
            }

            const result = await productCollection.insertOne(product);

            res.send({ success: true, message: `Successfully inserted ${product.name}!` });
        })

        app.get("/products", async (req, res) => {

            const limit = Number(req.query.limit);
            const pageNumber = Number(req.query.pageNumber);

            console.log(limit, pageNumber)

            console.log(limit)
            const cursor = productCollection.find();
            const products = await cursor.skip(limit * pageNumber).limit(limit).toArray();

            const count = await productCollection.estimatedDocumentCount();

            if (!products?.length) {
                return res.send({ success: false, error: "No product found" });
            }

            res.send({ success: true, data: products, count: count })
        })

        app.delete("/products/:id", validateId, async (req, res) => {
            const id = req.id;


            const result = await productCollection.deleteOne({ _id: ObjectId(id) })

            console.log(result)

            if (!result.deletedCount) {
                return res.send({ success: false, error: "something went wrong" });
            }

            res.send({ success: true, message: "Successfully deleted " })

        })
    } catch (error) {
        console.log(error)
    }
}

run();

app.listen(5000, () => console.log("server is running"));