import { userAxios } from "config/axios.config";
import { useQuery } from "react-query";
import { getCityType } from "../../lib/types";

export const getSubCities = ({ id }) => {
  return (
    useQuery < getCityType,
    Error,
    getCityType >
      ("sub-cities-data",
      async () => {
        const res = await userAxios.get(
          `${process.env.NEXT_PUBLIC_API}/merchant/all-zones?city=${id}`
        );
        return res?.data?.data?.json_array;
      },
      {
        enabled: !!id,
        refetchOnWindowFocus: false,
        // staleTime: Infinity,
      })
  );
};
