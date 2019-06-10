import { createSelector } from 'reselect'

export const getItems = state => state.items

export const getItemByCode = code =>
  createSelector(
    getItems,
    items => items[code]
  )
