import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div className="App">

      <form onSubmit={formik.handleSubmit}>
        <input type='text' name='email' value={formik.values.email} onChange={formik.handleChange}/>
        <input type='text' name='password' value={formik.values.password} onChange={formik.handleChange}/>
        <input type='submit' />
      </form>

    </div>
  );
}

export default App;
