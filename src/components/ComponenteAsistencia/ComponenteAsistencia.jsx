import './styleComponenteAsistencia.css'

import { Checkbox, FormControlLabel, FormGroup,Select,MenuItem, InputLabel} from '@mui/material'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import React from 'react'
import {firebase} from '../../firebase/config.js'
import { useParams } from 'react-router-dom';

function ComponenteAsistencia() {
    const [loading, setLoading] = useState(true)
    const [family, setFamily] = useState({ 'name': 'testName' })
    const {familyId} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db,"families", familyId);
        getDoc(docRef)
        .then(resp => setFamily(resp.data()))
        .catch(err => console.log("ComponenteAsistencia - Error: "+err))
        .finally(() => setLoading(false));

    })

    const confirmaAsistencia = () => {

    }

    return (
        <>
            {
                !loading  && 
                <FormGroup>
                    {family.members.map(m => (
                    <div className='invitado'>
                        <FormControlLabel control={<Checkbox defaultChecked />} key={m.name} label={m.name} className='textoAsistencia' />
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Alimentacion
                        </InputLabel>
                        <Select
                                labelId="demo-simple-select-label" id="demo-simple-select" label="Age" onChange={confirmaAsistencia}>
                            <MenuItem value={"default"}>Sin Preferencia</MenuItem>
                            <MenuItem value={"1"}>Vegano</MenuItem>
                            <MenuItem value={"2"}>Celíaco</MenuItem>
                        </Select>
                    </div>))}
                    <div className='sectionConfirmaAsistencia'>
                        <button className='botonConfirmaAsistencia' onClick={confirmaAsistencia}> Confirmar </button>
                    </div>
                </FormGroup>
            }
        </>
    )
}

export default ComponenteAsistencia