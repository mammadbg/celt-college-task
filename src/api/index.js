import * as todolist from './todolist';
import * as essays from './essays';
import * as speaking from './speaking';
import * as categories from './categories';

export default {
    ...todolist,
    ...essays,
    ...speaking,
    ...categories,
}