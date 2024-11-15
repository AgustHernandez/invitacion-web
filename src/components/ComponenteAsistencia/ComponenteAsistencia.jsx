import './styleComponenteAsistencia.css'

import { doc, getDoc, getFirestore, runTransaction } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { Checkbox } from '@mui/material';
import LoadingSpinner from './../LoadingSpinner/loadingSpinner';
import React from 'react'
import {firebase} from '../../firebase/config.js'
import { useParams } from 'react-router-dom';

function ComponenteAsistencia() {
    const [loading, setLoading] = useState(true)
    const [updating, setUpdating] = useState(false)
    const [family, setFamily] = useState({ 'name': 'testName' })
    const [confirmado, setConfirmado] = useState(false)
    const {familyId} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db,"families", familyId);
        if(loading && !updating){
            getDoc(docRef)
            .then(resp => setFamily(resp.data()))
            .then(() => setConfirmado(family.confirm))
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
        setUpdating(true)
        const db = getFirestore()
        const docRef = doc(db,"families", familyId);
        family.members.forEach(function(member){
            if(member.food === '')
            {
                member.food = 'Sin Preferencia';
            }
            })
        family.viewedAt = Date.now()
        family.confirm = true
        await runTransaction(db, async (transaction) => {
            await transaction.get(docRef);
            transaction.update(docRef, family);
            return family;
        })
        setUpdating(false)
        setConfirmado(true)
    }

    return (
        <>
            {
                loading || updating ?
                <div>
                    <LoadingSpinner/>
                </div> 
                :
                !confirmado ?
                <div>
                    <h5 className='textoAsistencia'> Te pido que me confirmes asistencia por las personas que aparecen en el formulario y su tipo de alimentación. </h5>
                    <form>
                        {family.members.map(m => (
                        <div className='invitado'>
                            <div className='containerInvitado'>
                                <Checkbox defaultChecked onChange={(e) => {modificarConfirmacionInvitado(e.target.checked, m.name)}} />
                                <label key={m.name} className='textInvitado'> {m.name} </label>
                            </div>
                            <div className='containerSelect'>
                                <label for="aliment" className='labelAliment'>Alimentación</label>
                                <select name='aliment' id='aliment' onChange={(e)=>{guardarAlimentacion(e.target.value, m.name)}} className="opcionesAliment" defaultValue={"Sin Preferencia"} >
                                    <option value="Sin Preferencia"> Sin Preferencias </option>
                                    <option value="Vegetariano"> Vegetariano </option>
                                    <option value="Vegano"> Vegano </option>
                                    <option value="Celiaco"> Celíaco </option>
                                    <option value="Hipertenso"> Hipertenso </option>
                                    <option value="Diabetico"> Diabético </option>
                                    <option value="Infantil"> Infantil </option>
                                </select>
                            </div>
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
                    </form>
                </div>
                :
                <div>
                    <h4 className='textoConfirmacion'>Ya confirmaste tu asistencia !</h4>
                    <p className='textoConfirmacion'> En caso de querer modificar la siguiente información, te pido que me escribas al whatsapp.</p>
                    {family.members.map(m => (
                        <div className='listConfirmacion'>
                            <li> {m.name} { m.confirmed ? "asistirá" : "no asistirá" } {(m.food !== "Sin preferencia" && m.confirmed === "asistirá" ) ? "(opción "+ m.food + ")" : "" }  </li>
                        </div>
                    ))}
                    <h5 className='textoConfirmacion'>Muchas gracias !</h5>
                </div>
            }
        </>
    )
}

export default ComponenteAsistencia