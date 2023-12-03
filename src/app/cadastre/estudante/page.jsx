import BackgroundSquare from "@/components/BackgroundSquare";
import FormCadastreStudent from "@/components/FormCadastreStudent";

export const metadata = {
    title: 'PGE | Cadastro Estudante',
    description: 'Cadastro Estudante',
}

export default function Student() {
    const component = <FormCadastreStudent/>

    return (
        <>
          <BackgroundSquare component={component} />  
        </>
    )
}