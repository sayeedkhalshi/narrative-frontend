"use client";

import React, { useEffect, useRef, useState } from "react";
import SingleNode from "./SingleNode";
import { testTermsList } from "@/utils/testTermsList";
import { useDispatch, useSelector } from "react-redux";
import {
    changeCentralAddressFromDepth,
    selectCentralAddressAroundTermsTypeByIndex,
    selectCentralAddressLevelsByIndex,
    setCentralAddressAroundTermsTypeByIndex,
} from "@/redux/features/centralTerms.slice";
import { allTermTypeValues } from "@/types/Term.type";

type ConnectedNodeProps = {
    address: `0x${string}`;
    centralNode: TermDetails;
    nodesAround: `0x${string}`[];
    addressIndex: number;
};

const ConnectedNode: React.FC<ConnectedNodeProps> = ({
    centralNode,
    nodesAround,
    address,
    addressIndex,
}) => {
    const dispatch = useDispatch();
    const levels = useSelector((state: any) =>
        selectCentralAddressLevelsByIndex(state, addressIndex)
    );
    const filterValueForAroundTerms = useSelector((state: any) =>
        selectCentralAddressAroundTermsTypeByIndex(state, addressIndex)
    );
    const [animationEnded, setAnimatedEnded] = useState(false);
    const numberOfElements = testTermsList.length;
    const distanceFromCenter = 250;
    const angle = (2 * Math.PI) / numberOfElements;

    // Assuming the container's dimensions are 1000px by 1000px
    const containerWidth = 1000;
    const containerHeight = 1000;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    // Calculate positions for each element relative to the container's center
    const positions = nodesAround.map((term, i) => {
        // Calculate the angle for this node
        const nodeAngle = angle * i;
        // Determine if this node is on the left side
        const isLeftSide = nodeAngle > 0 && nodeAngle >= Math.PI;
        // Adjust the distance for left-side nodes
        const adjustedDistance = isLeftSide
            ? distanceFromCenter * 1.2
            : distanceFromCenter;
        const x = adjustedDistance * Math.cos(nodeAngle) + centerX;
        const y = adjustedDistance * Math.sin(nodeAngle) + centerY;
        return { x, y, term };
    });

    // Calculate the center point of the network
    const centerPoint = positions.reduce(
        (acc, position) => {
            return {
                x: acc.x + position.x,
                y: acc.y + position.y,
            };
        },
        { x: 0, y: 0 }
    );

    // Adjust the center point to be the actual center of the container
    centerPoint.x /= positions.length;
    centerPoint.y /= positions.length;

    function createZigzagPath(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        zigzagFactor = 10
    ) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const numZigzags = Math.floor(
            Math.sqrt(dx * dx + dy * dy) / zigzagFactor
        );
        const angle = Math.atan2(dy, dx);
        const xStep = dx / numZigzags;
        const yStep = dy / numZigzags;

        let path = `M${x1},${y1}`;
        for (let i = 0; i < numZigzags; i++) {
            const x = x1 + i * xStep;
            const y = y1 + i * yStep;
            const zigzagX = x + zigzagFactor * Math.cos(angle + Math.PI / 2);
            const zigzagY = y + zigzagFactor * Math.sin(angle + Math.PI / 2);
            path += ` L${zigzagX},${zigzagY}`;
        }
        path += ` L${x2},${y2}`;

        return path;
    }

    const animationRef = useRef(null);

    function handleAnimationEnd() {
        setAnimatedEnded(true);
    }

    useEffect(() => {
        const animationElement: any = animationRef.current;

        if (animationElement) {
            animationElement?.addEventListener("endEvent", handleAnimationEnd);
        }

        return () => {
            if (animationElement) {
                animationElement.removeEventListener(
                    "endEvent",
                    handleAnimationEnd
                );
            }
        };
    }, []);

    if (typeof address == "undefined" || !address) {
        return <div>No Address...</div>;
    }

    if (typeof centralNode == "undefined" || !centralNode) {
        return <div>No central node...</div>;
    }

    if (typeof nodesAround == "undefined" || !nodesAround) {
        return <div>No nodes around...</div>;
    }

    return (
        <div
            style={{
                //background: "blanchedalmond",
                padding: "25px 0",
                borderBottom: "3px dashed #e2e7e7",
                // filter: "grayscale(1)",
                //boxShadow: "0px 1px 13px -5px #ccc",
            }}
        >
            <p className="text-gray-700 relative z-40">
                Depth: <span>{levels?.length}</span>
                {"--->"}
                {levels?.map((level, i) => {
                    return (
                        <span key={i}>
                            <span
                                className={`levels cursor-pointer px-2 py-1 rounded-sm mx-1 ${
                                    address === level.address
                                        ? "bg-gray-300 text-gray-500"
                                        : "text-gray-700 bg-transparent"
                                }`}
                                key={i}
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(
                                        changeCentralAddressFromDepth({
                                            addressIndex,
                                            address: level.address,
                                        })
                                    );
                                }}
                            >
                                <span
                                    className="level-details absolute"
                                    style={{
                                        backgroundColor: "#fefefe",
                                        padding: "2px 5px",
                                        borderRadius: "5px",
                                        fontSize: "0.81rem",
                                        color: "#817d78",
                                    }}
                                >
                                    {i != 0 ? level.title : centralNode.title} -{" "}
                                    {level.address}
                                </span>
                                <span>{i + 1}</span>
                            </span>
                            {"-"}
                        </span>
                    );
                })}
            </p>
            <div className="filter-dropdown text-gray-700 z-40 my-2 absolute">
                Filter By <br />
                Term Type:
                <span className=" bg-gray-300 text-gray-600 py-1 px-2">
                    {filterValueForAroundTerms} ^
                </span>
                <br />
                <p className="filter-list ml-12">
                    <span
                        onClick={() =>
                            dispatch(
                                setCentralAddressAroundTermsTypeByIndex({
                                    index: addressIndex,
                                    value: "ALL",
                                })
                            )
                        }
                        className="hover:bg-green-800 hover:text-gray-300 p-1 rounded-sm cursor-pointer"
                    >
                        ALL
                    </span>
                    <br />
                    {allTermTypeValues().map((termValue, i) => {
                        return (
                            <span key={i}>
                                <span
                                    onClick={() =>
                                        dispatch(
                                            setCentralAddressAroundTermsTypeByIndex(
                                                {
                                                    index: addressIndex,
                                                    value: termValue,
                                                }
                                            )
                                        )
                                    }
                                    key={i}
                                    className="hover:bg-green-800 hover:text-gray-300 p-1 rounded-sm cursor-pointer"
                                >
                                    {termValue}
                                </span>
                                <br />
                            </span>
                        );
                    })}
                </p>
            </div>
            <div
                className="node-container relative"
                style={{
                    width: `${containerWidth}px`,
                    height: `${containerHeight}px`,
                    marginTop: "-60px",
                    marginBottom: "-120px",
                }}
            >
                <SingleNode
                    name={centralNode.title}
                    isCenter={true}
                    style={{
                        position: "absolute",
                        left: `${centerPoint.x - 65}px`,
                        top: `${centerPoint.y - 65}px`,
                    }}
                    address={address}
                    addressIndex={addressIndex}
                />
                {positions.map((position, i) => (
                    <SingleNode
                        addressIndex={addressIndex}
                        centralAddress={address}
                        key={i}
                        name={""}
                        address={position.term}
                        isCenter={false}
                        style={{
                            position: "absolute",
                            left: `${
                                position.x < 500
                                    ? position.x - 113
                                    : position.x + 15
                            }px`,
                            top: `${
                                position.y === 200
                                    ? position.y - 70
                                    : position.x > 500
                                    ? position.y - 28
                                    : position.y
                            }px`,
                            visibility: "visible",
                            opacity: `${animationEnded ? 1 : 0}`,
                            transition: "opacity 1s eases-in",
                        }}
                    />
                ))}
                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ overflow: "visible" }}
                >
                    <defs>
                        <marker
                            id="customArrowhead"
                            markerWidth="10"
                            markerHeight="7"
                            refX="0"
                            refY="3.5"
                            orient="auto"
                        >
                            <path d="M0,0 L10,3.5 L0,7 z" fill="#000" />
                        </marker>
                        <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                style={{ stopColor: "blue", stopOpacity: 1 }}
                            />
                            <stop
                                offset="25%"
                                style={{ stopColor: "#e2e7e7", stopOpacity: 1 }}
                            />
                            <stop
                                offset="50%"
                                style={{ stopColor: "red", stopOpacity: 1 }}
                            />
                            <stop
                                offset="75%"
                                style={{ stopColor: "e2e7e7", stopOpacity: 1 }}
                            />
                            <stop
                                offset="100%"
                                style={{ stopColor: "blue", stopOpacity: 1 }}
                            >
                                {" "}
                                <animate
                                    ref={animationRef}
                                    attributeName="offset"
                                    from="100%"
                                    to="0%"
                                    dur="0.5s"
                                    fill="freeze"
                                />
                            </stop>
                        </linearGradient>
                    </defs>

                    {positions.map((position, i) => {
                        const path = createZigzagPath(
                            centerPoint.x,
                            centerPoint.y,
                            position.x,
                            position.y
                        );
                        return (
                            <path
                                key={`zigzag-${i}`}
                                d={path}
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                markerEnd="url(#customArrowhead)"
                                style={{
                                    animation: "drawPath 2s linear forwards",
                                }}
                            />
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

export default ConnectedNode;
