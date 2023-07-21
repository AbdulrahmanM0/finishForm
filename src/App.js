import * as yup from 'yup'; 

import { ErrorMessage, Field, Form, Formik } from "formik";

function App() {

  const validation = yup.object({
    username: yup.string().required('req'),
    country: yup.string().required('req'),
    email: yup.string().required('req').email('em'),
    // password: yup.string().required('req')
  })


  const handleSubmit = (values) => {
    console.log(values)
   
  }

  const initialValues = {
    username: '',
    country: '',
    email: '',
    // password: ''
  }

  const handleChange = (event) => {
    console.log(event)
  }

  
    
  return (
    <div className="App">
      <div> 
    
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validation} validateOnBlur={false} validateOnChange={false} >
      
          <Form> 
            <div>
              <ErrorMessage name='username' component='div'/>  
              <ErrorMessage name='country' component='div'/>  
              <ErrorMessage name='email' component='div'/>  
              <ErrorMessage name='password' component='div'/>  
            </div>    
            <div>

              <Field type='text' name='username' />
              
            </div>
            <div>
              <Field as='select' name='country' onChange={(e)=>handleChange(e.target.value)}>
                <option id='select' value=''>select country</option>
                <option id='egypt' value='Egypt'>Egypt</option>
                <option id='england' value='England'>England</option>
                <option id='france' value='France'>France</option>
              </Field>
            </div>
            <div>
              <Field type='text' name='email' />
            </div>

            <button type="submit">submit</button>
          </Form>
      
      </Formik>

    </div>
  );
}

export default App;
