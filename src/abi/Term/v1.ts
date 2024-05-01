export const term_v1 = [
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
            {
                internalType: "address",
                name: "_learneaContract",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "LearneaContract",
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
                internalType: "string",
                name: "_curve",
                type: "string",
            },
        ],
        name: "addLearningCurves",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "createdAt",
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
        name: "derivedFrom",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "details",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getDetails",
        outputs: [
            {
                components: [
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
                internalType: "struct Term.Details",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getDetailsHistory",
        outputs: [
            {
                components: [
                    {
                        internalType: "string[]",
                        name: "title",
                        type: "string[]",
                    },
                    {
                        internalType: "string[]",
                        name: "details",
                        type: "string[]",
                    },
                ],
                internalType: "struct Term.DetailsHistory",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getLearningCurves",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lastUpdatedAt",
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
        name: "learningCurves",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
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
        name: "projects",
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
        name: "termType",
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
        name: "title",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_details",
                type: "string",
            },
        ],
        name: "updateDetails",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_title",
                type: "string",
            },
        ],
        name: "updateTitle",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
