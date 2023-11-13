import NavBarHorizontal from "@/components/navBar/navHorizontal/NavBarHorizontal"

export const metadata = {
    title: 'PGE | Home',
    description: 'Home PGE',
}

export default function Home() {
    return (
        <>
            <div className="w-screen h-screen">
                <NavBarHorizontal/>
            </div>
        </>
    )
}

