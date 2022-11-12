import * as React from 'react'
import { Car, TCar } from '../../../types/Car.interface'
import useGetCarInfoQuery from '../../../hooks/UseGetCarInfoQuery'
import CircularProgress from '@mui/material/CircularProgress'
import InfoTable from './InfoTable'
import notyf from '../../../components/Notify'
import { isValidLP } from './searchUtils'
import styled from '@emotion/styled'
import SearchInput from './SearchInput'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`

const Search = () => {
    const [data, setData] = React.useState<TCar>()
    const { getCarInfo, loading, error } = useGetCarInfoQuery()

    React.useEffect(() => {
        if (error) {
            notyf.error('Car was not found')
        }
    }, [error])

    const onFinish = async (e: any) => {
        let value = e.target[0].value.trim().trimEnd()
        if (!isValidLP(value)) {
            notyf.error('Invaild License Number')
            return
        }
        let result = await getCarInfo(value)
        let car: Car = result.data.result.records[0]
        if (!car?.mispar_rechev) {
            notyf.error('Car was not found')
            setData(undefined)
            return
        }
        setData(car)
        notyf.success('Car Found!')
    }

    return (
        <StyledWrapper>
            <SearchInput onFinish={onFinish} />
            {loading && <CircularProgress />}
            {!loading && data && <InfoTable car={data} />}
        </StyledWrapper>
    )
}

export default Search
