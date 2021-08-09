type mainType = {
  [key in MainKey]: string
};

enum MainKey {
  nameApp = 'nameApp',
  searchCTA = 'searchCTA',
  searchPlaceholder = 'searchPlaceholder',
  searchBtnText = 'searchBtnText'
};

interface DatatsType {
  main: mainType
}

export const Datats: DatatsType = {
  "main": {
    "nameApp": "HETflix",
    "searchCTA": "Find yout movie",
    "searchPlaceholder": "Quentin Tarantino",
    "searchBtnText": "Search"
  }
}