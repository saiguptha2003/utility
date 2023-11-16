import {View,Text} from "react-native";
import { Pressable } from 'react-native'
import {WalletConnectModal,useWalletConnectModal} from '@walletconnect/modal-react-native';
import styles from "./styles";
// import "@ethersproject/shims"
// import { ethers } from 'ethers';
// import {useState} from "react";
// const infuraProvider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/2d8c365873fd401f886c95b7acfb5267');
// const privateKey = 'aa0221b0590231d7f14b05d1c814b047bc078db74e9e7e3c38ffa61ed06af43b';
//
// const contractAddress = '0xb0B2ff74470D6e60D0554146929FE45c06534d6C'; // Replace with your contract address
//
// const contractABI = [
//         {
//             "inputs": [],
//             "name": "getID",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_newID",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "setID",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "storedID",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ]; // Replace with your contract ABI
// const contract = new ethers.Contract(contractAddress, contractABI, infuraProvider);
// const projectId = 'f781f0d446ea20ca8736c995eb6c5abc'

const providerMetadata = {
    name: 'YOUR_PROJECT_NAME',
    description: 'YOUR_PROJECT_DESCRIPTION',
    url: 'https://your-project-website.com/',
    icons: ['https://your-project-logo.com/'],
    redirect: {
        native: 'YOUR_APP_SCHEME://',
        universal: 'YOUR_APP_UNIVERSAL_LINK.com'
    }
}

export default function Dashboard() {
    // const [returnedNumber, setReturnedNumber] = useState(0);
    const { isOpen, open, close, provider, isConnected, address } = useWalletConnectModal();
    // const handleContractTransaction = async () => {
    //     try {
    //         if (!provider) {
    //             console.error('WalletConnect provider not available.');
    //             return;
    //         }
    //
    //         // Replace 'methodName' with the method that returns a number from your contract
    //         const result = await contract.getID();
    //
    //         const returnedValue = result.toString(); // Assuming the returned value is a BigNumber
    //
    //         console.log('Returned number:', returnedValue);
    //         setReturnedNumber(returnedValue);
    //     } catch (error) {
    //         console.error('Error fetching number from contract:', error);
    //     }
    // };
    return (
        <View style={styles.container}>

            <Pressable onPress={()=>open()}>
                <Text style={styles.Header}>{isConnected? "View account":"connect"}</Text>
            </Pressable>
            <WalletConnectModal projectId={projectId} providerMetadata={providerMetadata} />
        </View>
    )
}
