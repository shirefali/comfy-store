import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <section className="min-h-[100vh] flex items-center justify-center text-center">
        <div>
          <h1 className="text-9xl font-semibold text-primary">404</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:5xl">
            Page not found
          </h2>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link to="/" className="mt-10  btn btn-secondary uppercase">
            go back home
          </Link>
        </div>
      </section>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">there was an error...</h4>
    </main>
  );
};
export default Error;
