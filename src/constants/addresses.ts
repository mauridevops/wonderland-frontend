import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "0x78a9e536EBdA08b5b9EDbE5785C9D1D50fA3278C", //??
    MEMO_ADDRESS: "0x164AA7B7e3C3594D8e2A2b6056966afFb1207001", //Done
    TIME_ADDRESS: "0x9e527b2232c54e2ac35bd352c2a175a2da168fa0", //Done
    MIM_ADDRESS: "0xd61156e6fd5f4997d23b58d45d0aac993e731df7", //??
    STAKING_ADDRESS: "0xFd4d2CA5092Caf3AA2A0c0AF7df891D214e3D8ef", //?? Done Dove sono gli indirizzi dei TOKEN?
    STAKING_HELPER_ADDRESS: "0x6175F1a9135B2714eD7af4A295633a7586767d74", //Done
    TIME_BONDING_CALC_ADDRESS: "0x02719A799f08FE65d95a0dea635E3C76B9b34416", //Done
    TREASURY_ADDRESS: "0x0b8c8afcd9f9F667a1Aed554dBEed249f84d0365", //Done
    ZAPIN_ADDRESS: "0xDae4B86E67431f4D5532425e496c66244f17840d", //done,
    WMEMO_ADDRESS: "0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;

    throw Error("Network don't support");
};
