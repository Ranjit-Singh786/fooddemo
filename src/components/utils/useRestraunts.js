import React, {useState, useEffect } from 'react'

const useRestraunts=(id)=> {
    const [restraunt, setrestraunt] = useState(null);
    // const [id, setId] = useState(id);
     const getRestruants = async()=>{
        let fetchRestruant = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.661057794970286&lng=76.69559217989445&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        let json = await fetchRestruant.json();
        setrestraunt(json);
     }
     useEffect(()=>{
        getRestruants();
     },[id])
    return restraunt;


}

export default useRestraunts
