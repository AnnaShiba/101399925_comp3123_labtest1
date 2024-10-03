const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'Logs');

function remove_logs() {
    if (fs.existsSync(directoryPath)) {

        const files = fs.readdirSync(directoryPath);

        files.forEach((name) => {
            const filePath = path.join(directoryPath, name);
            console.log(`Deleting ${filePath}`);
            fs.unlinkSync(filePath);
        })

        fs.rmdirSync(directoryPath);
        console.log(`Removing ${directoryPath} is deleted.`);
    } else {
        console.log('Nothing to remove!');
    }
}

function create_logs() {
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
    }
    process.chdir(directoryPath);

    for(let i = 0; i < 10; i++) {
        const name = `log${i}.txt`;
        fs.writeFileSync(name, `Some data ${i}`);
        console.log(`File ${name} created!`);
    }
}

remove_logs();
create_logs();