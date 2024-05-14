import Moralis from "moralis";

export type User = {
  id: number;
  name: string;
  email: string;
};

export type Currency = {
  id: number;
  markets: number;
};

Moralis.start({
  apiKey: `${process.env.NEXT_PUBLIC_MORALIS_API_KEY}`,
});

const contractAddress = "0xED5AF388653567Af2F388E6224dC7C4b3241C544";

export async function getCollections() {
  try {
    const response = await Moralis.EvmApi.nft.getContractNFTs({
      chain: "0x1",
      format: "decimal",
      address: contractAddress,
    });

    // console.log(response.raw);
    return response.raw;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
}

export async function getGlobal() {
  try {
    const response = await fetch("https://coingecko.p.rapidapi.com/global", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY}`,
        "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = (await response.json()) as Currency[];
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
