import chalk from "chalk";
import coolFace from "cool-ascii-faces";

export default function trimundial(message) {
    const styledMessage = chalk.bold.blue(message); 
    const randomFace = coolFace(); 

    console.log(chalk.green("=== Mensagem Super Estilosa ==="));
    console.log(styledMessage);
    console.log(chalk.magenta("Aqui vai um rosto ASCII divertido:"));
    console.log(chalk.yellow(randomFace));
    console.log(chalk.green("=============================="));
}
