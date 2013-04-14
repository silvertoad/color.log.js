var loggers = require('./loggers.js');

var multi_line = new loggers.MultiLine();
var single_line = new loggers.SingleLine();

/**
 * Print green message in new line
 * @param msg
 */
exports.info = function(msg)
{
    multi_line.info(msg);
};

/**
 * Print lite green message in new line
 * @param msg
 */
exports.mark = function(msg)
{
    multi_line.mark(msg);
};

/**
 * Print red message in new line
 * @param msg
 */
exports.error = function(msg)
{
    multi_line.error(msg);
};

/**
 * Print yellow message in new line
 * @param msg
 */
exports.warn = function(msg)
{
    multi_line.warn(msg);
};

/**
 * Print message in single line (clears line before printing)
 * @type {loggers.SingleLine}
 */
exports.single = single_line;