# Google Trends Scraper API

Get Google Trends data for any list of keywords: interest over time, rising and top related queries, interest by region and Trending Now. Auto-retry, no 429 errors.

Runs in the cloud on Apify. No servers, no proxy setup, no code to maintain. **[Open it on Apify](https://apify.com/serenido/google-trends-reliable)**

**Price:** $1 per 1,000 results (one result = one keyword or one Trending Now search). No monthly fee. Apify's free plan gives $5 of usage every month, no credit card needed. [Current price](https://apify.com/serenido/google-trends-reliable/pricing).

## What you get

- Interest over time with a ready summary (average, latest, peak, change in %)
- Rising (breakout) and top related queries
- Interest by region
- Trending Now for any country, with traffic and news links
- Web, YouTube, News, Images and Shopping search, any country and time range

## Quick start: Python

```bash
pip install apify-client
```

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("serenido/google-trends-reliable").call(run_input={
    "searchTerms": [
        "gym wear",
        "vw golf"
    ],
    "geo": "US",
    "timeRange": "past_12_months"
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

## Quick start: JavaScript (Node.js)

```bash
npm install apify-client
```

```javascript
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
```

## Quick start: one HTTP call

Runs the tool and returns the rows in one request. Good for runs under 5 minutes; for bigger runs use the Python or JavaScript example.

```bash
curl -X POST "https://api.apify.com/v2/acts/serenido~google-trends-reliable/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"searchTerms": ["gym wear", "vw golf"], "geo": "US", "timeRange": "past_12_months"}'
```

Get your token in [Apify Console > Settings > API & Integrations](https://console.apify.com/settings/integrations).

## Use it from AI apps (MCP)

Any app that supports remote MCP servers (Claude, ChatGPT, Cursor, VS Code and others) can run this tool for you. Add this server URL: `https://mcp.apify.com?tools=serenido/google-trends-reliable`. Your Apify account connects on first use. Example config for Cursor:

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=serenido/google-trends-reliable"
    }
  }
}
```

## Input example

```json
{
  "searchTerms": [
    "gym wear",
    "vw golf"
  ],
  "geo": "US",
  "timeRange": "past_12_months"
}
```

Add `"trendingNowGeos": ["US", "GB"]` to also get today's trending searches. All options are listed on the [input page](https://apify.com/serenido/google-trends-reliable/input-schema).

## Output example (one row)

```json
{
  "type": "keyword",
  "keyword": "gym wear",
  "geo": "US",
  "averageInterest": 68.8,
  "latestInterest": 57,
  "peakInterest": 100,
  "peakDate": "2026-04-12",
  "trendChangePct": 16,
  "trendDirection": "rising",
  "topRegions": "Wyoming (100), Kansas (52), Hawaii (43), California (37) ...",
  "topQueries": "best gym wear, what to wear to the gym, gym wear women ...",
  "risingQueries": "cheap womens gym wear (+250%), women's gym wear (+200%), cheap gym wear (+70%) ..."
}
```

Download as JSON, CSV or Excel, or connect to Make, Zapier or n8n.

## Use cases

- Keyword research and SEO
- Spotting rising products and topics early
- Daily Trending Now feeds for content teams

## More tools by Serenido

- [Weibo Scraper](https://github.com/serenido/weibo-scraper): posts, hot searches, comments and creators. No login.
- [Bilibili Scraper](https://github.com/serenido/bilibili-scraper): videos, comments, danmaku and creators. No login.
- [AliExpress Product Details Scraper](https://github.com/serenido/aliexpress-product-details-scraper): every variant with price and stock, shipping to 89 countries.
- [AliExpress Search Scraper](https://github.com/serenido/aliexpress-search-scraper): price, discount and exact order count for any search.
- [Australian Supermarket Prices: Coles, Woolworths and ALDI](https://github.com/serenido/coles-woolworths-aldi-scraper): Coles, Woolworths and ALDI in one run, with unit prices.
- [Football xG Scraper](https://github.com/serenido/football-xg-scraper): Understat xG tables, matches, shots, players and lineups.
- [Weibo Hot Search Scraper](https://github.com/serenido/weibo-hot-search): the live 微博热搜 list, changes since your last run, top posts per topic.

## Support

Found a bug or need a field? Open an issue here or on the [Issues tab on Apify](https://apify.com/serenido/google-trends-reliable/issues).

Use it only for public data and follow the website's terms and the laws that apply to you. This project is not affiliated with the websites it reads.
