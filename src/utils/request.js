import axios from "axios";

const hostAPI = window.location.origin;

export const request = async ({
  hostUrl,
  prefix,
  url = "",
  method = "get",
  params,
  data,
  headers = {},
  hidenMessageErr,
  ...props
}) => {
  try {
    const host = hostUrl || hostAPI;
    const result = await axios({
      url: `${host}${prefix || request.prefix || ""}${url}`,
      method,
      data,
      params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Accept",
        ...headers
      },
      ...props
    });
    return result;
  } catch (err) {
    throw err;
  }
};
