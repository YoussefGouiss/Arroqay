import React from 'react'

export default function Inscrire() {
  return (
    <>
      <div className='bg-emerald-200 h-max w-1/2 text-cyan-700 text-center border rounded-br-full'>
         <h1 className='text-3xl'>Créez votre compte</h1>
         <p className='text-white bg-emerald-600 w-max align-middle ml-48 p-2 px-10  mt-4 border-none rounded-full '>vous avez deja un compte ? connectez-vous</p>
         <div className='text-xl'>
         <label className=' mr-10' >Civilité</label>
         <input type='radio' name='civilité'/>
         <label>M</label>         
         <input type='radio' name='civilité'/>
         <label>Mme</label>
         </div>
      </div>
    </>
  )
}
