interface ContinentProps {
    name: string,
}

const Continent = ({name}: ContinentProps) => {
    return (
        <>
            <h2>{name}</h2>
        </>
    )
}

export default Continent