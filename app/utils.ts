import { Ref } from "react";

export function changeThemeColor(color: string) {
    // change the meta theme color
    const meta = document.querySelector("meta[name=theme-color]");
    if (meta) {
        meta.setAttribute("content", color);
    }
}

// a function take takes in a ref and logs to the console when the mouse enters the ref 
// export function mouseEnter(ref: Ref<any>) {
//     ref?.addEventListener("mouseenter", () => {
//         console.log("Mouse entered " + ref.id);
//     });
// }