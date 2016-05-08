'use strict'

exports = module.exports = ( privateConfig ) => {
    const name = privateConfig.configName
    const defaultConfig = require( `${ __dirname }/${ name }` )

    try {
        const localConfig   = require( `${ process.cwd( ) }/${ name }` )
        return Object.assign( { }, defaultConfig, localConfig )
    } catch( err ) {
        throw( `missing ${ privateConfig.configName } in cwd` )
    }
}

exports[ '@require' ] = [
    'config.private.js'
]
