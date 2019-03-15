import { parseString } from 'react-native-xml2js'
import BoardGame from '../models/BoardGame'
const BGG_XML_API2_ROOT = 'https://www.boardgamegeek.com/xmlapi2/'

function parseXmlResponse(xmlResponse) {
    xmlResponse.text()
    .then((xmlString) => {
        return new Promise((resolve, reject) => {
            parseString(xmlString, (err, result) => {
                console.log('parseString', result)
                if (err) { 
                    reject(err) 
                } else {
                    resolve(result)
                }
            })
        })
    })
}

export const search = (query) => {
   return fetch(`${BGG_XML_API2_ROOT}/search?query=${query}&type=boardgame`)
    .then(parseXmlResponse)
}

class BoardGameGeekService {
    search(query) {
        return this._fetch(`${BGG_XML_API2_ROOT}/search?query=${query}&type=boardgame`)
    }

    async _fetch(url) {
        const response = await fetch(url)
        const body = await response.text()
        return this._parseXmlResponse(body)
    }

    _parseXmlResponse(bodyText) {
        return new Promise((resolve, reject) => {
            parseString(bodyText, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    const boardGames = result.items.item.map((item) => new BoardGame(item))
                    resolve(boardGames)
                }
            })
        })
    }
}

export default new BoardGameGeekService()
