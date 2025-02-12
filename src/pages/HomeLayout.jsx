import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        {isPageLoading ? <Loading /> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
