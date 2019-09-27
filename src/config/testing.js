export const config = {
    expireTime: '30d',
    secrets: {
        JWT_SECRET: 'TestSecret'
    },
    db: {
        url: 'mongodb://localhost/jams-test'
    }
}