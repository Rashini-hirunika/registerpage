
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-indigo-200/50">

        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-9 text-center text-white">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">
            ✨
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-indigo-100">
            Join us by creating your personal account
          </p>
        </div>

        <form className="space-y-5 p-6 sm:p-9">

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-slate-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-slate-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="dob" className="mb-2 block text-sm font-semibold text-slate-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label htmlFor="gender" className="mb-2 block text-sm font-semibold text-slate-700">
              Gender
            </label>
            <select
              id="gender"
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            >
              <option value="" disabled>Select your gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label htmlFor="nic" className="mb-2 block text-sm font-semibold text-slate-700">
              NIC Number
            </label>
            <input
              type="text"
              id="nic"
              placeholder="Enter your NIC number"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Register →
          </button>

          <p className="text-center text-xs leading-5 text-slate-400">
            Please check your details before registering.
          </p>
        </form>
      </div>
    </div>
  )
}

export default App
