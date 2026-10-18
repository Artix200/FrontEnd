export default function mapping(type) {
  switch (type) {
    case 'Normal':
      return 'grey';
    case 'Grass':
      return 'green';
    case 'Fire':
      return 'red';
    case 'Water':
      return 'blue';
    case 'Electric':
      return 'yellow';
    case 'Fairy':
      return 'pink';
    case 'Poison':
      return 'purple';
  }
}
