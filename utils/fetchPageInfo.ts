import { PageInfo } from "../typings";
import { groq } from 'next-sanity'
import { sanityClient } from '../sanity'

export const fetchPageInfo = async () => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getPageInfo`);
    // const data = await res.json()
    // const pageInfo: PageInfo = data.pageInfo;

    const query = groq`
    *[_type == "pageInfo"][0]`

    const pageInfo: PageInfo = await sanityClient.fetch(query);
    return pageInfo;
}