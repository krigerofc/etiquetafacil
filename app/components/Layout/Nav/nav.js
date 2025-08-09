import { FaReceipt, FaUserCircle } from 'react-icons/fa'
import Link from 'next/link';

export default function NavHeader(){
    return(
        <>
            <div className=" w-full h-25 shadow-sm bg-white">
                <div className=" w-5/6 m-auto h-full flex flex-row justify-between items-center">
                    <h1 className="flex  flex-row uppercase text-red-500 font-bold text-4xl tracking-wide 0">
                        <FaReceipt style={ {fontSize: '5x1'} } color='#555'/>
                        EtiquetaFácil
                    </h1>
                    <ul className="flex flex-row gap-x-4 text-2xl uppercase tracking-wide font-medium">
                        <li><Link href='/'>Sobre</Link></li>
                        <li><Link href='/'>Preços</Link></li>
                        <li><Link href='/'>Contato</Link></li>
                        <li><Link className='shadow-sm w-full h-full border-1 rounded-2xl m-2 p-3' href='/'>
                        Minha conta</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}