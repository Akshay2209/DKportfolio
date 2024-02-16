import { PageInfo } from "@/typings";

export const fetchPageInfo = async()=> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    console.log('printing the pageInfo ---> ', `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    console.log('response code:===> ', res.status);
    const data = await res.json();
    const pageinfo: PageInfo = data.pageInfo;

    return pageinfo;
}