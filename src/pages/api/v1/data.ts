import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../itineraries";

export default function Handler(request: NextApiRequest, response: NextApiResponse) {
  switch (request.method) {
    case "POST":
      const data: Data | null = JSON.parse(request.body || {});
      response.status(200).json({});
    default:
      response.redirect("/404");
  }
}
