import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-surface">
        <h1 className="p-2 text-text-light font-title text-4xl">Teste da CP5</h1>
        <nav>
            <ul className="flex text-lg text-text-light list-none items-center gap-8 font-title">
                <li>
                    <Link to="/" className="no-underline cursor-pointer hover:text-text-accent hover:text-[1.3rem] transition-all">Home</Link>
                </li>

                <li>
                    <Link to="/contato" className="no-underline cursor-pointer hover:text-text-accent hover:text-[1.3rem] transition-all">Contato</Link>
                </li>

                <li>
                    <Link to="/sobre" className="no-underline cursor-pointer hover:text-text-accent hover:text-[1.3rem] transition-all">Sobre</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header
