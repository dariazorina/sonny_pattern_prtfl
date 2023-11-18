import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { Experience } from "../typings";

export const fetchExperience = async () => {

    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getExperience`);
    // const data = await res?.json();    
    // const experience: Experience[] = data.experiences;

    const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

    const experience: Experience[] = await sanityClient.fetch(query);
    return experience;
}