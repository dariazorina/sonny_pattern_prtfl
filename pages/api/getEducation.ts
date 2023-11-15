import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Education } from "../../typings";

type Data = {
    education: Education[];
}

const query = groq`
     *[_type == "education"]    
 `;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const education: Education[] = await sanityClient.fetch(query);
    console.log("getEDU", education);

    res.status(200).json({ education });
}
