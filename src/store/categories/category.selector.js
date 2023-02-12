import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

//memoizationnnnn: as long as the categories array does NOT change, do NOT rerun this method(reduce.) just give me back the previously calculated value <3

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
