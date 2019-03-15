import camelCase from 'lodash/camelCase'

const BoardGameAttributes = ['name', 'yearpublished']

class BoardGame {
    constructor(bggItem) {
        const attributes = BoardGameAttributes.reduce((result, key) => {
            let next = result;
            const attribute = bggItem[key]

            if (attribute) {
                const value = attribute[0].$.value
                next = {...next, [camelCase(key)]: value }
            }

            return next
        }, {})

        Object.assign(this, attributes, { id: this._getId(bggItem) })
    }

    _getId(bggItem) {
        return bggItem.$.id
    }
}

export default BoardGame
