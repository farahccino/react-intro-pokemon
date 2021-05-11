export default function Pokeball(props) {
    const {name, type} = props
    return  (
        <article>
            <h3>{name}</h3>
            <p>{type}</p>
        </article>
    )
}