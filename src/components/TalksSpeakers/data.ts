// data.ts

import { farzaneh_shahrtash, javad_zarif, marzieh_ebrahimi, mehrdad_oskouei, mostafa_naghipourfar, nasim_biyarjomandy, shadi_azizi, sharmin_meymandinejad, vahid_rajabloo } from "../../assets";

export interface Talk {
    id: number;
    videoUrl: string;     // The YouTube embed URL
    speakerName: string;  // The speaker's name
    speakerImage: string; // The path or URL to the speaker's circular image
    description: string;  // A short description of the talk
}

export const talksData: Talk[] = [
    {
        id: 1,
        videoUrl: "https://www.youtube.com/embed/vKyR6B5ILn0",
        speakerName: "marziehEbrahimi",
        speakerImage: marzieh_ebrahimi,
        description: "marziehEbrahimiTalkDescription",
    },
    {
        id: 2,
        videoUrl: "https://www.youtube.com/embed/DurdnA0TZhQ",
        speakerName: "javadZarif",
        speakerImage: javad_zarif,
        description: "javadZarifTalkDescription",
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/embed/bCoJ5bzrKd8",
        speakerName: "nasimBiyarjomandy",
        speakerImage: nasim_biyarjomandy,
        description: "nasimBiyarjomandyTalkDescription",
    },
    {
        id: 4,
        videoUrl: "https://www.youtube.com/embed/YofivxtgL8I",
        speakerName: "mostafaNaghipourfar",
        speakerImage: mostafa_naghipourfar,
        description: "mostafaNaghipourfarTalkDescription",
    },
    {
        id: 5,
        videoUrl: "https://www.youtube.com/embed/UAzfXpbQngE",
        speakerName: "farzanehShahrtash",
        speakerImage: farzaneh_shahrtash,
        description: "farzanehShahrtashTalkDescription",
    },
    {
        id: 6,
        videoUrl: "https://www.youtube.com/embed/6EM7zjv16d0",
        speakerName: "vahidRajabloo",
        speakerImage: vahid_rajabloo,
        description: "vahidRajablooTalkDescription",
    },
    {
        id: 7,
        videoUrl: "https://www.youtube.com/embed/mpsCp5hnyHw",
        speakerName: "sharminMeymandinejad",
        speakerImage: sharmin_meymandinejad,
        description: "sharminMeymandinejadTalkDescription",
    },
    {
        id: 8,
        videoUrl: "https://www.youtube.com/embed/lKQCcwamcYc",
        speakerName: "shadiAzizi",
        speakerImage: shadi_azizi,
        description: "shadiAziziTalkDescription",
    },
    {
        id: 9,
        videoUrl: "https://www.youtube.com/embed/mR83m9Hk76s",
        speakerName: "mehrdadOskouei",
        speakerImage: mehrdad_oskouei,
        description: "mehrdadOskoueiTalkDescription",
    },




    

    // Add more talks as needed...
];
