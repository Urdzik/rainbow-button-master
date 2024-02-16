import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useAccount} from "wagmi";
import {useEffect} from "react";

export const ConnectWalletButton = () => {
    const {  address } = useAccount();

    useEffect(()=>{
        if(!address||!window?.onWalletConnected) return

        window.onWalletConnected(address)
    },[address])

    return <ConnectButton/>
}