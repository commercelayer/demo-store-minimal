import { UserIcon } from "./UserIcon"

export const CustomerLink: React.FC = () => {
  const isLoggedIn = false

  return (
    <>
      {isLoggedIn ? (
        <>
          <a
            href="#"
            aria-label="My account"
            className="inline-flex items-center gap-2 text-sm text-slate-700 transition hover:text-slate-950"
          >
            <UserIcon />
            <span className="sr-only">My account</span>
          </a>
          <a
            href="#"
            className="text-sm text-slate-700 transition hover:text-slate-950"
          >
            Log out
          </a>
        </>
      ) : (
        <a
          href="#"
          className="text-sm text-indigo-600 transition hover:text-indigo-700"
        >
          Log in
        </a>
      )}
    </>
  )
}
