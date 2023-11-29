import React from 'react'
import DownloadPdf from './ui/DownloadPdf'

const FilesDownload = () => {
  return (
    <div className='flex flex-col mt-5 mx-auto items-center font-monteserrat'>
        <h2 className="mx-auto text-center text-black text-[22px] font-semibold">Arquivos</h2>
        <p className='w-[567px] h-[50px] text-center text-black text-lg font-medium mt-4'>Todos documentos necessários para o seu processo de estágio disponível para download.</p>
        <div className='flex w-[100%] space-x-3 mt-5'>
            <DownloadPdf title="Requerimento para defesa de estágio" filePath="Requerimento de Defesa de Estágio.pdf" imagePath="requerimentoDefesa.png"/>
            <DownloadPdf title="Folha de Avaliação de Estágio" filePath="folha de avaliação.pdf" imagePath="folhaAvaliacao.png"/>
            <DownloadPdf title="Folha de Frequência de Estágio" filePath="Folha de frequência.pdf" imagePath="folhaFrequencia.png"/>
        </div>
        <div className='flex w-[100%] space-x-3 mt-5'>
            <DownloadPdf title="Documento orientador de estágio curricular" filePath="Documento Estagios.pdf" imagePath="docOrientadorEstagio.png"/>
            <DownloadPdf title="Modelo de declaração de estágio" filePath="Modelo de declaracao.pdf" imagePath="declaracaoEstagio.png"/>
            <DownloadPdf title="Termo de aceite de aluno(a) para estágio" filePath="Termo de aceite de alunos para estágio.doc" imagePath="termoAceite.png"/>
        </div>
    </div>
  )
}

export default FilesDownload