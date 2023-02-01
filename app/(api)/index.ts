import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "./config";

export default async function grabImages() {
    //    get the download url of all images in the storage bucket
    const listRef = ref(storage, "unseen");
    const res = await listAll(listRef);
    const photoURLs = await Promise.all(res.items.map(async (photo) => {
        return await getDownloadURL(photo);
    }));

    return photoURLs;
}
