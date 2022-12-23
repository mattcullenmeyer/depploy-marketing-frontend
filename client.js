import sanityClient from "@sanity/client";

const env = process.env.NODE_ENV;

let dataset = "staging";
if (env === "production") {
  dataset = "production";
}

export const client = sanityClient({
  projectId: "1gqvndqq", // you can find this in sanity.json
  dataset,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2021-08-31",
});
