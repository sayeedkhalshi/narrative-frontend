"use client";

import { useReadContract, useReadContracts } from "wagmi";
import ConnectedNode from "./ConnectedNode";
import { learnea_abi } from "@/abi/Learnea";
import { learnea_contract_address } from "@/lib/constant";
import { term_abi } from "@/abi/Term";

type TermsOnMapProps = {
    address: `0x${string}`;
};

const TermsOnMap: React.FC<TermsOnMapProps> = ({ address }) => {
    const {
        data: nodeDetails,
        error,
        isPending,
    } = useReadContracts({
        contracts: [
            {
                abi: term_abi,
                address: address, //control structure
                functionName: "getDetails",
            },
            {
                abi: learnea_abi,
                address: learnea_contract_address, //control structure
                functionName: "getLastPerspectivesTerms",
                args: [address, 1],
            },
            {
                abi: learnea_abi,
                address: learnea_contract_address, //control structure
                functionName: "getLastCoTerm",
                args: [address, 1],
            },
            {
                abi: learnea_abi,
                address: learnea_contract_address, //control structure
                functionName: "getLastCoTerm",
                args: [address, 2],
            },
            {
                abi: learnea_abi,
                address: learnea_contract_address, //control structure
                functionName: "getLastMicroTerm",
                args: [address, 1],
            },
            {
                abi: learnea_abi,
                address: learnea_contract_address, //control structure
                functionName: "getLastMacroTerm",
                args: [address, 1],
            },
            {
                abi: learnea_abi,
                address: learnea_contract_address, //control structure
                functionName: "getLastPhilosophyTerm",
                args: [address, 1],
            },
            {
                abi: learnea_abi,
                address: learnea_contract_address, //control structure
                functionName: "getLastScientificTerms",
                args: [address, 1],
            },
            {
                abi: learnea_abi,
                address: learnea_contract_address, //control structure
                functionName: "getLastScientificTerms",
                args: [address, 2],
            },
        ],
    });

    if (isPending)
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    if (error)
        return (
            <div className="flex justify-center items-center h-screen">
                Error! {error.message}
            </div>
        );

    const allNode = nodeDetails;
    const perspectiveNodes = allNode[1].result as `0x${string}`;
    const coTermsNodes = allNode[2].result as `0x${string}`;
    const coTermsNodes2 = allNode[3].result as `0x${string}`;
    const microTermsNodes = allNode[4].result as `0x${string}`;
    const macroTermsNodes = allNode[5].result as `0x${string}`;
    const philosophyTermsNodes = allNode[6].result as `0x${string}`;
    const scientificTermsNodes = allNode[7].result as `0x${string}`;
    const scientificTermsNodes2 = allNode[8].result as `0x${string}`;

    const nodesAround = [
        perspectiveNodes,
        coTermsNodes,
        coTermsNodes2,
        microTermsNodes,
        macroTermsNodes,
        philosophyTermsNodes,
        scientificTermsNodes,
        scientificTermsNodes2,
    ];

    return (
        <>
            <ConnectedNode
                address={address}
                centralNode={allNode[0].result as TermDetails}
                nodesAround={nodesAround}
            />

            {/* <ConnectedNode />
            <ConnectedNode />
            <ConnectedNode /> */}
        </>
    );
};

export default TermsOnMap;
