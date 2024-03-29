export function copyToClipboard(text: string): void {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

export function convertCamelCaseToWords(input: string): string {
  const words = input.replace(/([a-z])([A-Z])/g, '$1 $2');
  return words;
}

export function convertWorldsToCamelCase(text: string): string {
  // Remove caracteres especiais e quebras de linha
  text = text.replace(/[^a-zA-Z0-9]+/g, ' ').trim();

  // Divide o texto em palavras
  const words = text.split(' ');

  // Converte as palavras para camel case
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      // A primeira palavra permanece inalterada
      return word.toLowerCase();
    } else {
      // As palavras subsequentes têm a primeira letra em maiúscula
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  // Junta as palavras em uma única string
  const camelCaseText = camelCaseWords.join('');

  return camelCaseText;
}

export function generateRandomCPF(format = false): string {
  const cpfBase = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 10),
  ).join('');
  const firstDigit = calculateCPFValidatorDigit(cpfBase);
  const secondDigit = calculateCPFValidatorDigit(cpfBase + firstDigit);
  const cpf = `${cpfBase}${firstDigit}${secondDigit}`;

  if (format) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
      6,
      9,
    )}-${cpf.slice(9)}`;
  } else {
    return cpf;
  }
}

function calculateCPFValidatorDigit(cpfBase: string): string {
  let sum = 0;
  let digit = 0;
  for (let i = 0; i < cpfBase.length; i++) {
    sum += parseInt(cpfBase[i]) * (10 - i);
  }

  const remainder = sum % 11;
  if (remainder < 2) {
    digit = 0;
  } else {
    digit = 11 - remainder;
  }

  return digit.toString();
}

export function generateRandomName(): string {
  const firstNames = [
    'Alice',
    'Beatriz',
    'Carlos',
    'Daniel',
    'Eduarda',
    'Fernando',
    'Gabriela',
    'Henrique',
    'Isabela',
    'João',
  ];
  const lastNames = [
    'Silva',
    'Santos',
    'Oliveira',
    'Pereira',
    'Almeida',
    'Carvalho',
    'Ribeiro',
    'Ferreira',
    'Gomes',
    'Martins',
  ];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}
