import { Social }  from "../typings";

export const fetchSocial = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSocials`);

    // console.log("FETCH SOCIALS res", res);

    const data = await res.json()
    const socials: Social[] = data.socials;

    // console.log("FETCH SOCIALS socials", socials);

    return socials;
}