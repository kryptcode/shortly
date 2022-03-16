export function Footer() {
  return (
    <div className="bg-black text-white py-14">
        <div className="w-[90%] mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0">
            <div>
                <img src="./images/logo-black.svg" alt="shortly" />
            </div>

            <div className="flex space-x-5">
                <div>
                    <h6 className="font-semibold text-lg mb-3">
                        Features
                    </h6>
                    <p className="text-gray-400 text-sm mb-1">
                        Link Shortening
                    </p>
                    <p className="text-gray-400 text-sm mb-1">
                        Branded Links
                    </p>
                    <p className="text-gray-400 text-sm mb-1">
                        Analytics
                    </p>
                </div>
                <div>
                    <h6 className="font-semibold text-lg mb-3">
                        Resources
                    </h6>
                    <p className="text-gray-400 text-sm mb-1">
                        Blog
                    </p>
                    <p className="text-gray-400 text-sm mb-1">
                        Developers
                    </p>
                    <p className="text-gray-400 text-sm mb-1">
                        Support
                    </p>
                </div>
                <div>
                    <h6 className="font-semibold text-lg mb-3">
                        Company
                    </h6>
                    <p className="text-gray-400 text-sm mb-1">
                        About
                    </p>
                    <p className="text-gray-400 text-sm mb-1">
                        Our Team
                    </p>
                    <p className="text-gray-400 text-sm mb-1">
                        Careers
                    </p>
                    <p className="text-gray-400 text-sm mb-1">
                        Contact
                    </p>
                </div>
            </div>

            <div className="flex space-x-3">
                <img src="./images/icon-facebook.svg" alt="facebook" />
                <img src="./images/icon-twitter.svg" alt="twitter" />
                <img src="./images/icon-pinterest.svg" alt="pin" />
                <img src="./images/icon-instagram.svg" alt="insta" />
            </div>
        </div>
    </div>
  )
}