import { getBlob, getDownloadURL, listAll, ref, deleteObject, uploadBytes } from "firebase/storage";
import { storage } from "./config";

export async function pickImage(folder: string) {
    // get a list of all the files in the unseen folder in firebase storage
    const listRef = ref(storage, folder);
    let photos: string[] = [];
    await listAll(listRef).then((res) => {
        res.items.forEach((itemRef) => {
            photos.push(itemRef.name);
        });
    }).catch((error) => {
        console.log(error);
    });
    // if there are no images in the folder, return null
    if (photos.length === 0)
        return "no images!";

    // pick a random image from the list
    const random = photos[Math.floor(Math.random() * photos.length)];
    // get the url of the image
    const url = await getDownloadURL(ref(storage, folder + "/" + random));
    return url;
}

export async function handleSeen(image: string | null) {
    if (image) {
        // make a storage reference to the unseen folder
        const photoRef = ref(storage, image);
        // get the blob from the unseen folder
        const blob = await getBlob(photoRef);
        // make a storage reference to the seen folder
        const seenRef = ref(storage, "seen/" + photoRef.name);
        // upload the blob to the seen folder
        await uploadBytes(seenRef, blob).then((snapshot) => {
            console.log("Uploaded a blob or file!");
            // delete the blob from the unseen folder
            debugger;
            console.log("Deleted " + photoRef.name);
            deleteObject(photoRef);

        });
        //  get the url of the blob in the seen folder
        const url = await getDownloadURL(seenRef);
        return url;
    } else {
        // if there are no images in the unseen folder, pick a random image from the seen folder
        return pickImage("seen");
    }
}


