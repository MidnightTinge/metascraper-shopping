const got = require("got");
const metascraper = require("metascraper")([require("..")()]);

test("jsonld test", async () => {
  const targetUrl =
    "https://www.caesarstoneus.com/catalog/5131-calacatta-nuvo/";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.name).toBe("Calacatta Nuvo");
  expect(metadata.retailer).toBe("Caesarstone US");
}, 10000);

test('Does not throw for invalid JSON', async () => {
  const html = `
<script type="application/ld+json">
  {invalid
</script>
  `;

  return expect(metascraper({ html, url: 'https://example.com/' })).resolves.not.toBeNull();
})

test('Nullish objects fall-through to other tests', async () => {
  const html = `
<meta property="og:title" content="hello, jest"/>
  `;

  // we're asserting here that the jsonLd check, which will return undefined, falls through to the
  // og:title meta tag fallback correctly, meaning we're no longer returning `false` and having that
  // break metascraper upstream.
  return expect(metascraper({ html, url: 'https://example.com/' })).resolves.toEqual(
    expect.objectContaining({
      name: 'hello, jest',
    })
  );
})
