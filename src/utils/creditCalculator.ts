export interface LoanSchedule {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

export interface SimulationResult {
  monthlyPayment: number;
  totalInterest: number;
  totalAmount: number;
  schedule: LoanSchedule[];
}

export const calculateLoan = (
  amount: string,
  rate: string,
  duration: string
): SimulationResult => {
  const principal = parseFloat(amount);
  const annualRate = parseFloat(rate) / 100;
  const months = parseInt(duration) * 12;
  const monthlyRate = annualRate / 12;

  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  let remainingBalance = principal;
  const schedule: LoanSchedule[] = [];

  for (let month = 1; month <= months; month++) {
    const interest = remainingBalance * monthlyRate;
    const principalPayment = monthlyPayment - interest;
    remainingBalance -= principalPayment;

    schedule.push({
      month,
      payment: monthlyPayment,
      principal: principalPayment,
      interest,
      remainingBalance: Math.max(0, remainingBalance),
    });
  }

  const totalInterest = schedule.reduce((sum, { interest }) => sum + interest, 0);

  return {
    monthlyPayment,
    totalInterest,
    totalAmount: principal + totalInterest,
    schedule,
  };
};

export const formatLoanQuery = (
  principal: number,
  rate: string,
  duration: string,
  monthlyPayment: number,
  totalInterest: number
) => {
  return `Analysez ce prêt de manière détaillée :
    - Montant emprunté : ${principal.toLocaleString('fr-FR')} FCFA
    - Taux annuel : ${rate}%
    - Durée : ${duration} ans
    - Mensualité : ${monthlyPayment.toLocaleString('fr-FR')} FCFA
    - Intérêts totaux : ${totalInterest.toLocaleString('fr-FR')} FCFA

    Veuillez fournir :
    1. Une analyse de la viabilité du prêt
    2. Des recommandations pour optimiser le remboursement
    3. Les points d'attention particuliers
    4. Une comparaison avec les taux du marché actuels`;
};