//swagger setup configration file

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "SecondApp",
            description: "Customer API information",
            contact: {
                name: "amazing developer"
            },
            servers: ["http://localhost:5000"]
        }
    },
    // ['.routes/*.js']
    apis:['./routes/posts.js']
}

module.exports.swaggerOptions = swaggerOptions;