const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/lecciones-SMI',
    {
        branch: 'master',
        repo: 'https://github.com/dabatistaa/leccion-ES.git',
        user: {
            name: 'dabatistaa',
            email: 'dabatistaa@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)