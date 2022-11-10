import { useEffect } from "react"

const useTitle = title =>{
     useEffect(() =>{
          document.title =`${title} - English study-Service`;
     },[title])
}

export default useTitle;