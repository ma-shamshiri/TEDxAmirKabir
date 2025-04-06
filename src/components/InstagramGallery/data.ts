import { azita_mohammadkarimi_cover, farzaneh_shahrtash_cover, mostafa_naghipourfar_cover, nasim_biyarjomandy_cover, shadi_azizi_cover, vahid_rajabloo_cover } from "../../assets";

export interface InstagramPost {
    id: string;
    imageUrl?: string;
    caption?: string;
    link?: string;
    videoUrl: string;

}

export const instagramPosts: InstagramPost[] = [
    {
        id: "6",
        imageUrl: shadi_azizi_cover,
        caption: "نوآوری",
        // link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "shadi_azizi_teaser.mp4",
    },
    {
        id: "1",
        imageUrl: azita_mohammadkarimi_cover,
        caption: "تیم TEDx دانشگاه تهران",
        // link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "azita_mohammadkarimi_teaser.mp4",
    },
    {
        id: "2",
        imageUrl: nasim_biyarjomandy_cover,
        caption: "ایده‌های نوآورانه",
        // link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "nasim_biyarjomandy_teaser.mp4",
    },
    {
        id: "3",
        imageUrl: mostafa_naghipourfar_cover,
        caption: "همایش TEDx",
        // link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "mostafa_naghipourfar_teaser.mp4",
    },
    {
        id: "4",
        imageUrl: vahid_rajabloo_cover,
        caption: "الهام‌بخش",
        // link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "vahid_rajabloo_teaser.mp4",
    },
    {
        id: "5",
        imageUrl: farzaneh_shahrtash_cover,
        caption: "نوآوری",
        // link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "farzaneh_shahrtash_teaser.mp4",
    },

];
