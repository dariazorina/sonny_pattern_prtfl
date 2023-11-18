import { Social } from "../typings";
import { groq } from 'next-sanity'
import { sanityClient } from '../sanity'


export const fetchSocial = async () => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSocials`);

    // // console.log("FETCH SOCIALS res", res);

    // const data = await res.json()
    // const socials: Social[] = data.socials;

    // // console.log("FETCH SOCIALS socials", socials);

    const query = groq`
    *[_type == "social"]
`
    const socials: Social[] = await sanityClient.fetch(query);
    return socials;
}