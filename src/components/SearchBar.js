import {useState} from "react";
import './SearchBar.css'

const SearchBar = ({setSearchDog}) => {
    const [ dogName, setDogName ] = useState('');
    const [ dogs, setDogs ] = useState([]);
    // const [ filteredDogs, setFilteredDogs] = useState([])

    const fetchData = async (e) => {
        e.preventDefault()
        await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${dogName}`,{
            method: 'GET',
            headers: {
                'x-api-key': '9e3d4333-c2ad-4c2a-af81-4e655476fe88',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => setDogs(data))
    }


    // console.log(dogs)

    // const filterDogs =
    //     dogs.filter(dog => {
    //         return (dog.name.toLowerCase().includes(dogName.toLowerCase()))
    //     })


    return(
        <div className="wrapper">
            <h1>Doogle</h1>
            <form>
                <input
                    type="text"
                    placeholder="Dog's name"
                    onChange={(event) => setDogName(event.target.value)}
                />
                <button onClick={fetchData}>Search</button>
            </form>
            <div className="card-wrapper">
                {dogs.map((dog) =>
                    <div className='dog-card'>
                        <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt='dog photo' width={300}/>
                        <h2>{dog.name}</h2>
                        <ul>
                            {dog.breed_group ? <li>{dog.breed_group}</li> : null}
                            {dog.bred_for ? <li>{dog.bred_for}</li> : null}
                            { dog.origin ? <li>{dog.origin}</li> : null}
                            {dog.life_span ? <li>{dog.life_span}</li> : null}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchBar