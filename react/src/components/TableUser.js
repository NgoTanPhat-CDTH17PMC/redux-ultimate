import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const TableUser = (props) => {
  const [listUser, setListUser] = useState([
    {
      createdAt: "2023-08-21T13:54:20.000Z",
      email: "hoidanit@gmail.com",
      id: 1,
      password: "$2a$10$.xbnQqT65dTljPL6VbE79.TQldNUQo/OVBJPABzbYs9NSqknP5/7i",
      updatedAt: "2023-08-21T13:54:20.000Z",
      username: "eric",
    },
  ]);

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res && res.data ? res.data : [];
    setListUser(data);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  const handleDeleteUser = (user) => {
    console.log(user);
  };

  return (
    <Container>
      <hr />
      <Table striped bordered hover responsive="xl">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={(event) => handleDeleteUser(item)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableUser;
