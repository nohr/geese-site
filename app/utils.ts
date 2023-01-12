export function changeThemeColor(color: string) {
    console.log("Changing theme color to " + color);
    
    // change the meta theme color
    const meta = document.querySelector("meta[name=theme-color]");
    if (meta) {
        meta.setAttribute("content", color);
    }
}