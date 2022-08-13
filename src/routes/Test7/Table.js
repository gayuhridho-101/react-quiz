import { useContext, useState, useEffect } from "react";
import { Filter } from "./context";
import DATA from "./_data";

const Table = () => {
  const [data, setData] = useState([]);
  const { stateFilter } = useContext(Filter);

  useEffect(() => {
    if (stateFilter) {
      const filterData = DATA.filter((item) => {
        return item.name === stateFilter;
      });
      setData(filterData);
    } else {
      setData(DATA);
    }
  }, [stateFilter]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 ? (
          data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={3}>Data Not Found!!!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
