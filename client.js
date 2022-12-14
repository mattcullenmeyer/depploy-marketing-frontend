// client.js
import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "1gqvndqq", // you can find this in sanity.json
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2021-08-31",
});
