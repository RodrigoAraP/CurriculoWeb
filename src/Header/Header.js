import Person from './Person/Person.js'
import SocialMedia from './SocialMedia/SocialMedia.js'
import Language from './Language/Language.js'
import './Header.css'

export default function Header() {
    return (
        <header>
            <Person />
            <nav>
                <SocialMedia />
                <Language />
            </nav>
        </header>
    )
}