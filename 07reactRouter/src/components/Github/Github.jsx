import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();

    // const [data, setData] = React.useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch((error) => console.log("Error Fetching data: ", error))
    // }, [])

    return (
        <>
            <div className='text-center bg-gray-400 text-3xl py-4 text-white '>Github followers: {data.followers}

                <img src={data.avatar_url} alt="Image" width={200} />
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')

    return response.json();
}