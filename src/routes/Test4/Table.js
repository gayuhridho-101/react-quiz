import { useEffect, useState } from "react";
import DATA from "./_data";

const Table = ({keyword}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if(keyword){
      const filterData = DATA.filter(item => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;;
      })
      setData(filterData)
    } else {
      setData(DATA)
    }
  }, [keyword])

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
