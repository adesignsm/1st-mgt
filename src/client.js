import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "gvoh9rir",
    dataset: "production",
    apiVersion: '2022-03-07',
    useCdn: false,
});