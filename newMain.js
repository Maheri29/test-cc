import promptSync from 'prompt-sync';
import { displayMenu } from "./menu.js";

const prompt = promptSync();

export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,

  addRice() {
    switch (true) {
      case !this.ricePresent:
        this.ricePresent = true;
        console.log('Rice has been added.');
        break;
      default:
        console.log('There\'s already rice in the rice cooker.');
        break;
    }
  },

  cookRice() {
    switch (true) {
      case this.ricePresent && !this.riceCooked:
        console.log('Cooking rice...');
        this.delaySync(1500);
        this.riceCooked = true;
        console.log('The rice has been cooked!');
        break;
      case !this.ricePresent:
        console.log('Cannot cook. The rice cooker is empty.');
        break;
      default:
        console.log('The rice is already cooked.');
        break;
    }
  },

  steam() {
    switch (true) {
      case this.ricePresent && !this.steamingInProgress:
        console.log('Steaming in progress...');
        this.steamingInProgress = true;
        this.delaySync(1500);
        this.steamingInProgress = false;
        console.log('Steaming completed!');
        break;
      case !this.ricePresent:
        console.log('Cannot steam. The rice cooker is empty.');
        break;
      default:
        console.log('Steaming is already in progress.');
        break;
    }
  },

  keepWarm() {
    switch (true) {
      case this.ricePresent && this.riceCooked && !this.heatingInProgress:
        console.log('The rice is now being kept warm.');
        this.heatingInProgress = true;
        break;
      case !this.ricePresent:
        console.log('Cannot keep warm. The rice cooker is empty.');
        break;
      case !this.riceCooked:
        console.log('Cannot keep warm. The rice is not cooked.');
        break;
      default:
        console.log('Keeping warm is already in progress.');
        break;
    }
  },

  removeRice() {
    switch (true) {
      case this.ricePresent && (this.riceCooked || this.heatingInProgress):
        this.ricePresent = false;
        this.riceCooked = false;
        this.steamingInProgress = false;
        this.heatingInProgress = false;
        console.log('The rice has been removed from the rice cooker.');
        break;
      default:
        console.log('There\'s no rice to remove or it is not cooked yet.');
        break;
    }
  },

  delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
  },
};

export function simulateRiceCooker() {
  let input;
  const condition = true;

  while (condition) {
    displayMenu();
    input = prompt('Enter your choice: ');

    if (input) {
      const choice = parseInt(input);

      if (!isNaN(choice)) {
        switch (choice) {
          case 1:
            riceCooker.addRice();
            break;
          case 2:
            riceCooker.cookRice();
            break;
          case 3:
            riceCooker.steam();
            break;
          case 4:
            riceCooker.keepWarm();
            break;
          case 5:
            riceCooker.removeRice();
            break;
          case 6:
            console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
            condition = false;
            break;
          default:
            console.log('Invalid choice. Please select a valid option.');
            break;
        }
      } else {
        console.log('Invalid input. Please enter a valid number.');
      }
    } else {
      console.log('No input provided.');
    }
  }
}

simulateRiceCooker();
