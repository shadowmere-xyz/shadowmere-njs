import Image from 'next/image'

export default function ModalQR (props: any) {

    return (
        // x-on:click.outside="$store.comps.qr_code = false, $store.comps.notTouchBgQR = false" x-show="$store.comps.qr_code"
        <div className={"modal-qr w-full fixed z-[200] left-0 top-0 h-screen bg-black bg-opacity-[0.7] flex flex-col items-center justify-center gap-4 " + (props.qrActive ? '' : 'hidden')}>
            <div className="w-auto h-auto flex flex-col gap-4 justify-center ">
                <div className=" w-[328px] h-auto sm:w-[360px] bg-white rounded-lg flex flex-col gap-4">
                    {/* <!-- x-on:click.outside="$store.comps.qr_code = false, $store.comps.notTouchBgQR = false" --> */}
                    <Image src={''} className=" rounded-lg" alt="QR Code for server address" x-ref="image"/>
                </div>
                <div className=" w-[328px] h-auto sm:w-[360px] flex flex-col gap-4 items-center" >
                    <h1 x-text="serverAddress" className=" w-[328px] sm:w-auto text-center text-white break-words"></h1>
                    <h1 className="text-green-500">Click or tap anywhere on the screen to close it</h1>
                </div>
            </div>
            
        </div>
    )
}