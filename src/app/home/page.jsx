import HoursChart from "@/components/HoursChart"
import NavBarHorizontal from "@/components/navBar/NavBarHorizontal"
import NavBarVertical from "@/components/navBar/NavBarVertical"
import SliderWelcome from "@/components/SliderWelcome"
import FrameLinks from "@/components/ui/FrameLinks"

export const metadata = {
    title: 'PGE | Home',
    description: 'Home PGE',
}

export default function Home() {
    return (
        <>
            <div className="w-screen h-screen font-monteserrat">
                <NavBarHorizontal/>
                <div className="flex">
                    <NavBarVertical/>
                    <div className="flex-col">
                        <SliderWelcome/>
                        <div className="flex">
                            <HoursChart/>
                            <div>
                                <FrameLinks/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

