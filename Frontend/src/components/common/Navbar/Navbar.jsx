import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Diagnose', href: '/DiagnosTest' },
  { name: '1:1 AI Therapy', href: '/chat' },
  { name: 'Book Appointment', href: '/FindDoctors' },
  { name: 'About Us', href: '/about' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gray-900 text-white">
      <nav className="flex items-center justify-between p-6 mx-10 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center">
            <img
              className="h-8 w-auto mr-2"
              src="images/logo.png"
              alt="MindSpace Logo"
            />
            <span className="text-2xl font-bold">MindSpace</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2.5 text-white hover:bg-gray-700 rounded-md"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-base font-semibold leading-6 hover:text-indigo-400">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm font-semibold leading-6 hover:text-indigo-400">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-50 bg-gray-900/80" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="images/logo.png"
                alt="MindSpace Logo"
              />
              <span className="text-lg font-bold ml-2">MindSpace</span>
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2.5 text-white hover:bg-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-600">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-700"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar
