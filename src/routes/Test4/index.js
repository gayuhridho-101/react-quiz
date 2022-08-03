import { useState } from "react";
import Input from "./Input";
import Table from "./Table";

const Test4 = () => {
  const [keyword, setKeyword] = useState('');

  const handleFilter = (value) => {
    setKeyword(value);
  } 

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input handleFilter={handleFilter}/>
      <div>
        <Table keyword={keyword}/>
      </div>
    </div>
  )
}

export default Test4;