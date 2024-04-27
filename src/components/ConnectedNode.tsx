import SingleNode from "./SingleNode";
import { testTermsList } from "@/utils/testTermsList";

const ConnectedNode: React.FC = () => {
    return (
        <>
            <SingleNode name="Control Structure" />;
            {testTermsList.map((term) => {
                <SingleNode key={term.id} name={term.name} />;
            })}
        </>
    );
};

export default ConnectedNode;
