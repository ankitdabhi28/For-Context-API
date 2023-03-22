import { useContext } from "react";
import forContext from "../Context/forContext";

function TableApi() {
  const Api = useContext(forContext);
//   console.log("Api", Api);
  return (
    <div>
      <h2>TableApi Page</h2>
      <table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>#ID</th>
            <th>Title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {/* Search And Shorting Data */}
          {Api.ApiData.filter((d) => d.id <= 10)
            // .sort((a, b) => a.id < b.id ? 1 : -1)

            .map((d) => (
              <tr key={d.id}>
                <td>{d.userId}</td>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{String(d.completed)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableApi;
