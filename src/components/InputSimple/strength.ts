const hasNumber = (value: string) => {
  return new RegExp(/(?=.*[\d])/).test(value);
};

const hasMayus = (value: string) => {
  return new RegExp(/(?=.*[A-Z])/).test(value);
};

export const strengthColor = (count: number) => {
  if (count < 1) return 'red';

  if (count < 2) return 'orange';

  if (count < 3) return 'yellow';

  if (count < 4) return 'green';
};

export const strengthIndicator = (value: string) => {
  let strengths = 0;

  if (value.length > 7) strengths++;

  if (hasNumber(value)) strengths++;

  if (hasMayus(value)) strengths++;

  return strengths;
};
