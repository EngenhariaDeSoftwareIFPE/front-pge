import HoursChart from "@/components/HoursChart"
import NavBarHorizontal from "@/components/navBarSiec/NavBarHorizontal"
import NavBarVertical from "@/components/navBarSiec/NavBarVertical"
import SliderWelcome from "@/components/SliderWelcome"
import FrameLinksSiec from "@/components/ui/FrameLinksSiec"

export const metadata = {
    title: 'PGE | Home',
    description: 'Home PGE',
}

export default function Home() {
    return (
        <>
            <div className="w-screen h-screen font-monteserrat">
                <NavBarHorizontal/>
                <div className="flex flex-row-reverse justify-end">
                    <div className="flex-col">
                        <SliderWelcome/>
                        <FrameLinksSiec/>   
                    </div>
                    <NavBarVertical/>
                </div>
            </div>
        </>
    )
}

