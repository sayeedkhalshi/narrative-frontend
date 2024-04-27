interface SingleNodeProps {
    name: string;
    id?: string;
    style?: React.CSSProperties;
    isCenter: boolean;
}

const SingleNode: React.FC<SingleNodeProps> = ({
    name,
    id,
    style,
    isCenter,
}) => {
    return (
        <button
            id={id}
            style={style}
            className={`${
                isCenter ? "shadow-btn mx-auto filter-shadow" : "sub-terms"
            }`}
        >
            {name}
        </button>
    );
};

export default SingleNode;
