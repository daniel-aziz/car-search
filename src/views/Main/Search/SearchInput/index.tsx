import { Button, TextField } from '@mui/material'

interface SearchInputProps {
    onFinish: (e: any) => void
}

const SearchInput = ({ onFinish }: SearchInputProps) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                onFinish(e)
            }}
        >
            <div>
                <TextField
                    id="outlined-basic"
                    label="License Number"
                    variant="outlined"
                />
                <br />
                <br />
                <Button type="submit" variant="contained" size="large">
                    Search
                </Button>
            </div>
        </form>
    )
}

export default SearchInput
