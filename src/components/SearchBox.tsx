interface ISearchBoxProps {
    keyword: string;
    keywordChange: (keyword: string) => void;
}

function SearchBox({keyword, keywordChange}: ISearchBoxProps) {
    return (
        <>
            <input
                className="search-bar"
                type="text"
                placeholder="Cari berdasarkan nama"
                value={keyword}
                onChange={(event) => {
                    console.log(event.target.value);
                    keywordChange(event.target.value)
                }}
            />
        </>
    );
}

export default SearchBox;
