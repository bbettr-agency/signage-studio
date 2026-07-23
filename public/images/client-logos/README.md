# Client Logos

Client brand marks displayed in the "Trusted By" marquee on the homepage.

## To add a new client logo

1. Drop the logo image into this folder.
   - **Format:** PNG with transparent background preferred (SVG also fine).
   - **Size:** at least 1000 px on the longer edge — square or landscape works best.
   - **Colour:** the marquee shows logos in muted grayscale by default and reveals
     full colour on hover, so both colour and monochrome originals are OK.
   - **Filename:** short, kebab-case, brand-name based (e.g. `toyota.png`).

2. Add an entry in [`config/client-logos.ts`](../../../config/client-logos.ts):

   ```ts
   { name: "Brand Name", src: "/images/client-logos/brand-name.png" },
   ```

3. Order in the config = order in the marquee. Rearrange to prioritise your
   most recognisable clients first.

No component code needs to change — the marquee is driven entirely by config.
