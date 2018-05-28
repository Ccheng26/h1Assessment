export const loadData = data => {
    return {
        type: 'LOAD_DATA',
        payload: data
    }
}

export const selectCompany = company => {
    return {
        type: 'SELECT_COMPANY',
        payload: company
    }
}