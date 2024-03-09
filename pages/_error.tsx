import Link from "next/link";
function Error({ statusCode }: { statusCode: number }) {
  return (
    <main className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">{statusCode}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-100">
          {statusCode
            ? "Sorry, we couldn't find the page you're looking for."
            : "An error occurred on client"}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <a
            
            className="text-sm font-semibold text-gray-900"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
