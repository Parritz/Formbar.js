const { classInformation } = require("../modules/class")
const { logger } = require("../modules/logger")
const { managerUpdate } = require("../modules/socketUpdates")

module.exports = {
    run(socket, socketUpdates) {
        socket.on('pollUpdate', () => {
            logger.log('info', `[pollUpdate] ip=(${socket.handshake.address}) session=(${JSON.stringify(socket.request.session)})`)
            socketUpdates.pollUpdate()
        })

        socket.on('modeUpdate', () => {
            logger.log('info', `[modeUpdate] ip=(${socket.handshake.address}) session=(${JSON.stringify(socket.request.session)})`)

            socketUpdates.modeUpdate()
        })

        socket.on('quizUpdate', () => {
            logger.log('info', `[quizUpdate] ip=(${socket.handshake.address}) session=(${JSON.stringify(socket.request.session)})`)

            socketUpdates.quizUpdate()
        })

        socket.on('lessonUpdate', () => {
            logger.log('info', `[lessonUpdate] ip=(${socket.handshake.address}) session=(${JSON.stringify(socket.request.session)})`)

            socketUpdates.lessonUpdate()
        })

        // Sends poll and student response data to client side virtual bar
        socket.on('vbUpdate', () => {
            logger.log('info', `[virtualBarUpdate] ip=(${socket.handshake.address}) session=(${JSON.stringify(socket.request.session)})`)

            socketUpdates.virtualBarUpdate()
        })

        socket.on('customPollUpdate', () => {
            logger.log('info', `[customPollUpdate] ip=(${socket.handshake.address}) session=(${JSON.stringify(socket.request.session)})`)

            socketUpdates.customPollUpdate(socket.request.session.username)
        })

        socket.on('pluginUpdate', () => {
            logger.log('info', `[pluginUpdate] ip=(${socket.handshake.address}) session=(${JSON.stringify(socket.request.session)})`)

            socketUpdates.pluginUpdate()
        })

        // Updates and stores poll history
        socket.on('cpUpdate', () => {
            logger.log('info', `[cpUpdate] ip=(${socket.handshake.address}) session=(${JSON.stringify(socket.request.session)})`)

            socketUpdates.classPermissionUpdate();
        })

        socket.on('classBannedUsersUpdate', () => {
            socketUpdates.classBannedUsersUpdate()
        })

        socket.on('managerUpdate', () => {
            managerUpdate()
        })

        // Changes the class mode
        socket.on('modechange', (mode) => {
            try {
                logger.log('info', `[modechange] ip=(${socket.handshake.address}) session=(${JSON.stringify(socket.request.session)})`)
                logger.log('info', `[modechange] mode=(${mode})`)

                classInformation[socket.request.session.class].mode = mode

                logger.log('verbose', `[modechange] classData=(${classInformation[socket.request.session.class]})`)

                socketUpdates.modeUpdate()
            } catch (err) {
                logger.log('error', err.stack)
            }
        })
    }
}