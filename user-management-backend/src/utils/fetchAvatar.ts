import axios from "axios";

export const getRandomAvatar = async (): Promise<string> => {
  const res = await axios.get("https://randomuser.me/api/");
  return res.data.results[0].picture.large;
};
