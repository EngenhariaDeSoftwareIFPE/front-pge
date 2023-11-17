import FormUserData from "@/components/FormUserData"
import NavBarHorizontal from "@/components/navBar/NavBarHorizontal"
import NavBarVertical from "@/components/navBar/NavBarVertical"

export const metadata = {
    title: 'PGE | Dados do Usuário',
    description: 'Dados do Usuário PGE',
}

const Dados = () => {
  return (
    <>
        <div className="w-screen h-screen font-monteserrat">
            <NavBarHorizontal/>
            <div className="flex">
                <NavBarVertical/>
                <div className="mt-14 w-full">
                    <FormUserData/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dados