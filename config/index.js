const env = () => {
    return process.env.NODE_ENV === 'production' ? { endpoint: '/prod/v1', port: 2000 } : { endpoint: '/dev/v1', port: 9000 }
}

module.exports = {
    ...env()
}