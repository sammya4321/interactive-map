
# Interactive Map 

`interactiveMap.js` is an IIFE for creating a simple map with icons which when
clicked opens a sidebar with some additional content.

## Instructions for adding to a Squarespace site

1. On a squarespace page, add an Image Block (the map).

2. In Advanced → CSS Class, enter:

    `interactive-map`

3. In the `interactiveMap.js` file, under `CONFIGURATION`, there is a `MAPS`
   object with an array of maps. Each map has a `mapConfig` object and a `points` array. Update the fields for each point and add
   any new points required. A map should look like this:

    ```
    {
      mapConfig: {
        selector: '.interactive-map', // CSS selector of the image block
        statusColours: {
          'ENDANGERED': '#ff7b00',
          'CRITICALLY ENDANGERED': '#ff0000',
        },
        lensZoom: 2, // Magnification level for the lens
        lensSize: 160, // Diameter of the lens in pixels
        lensStrokeWidth: 3, // Border thickness of the lens
        parallaxFactor: 1, // How much the lens follows the mouse (0-1)
      },
      points: [
        {
            /* the x and y coordinates of the icon on the map, (0,0) is at the top
             * left of the screen */
            x: 40,
            y: 60,
            
            /* the title to display in the side panel */
            title: "Location A",
            
            /* text to display in the side panel */
            text: "Description for Location A.",
            
            /* status for coloring the lens border */
            status: "ENDANGERED",
            
            /* A link in the side panel and the text it should display as */
            links: [
                { url: "https://example.com", label: "Learn More" },
                { url: "https://another.com", label: "Another Link" }
            ],
            
            /* url of the image to display in the side panel (upload file to 
             * squarespace and find the url) */
            image: "",
            
            /* the icon size. Use:
             *   - a number > 1 for pixels,
             *   - a ratio between 0 and 1 for relative size to the rendered map image,
             *   - or a string like '6%' for a percentage of the image size.
             */
            width: 0.06,
            height: 0.06,
            
            /* The svg code to display as an icon on the map */
        svg: `
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" fill="#e63946"/>
            </svg>
        `
    },
   ```
   
    Note: each point, surrounded by `{}`, must be separated by a comma `,`, as
    should the individual fields within.

4. Add the script to squarespace. In:
    
    Settings → Advanced → Code Injection → Footer

   Add the following (not including the "```" (if you can see them)):

    ```
    <script>
        /* copy and paste the whole of interactiveMap.js here */
    </script>
    ```

That’s it.

## Example

The `example.html` file loads an image and the script to show how it looks,
[view it here](https://sammya4321.github.io/interactive-map/example).

## Still TODO

1. Add animation on hover to increase size of icon
2. Add animation on selection of icon to show side panel (slide in? opacity?)
3. Allow png for icon?
4. Allow range of images to display in carasel in side panel?
5. Make phone friendly? Instead of side-panel just overlay on whole screen?
6. try on squarespace
7. on click of map (not icon) close sidebar

## Configuration

The `MAPS` array contains configuration for each map. Each map object has:

- `selector`: CSS selector for the map container
- `statusColours`: Object mapping status strings to hex colors (used for hover effects)
- `points`: Array of point objects

### Point Object

Each point has:

- `x`, `y`: Position as percentage
- `width`, `height`: Size (relative to image or fixed pixels)
- `title`: Display title
- `text`: Description text
- `status`: Optional status (affects hover color and display)
- `links`: Array of { url, label } objects
- `image`: Optional image URL
- `svg`: SVG markup for shape of the point on the map
