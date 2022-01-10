import { Networks } from "../../constants/blockchain";
import { LPBond } from "./lp-bond";
import { StableBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
import UstIcon from "../../assets/tokens/UST.svg";
import FraxIcon from "../../assets/tokens/FRAX.svg";

import { StableBondContract, LpBondContract, StableReserveContract, LpReserveContract } from "../../abi";

// TODO - not needed
export const mim = new StableBond({
    name: "mim",
    displayName: "MIM",
    bondToken: "MIM",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.ONE]: {
            bondAddress: "0x694738E0A438d90487b4a549b201142c1a97B556",
            reserveAddress: "0x130966628846BFd36ff31a822705796e8cb8C18D",
        },
    },
});

export const ust = new StableBond({
    name: "ust",
    displayName: "BUSD",
    bondToken: "BUSD",
    bondIconSvg: UstIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.ONE]: {
            bondAddress: "0x694738E0A438d90487b4a549b201142c1a97B556", // TODO - need this
            reserveAddress: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7", // BUSD - CONTRACT ADDRESS
        },
    },
});

export const frax = new StableBond({
    name: "frax",
    displayName: "USDT",
    bondToken: "USDT",
    bondIconSvg: FraxIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.ONE]: {
            bondAddress: "0x312418e484CE93851a5712A5CDd6bEe303080A67", // TO DO BSC
            reserveAddress: "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684", // USDT CONTRACT ADDRESS
        },
    },
});

// todo - rename
export const mimPsi = new LPBond({
    name: "mim_psi_lp",
    displayName: "FTL-BUSD LP",
    bondToken: "BUSD",
    bondIconSvg: MimIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.ONE]: {
            bondAddress: "0x19513619465B1331A3e4750a99310182426E9071", //TODO
            reserveAddress: "0xD77Cf09d693ea7b40Da0b83B31C60D43A90C63C1", // BUSD/DESTINY LP CONTRACT ADDRESS
        },
    },
    lpUrl: "https://pancake.kiemtienonline360.com/#/add/0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7/0xBE02E32139a20d86833C99554a1F62bE3d1Ecc02",
});

export default [ust, frax];
