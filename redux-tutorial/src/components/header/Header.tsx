import { useFevorites } from '../../hooks/useFavorites'
export default function Header(){
    const {favorit} = useFevorites()
    return(
        <header>
            <p>{`hellow world `}</p>
            <p>{favorit.length}</p>
        </header>
    )

}