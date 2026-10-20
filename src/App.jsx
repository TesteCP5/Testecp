const App = () => {
  return (
    <main className="min-h-screen bg-background p-10">

      <h1 className="font-title text-4xl text-text mb-6">
        Teste Fonte Poppins
      </h1>

      <h2 className="font-title-secondary text-3xl text-text-accent mb-6">
        Teste Fonte Montserrat
      </h2>

      <p className="font-body text-lg text-text">
        Este é um teste da fonte Inter para o corpo do site.
      </p>

      <button className="mt-8 px-6 py-3 bg-surface text-text-light font-body rounded-lg hover:bg-surface-hover transition-all">
        Teste Hover
      </button>

    </main>
  )
}

export default App