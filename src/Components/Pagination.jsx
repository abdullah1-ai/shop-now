  function uiPagination(currentPage, total) {
    const arr = [];
    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        arr.push(i);
      }
    }
     else if (currentPage <= 3) {
        arr.push(1, 2, 3, "...", total);
      }
     else if (currentPage >= total - 2) {
        arr.push(1, "...", total - 2, total - 1, total);
      } else {
        arr.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          total,
        );
      }

    return arr;
  }
const Pagination = ({dynamicPageNumber, setDynamicPageNumber, setIsActivePage, filterData = [], isActivePage}) => {
  {/*  Button + Pagination Ui Logic */}
  return (<div className="mx-auto w-fit text-3xl mb-6 flex gap-3">
          <button
            onClick={() => {
              setDynamicPageNumber((prev) => {
                if (prev == 1) {
                  return prev;
                } else{ 
                  return prev - 1
                };
              });
                            setIsActivePage(()=>{
                              if (dynamicPageNumber == 1) {
                              return dynamicPageNumber  
                              }
                              else return dynamicPageNumber -1
                              })

            }}
            
            disabled={dynamicPageNumber ==1}
            className="text-white bg-red-500 px-2 py-1 rounded-lg text-lg font-medium disabled:bg-red-300"
          >
            Prev
          </button>
          <div className="text-xl text-black flex gap-2">
            {
            uiPagination(
              dynamicPageNumber,
              Math.ceil(filterData.length / 4),
            ).map((item) => {
              return <p key={item} onClick={()=>{
                if(typeof item === 'number'){
                  setIsActivePage(item) 
                  setDynamicPageNumber(item)
                }
              }}

               className={`cursor-pointer ${isActivePage == item ? 'text-red-500 text-2xl font-medium' : 'text-xl text-black'}`}
              
              >{item}</p>;
            })}
          </div>
          <button
            onClick={() => {
              setDynamicPageNumber((prev) => {
                if (prev == Math.ceil(filterData.length / 4)) {
                  return prev;
                } else return prev + 1;
              });
              setIsActivePage(()=>{
                              if (dynamicPageNumber == Math.ceil(filterData.length / 4)) {
                              return dynamicPageNumber  
                              }
                              else return dynamicPageNumber +1
                              })
            }}

             disabled={dynamicPageNumber == Math.ceil(filterData.length / 4)}
            className="text-white bg-red-500 px-2 py-1 rounded-lg text-lg font-medium disabled:bg-red-300"
          >
            Next
          </button>


        </div>
  )
}

export default Pagination