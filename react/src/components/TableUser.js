import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
const TableUser = (props) => {
  return (
    <Container>
      <hr />
      <Table striped bordered hover responsive="xl">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default TableUser;
