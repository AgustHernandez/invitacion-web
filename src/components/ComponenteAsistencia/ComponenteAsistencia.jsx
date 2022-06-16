import './styleComponenteAsistencia.css'

import { Checkbox, FormControlLabel, FormGroup, InputLabel } from '@mui/material'
import { doc, getDoc, getFirestore, runTransaction } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import LoadingSpinner from './../LoadingSpinner/loadingSpinner';
import React from 'react'
import {firebase} from '../../firebase/config.js'
import { useParams } from 'react-router-dom';

function ComponenteAsistencia() {
    const [loading, setLoading] = useState(true)
    const [family, setFamily] = useState({ 'name': 'testName' })
    const [confirm, setConfirm] = useState(false)
    const {familyId} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db,"families", familyId);
        if(loading){
            getDoc(docRef)
            .then(resp => setFamily(resp.data()))
            .catch(err => console.log("ComponenteAsistencia - Error: "+err))
            .finally(() => setLoading(false));
        }
    })

    const guardarAlimentacion = (eleccion,invitado) => {
        family.members.forEach(function(member){
            if(member.name === invitado)
            {
                member.food = eleccion;
            }
            })
        setFamily(family)
        console.log(family)
    }

    const modificarConfirmacionInvitado = (chequeado,invitado) => {
        family.members.forEach(function(member){
            if(member.name === invitado)
            {
                member.confirmed = chequeado;
            }
            })
        setFamily(family)
        console.log(family)
    }
    
    const confirmaAsistencia = async () => {
        setLoading(true)
        const db = getFirestore()
        const docRef = doc(db,"families", familyId);
        family.viewedAt = Date.now()
        await runTransaction(db, async (transaction) => {
            await transaction.get(docRef);
            transaction.update(docRef, family);
            return family;
        })
        setLoading(false)
        setConfirm(true)
    }

    return (
        <>
            { 
                loading  ?
                <div>
                    <LoadingSpinner/>
                </div> 
                :
                !confirm ?
                <FormGroup>
                    {family.members.map(m => (
                    <div className='invitado'>
                        <FormControlLabel control={<Checkbox defaultChecked />} key={m.name} label={m.name} onChange={(e) => {modificarConfirmacionInvitado(e.target.checked, m.name)}} className='textoAsistencia' />
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Alimentacion
                        </InputLabel>
                        <select onChange={(e)=>{guardarAlimentacion(e.target.value, m.name)}}>
                            <option value="Sin Preferencia"> Sin Preferencias </option>
                            <option value="Vegano"> Vegano </option>
                            <option value="Celiaco"> Celiaco </option>
                        </select>
                    </div>))}
                    {
                        loading ?
                        <div>
                            <LoadingSpinner/>
                        </div>
                        :
                        <div className='sectionConfirmaAsistencia'>
                            <button className='botonConfirmaAsistencia' onClick={confirmaAsistencia}> Confirmar </button>
                        </div>
                    }
                </FormGroup>
                :
                <div>
                    <h4 className='textoConfirmacion'>Ya confirmaste tu asistencia !</h4>
                    <h5 className='textoConfirmacion'>Muchas gracias !</h5>
                </div>
            }
        </>
    )
}

export default ComponenteAsistencia