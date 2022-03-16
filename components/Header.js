export const Header = () => {
  return (
    <header className="flex justify-between gap-20 h-16 items-center w-[90%] mx-auto mb-12">
        <div>
            <img src="./images/logo.svg" alt="Shortly" />
        </div>

        <div className="flex-grow hidden sm:flex space-x-4">
            <p className="text-gray-500 font-semibold">Features</p>
            <p className="text-gray-500 font-semibold">Pricing</p>
            <p className="text-gray-500 font-semibold">Resources</p>
        </div>

        <div className="hidden md:flex space-x-9">
            <button className="p-2">
                Login
            </button>
            <button className="py-1.5 px-4 bg-[#2acfcf] text-white font-semibold rounded-2xl hover:opacity-70 transition-all duration-150">
                Sign Up
            </button>
        </div>
    </header>
  )
}