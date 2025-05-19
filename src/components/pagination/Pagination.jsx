import "./pagination.css"

const MAX_PAGES = 7;
const QTD_MAX_ITENS = (MAX_PAGES - 1) /2;

const Pagination = ({ limit, total, skip, setSkip }) => {

    const currentPage = skip ? skip / limit + 1 : 1;
    const totalPages = Math.ceil(total / limit);
    const firstPage = Math.max (currentPage - QTD_MAX_ITENS, 1);

  return (
    <div className = "pgn-container" >
      <button>Anterior</button>

      {
        Array.from({ length: Math.min(MAX_PAGES, totalPages) }).map((item, index)=> (
          index + firstPage
        )).map((item) => ( 
          <button key={item} onClick={() => setSkip(item - 1) * limit} >{item}</button>
        ))
      }
      <button>Próximo</button>
    </div>
  )
}

export default Pagination