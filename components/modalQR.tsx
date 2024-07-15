import Image from 'next/image'
import { proxyId, qrScreen } from '../libs/store'
import { useRecoilState } from 'recoil'
import { apiBaseUrl, rootUrl } from '../vars/variables'


export default function ModalQR (props: any) {
    const [proxID, setProxID] = useRecoilState(proxyId)
    const [qrActive, setQrActive] = useRecoilState(qrScreen)
    

    const handleClick = () => {
        setQrActive(false)
    }

    return (
        <div onClick={handleClick} className={"modal-qr w-full fixed z-[200] left-0 top-0 h-screen bg-black bg-opacity-[0.7] flex flex-col items-center justify-center gap-4 "}>
        {/* <div onClick={handleClick} className={"modal-qr w-full fixed z-[200] left-0 top-0 h-screen bg-black bg-opacity-[0.7] flex flex-col items-center justify-center gap-4 " + (props.qrActive ? '' : 'hidden')}> */}
            <div className="w-auto h-auto flex flex-col gap-4 justify-center items-center ">
                <div className=" w-[328px] h-auto bg-white rounded-lg flex flex-col gap-4">
                    <Image width={328} height={328} src={`${rootUrl}/${proxID?.toString()}/qr`} className=" rounded-lg" alt="QR Code for server address"/>
                </div>
                <div className=" w-[328px] h-auto sm:w-[360px] flex flex-col gap-4 items-center" >
                    <h1 x-text="serverAddress" className=" w-[328px] sm:w-auto text-center text-white break-words"></h1>
                    <h1 className="text-green-500">Click or tap anywhere on the screen to close it</h1>
                </div>
            </div>
            
        </div>
    )
}