
import { useParams } from "react-router-dom"
import "./index.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Detail = () => {
    const { id } = useParams()
    const [selectedDog, setSelectedDog] = useState(null)

    const getDog = async () => {
        const dog = await axios.get(`http://localhost:3001/dogs/${id}`)
        setSelectedDog(dog.data)
    }

    useEffect(getDog, [])

    if (!selectedDog) {
        return <div>Loading...</div>
    }

    const { name, life_span, height, weight, image, temperament } = selectedDog

    return (
        <div className="detail-container">
            
                {image && <img className="detail-image" src={image.url} alt={name} />}
            
            <div className="dates-container">
                <h3 className="date">{name}</h3>
                <h3 className="date">{`Altura: ${height?.metric}cm`}</h3>
                <h3 className="date">{`Peso ${weight?.metric}Kg`}</h3>
                <h3 className="date">{`Años de vida: ${life_span}`}</h3>
                <h3 className="date">{`Temperamento: ${temperament}`}</h3>
            </div>
        </div>
    )
}

export default Detail