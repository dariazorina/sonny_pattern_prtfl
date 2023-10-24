import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity' ;
import { Experience } from "../../typings";
import { error } from 'console';
import { any } from 'prop-types';

type Data = {
    experiences: Experience[];
}

// const query = groq`
//     *[_type == "experience"]    
// `;
const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse <Data>
) {
    const experiences: Experience[] = await sanityClient.fetch(query);
    console.log("getEXP", experiences);

    // if (experiences !== undefined && experiences !== null && experiences.length != 0) {
        res.status(200).json({ experiences });        
    // }        
    // else {               
    //     console.log("E+R+R+O+R");
    //     res.status(405).sendDate;
    // }
}
