// import { useEffect, useState } from "react";

// export const useFetch = url => {
//     const [data, setData] = useState({ data: null, loading: true });

//     useEffect(() => {
//         setState(state => ({ data: state.data, loading: true }));
//         fetch(url)
//             .then(res => res.json())
//             .then(y => {
//                 setState({ data: y, loading: false });
//             });
//     }, [url, setState]);

//     return state;
// };