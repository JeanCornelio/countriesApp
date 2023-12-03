
export const HomePage = () => {
  return (
    <section className='mt-20 p-5'>
      <h1>Bienvenido a la Página de Búsqueda de Países y Capitales</h1>

      <p>
        En esta página, puedes buscar información sobre países y sus capitales.
      </p>

    {/*   <div>
        <label htmlFor="searchInput">Buscar País o Capital:</label>
        <input
          type="text"
          id="searchInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div> */}

      <p>
        También puedes explorar la información de algunos países y capitales destacados.
      </p>

      <div>
        <h2>Países Destacados:</h2>
        <ul>
          <li>Estados Unidos</li>
          <li>Canadá</li>
          <li>Reino Unido</li>
          {/* Añade más países según sea necesario */}
        </ul>
      </div>

      <div>
        <h2>Capitales Destacadas:</h2>
        <ul>
          <li>Washington, D.C.</li>
          <li>Ottawa</li>
          <li>Londres</li>
          {/* Añade más capitales según sea necesario */}
        </ul>
      </div>
    </section>
  );
}
