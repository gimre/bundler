'use strict'

exports = module.exports = ( ) => ( file ) => new Promise( ( resolve, reject ) => {
    let res = 0;
    file.stream.on( 'data', ( chunk ) => res += chunk.length )
    file.stream.on( 'end', ( ) => resolve( res ) )
} )
