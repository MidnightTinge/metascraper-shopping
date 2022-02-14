const got = require("got");
const metascraper = require("metascraper")([require("..")()]);

test("live test fireclay", async () => {
  const targetUrl =
    "https://www.fireclaytile.com/quick-ship/glass/quick-ship-glass-grackle-matte-3x12";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.retailer).toBe("Fireclay Tile");
  expect(metadata.hostname).toBe("fireclaytile.com");
}, 10000);

test("live test wayfair", async () => {
  const targetUrl =
    "https://www.wayfair.com/appliances/pdp/bosch-100-series-24-48-dba-built-in-fully-integrated-dishwasher-with-3rd-rack-and-precisionwash-bch10013.html";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.brand).toBe("Bosch");
  expect(metadata.hostname).toBe("wayfair.com");
}, 10000);

test("live test fyrn", async () => {
  const targetUrl =
    "https://www.homedepot.com/p/STONEMARK-4-in-x-4-in-Quartz-Countertop-Sample-in-Calacatta-Arno-P-QSL-CALARNO-3X3/311329053";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.hostname).toBe("homedepot.com");
}, 10000);

test("live test compac.es", async () => {
  const targetUrl = "https://us.compac.es/color/unique-calacatta/";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });

  expect(metadata.retailer).toBe("COMPAC");
}, 10000);

test("live test bestbuy", async () => {
  const targetUrl =
    "https://www.bestbuy.com/site/lg-2-0-cu-ft-over-the-range-microwave-with-sensor-cooking-printproof-matte-black-stainless-steel/6113238.p?skuId=6113238";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.retailer).toBe("Best Buy");
}, 10000);

test("live test signaturefaucets", async () => {
  const targetUrl =
    "https://signaturefaucets.com/products/imperium-touch-control-dual-function-pull-out-spout-kitchen-faucet";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.brand).toBe("Signature Faucets");
}, 10000);

test('alphaleteathletics.com', async () => {
  const targetUrl = 'https://alphaleteathletics.com/collections/new-mens-kels-1-31/products/mens-monarch-hoodie-black';
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata).toEqual(
    expect.objectContaining({
      name: 'Monarch Hoodie - Black',
      price: 76,
      currency: 'USD',
    })
  );
});
