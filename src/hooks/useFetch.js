import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const res = await fetch(url);
                const result = await res.json();
                setData(result);
                if (result.error) {
                    setError(result.error)
                }
            } catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
