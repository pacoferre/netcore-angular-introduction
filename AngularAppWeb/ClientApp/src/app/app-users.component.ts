import { Component } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './app-users.component.html'
})
export class AppUsersComponent {
  users: IUser[] = [
    {
      name: 'Lia Lugo',
      details: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage ' +
      'cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta ' +
      'who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue ' +
      'castello caerphilly chalk and cheese. Lancashire.',
      isAdmin: true,
      isCool: false
    },
    {
      name: 'George Duke',
      details: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata ' +
      'corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor ' +
      'dictum mauris.',
      isAdmin: false,
      isCool: true
    },
    {
      name: 'Gener Delosreyes',
      details: 'Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney\'s ' +
      'blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats ' +
      'chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. ' +
      'Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter ' +
      'Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack ' +
      'literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.',
      isAdmin: true,
      isCool: true
    },
    {
      name: 'Lawrence Ray',
      details: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill ' +
      'a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. ' +
      'Always hungry pelt around the house and up and down stairs chasing phantoms.',
      isAdmin: false,
      isCool: false
    },
    {
      name: 'Ernesto Urbina',
      details: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku ' +
      'wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
      isAdmin: false,
      isCool: true
    },
    {
      name: 'Gani Ferrer',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }
  ];

  selectedUser: IUser = this.users[0];
}
