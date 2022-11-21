import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../external/repos/prisma";
import { Data } from "../../itineraries";

export default async function Handler(request: NextApiRequest, response: NextApiResponse) {
  switch (request.method) {
    case "POST":
      const data: Data | null = JSON.parse(request.body || {});
      if (!data) return response.status(403).json({ error: "Ivalid!" });

      const itinerary = await client.itinerary.create({
        data,
      });

      response.status(200).json(itinerary);
    case "GET":
      const itineraries = await client.itinerary.findMany();

      response.status(200).json({ data: itineraries, count: itineraries.length });
    default:
      response.redirect("/404");
  }
}
