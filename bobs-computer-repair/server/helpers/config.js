let config = {};

/**
 * Localhost web server configurations
 */
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';


/**
 * Development database configurations
 *
 */
config.database = {};
config.database.username = '';
config.database.password = '';
config.database.port = '';
config.database.url = '';
config.database.name = '';


module.exports = config;