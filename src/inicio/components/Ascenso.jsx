import arrowUp from '../../assets/arrow-ascending.svg';
import javascript from '../../assets/javascript.png';
import vue from '../../assets/vue.png'
export default function Ascenso(){

    return(
        <div className={'w-full flex flex-col p-4'}>
            <h1 className={'text-balance text-5xl font-bold pe-10'}>
                <span className={'text-vue'}>Framework</span> y <span className={'text-javascript'}>lenguaje</span> de
                programación en ascenso <span><img src={arrowUp} className={'inline-block -translate-y-2'}/> </span>
            </h1>

            <div className={'mt-20 flex space-x-10 items-center'}>
                <article className={"group flex justify-center items-end transition-all p-1"}>
                    <img src={vue} className={'size-20'} alt={'vue'}/>
                    <span
                        className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-7 duration-700 font-medium text-tuatara-900">
                        Vue JS
                    </span>
                </article>
                <article className={'group flex justify-center items-end transition-all p-1'}>
                    <img src={javascript} className={'size-20'} alt={'javascript'}/>
                    <span
                        className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-7 duration-700 font-medium text-tuatara-900">
                        Javascript
                    </span>
                </article>
                <button
                    className={'px-3 py-1 rounded-full border-2 border-tuatara-900 hover:bg-tuatara-900 shadow-md hover:text-gray-50 transition-all'}>
                    Ver más
                </button>
            </div>
        </div>
    )
}