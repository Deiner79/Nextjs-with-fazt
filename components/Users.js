import Router from "next/router";
export default function Users(props) {
  return (
    <div>
      {props.users.map((user) => (
        <ul className="list-group">
          <li
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            key={user.id}
            onClick={(e) => Router.push("/users/[id]", `/users/${user.id}`)}
          >
            <div>
              <h5>Nombre:{user.first_name}</h5>
              <p>Apellido:{user.last_name}</p>
              <p>Email:{user.email}</p>
            </div>
            <img
              src={user.avatar}
              alt={user.first_name + user.last_name}
              style={{ borderRadius: "50%" }}
            />
          </li>
        </ul>
      ))}
    </div>
  );
}
