import { Education } from "../typings";

import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';


export const fetchEducation = async () => {

    const query = groq`
         *[_type == "education"]    
     `;

    const education: Education[] = await sanityClient.fetch(query);
    // console.log("getEDUCATION", education);

    return education;
}