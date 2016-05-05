'use strict'

const ioc = require( 'electrolyte' )
ioc.use( ioc.node_modules( ) )
ioc.use( ioc.dir( './' ) )

const bundler = ioc.create( 'lib/bundler' )
bundler.bootstrap( )
// bundler.run( )

