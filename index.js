const { program } = require('commander');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

program
  .command('new <projectName>')
  .description('Yeni bir projeye başla.')
  .action((projectName) => {
    const projectPath = path.resolve(projectName);

    // Proje dizinini oluştur
    fs.mkdirSync(projectPath);

    // Proje dizinine geç
    process.chdir(projectPath);

    // Framework'ü kur
    console.log(`Yeni proje oluşturuluyor: ${projectName}`);
    execSync('npm init -y', { stdio: 'inherit' });
    execSync('npm install my-framework', { stdio: 'inherit', cwd: projectPath });

    console.log(`Proje oluşturuldu: ${projectName}`);
  });

program.parse(process.argv);