export const learnea_v1 = [
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
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
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
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_lastIndex",
                type: "uint256",
            },
        ],
        name: "getLastCoTerm",
        outputs: [
            {
                internalType: "address",
                name: "",
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
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_lastIndex",
                type: "uint256",
            },
        ],
        name: "getLastMacroTerm",
        outputs: [
            {
                internalType: "address",
                name: "",
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
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_lastIndex",
                type: "uint256",
            },
        ],
        name: "getLastMicroTerm",
        outputs: [
            {
                internalType: "address",
                name: "",
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
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_lastIndex",
                type: "uint256",
            },
        ],
        name: "getLastPerspectivesTerms",
        outputs: [
            {
                internalType: "address",
                name: "",
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
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_lastIndex",
                type: "uint256",
            },
        ],
        name: "getLastPhilosophyTerm",
        outputs: [
            {
                internalType: "address",
                name: "",
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
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_lastIndex",
                type: "uint256",
            },
        ],
        name: "getLastScientificTerms",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getStandaloneTerms",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
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
                    {
                        internalType: "address[]",
                        name: "perspectives_terms",
                        type: "address[]",
                    },
                    {
                        internalType: "address[]",
                        name: "co_terms",
                        type: "address[]",
                    },
                    {
                        internalType: "address[]",
                        name: "micro_terms",
                        type: "address[]",
                    },
                    {
                        internalType: "address[]",
                        name: "macro_terms",
                        type: "address[]",
                    },
                    {
                        internalType: "address[]",
                        name: "philosophy_terms",
                        type: "address[]",
                    },
                    {
                        internalType: "address[]",
                        name: "scientific_terms",
                        type: "address[]",
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
                internalType: "address",
                name: "",
                type: "address",
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
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "standaloneTerms",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
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
                internalType: "address",
                name: "",
                type: "address",
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
