import Container from "react-bootstrap/Container";
import Header from "./Header";
import TableUser from "./TableUser";
import FormAddNew from "./FormAddNew";

const Home = (props) => {
  return (
    <div>
      <Header />
      <FormAddNew />
      <TableUser />
    </div>
  );
};
export default Home;
