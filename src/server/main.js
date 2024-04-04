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

async function send_to_colab(input, url) {
  let message;
  if (input.category == "Farmers") {
    message =
      "I am a Maize growing farmer, aged 21, and I am from a SC/ST community and I am a farmer.";
  } else if (input.category == "Manufacturers") {
    message = "I am a Manufacturer/manufacturing enterprises";
  } else if (input.category == "Students") {
    message =
      "I am a Male, aged 21, with an annual income of 0, and I am from a BC/MBC community and I am a Student.";
  } else if (input.category == "Journalists") {
    message = "I am a journalist.";
  } else if (input.category == "Handloom weavers") {
    message = "I am a textile Weaver";
  } else if (input.category == "Unemployed") {
    message = "I need employment";
  } else if (input.category == "Government Employees") {
    message = "I am a Government employee and I need insurance";
  }

  try {
    const response = await fetch(`${url}/process_input?input=${message}`);
    const data = await response.json();
    console.log(data);
    const schemeNames = data.map((scheme) => scheme.scheme_name);

    return schemeNames;
  } catch (error) {
    console.error("Error:", error);
    return { error: "Failed to fetch data" };
  }
}

app.post("/suggest", async (req, res) => {
  console.log(req.body);
  try {
    await client.connect();
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
    const database = client.db("tnschemes");
    const urlCollection = database.collection("ngrok_url");
    const ngrokData = await urlCollection.findOne();
    const ngrokUrl = ngrokData.url;
    console.log(ngrokUrl);
    let schemes = await send_to_colab(req.body, ngrokUrl);

    const collection = database.collection("schemes");

    const query = {
      "scheme_details.title_name": { $in: schemes },
    };
    // const query = {
    //   "scheme_details.eligibility_criteria.community": `${req.body.community}`,
    // };
    // const query = {
    //   // "scheme_details.beneficiaries": `${req.body.category}`,
    //   $or: [
    //     {
    //       "scheme_details.beneficiaries": `${req.body.community}`,
    //     },
    //     { "scheme_details.beneficiaries": `${req.body.category}` },

    //     {
    //       "scheme_details.beneficiaries": `${
    //         req.body.gender === "Female" ? "Pregnant Women" : ""
    //       }`,
    //     },
    //   ],
    // };

    const options = {
      // Sort matched documents in descending order by rating
      // Include only the `title` and `imdb` fields in the returned document
      projection: {
        _id: 0,
        "scheme_details.title_name": 1,
        description: 1,
        "scheme_details.benefits_types": 1,
      },
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

ViteExpress.listen(app, 3001, () =>
  console.log("Server is listening on port 3001...")
);
