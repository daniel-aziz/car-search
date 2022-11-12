import { useRequest } from "ahooks"
import axios from "axios"
import * as React from "react"

const useGetCarInfoQuery = () => {
    const [error, setError] = React.useState<Error | any>()
    const { runAsync, loading } = useRequest(runQuery, {
        manual: true,
        onError: e => setError(e)
    })
    const apiUrl = 'https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q='



    async function runQuery(lp: string) {
        return axios.get(apiUrl + lp)
    }

    return {
        getCarInfo: runAsync,
        loading,
        error
    }
}

export default useGetCarInfoQuery