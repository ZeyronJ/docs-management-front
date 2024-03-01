const Login = () => (
  <div className='flex items-center justify-center min-h-screen bg-gray-100'>
    <div className='bg-white p-8 rounded shadow-md w-96 border '>
      <img
        className='mx-auto mb-6'
        src='/src/assets/logo-horizontal.svg'
        alt='Logo'
      />
      <form
        className=''
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log(
            'enviar login',
            ev.target.username.value,
            ev.target.password.value
          );
        }}
      >
        <div className='mb-4'>
          <input
            className='w-full p-2 border border-gray-300 rounded focus:outline-blue-300'
            type='text'
            placeholder='Usuario'
            name='username'
            autoComplete='off'
          />
        </div>
        <div className='mb-4'>
          <input
            className='w-full p-2 border border-gray-300 rounded focus:outline-blue-300'
            type='password'
            placeholder='Contraseña'
            name='password'
            autoComplete='off'
          />
        </div>
        <button
          className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
          type='submit'
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  </div>
);

export default Login;
