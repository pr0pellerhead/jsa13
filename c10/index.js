const mailer = require('./pkg/mailer');

const main = async () => {
    try {
        await mailer.sendMail(
            ['pero@website.com'],
            'WELCOME',
            {
                name: 'Pero',
                first_name: 'Pero',
                last_name: 'Perovski'
            }
        );
    } catch(err) {
        console.log(err);
    }

    // let user = await user.getByID(req.params.id);
    
    // await mailer.sendMail(
    //     [user.email],
    //     'WELCOME',
    //     {
    //         name: user.first_name,
    //         first_name: user.first_name,
    //         last_name: user.last_name
    //     }
    // );
};

main();