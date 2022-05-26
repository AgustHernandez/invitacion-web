import './styleComponenteAsistencia.css'

import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
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
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    })

    return (
        <>
            {
                !loading  && 
                <FormGroup>
                    {family.members.map(m => (
                    <div className='invitado'>
                        <FormControlLabel control={<Checkbox defaultChecked />} key={m.name} label={m.name} className='textoAsistencia' />
                        <TextField id="outlined-basic" label="Alimentación" variant="outlined" />
                    </div>))}
                </FormGroup>
            }
        </>
    )
}

export default ComponenteAsistencia