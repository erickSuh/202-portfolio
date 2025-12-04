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

export function convertDateFormat(
  inputDate: string,
  fromFormat: string,
  toFormat: string,
): string {
  if (!inputDate) return '';

  let date: Date;

  // Parse the input date based on fromFormat
  if (fromFormat === 'YYYY-MM-DD') {
    date = new Date(inputDate + 'T00:00:00');
  } else if (fromFormat === 'DD/MM/YYYY') {
    const [day, month, year] = inputDate.split('/');
    date = new Date(`${year}-${month}-${day}T00:00:00`);
  } else if (fromFormat === 'MM/DD/YYYY') {
    const [month, day, year] = inputDate.split('/');
    date = new Date(`${year}-${month}-${day}T00:00:00`);
  } else if (fromFormat === 'timestamp') {
    date = new Date(parseInt(inputDate));
  } else {
    return '';
  }

  // Check if date is valid
  if (isNaN(date.getTime())) {
    return 'Data inválida';
  }

  // Format the output date based on toFormat
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  switch (toFormat) {
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'MM/DD/YYYY':
      return `${month}/${day}/${year}`;
    case 'YYYY-MM-DD HH:mm:ss':
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    case 'DD/MM/YYYY HH:mm:ss':
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    case 'timestamp':
      return date.getTime().toString();
    case 'ISO':
      return date.toISOString();
    default:
      return '';
  }
}
