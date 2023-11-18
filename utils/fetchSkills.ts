import { Skill } from "../typings";
import { groq } from 'next-sanity'
import { sanityClient } from '../sanity'

export const fetchSkills = async () => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSkills`);
    // const data = await res.json()
    // const skills: Skill[] = data.skills;

    const query = groq`
    *[_type == "skill"]
`

    const skills: Skill[] = await sanityClient.fetch(query);
    return skills;
}