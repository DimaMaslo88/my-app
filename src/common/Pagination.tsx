
import React, { MouseEvent} from 'react';
import {TablePagination} from "@mui/material";

type PaginationType = {
    page: number
    pageCount: number
    callback: (currentPage: number) => void
    setPageCountCallback: (page: number) => void
    totalCount: number
}
const BasicPagination = ({page, pageCount, callback, totalCount, setPageCountCallback}: PaginationType) => {
    console.log('totalCount', totalCount)
    // console.log('pageCount', pageCount)
    console.log('packPage',page)

    const onPageChange = (e: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        callback(newPage)
    }

    const handleChangeRowsPerPage = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setPageCountCallback(Number(e.target.value))
    };

    return (


        <TablePagination
            count={totalCount}
            page={page}
            onPageChange={onPageChange}
            rowsPerPage={pageCount}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />

    );

};

export default BasicPagination;