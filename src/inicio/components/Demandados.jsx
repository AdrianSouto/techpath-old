import react from "../../assets/react.svg";
import python from "../../assets/python.png";
import javascript from "../../assets/javascript.png";

export default function Demandados() {

    return (
        <div className={'w-full flex flex-col justify-end items-center'}>
            <div>
                <h2 className={'text-2xl font-bold'}>Más <span className={'inline-block'}>
                    <div className={'flex flex-col'}>
                        demandados
                        <div className={'rounded-full h-1 w-full bg-javascript'}/>
                    </div>
                </span>
                    {' '}actualmente
                </h2>
            </div>
            <div className={'flex flex-col mt-12 w-2/3 space-y-5'}>
                <article className={'bg-white w-full p-3 flex  border-react rounded-lg items-center justify-between'}>
                    <div className={'flex items-center'}>
                        <img src={react} className={'size-10'}/>
                        <h1 className={'ms-5 text-xl font-semibold'}>React</h1>
                    </div>
                    <div
                        className={'ms-10 rounded-full size-10 flex justify-center items-center border-2 border-react'}>
                        4K
                    </div>
                </article>
                <article className={'bg-white w-full p-3 flex  border-react rounded-lg items-center justify-between'}>
                    <div className={'flex items-center'}>
                        <img src={javascript} className={'size-10'}/>
                        <h1 className={'ms-5 text-xl font-semibold'}>Javascript</h1>
                    </div>
                    <div
                        className={'ms-10 rounded-full size-10 flex justify-center items-center border-2 border-javascript'}>
                        3K
                    </div>
                </article>
                <article className={'bg-white w-full p-3 flex  border-react rounded-lg items-center justify-between'}>
                    <div className={'flex items-center'}>
                        <img src={python} className={'size-10'}/>
                        <h1 className={'ms-5 text-xl font-semibold'}>Python</h1>
                    </div>
                    <div
                        className={'ms-10 rounded-full size-10 flex justify-center items-center border-2 border-python'}>
                        4K
                    </div>
                </article>
            </div>
        </div>
    )
}