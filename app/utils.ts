var Vibrant = require("node-vibrant");

//  Get color from image to change theme
export function colorTheme(photo: string) {
    //  Get color from image to change theme
    Vibrant.from(photo)
        .getPalette()
        .then((palette: { Vibrant: { hex: string } }) => {
            // change the meta theme color
            const meta = document.querySelector("meta[name=theme-color]");
            if (meta) {
                meta.setAttribute("content", palette.Vibrant.hex);
            }
        }
        )
        .catch((err: any) => console.log(err));
}
