import { GetStaticProps } from "next";
import { createContext, useCallback, useState } from "react";
import { Itineraries } from "../components/Steps/itineraries";
import { amadeus } from "../services";

export interface Data {
  place: string;
  budget: string;
  days: number;
  weather: string;
  insurance: string;
  docs: string[];
  obs: string;
}
interface Setter {
  <K extends keyof Data>(
    key: K,
    value: K extends "days" ? number : K extends "docs" ? string[] : string
  ): void;
}
const initialData = {
  place: "Barcelona",
  budget: "Médio",
  days: 5,
  weather: "Verão",
  insurance: "Parcial",
  docs: [],
  obs: "",
};
export const Context = createContext<[Data, Setter]>([initialData, () => {}]);

export default function IT({ activities }: any) {
  const [data, setData] = useState<Data>(initialData);
  const updateData = useCallback<Setter>((key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <Context.Provider value={[data, updateData]}>
      <Itineraries data={{ activities }} />
    </Context.Provider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const activities = await amadeus.shopping.activities
    .get({
      latitude: 41.397158,
      longitude: 2.160873,
    })
    .then((response: any) => {
      return response.data
        .map((ativity: any) => ({
          name: (ativity.name as string).substring(0, 25),
          description: ativity?.shortDescription || "",
        }))
        .slice(0, 4);
    });

  return { props: { activities }, revalidate: 60 };
};
