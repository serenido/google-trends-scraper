import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run = client.actor("serenido/google-trends-reliable").call(run_input={
    "searchTerms": [
        "gym wear",
        "vw golf"
    ],
    "geo": "US",
    "timeRange": "past_12_months"
})

for item in client.dataset(run.default_dataset_id).iterate_items():
    print(item)
