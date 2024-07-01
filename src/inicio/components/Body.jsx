import Ascenso from "./Ascenso.jsx";
import Demandados from "./Demandados.jsx";

export default function Body(){

    return(
        <div className={'container mx-auto flex mt-10'}>
            <Ascenso />
            <Demandados />
        </div>
    )
}