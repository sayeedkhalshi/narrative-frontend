type SingleNodeProps = {
    name: string;
};

const SingleNode: React.FC<SingleNodeProps> = ({ name }) => {
    return (
        <button className={`shadow-btn mx-auto filter-shadow`}>
            Control Structure
        </button>
    );
};

export default SingleNode;
