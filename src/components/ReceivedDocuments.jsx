import React from 'react'
import DocumentDownload from './ui/DocumentDownload'

const ReceivedDocuments = () => {
  return (
    <div className=''>
        <div className='flex mt-10 mx-auto space-x-5'>
            <DocumentDownload title="Folha de Avaliação de Estágio" filePath="modulo4.pdf"/>
            <DocumentDownload title="Termo de aceite de aluno(a) para estágio" filePath="modulo4.pdf"/>
        </div>
        <div className='flex mt-10 mx-auto space-x-5'>
            <DocumentDownload title="Folha de Frequência de Estágio" filePath="modulo4.pdf"/>
            <DocumentDownload title="Requerimento de Defesa de Estágio" filePath="modulo4.pdf"/>
        </div>
    </div>
  )
}

export default ReceivedDocuments