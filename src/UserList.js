import React,{useState, userEffect} from 'react'
import axios from 'axios';


function UserList(){
    const [data, setData] = useState([])
    
    userEffect(() =>{ 
        const listofUser = async () => {
            const result = await axios(
            'https://jsonplaceholder.typicode.com/users' 
            );

            setData(result.data);
            console.log("updated");
        }
            listofUser();
            console.log("mounted");
    },
    [])
    console.log(data);
    
    return(
    <div>
        <ul>
        {
            data.map(item=><li key={item.id}>{item.title}</li>)
        }
        </ul>
    </div>
)
}


export default UserList
