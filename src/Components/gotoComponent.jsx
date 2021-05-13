import { ReactComponent as Goto } from "../Images/goto.svg";

const gotoComponent = () => {
    return (
        <>
            <div className="hover:bg-black rounded-full p-2">
               <Goto/>
            </div>
        </>
    );
};

export default gotoComponent;