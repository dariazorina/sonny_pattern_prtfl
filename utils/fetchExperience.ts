import { Experience, PageInfo }  from "../typings";

export const fetchExperience = async() => {
    // console.log("fetchExp-----------------");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getExperience`);

    // console.log("fetchExp", res);
    const data = await res?.json();
    
   // console.log("fetchExp", data);
    const experience: Experience[] = data.experiences;

    return experience;
}