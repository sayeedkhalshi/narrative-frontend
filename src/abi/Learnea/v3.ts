export const learnea_v3 = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_title",
                type: "string",
            },
            {
                internalType: "string",
                name: "_details",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_termType",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_derivedFrom",
                type: "address",
            },
        ],
        name: "createTerm",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_title",
                type: "string",
            },
            {
                internalType: "string",
                name: "_details",
                type: "string",
            },
        ],
        name: "createUser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "getAllTerms",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "creator",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "termAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "termType",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "derivedFrom",
                        type: "address",
                    },
                ],
                internalType: "struct Learnea.CreatedTerm[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_termId",
                type: "uint256",
            },
        ],
        name: "getTerm",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "creator",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "termAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "termType",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "derivedFrom",
                        type: "address",
                    },
                ],
                internalType: "struct Learnea.CreatedTerm",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_userAddress",
                type: "address",
            },
        ],
        name: "getUser",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "wallet",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "title",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "details",
                        type: "string",
                    },
                ],
                internalType: "struct Learnea.User",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "layerCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "layers",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "creator",
                type: "address",
            },
            {
                internalType: "address",
                name: "layerAddress",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pathCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "termCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "terms",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "creator",
                type: "address",
            },
            {
                internalType: "address",
                name: "termAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "termType",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "derivedFrom",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "userCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "userCreatedPathList",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "creator",
                type: "address",
            },
            {
                internalType: "string",
                name: "title",
                type: "string",
            },
            {
                internalType: "string",
                name: "details",
                type: "string",
            },
            {
                internalType: "address",
                name: "startingTerm",
                type: "address",
            },
            {
                internalType: "address",
                name: "endTerm",
                type: "address",
            },
            {
                internalType: "address",
                name: "goalTerm",
                type: "address",
            },
            {
                internalType: "address",
                name: "pathAdress",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "userPathList",
        outputs: [
            {
                internalType: "string",
                name: "_title",
                type: "string",
            },
            {
                internalType: "string",
                name: "_details",
                type: "string",
            },
            {
                internalType: "address",
                name: "_startingTerm",
                type: "address",
            },
            {
                internalType: "address",
                name: "_endTerm",
                type: "address",
            },
            {
                internalType: "address",
                name: "_goalTerm",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "users",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "wallet",
                type: "address",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "title",
                type: "string",
            },
            {
                internalType: "string",
                name: "details",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
