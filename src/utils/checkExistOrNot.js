import axios from "axios";

export const checkExistsOrNot = async (endPoint, value) => {
  try {
    const res = await axios.get(
      `https://yellow-sparkly-station.glitch.me/${endPoint}`
    );

    if (res?.status === 200) {
      const data = res?.data;
      const result = data.filter((item) => item.name === value).length > 0;
      return result;
    } else {
      // Handle other HTTP status codes here, if needed
      return false;
    }
  } catch (err) {
    // Handle network errors or other exceptions here
    return false;
  }
};
