import React from "react";
import SingleNode from "./SingleNode";
import { testTermsList } from "@/utils/testTermsList";

const ConnectedNode: React.FC = () => {
    const numberOfElements = testTermsList.length;
    const distanceFromCenter = 250;
    const angle = (2 * Math.PI) / numberOfElements;

    // Assuming the container's dimensions are 1000px by 1000px
    const containerWidth = 1000;
    const containerHeight = 1000;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    // Calculate positions for each element relative to the container's center
    const positions = testTermsList.map((term, i) => {
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
            <div
                className="node-container relative"
                style={{
                    width: `${containerWidth}px`,
                    height: `${containerHeight}px`,
                    marginTop: "-200px",
                    marginBottom: "-200px",
                }}
            >
                <SingleNode
                    name="Control Structure"
                    isCenter={true}
                    style={{
                        position: "absolute",
                        left: `${centerPoint.x - 65}px`,
                        top: `${centerPoint.y - 65}px`,
                    }}
                />
                {positions.map((position, i) => (
                    <SingleNode
                        key={position.term.id}
                        name={position.term.name}
                        isCenter={false}
                        style={{
                            position: "absolute",
                            left: `${position.x}px`,
                            top: `${position.y}px`,
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
                            <path d="M0,0 L10,3.5 L0,7 z" fill="#e2e7e7" />
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
                            />
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
