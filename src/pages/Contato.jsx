
const Contato = () => {
    return (
    <main className="grow flex items-center justify-center px-4 bg-background">
        <div className="bg-surface p-8 sm:p-10 rounded-[20px] w-full maxw-md shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-accent text-center mb6 uppercase tracking-winder">Fale Conosco</h2>
            <p  className="text-text-light text-center mb-6">Entre em contato conosco através dos nossos meios de comunicação:</p>

            <a href="mailto:suporte@lojagamer.com" className="block text-center text-text-accent font-semibold hover:underline transition-all">suporte@lojagamer.com</a>

            <span className="py-4 block text-center text-text-accent font-semibold hover:underline transition-all">Instagram - @teste</span>

            <a href="tel:+1199999-9999" className="block text-center text-text-accent font-semibold hover:underline transition-all">11 99999-9999</a>
        </div>
    </main>
    )
}

export default Contato
