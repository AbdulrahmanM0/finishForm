import React from 'react'
import { Formik , Form } from 'formik'

export default function FormComp() {

    const initialValues = {
        name: '',
        password: ''
    }
    const handleSubmit = (values) => {
        console.log(values)
    }

  return (
    <div>
        <Formik 
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            

        </Formik>
    </div>
  )
}
