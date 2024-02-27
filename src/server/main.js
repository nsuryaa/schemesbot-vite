import express from "express";
import cors from "cors";
import ViteExpress from "vite-express";
import { MongoClient, ServerApiVersion } from "mongodb";
const app = express();
app.use(cors());
app.use(express.json());
const uri =
  "mongodb+srv://suryasedulous:supracse@cluster7.1g8smdo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to MongoDB Atlas when the server starts
client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

app.post("/suggest", async (req, res) => {
  console.log(req.body);
  try {
    await client.connect();
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
    const database = client.db("tnschemes");
    const collection = database.collection("schemes");
    // const query = {
    //   "scheme_details.eligibility_criteria.community": `${req.body.community}`,
    // };
    const query = {
      // "scheme_details.beneficiaries": `${req.body.category}`,
      $or: [
        {
          "scheme_details.beneficiaries": `${req.body.community}`,
        },
        { "scheme_details.beneficiaries": `${req.body.category}` },

        {
          "scheme_details.beneficiaries": `${
            req.body.gender === "Female" ? "Pregnant Women" : ""
          }`,
        },
      ],
    };

    const options = {
      // Sort matched documents in descending order by rating
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, "scheme_details.title_name": 1, description: 1 },
    };
    // Query MongoDB for data
    const data = await collection.find(query, options).toArray();
    const count = await collection.countDocuments(query);
    console.log("success");
    console.log(data);
    console.log(count);

    // client.close();

    // Send data to frontend
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
