export const APPLY_SORT = 'APPLY_SORT';

export const FILTER_AVAILABILITY = 'FILTER_AVAILABILITY';
export const FILTER_GROUP = 'FILTER_GROUP';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';

export const FILTER_ACTIVATED = 'FILTER_ACTIVATED';

export const applySort = (sort) => ({
    type: APPLY_SORT,
    sort
})

export const filterAvailability = (filter) => ({
    type: FILTER_AVAILABILITY,
    filter,
    filterType: 'availability'
})
export const filterGroup = (filter) => ({
    type: FILTER_GROUP,
    filter,
    filterType: 'group'
})
export const filterCategory = (filter) => ({
    type: FILTER_CATEGORY,
    filter,
    filterType: 'category'
})

export const filterActivated = (filter) => ({
    type: FILTER_ACTIVATED,
    filter
})