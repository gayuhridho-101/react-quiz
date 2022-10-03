import { useImperativeHandle, forwardRef, useState, useEffect } from "react";
import DATA from "./_data";

const Table = (props, ref) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useImperativeHandle(ref, () => ({
    filter: (val) => {
      setFilter(val);
    },
  }));

  useEffect(() => {
    if (filter) {
      const filterData = DATA.filter((item) => {
        return item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      });
      setData(filterData);
    } else {
      setData(DATA);
    }
  }, [filter]);

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

export default forwardRef(Table);
