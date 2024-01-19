import useSWR from "swr";
import {base_url} from "@/types/constants";
import {fetcher} from "@/utils/fetcher";

export const useGallery = () => {
    const { data, isLoading, error} = useSWR(base_url+'/images/search', fetcher)
}