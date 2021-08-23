# epam_homework
Training application "HETflix"
## Ветки
- master - основная ветка
- lesson2 - Task 2 "Webpack lecture"
- lesson3 - Task 3 "Components lecture (TypeScript, ErrorBoundaries, ESLint+Prettier)"
- lesson4 - Task 4 "Testing"
## Ссылки по урокам
### Task 2 "Webpack lecture" (lesson2)
#### Документация
- [Документация Webpack](https://webpack.js.org/guides/getting-started/)
- [Babel (из док-ции Webpack)](https://webpack.js.org/loaders/babel-loader/#root)
- [Переменные окружения (из док-ции Webpack)](https://webpack.js.org/guides/environment-variables/)
- [Опции переменных окружения (из док-ции Webpack)](https://webpack.js.org/api/cli/#environment-options)
- [DEV and PROD build configurations (Из док-ции Webpack)](https://webpack.js.org/guides/production/)
#### Статьи
- [Команды](https://webpack.js.org/api/cli/#environment-variables)
- [Переменные окружения, статья 1](https://medium.com/@hydrock/переменные-окружения-в-приложении-node-js-e9ca2131e6b6)
- [Использование переменных окружения в Node.js](https://habr.com/ru/company/ruvds/blog/351254/)
- [Переменные окружения (способы настройки)](https://dmitrytinitilov.gitbooks.io/strange-javascript/content/nodejs/environment_variables.html)

### Task 3 "Components lecture" (lesson3)
#### TypeScript
- [TypeScript (из док-ции Webpack)](https://webpack.js.org/guides/typescript/)
- [TypeScript документация](https://www.typescriptlang.org/docs/)
- [TypeScript + React документация](https://www.typescriptlang.org/docs/handbook/react.html)
#### ErrorBoundaries
##### Документация
- [Error Boundaries](https://ru.reactjs.org/docs/error-boundaries.html)
- [componentDidCatch() и static getDerivedStateFromError()](https://ru.reactjs.org/docs/react-component.html#error-handling)
##### Статьи
- [Тип для componentStack в ErrorBoundary](https://question-it.com/questions/3220446/svojstvo-componentstack-ne-suschestvuet-dlja-tipa-stringts)
- [Как правильно типизировать ErrorBoundary](https://stackoverflow.com/questions/63916900/how-to-properly-type-a-react-errorboundary-class-component-in-typescript)
#### ESLint and Prettier
##### Документация
- [ESLint документация](https://eslint.org/)
- [Prettier документация](https://prettier.io/docs/en/index.html)
##### Статьи
- [Видео-инструкция по настройке Eslint+Prettier в проекте React+Typescript](https://www.youtube.com/watch?v=4XAGZHbQx74&t=662s)
- [Правильные настройки 'extends' в eslint (настройки из видео частично устарели)](https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21)
- [Программируем лучше с ESLint, Prettier и TypeScript](https://tproger.ru/translations/setting-up-eslint-and-prettier/)
## Лайфхаки =)
- Если запустить команду npm с флагом -s, некоторые ошибки перестанут отображаться =)
- В ErrorBoundary для "componentStack" (this.state.errorInfo.componentStack) используй тип данных "Function" (errorInfo: null | {componentStack: Function})
## Повторить
- классы и конструкторы, отдельно super и state