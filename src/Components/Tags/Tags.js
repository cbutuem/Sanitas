import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"

export function Tags(){
    const tagContent = useParams();
    const [data, setData]= useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/camila-dante"
      );

      setData(response.data);
    }

    fetchData();
  }, []);

    return(
        <>
        </>
    );
}