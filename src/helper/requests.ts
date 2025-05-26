import type { IAudioFile } from "./schemas";

export const dblink = "http://89.169.160.187:8000"

export async function getAudioFileList(): Promise<Array<IAudioFile>> {

    const response = await fetch(dblink + `/get_audio_list`);
    const status = await response.status;

    let list: Array<IAudioFile> = await response.json();
    return list;
}


// export async function getAudioFile(): Promise<Array<IAudioFile>> {

//     const response = await fetch(dblink + `/get_audio_list`);
//     const status = await response.status;

//     let list: Array<IAudioFile> = await response.json();
//     return list;
// }