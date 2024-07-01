import logo from '../../assets/logo-mini.svg'

export default function TopBar(){
    return(
        <nav className={'container w-full flex mx-auto px-4 py-8 items-center font-medium justify-between'}>
            <div
                className={'flex select-none space-x-10'}>
                <article className={'group'}>
                    <h2>Inicio</h2>
                    <div className={'rounded-full h-0.5 w-0 bg-javascript group-hover:w-full  transition-all'}/>
                </article>
                <article className={'group'}>
                    <h2>Ranking</h2>
                    <div className={'rounded-full h-0.5 w-0 bg-javascript group-hover:w-full  transition-all'}/>
                </article>
                <article className={'group'}>
                    <h2>Anuncios</h2>
                    <div className={'rounded-full h-0.5 w-0 bg-javascript group-hover:w-full  transition-all'}/>
                </article>
            </div>
            <div className={'flex space-x-5 items-center'}>
                <img src={logo} alt={"logo"} className={'scale-100'}/>
                <h1 className={'text-3xl'}>techpath</h1>
            </div>
        </nav>
    )
}