import React, { createContext, useState } from "react";

export const Filter = createContext();

const FilterProvider = ({children}) => {
    const [filter, setFilter] = useState('');
    
    const value = {
        stateFilter: filter,
        setStateFilter: (text) => {
            setFilter(text);
        }
    }

    return <Filter.Provider value={value}>{children}</Filter.Provider>
}

export default FilterProvider;