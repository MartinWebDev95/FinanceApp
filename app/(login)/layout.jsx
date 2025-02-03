import Header from '../components/login/Header';

export default function LoginLayout({ children }) {
  return (
    <>
      <Header />
      <main className='w-full h-screen grid place-items-center'>
        {children}
      </main>
    </>
  );
}