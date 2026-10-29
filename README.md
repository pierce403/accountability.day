# accountability.day

A static site for Accountability Day, observed January 21 following each U.S. presidential inauguration.

The site supports independent review of official conduct, legal action supported by evidence, and due process.

## Development

Open `index.html` directly, or run a local static server:

```sh
python3 -m http.server 8000
```

No third-party browser JavaScript is required.

## Cloudflare deployment

The site is deployed with Cloudflare Workers Static Assets. GitHub remains the public source repository; deployment credentials stay in Cloudflare.

```sh
npm ci
npm run check
npm run deploy
```

`npm run build` copies the public files into `dist/`, the only directory Wrangler uploads.
