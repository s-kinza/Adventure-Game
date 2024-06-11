#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.overline.magentaBright.bold("\n\t<<<<<<<<<<<<<<<<<Well Come To The Advanture Game>>>>>>>>>>>>>>>>>>>>\n\t"));
//------------------------Games Variable-------------------------
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
//------------------------Player Variable-------------------------
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPotion = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50;
//------------------------While Loop Condition-------------------------
let gameRuning = true;
console.log(chalk.bgRedBright.underline("\n\txxxxxxxxxxxxxx<Well Come To DeadZone>xxxxxxxxxxxxxx\n\t"));
Game: while (gameRuning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeard #\n`);
    while (enemyHealth > 0) {
        console.log(chalk.bold.bgGreenBright(`Your Health: ${heroHealth}`));
        console.log(`${enemy} Health:  ${enemyHealth}`);
        let options = await inquirer.prompt([
            {
                name: 'ans',
                type: 'list',
                message: 'What would you like to do ?',
                choices: ['1. Attack', '2. Take Health Potion', '3.Run']
            }
        ]);
        if (options.ans === '1. Attack') {
            let attackDamageToEnemy = 50;
            let demageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let demageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= demageToEnemy;
            heroHealth -= demageToHero;
            console.log(`You Strike the ${enemy} for ${demageToEnemy}`);
            console.log(` ${enemy} strike you for ${demageToHero} damage`);
            if (heroHealth < 1) {
                console.log('you have taken too much damage. you are to weak to continue.');
                break;
            }
        }
        else if (options.ans === '2. Take Health Potion') {
            if (numHealthPotion > 0) {
                heroHealth += healthPotionHealAmount;
                numHealthPotion--;
                console.log(`you use health potion for ${healthPotionHealAmount}`);
                console.log(`you now have ${heroHealth} health`);
                console.log(`you have ${numHealthPotion} health potions left.`);
            }
            else {
                console.log(`you have no health potions left . defeat enemy for a chance  get health potion`);
            }
        }
        else if (options.ans === "3. Run") {
            console.log(`you run away from  ${enemy}`);
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log(`you are out from battle. you are to weak.`);
        break;
    }
    console.log(`${enemy} was defeated!`);
    console.log(`you have ${heroHealth} health.`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPotionDropChance) {
        numHealthPotion++;
        console.log(`enemy give you health potion`);
        console.log(`your health is ${heroHealth}`);
        console.log(`your health potion is ${numHealthPotion}`);
    }
    let userOption = await inquirer.prompt([
        {
            name: 'ans',
            type: 'list',
            message: 'what would you like to do now',
            choices: ['1. Continue', '2. Exit']
        }
    ]);
    if (userOption.ans === '1.Continue') {
        console.log('you are continue on your adventure');
    }
    else {
        console.log('you successfully Exit from DeadZone');
        break;
    }
    console.log('Thank YOu For Playing.\n');
}
