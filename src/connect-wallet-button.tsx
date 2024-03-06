import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useAccount} from "wagmi";
import {useEffect} from "react";

export const ConnectWalletButton = () => {
    const { address, isConnected, disconnect } = useAccount();

    useEffect(()=>{
        if (!window.onUserDisconnected) return
        if (!isConnected) {
            window.onUserDisconnected()
        }
        if(!address||!window?.onWalletConnected) return

        window.onWalletConnected(address)
    },[address, isConnected, disconnect])

    return <ConnectButton/>
}