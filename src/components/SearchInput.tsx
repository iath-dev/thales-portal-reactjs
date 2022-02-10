import { Box, Button, InputAdornment, TextField } from '@material-ui/core'
import { Search } from '@material-ui/icons';
import React, { useState } from 'react'

interface SearchInputProps {
    onSubmit: (input: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSubmit }) => {
    const [search, setSearch] = useState("");

    const handleChange = (e: any) => {
        const { currentTarget: { value } } = e;

        setSearch(value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(search);
    }

    return (
        <Box paddingX={2} paddingY={1}>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    name="search"
                    variant="outlined"
                    margin="dense"
                    placeholder="Search Employee by ID..."
                    value={search}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button type="submit" color="primary" variant="contained" size="small" endIcon={<Search/>}>search</Button>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </Box>
    )
}

export default SearchInput;
