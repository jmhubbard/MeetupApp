import { MongoClient } from "mongodb";

// /api/new-meetup
//POST

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    // const {title, image, address, description} = data;
    const apiRoute = process.env.API_ROUTE;

    const client = await MongoClient.connect(apiRoute);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({ data });

    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
};

export default handler;
