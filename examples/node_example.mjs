import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("serenido/google-trends-reliable").call({
    "searchTerms": [
        "gym wear",
        "vw golf"
    ],
    "geo": "US",
    "timeRange": "past_12_months"
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
