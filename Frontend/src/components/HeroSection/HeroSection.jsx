import { Link } from 'react-router-dom';

export default function MindSpaceHome() {
  return (
    <div className="bg-gray-50">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[15deg] bg-gradient-to-tr from-[#6EE7B7] to-[#3B82F6] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:pt-56 lg:pb-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-700 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Discover the Path to Inner Peace.{' '}
              <a href="#" className="font-semibold text-green-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Explore More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Embrace Your Journey to Mental Wellness
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At MindSpace, we believe in nurturing your mental health journey with compassion and support. Connect with resources and tools designed to help you thrive.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/start"
                className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Start Your Journey
              </Link>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6EE7B7] to-[#3B82F6] opacity-30 sm:left-[calc(50%+50rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
