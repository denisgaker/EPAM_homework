import * as MovieActionCreators from './movie';
import * as SearchActionCreators from './search';

export default {
  ...MovieActionCreators,
  ...SearchActionCreators,
};
