import Image from "next/image"

export default function Why () {


    return (
        <div className="contenido-why col-span-12 xl:col-span-9 w-full h-fit bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg shadow-lg flex flex-col gap-6 p-8 mb-4 2xl:mb-40">

            <h1 className="text-2xl font-bold">Why Shadowmere?</h1>
            {/* <!-- Aqui va el contenido del About --> */}
            <p>Shadowmere is an enduring character in the Elder Scrolls series since her first appearance in The Elder Scrolls IV: Oblivion's Dark Brotherhood questline.</p>
            <img src="https://images.uesp.net/thumb/b/be/SR-creature-Shadowmere.jpg/600px-SR-creature-Shadowmere.jpg" alt="" className="w-40 h-auto rounded-lg"/>

            <p className="text-justify">
            Awarded to the player character after completing the purification of the Cheydinhal Sanctuary by Black Hand mentor Lucien Lachance, Shadowmere, in The Elder Scrolls IV: Oblivion, is an indestructible heroic character who represents the fastest and most powerful horse in the game.
            Hallmarked by purple-highlighted black skin and burning red eyes, Shadowmere is an iconic character that has captured the imaginations of players, and developers, even 300 game-years later in The Elder Scrolls V: Skyrim. In Skyrim, Shadowmere is again awarded to the player character for success, this time by Astrid. When the player is granted the ability to summon the late Lucien Lachance as a Spectral Assassin and does so in Shadowmere's presence, Lachance's spectre will greet her as an 'old friend'.
            In ES V, however, Shadowmere is no longer absolutely indestructible. 
            <br/>
            <br/>
            While surely vastly harder to kill than typical bought horses in the game, it can be killed in steep falls and by concentrated frost or fire attacks by Ancient-ranked dragons, especially when it cannot manoeuvre out of close quarters when being attacked by said Ancient dragon. Shadowmere can also be killed by Mehrunes' Razor. In Oblivion, Shadowmere could be knocked unconscious by intensive attacks. 
            Then, players could store or retrieve objects from it just like a container. In Skyrim, once Shadowmere is finally killed, arrows that have been fired into the horse over the time it has been with the Dragonborn can be recovered.
            Shadowmere apparently reincarnates between eras, potentially changing subspecies of horse, and genders.</p>
            

            {/* <!-- Aqui va el contenido del About --> */}
            
        </div>
    )
}