import { createSelector } from 'reselect'

export const getItems = state => state.items

export const getItemByCode = code =>
  createSelector(
    getItems,
    items => Object.values(items).find(item => item.code === code)
  )
