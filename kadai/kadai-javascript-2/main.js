const animal = {
  name : '',
  voice : '',
  bark() {
    console.log(`${this.name}は${this.voice}と鳴く。`)
  },
}

animal.name = '犬';
animal.voice = 'ワン！';
animal.bark();

animal.name = '猫';
animal.voice = 'ニャー！';
animal.bark();