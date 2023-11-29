import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "gvoh9rir",
    dataset: "production",
    useCdn: true,
});