const PROXY_CONFIG = [
    {
        context: [
            "/"
        ],
        target: "http://localhost:8282",
        secure: false
    }
]
module.exports = PROXY_CONFIG;