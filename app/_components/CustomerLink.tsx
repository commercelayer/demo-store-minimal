export const CustomerLink: React.FC = () => {
  const isLoggedIn = false

  return (
    <>
      {isLoggedIn ? (
        <>
          <a
            className="inline-flex items-center gap-2 text-sm text-slate-700 transition hover:text-slate-950"
            href="#"
          >
            My account
          </a>
          <a
            className="text-sm text-slate-700 transition hover:text-slate-950"
            href="#"
          >
            Log out
          </a>
        </>
      ) : (
        <a
          className="text-sm text-indigo-600 transition hover:text-indigo-700"
          href="#"
        >
          Log in
        </a>
      )}
    </>
  )
}
