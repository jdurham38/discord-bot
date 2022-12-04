module.exports = {
    app: {
        token: 'MTA0ODM0MzE3MjU5OTc5MTY4Ng.GqQNiJ.02_gXWZBDP35m_sCFI_cyHXnz8skH6jTG7wbME',
        playing: 'C, R, B',
        global: true,
        guild: '353309519486386176'
    },

    opt: {
        DJ: {
            enabled: true,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
