// uso del framework winston.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf,  json } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

export const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json(),
        logFormat,
        
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
});

  

